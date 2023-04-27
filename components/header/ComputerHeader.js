import { navigation } from "@/Constants/data/NavBarConst"
import Image from "next/image"
import { Link as LinkScroll } from 'react-scroll'

const ComputerHeader = () => {
	return (
		<div className='bg-white py-4 relative z-20 shadow-xl'>
			<nav className="container mx-auto flex justify-between items-center">
				<div className="">
					<Image
						src='/logo.webp'
						width='70'
						height='70'
					/>
				</div>
				<div className="flex justify-start items-center w-1/2">
					{
						navigation.map(el => {
							return (
								<LinkScroll to={el.to}
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer ml-4 text-[#613538]"
									key={el.id}

								>
									{el.title}
								</LinkScroll>
							)
						})
					}
				</div>
				<div className="w-1/3 text-[#613538]">
					<p className='text-xs'>
						режим работы 24/7
					</p>
					<a href='tel:80291925166'>
						+375(29) 192-51-66
					</a>
				</div>
			</nav>
		</div>
	)
}

export default ComputerHeader