import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { MenuOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import { Link as LinkScroll } from 'react-scroll'
import { navigation } from '@/Constants/data/NavBarConst'



const MobilMenu = ({ open, setOpen }) => {
	const { pathname } = useRouter()


	const onClose = () => {
		setOpen(false)
	}

	return (
		<Drawer
			title={<span className='uppercase text-[#613538] text-xl font-light ml-1'>меню</span>}
			placement="right"
			onClose={onClose}
			open={open}
			width={'300px'}
			style={{
				background: '#DAF1B9',
			}}
		>
			<div className='relative h-full'>
				<nav className="text-[#613538] flex flex-col ">
					{navigation.map(({ id, title, to }) => {
						return (
							<LinkScroll to={to}
								smooth={true}
								offset={-100}
								duration={800}
								className="cursor-pointer mb-5"
								onClick={onClose}
								key={id}
							>
								{title}
							</LinkScroll>
						)
					})}
				</nav>

				<div className='absolute bottom-1'>
					<Image src='/logo.webp' width='100' height='100' />
				</div>

			</div>
		</Drawer>
	)
}

export default MobilMenu
