import type {  NextPage } from 'next'

import Home from '@/screens/home/Home'
import { IHome } from '@/screens/home/home.types'
const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}

export default HomePage
