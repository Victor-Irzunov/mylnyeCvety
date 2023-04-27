import React, { useState } from 'react'
import { Form, Button, Input, InputNumber, message } from 'antd'
import InputMask from 'react-input-mask'
import { sendOrderTelegram } from '../../http/telegramAPI'

export const FormOrder = ({ onClose, art, price, title }) => {
	const [tel, setTel] = useState('')
	const onFinish = (values) => {
		console.log('Success:', values);

		let messageForm = `<b>Заказ с сайта</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Название:</b> ${title}\n`
		messageForm += `<b>Артикул:</b> ${art}\n`
		messageForm += `<b>Цена:</b> ${price}\n`
		messageForm += `<b>Количество:</b> ${values.count}\n`
		messageForm += `<b>Имя:</b> ${values.name}\n`
		messageForm += `<b>Город:</b> ${values.city}\n`
		messageForm += `<b>Адрес:</b> ${values.address}\n`
		messageForm += `<b>Телефон:</b> ${values.tel}\n`

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) message.success('Мы получили Ваш заказ')
				onClose()
			})
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState
		var selection = newState.selection
		var cursorPosition = selection ? selection.start : null
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}
		return {
			value,
			selection
		}
	}
	return (
		<div className='overflow-hidden	overflow-x-hidden'>
			<Form
				name="basic"
				labelCol={{
					span: 24,
				}}
				wrapperCol={{
					span: 24,
				}}
				initialValues={{
					count: 1
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>

				<Form.Item
					label='Имя'
					name="name"
				// tooltip="код оператора и номер"
				// rules={[
				// 	{
				// 		required: true,
				// 		message: 'Пожалуйста введите номер!',
				// 	},
				// ]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Город'
					name="city"
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Адрес'
					name="city"
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Количество'
					name="count"
				>
					<InputNumber />
				</Form.Item>



				<Form.Item
					label='Телефон'
					name="tel"
					tooltip="код оператора и номер"
					rules={[
						{
							required: true,
							message: 'Пожалуйста введите номер!',
						},
					]}
				>
					<InputMask
						placeholder="29 123-45-67"
						mask="+3\7\5 99 999 99 99"
						maskChar={'-'}
						className='border py-1 px-3 rounded-md w-full'
						beforeMaskedValueChange={beforeMaskedValueChange}
						value={tel}
						onChange={(e) => setTel(e.target.value)}
					/>
				</Form.Item>
				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button
						type="primary"
						shape="round"
						className="bg-[#18AECA] pb-1 pt-1.5 px-4 shadow-xl uppercase text-xs flex items-center justify-center"
						htmlType="submit"
					>
						Отправить заказ
					</Button>
				</Form.Item>

			</Form>
			<p className='text-[12px] mt-10'>
				Уважаемые клиенты, <br />
				Мы рады сообщить вам о новой услуге нашей компании - заказ букета мыльных цветов через наш сайт. Если вы хотите удивить своих близких или бизнес-партнеров оригинальным подарком, то мы рады помочь вам в этом.
				Для оформления заказа на букет мыльных цветов вам нужно заполнить форму на нашем сайте и отправить ее нам. Мы свяжемся с вами для подтверждения заказа и уточнения деталей. Мы гарантируем, что наш букет мыльных цветов будет не только оригинальным, но и прекрасным украшением любого дома или офиса.
				Благодарим за интерес к нашим товарам и надеемся на долгосрочное и плодотворное сотрудничество с вами.
			</p>
		</div>
	)
}
