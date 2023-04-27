import Image from "next/image"
import { Button, Rate, Typography, Badge } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import { useState } from "react"
import { dataService } from "@/Constants/data/ServiceSection"
import ModalComp from "../modal/ModalComp"
{/* relative content after:absolute after:inset-0 after:bg-white after:-z-10 after:opacity-20 after:rounded-md */ }
const { Paragraph } = Typography


const ServiceSection = () => {
	const [visible, setVisible] = useState([false, false, false, false, false])
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [title, setTitle] = useState('')
	const [art, setArt] = useState('')
	const [price, setPrice] = useState('')

	const showModal = (title, price, art) => {
		setTitle(title)
		setArt(art)
		setPrice(price)
		setIsModalOpen(true)
	}

	const toggleVisibility = (index, boolean) => {
		const newVisible = [...visible]
		newVisible[index] = boolean
		setVisible(newVisible)
	};


	return (
		<section className='bg-white pt-5 pb-1 relative' id="catalog">
			<div className='container mx-auto'>

				<h2 className="text-4xl font-bold uppercase text-center">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700">
						Каталог
					</span>
				</h2>


				<div className="mt-12">
					{
						dataService.map(el => {
							return (
								<div className="mb-20" key={el.id} id={el.nav}>
									<Badge.Ribbon
										text={el.badge}
										color={el.color}
									>
										<div
											className={`border border-gray-200 bg-slate-100 rounded-md relative  shadow-xl ${visible[el.id] ? 'pb-10' : 'pb-0'}`}
										>
											<Image
												src='/click.svg'
												width='30'
												alt="иконка клик"
												height='30'

												className={`absolute top-2 left-2 ${!visible[el.id] ? 'block' : 'hidden'}`}
											/>
											<div
												style={{ '--image-url': `url(${el.img})` }}
												className={`bg-[image:var(--image-url)] bg-cover bg-center w-full rounded-t-md z-10`}
												onClick={() => toggleVisibility(el.id, true)}
											>
												<div className="h-[40vh]" />
												<div
													className={`h-[20vh] flex 
										justify-center items-end
										 text-pink-400 bg-gradient-to-t
										 from-white/100 to-white/0
										 z-20 ${!visible[el.id] ? 'block' : 'hidden'}`}
												>
													<h3 className="uppercase text-center text-2xl pb-3 font-semibold">
														{el.title}
													</h3>
												</div>
											</div>
											{
												visible[el.id] ?

													<div className="mt-4 px-2">
														<h3 className="uppercase text-center text-xl text-pink-500 mb-4">
															{el.title}
														</h3>
														<Paragraph
															ellipsis={{
																rows: 3,
																expandable: true,
																symbol: 'читать',
															}}
															className="text-xs text-center"
														>
															{el.content}
														</Paragraph>
														<div className="mt-16">
															{
																el.blocks.map(elem => {
																	return (
																		<div
																			key={elem.id}
																			className="bg-white rounded-md pb-3 mb-16 border shadow-lg"
																		>
																			<div
																				style={{ '--image-url2': `url(${elem.img})` }}
																				className={`bg-[image:var(--image-url2)] bg-cover bg-center w-full rounded-t-md h-[50vh]`}
																			/>
																			<div className="mt-6 px-4">
																				<p className="text-2xl">
																					{elem.title}
																				</p>
																				<p className="mt-2 font-light">
																					{elem.description}
																				</p>
																				<p className="text-xs font-light mt-2 mb-2 text-gray-400">
																					Артикул: {elem.art}
																				</p>
																				<Rate
																					allowHalf
																					defaultValue={elem.rate}
																					style={{
																						fontSize: '14px'
																					}}
																				/>
																				<div className="flex justify-between items-center">
																					<p className="text-2xl mt-2 text-right font-semibold">
																						{elem.price} BYN
																					</p>
																					<Button
																						type="primary"
																						ghost
																						shape="round"
																						style={{
																							color: '#613538',
																							background: '#DAF1B9',
																							border: 'none',
																							boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
																						}}
																						onClick={() => showModal(elem.title, elem.price, elem.art)}
																					>
																						заказать
																					</Button>
																				</div>
																			</div>
																		</div>
																	)
																})
															}
														</div>
													</div>
													:
													null
											}
											<div
												className={`text-center animate-bounce absolute bottom-2 left-0 right-0 ${visible[el.id] ? 'block' : 'hidden'}`}
												onClick={() => toggleVisibility(el.id, false)}
											>
												<UpOutlined
													className="text-xl text-pink-700 "

												/>
											</div>
										</div>
									</Badge.Ribbon>
								</div>
							)
						})
					}

				</div>
			</div>

			<ModalComp
				isModalOpen={isModalOpen}
				title={title}
				setIsModalOpen={setIsModalOpen}
				isActive={false}
				art={art}
				price={price}
			/>
		</section>
	)
}

export default ServiceSection