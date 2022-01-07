import React from 'react'
import useForm from '../hooks/useForm'

import Button from './Button'
import TextInput from './TextInput'

export default function CalculatorForm() {
	const { fields, onChange, submit } = useForm({
		onSubmit: (data) => console.log(data),
		initialValues: {
			Deposito: '',
			Contribucion: '',
			Anios: '',
			Interes: '',
		},
	})
	return (
		<div className="calculator-form">
			<form className="calculator-form__form" onSubmit={submit}>
				<TextInput
					name="Deposito"
					label="Deposito inicial:"
					value={fields.Deposito}
					onChange={onChange}
				/>
				<TextInput
					name="Contribucion"
					label="Contribución mensual:"
					value={fields.Contribucion}
					onChange={onChange}
				/>
				<TextInput
					name="Anios"
					label="Años:"
					value={fields.Anios}
					onChange={onChange}
				/>
				<TextInput
					name="Interes"
					label="Interés estimado:"
					value={fields.Interes}
					onChange={onChange}
				/>
				<Button>Calcular</Button>
			</form>
		</div>
	)
}
