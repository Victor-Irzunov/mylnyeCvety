import Image from 'next/image'
import { MenuOutlined } from '@ant-design/icons'
import MobilMenu from './MobilMenu'
import { useState } from 'react'

const MobilHeader = () => {
	const [open, setOpen] = useState(false)


	return (
		<div className='relative z-20 bg-white'>
			<div className=' py-2 shadow-xl'>
				<div className='container mx-auto flex justify-between items-center'>
					<div className='w-1/4'>
						<Image
							src='/logo.webp'
							width='80'
							height='80'
						/>
					</div>

					<div className='w-1/2 text-[#613538]'>
						<p className='text-xs'>
							режим работы 24/7
						</p>
						<a href='tel:80291925166'>
							+375(29) 192-51-66 
						</a>
					</div>
					<div className='w-1/4'></div>

					<div className="pt-1 pb-2 px-3 border border-white fixed top-2 right-4 z-50">
						<MenuOutlined
							className="text-[#414141] text-4xl"
							onClick={() => setOpen(true)}
						/>
					</div>
				</div>
			</div>
			<MobilMenu open={open} setOpen={setOpen} />
		</div>
	)
}

export default MobilHeader