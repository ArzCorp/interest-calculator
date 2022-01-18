import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { Context } from '../context/Context'
import * as yup from 'yup'

import Button from './Button'
import TextInput from './TextInput'

export default function CalculatorForm() {
	const { rate, setRate } = useContext(Context)

	const { values, errors, handleChange, handleSubmit } = useFormik({
		initialValues: {
			deposit: '',
			contribution: '',
			years: '',
		},
		onSubmit: (values) => setRate(calculateRate(values)),
		validationSchema: yup.object({
			deposit: yup
				.number()
				.required('Campo requerido.')
				.typeError('Solo números.'),
			contribution: yup
				.number()
				.required('Campo requerido.')
				.typeError('Solo números.'),
			years: yup
				.number()
				.required('Campo requerido.')
				.typeError('Solo números.'),
			rate: yup
				.number()
				.required('Campo requerido.')
				.typeError('Solo números.')
				.min(0, 'El número mínimo es uno.')
				.max(1, 'El número máximo es uno.'),
		}),
	})

	const calculateRate = ({ deposit, contribution, years, rate }) => {
		let totalMoney = deposit
		for (let i = 0; i < years; i++) {
			totalMoney = (deposit + contribution) * (rate + 1)
		}
		return Math.round(totalMoney)
	}

	return (
		<div className="calculator-form">
			<form className="calculator-form__form" onSubmit={handleSubmit}>
				<TextInput
					name="deposit"
					label="Deposito inicial:"
					type="number"
					value={values.deposit}
					onChange={handleChange}
					error={errors.deposit}
				/>
				<TextInput
					name="contribution"
					type="number"
					label="Contribución mensual:"
					value={values.contribution}
					onChange={handleChange}
					error={errors.contribution}
				/>
				<TextInput
					name="years"
					type="number"
					label="Años:"
					value={values.years}
					onChange={handleChange}
					error={errors.years}
				/>
				<TextInput
					name="rate"
					type="number"
					label="Interés estimado:"
					value={values.rate}
					onChange={handleChange}
					error={errors.rate}
				/>
				<Button type="submit">Calcular</Button>
			</form>
			{rate ? <p>Interes generado: {rate}</p> : null}
		</div>
	)
}
