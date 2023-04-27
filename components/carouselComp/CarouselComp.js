import { Carousel } from 'antd'
import Image from 'next/image'

const CarouselComp = () => {
	return (
		<Carousel
			autoplay
		>
			<div>
				<Image
					src='/slide3.webp'
					width='1920'
					height='1080'
					alt='Банер для сладейра букеты из цветов'
				/>
			</div>
			<div>
				<Image
					src='/slide.webp'
					width='1920'
					height='1080'
					alt='Банер для сладейра букеты из цветов'
				/>
			</div>
			<div>
				<Image
					src='/slide4.webp'
					width='1920'
					height='1080'
					alt='Банер для сладейра букеты из цветов'
				/>
			</div>
		</Carousel>
	)
}
export default CarouselComp