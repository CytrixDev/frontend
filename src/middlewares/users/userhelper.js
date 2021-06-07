const printUser = (user) => {
	const { email, firstName, lastName } = user
	console.log(
		`First Name: ${firstName} | Last Name: ${lastName}  Email: ${email}`
	)
}

const users = [
	{
		id: 1,
		firstName: 'admin',
		lastName: 'admin son',
		email: 'admin@cytrix.com',
		password: '123123',
	},
	{
		id: 2,
		firstName: 'Lauraine',
		lastName: 'McGeechan',
		email: 'lmcgeechan1@nydailynews.com',
		password: '290187cde464299b6c5b47403ba296bb2626337e',
	},
	{
		id: 3,
		firstName: 'Gussi',
		lastName: 'Liver',
		email: 'gliver2@tripod.com',
		password: '290187cde464299b6c5b47403ba296bb2626337e',
	},
	{
		id: 4,
		firstName: 'Manya',
		lastName: 'Volk',
		email: 'mvolk3@miibeian.gov.cn',
		password: '290187cde464299b6c5b47403ba296bb2626337e',
	},
	{
		id: 5,
		firstName: 'Hagan',
		lastName: 'Beiderbeck',
		email: 'hbeiderbeck4@amazon.co.uk',
		password: '290187cde464299b6c5b47403ba296bb2626337e',
	},
]
export { printUser, users }
