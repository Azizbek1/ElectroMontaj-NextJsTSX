import { FC } from 'react'

import { Meta } from '@/utils/meta'

import { IHome } from './home.types'

const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {
	return (
		<Meta
			title="Электро-монтаж"
			description=""
		>
			Home
		</Meta>
	)
}

export default Home
