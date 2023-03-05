import axios from 'axios'

export const AuthService = {
	async login(email: string, password: string) {
		const response = await axios.post(
			`https://27.u6964.xvest3.ru/api/user/login`,
			{
				email,
				password,
			}
		)
		return response
	},
}
