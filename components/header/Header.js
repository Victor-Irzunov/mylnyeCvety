import React from 'react'
import { useScreens } from '@/Constants/constants'
// import ComputerHeader from './ComputerHeader'
import MobilHeader from './MobilHeader'

const Header = () => {
	// const screens = useScreens()
	return (
		<header>
			{/* {
				screens.lg ?
					<ComputerHeader />
					: */}
					<MobilHeader />
			{/* } */}
		</header>
	)
}

export default Header