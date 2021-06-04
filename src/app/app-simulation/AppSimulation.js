import React, { useState, useEffect, useRef } from 'react'
import { Button, Input, Label, FormGroup } from 'reactstrap'
import classes from './AppSimulation.module.css'
import {useHistory} from "react-router-dom";

const AppSimulation = () => {
	const [points, setPoints] = useState([])
	const canvasRef = useRef(null)
	const history = useHistory();

	useEffect(() => {
		generatePoints()
	}, [])

	const checkAvailable = (x, y) => {
		for (const point of points) {
			if (point.x === x && point.y === y) return false
		}

		return true
	}

	const generatePoints = () => {
		const newPoints = []
		for (let i = 0; i < 100; i++) {
			let x = Math.floor(Math.random() * 100 + 1)
			let y = Math.floor(Math.random() * 100 + 1)
			while (!checkAvailable(x, y)) {
				x = Math.floor(Math.random() * 100 + 1)
				y = Math.floor(Math.random() * 100 + 1)
			}

			newPoints.push({ x, y })
		}

		const ctx = canvasRef.current.getContext('2d')
		ctx.fillStyle = 'blue'

		ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

		for (const point of newPoints) {
			ctx.fillRect(point.x * 4.5, point.y * 4.5, 4, 4)
		}

		setPoints(newPoints)
	}

	return (
		<div className={classes.AppSimulation}>
			<h2>WSN Simulation</h2>
			<div className='d-flex w-100'>
				<div className={classes.Parameters}>
					<h4>Simulation Parameters</h4>

					<div>
						<FormGroup className='my-3'>
							<Label>Base Energy</Label>
							<Input label='Input' type='number'/>
						</FormGroup>
						<FormGroup className='my-3'>
							<Label>Transmission Energy</Label>
							<Input label='Input' type='number'/>
						</FormGroup>
						<FormGroup className='my-3'>
							<Label>Round Limit</Label>
							<Input label='Input' type='number'/>
						</FormGroup>
					</div>
				</div>
				<div className='w-100 d-flex flex-column align-items-center'>
					<canvas
						className='mb-5'
						ref={canvasRef}
						width='450'
						height='450'
						id='canvas'
					></canvas>
					<div className='d-flex'>
						<Button color='success' onClick={() => history.push('/app/simulation/result')}>
							Simulate
						</Button>
						<Button color='info' className='ml-3' onClick={generatePoints}>
							Generate
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AppSimulation
