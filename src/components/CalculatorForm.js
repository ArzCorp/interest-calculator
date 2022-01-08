import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'

import Button from './Button'
import TextInput from './TextInput'

export default function CalculatorForm() {
	const { values, errors, handleChange, handleSubmit } = useFormik({
		initialValues: {
			Deposito: '',
			Contribucion: '',
			Anios: '',
			Interes: '',
		},
		onSubmit: (values) => {
			console.log(values)
		},
		validationSchema: yup.object({
			Deposito: yup
				.number()
				.required('Campo requerido.')
				.typeError('Solo números.'),
			Contribucion: yup
				.number()
				.required('Campo requerido.')
				.typeError('Solo números.'),
			Anios: yup
				.number()
				.required('Campo requerido.')
				.typeError('Solo números.'),
			Interes: yup
				.number()
				.required('Campo requerido.')
				.typeError('Solo números.')
				.min(0, 'El número mínimo es uno.')
				.max(1, 'El número máximo es uno.'),
		}),
	})
	return (
		<div className="calculator-form">
			<form className="calculator-form__form" onSubmit={handleSubmit}>
				<TextInput
					name="Deposito"
					label="Deposito inicial:"
					value={values.Deposito}
					onChange={handleChange}
					error={errors.Deposito}
				/>
				<TextInput
					name="Contribucion"
					label="Contribución mensual:"
					value={values.Contribucion}
					onChange={handleChange}
					error={errors.Contribucion}
				/>
				<TextInput
					name="Anios"
					label="Años:"
					value={values.Anios}
					onChange={handleChange}
					error={errors.Anios}
				/>
				<TextInput
					name="Interes"
					label="Interés estimado:"
					value={values.Interes}
					onChange={handleChange}
					error={errors.Interes}
				/>
				<Button>Calcular</Button>
			</form>
		</div>
	)
}
