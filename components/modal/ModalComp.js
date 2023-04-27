import {  Modal } from 'antd'
import { useState } from 'react'
import { FormOrder } from '../form/FormOrder';


const ModalComp = (
	{ title, message,
		isModalOpen, setIsModalOpen,
		isActive, art,  price,
	}
) => {

	const handleCancel = () => {
		setIsModalOpen(false)
	}
	return (
		<>
			<Modal
				title={`Ваш заказ: ${title}`}
				open={isModalOpen}
				onCancel={handleCancel}
				footer={false}
			>
				{
					isActive ? 
						<p>{message}</p>
						:
						<FormOrder onClose={handleCancel} title={title} price={price} art={art} />
				}
				
			</Modal>
		</>
	);
};
export default ModalComp