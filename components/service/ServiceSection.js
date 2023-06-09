import Image from "next/image"
import { Button, Rate, Typography, Badge, Popover } from 'antd'
import { UpOutlined, FullscreenExitOutlined, InfoCircleTwoTone } from '@ant-design/icons'
import { useState } from "react"
import { dataService } from "@/Constants/data/ServiceSection"
import ModalComp from "../modal/ModalComp"
import { motion, useAnimation } from "framer-motion"
import { yAnimation } from '../../Constants/animation/AnimationConst'
{/* relative content after:absolute after:inset-0 after:bg-white after:-z-10 after:opacity-20 after:rounded-md */ }
const { Paragraph } = Typography

const content = (
	<div>
		<p>Клиент может выбирать цветовую гамму,</p>
		<p> состав и количество цветов</p>
		<p> в соответствии со своими пожеланиями.</p>
	</div>
);

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
		<section className='bg-white pt-10 pb-1 relative' id="catalog">
			<div className='container mx-auto'>

				<h2 className="text-4xl font-bold uppercase text-center">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700">
						Каталог
					</span>
				</h2>


				<div className="mt-16 flex justify-evenly flex-wrap">
					{
						dataService.map(el => {
							return (
								<motion.div
									className="mb-20 w-[400px] xyy:mx-0 sm:mx-5"
									key={el.id}
									id={el.nav}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
								>

									<motion.div
										variants={yAnimation}
										className={`bg-slate-100 rounded-md relative  shadow-lg ${visible[el.id] ? 'pb-10' : 'pb-0'}`}
									>


										<Badge.Ribbon
											text={el.badge}
											color={el.color}
										>
											{
												!visible[el.id] ?
													<Image
														src='/click.svg'
														width='30'
														alt="иконка клик"
														height='30'

														className={`absolute top-2 left-2`}
													/>
													:
													<FullscreenExitOutlined
														className={`absolute top-2 left-2 text-pink-400 text-2xl`}
														onClick={() => toggleVisibility(el.id, false)}
													/>
											}
											<div
												style={{ '--image-url': `url(${el.img})` }}
												className={`
												bg-[image:var(--image-url)] bg-cover
												bg-center w-full rounded-md z-10 cursor-pointer
												`}
												onClick={() => toggleVisibility(el.id, true)}
											>
												<div className="h-[40vh]" />
												<div
													className={`h-[20vh] flex 
										justify-center items-end rounded-b-md
										 text-pink-400 bg-gradient-to-t
										 from-white/100 to-white/0 px-3
										 z-20 ${!visible[el.id] ? 'block' : 'hidden'}

										 `}
												>
													<h3 className="uppercase text-center text-2xl pb-3 font-semibold">
														{el.title}
													</h3>
												</div>
											</div>
										</Badge.Ribbon>
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
																		className="bg-white rounded-md pb-3 mb-16 border shadow-lg relative"
																	>
																		<div
																			style={{ '--image-url2': `url(${elem.img})` }}
																			className={`bg-[image:var(--image-url2)] bg-cover bg-center w-full rounded-t-md h-[50vh]`}
																		/>
																		<div className="mt-6 px-4 relative">
																			<div className="">
																				<p className="text-2xl mr-2 pt-3">
																					{elem.title}
																				</p>
																				<div className="absolute -top-3 right-4">
																					<Popover content={content} trigger="click" placement="topRight" title="Информация для клиента" className="">
																						<InfoCircleTwoTone twoToneColor="#eb2f96" className="text-lg animate-bounce" />
																					</Popover>
																				</div>
																			</div>
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
									</motion.div>

								</motion.div>
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
		</section >
	)
}

export default ServiceSection