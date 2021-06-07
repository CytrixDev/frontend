import React, { useEffect, useState, useRef } from 'react'
import sim from './sample/sim.json'
import axios from 'axios'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

const SimulationResult = () => {
	// eslint-disable-next-line no-unused-vars
	const [simIndex, setSimIndex] = useState(0)
	const [simulationResult, setSimulationResult] = useState(null)
	const canvasRef = useRef(null)
	const history = useHistory()

	useEffect(() => {
		const userData = localStorage.getItem('userData')
		if (!userData) return history.replace('/login')

		fetchSimulationResult()
	}, [])

	const drawPoints = (simResult, index) => {
		const ctx = canvasRef.current.getContext('2d')
		ctx.fillStyle = 'blue'
		ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

		simResult.sim[index].frames[
			simResult.sim[index].frames.length - 1
		].clusters.forEach((cluster) => {
			cluster.nodes.forEach((node) => {
				if (node.energy > 0) {
					ctx.fillStyle = 'blue'
					ctx.fillRect(node.pos.x * 4.5, node.pos.y * 4.5, 4, 4)
				} else {
					ctx.fillStyle = 'red'
					ctx.fillRect(node.pos.x * 4.5, node.pos.y * 4.5, 4, 4)
				}
			})
		})
	}

	const roundNavigate = (forw) => {
		if (forw) {
			const index = (simIndex + 1) % simulationResult.sim.length
			setSimIndex(index)
			drawPoints(simulationResult, index)
		} else {
			if (simIndex > 0) {
				setSimIndex(simIndex - 1)
				drawPoints(simulationResult, simIndex - 1)
			} else {
				setSimIndex(0)
				drawPoints(simulationResult, 0)
			}
		}
	}

	const getActiveNodes = (clusters) => {
		let result = 0
		clusters.forEach((cluster) => {
			cluster.nodes.forEach((node) => {
				result = node.energy > 0 ? result + 1 : result
			})
		})

		return result
	}

	const fetchSimulationResult = async () => {
		try {
			const res = await axios.get('http://backend-cytrix.vercel.app/sim', {
				crossDomain: true,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': true,
				},
			})
			console.log(res)
			drawPoints(res.data, 0)
			setSimulationResult(res.data)
		} catch (e) {
			console.log(e)
			drawPoints(sim, 0)
			setSimulationResult(sim)
		}
	}

	return (
		<div className='w-100 px-5'>
			<h2>Simulation Result</h2>
			<div className='d-flex justify-content-between'>
				{simulationResult ? (
					<div>
						<h4>Total Rounds: {simulationResult.sim.length} </h4>
						<h5>Round #{simIndex + 1} Result</h5>
						<div>
							Clusters:{' '}
							{
								simulationResult.sim[simIndex].frames[
									simulationResult.sim[simIndex].frames.length - 1
								].clusters.length
							}
						</div>
						<div>
							Active Nodes:{' '}
							{getActiveNodes(
								simulationResult.sim[simIndex].frames[
									simulationResult.sim[simIndex].frames.length - 1
								].clusters
							)}
						</div>
					</div>
				) : (
					<div>Loading...</div>
				)}

				<div className='mr-5'>
					<canvas
						className='mb-2'
						ref={canvasRef}
						width='450'
						height='450'
						id='canvass'
					></canvas>
					<div className='d-flex ml-5 mt-5'>
						<Button onClick={() => roundNavigate(false)} color='success'>
							Previous Round
						</Button>
						<Button onClick={() => roundNavigate(true)} color='success ml-3'>
							Next Round
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SimulationResult
