import axios from 'axios'
import { API_URL, getUsersUrl } from 'src/api/configs/api.config'

export const AuthService = {
	async login(login: string, password: string) {
		const response = await axios.post(
			`${API_URL}${getUsersUrl("/login")}`,
			{
				login,
				password,
			}
		)
		
		return response
	},
}
