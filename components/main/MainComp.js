import Image from "next/image"
import CarouselComp from "../carouselComp/CarouselComp"
import { dataMain } from "@/Constants/data/MainCons"
import ModalComp from "../modal/ModalComp"
import { useState } from "react"
import ServiceSection from "../service/ServiceSection"
import { useScreens } from "@/Constants/constants"
import { FloatButton } from 'antd'
import { PhoneOutlined } from '@ant-design/icons'
import GallerySection from "../gallery/GallerySection"

export const MainComp = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [message, setMessage] = useState('')
	const [title, setTitle] = useState('')
	const screens = useScreens()

	const showModal = (title, message) => {
		setMessage(message)
		setTitle(title)
		setIsModalOpen(true)
	}


	return (
		<>
			<div className="relative mb-24">
				<div className='w-full h-screen fon bg-cover bg-center' />
				<main className="">

					{
						screens.lg ?
							<div className="flex">
								<div className="w-4/6">
									<CarouselComp />
								</div>
								<div className="w-2/6 bg-white relative px-10 pt-20 pb-4  shadow-xl">
									{
										dataMain.map(el => {
											return (
												<div
													className="flex items-center mb-4 cursor-pointer"
													onClick={() => showModal(el.title1, el.message)}
													key={el.id}
												>
													<Image
														src={el.img}
														width={el.width}
														height={el.height}
														alt={el.alt}
													/>
													<span className="font-light ml-4 uppercase">
														{el.title1}
													</span>
												</div>
											)
										})
									}
								</div>
							</div>
							:
							<CarouselComp />
					}

					<section className='container mx-auto relative mb-20'>
						<div className="sm:h-[60vh] xyy:h-auto">
							<h1 className="mt-20 xyy:text-4xl sm:text-8xl uppercase font-semibold text-white mb-16">
								Букеты из мыла
							</h1>
						</div>
						{
							!screens.lg && dataMain.map(el => {
								return (
									<div
										className="text-white flex items-center mt-2"
										onClick={() => showModal(el.title1, el.message)}
										key={el.id}
									>
										<Image
											src={el.img}
											width={el.width}
											height={el.height}
											alt={el.alt}
										/>
										<span className={`font-light  ${el.id === 2 ? 'ml-4' : 'ml-3'} uppercase`}>
											{el.title1}
										</span>
									</div>
								)
							})
						}
					</section>

					<ServiceSection />

					{/* <GallerySection /> */}

				</main>
			</div>

			<FloatButton.Group
				shape="square"
			>

				<FloatButton icon={<a href='tel:80291925166'><PhoneOutlined className="pb-1" /></a>} />
				<FloatButton.BackTop />
			</FloatButton.Group>

			<ModalComp
				isModalOpen={isModalOpen}
				title={title}
				message={message}
				setIsModalOpen={setIsModalOpen}
				isActive={true}
			/>
		</>
	)
}
