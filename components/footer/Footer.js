import { useScreens } from "@/Constants/constants"
import Image from "next/image"


export const Footer = () => {
	const screens = useScreens()
	return (
		<footer className='mt-auto pt-16 relative' id="contact">
			<div className='container mx-auto text-center'>
				<h4 className="text-white text-4xl uppercase">
					Контакты
				</h4>
				<div className="mt-8 text-white">
					<p className="font-light uppercase text-xl">
						Авторские <span className="text-pink-600 font-semibold">композиции</span> из мыльных цветов
					</p>
					<p className="mt-6 uppercase">
						Доставка почтой по всей Беларуси
					</p>
					<p className="mt-5 mb-5">
						Принимаем заказы <span className="font-bold">24/7</span>
					</p>
					<div className="backdrop-blur-xl
				dark:bg-[#414141]/10 rounded-xl py-5"
					>
						<a href='tel:80291925166' className="text-3xl">
							+375(29) 192-51-66
						</a>
						<div className='flex items-center justify-center mt-6'>
							<a href={`${screens.md ? 'https://t.me/' : 'https://t.me/@'}`}>
								<Image
									src='/telegram.svg'
									width={35}
									height={35}
									className='mr-5'
									alt='иконка telegram'
								/>
							</a>
							<a href='viber://chat?number=%2B37533'>
								<Image
									src='viber.svg'
									width={35} height={35}
									className='mr-5'
									alt='иконка viber'
								/>
							</a>
							<a href='https://www.instagram.com/lily.soapflowers'
								target='_blank'
							>
								<Image
									src='/instagram.svg'
									width={35} height={35}
									className=''
									alt='иконка instagram'
								/>
							</a>
						</div>
					</div>
				</div>
				<div className='flex items-center container mx-auto mt-3'>
					<p className="
              font-poppins
              font-normal
              text-center
              sm:text-[14px]
              xy:text-[10px]
              xyy:text-[10px]
              leading-[27px]
              text-gray-700
              "
					>
						Copyright Ⓒ 2023. Разработка и продвижение <a href="https://vi-tech.by" className="text-gradient text-cyan-600" rel="noreferrer" target="_blank">VI:TECH</a> &nbsp;
					</p>
				</div>
			</div>
		</footer>
	)
}
