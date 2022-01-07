import { useState } from 'react'

export default function useForm({ initialValues, onSubmit }) {
	const [fields, setFields] = useState(initialValues)

	const submit = (e) => {
		e.preventDefault()
		if (onSubmit) return onSubmit(fields)
	}

	const onChange = (e) => {
		const { name, value } = e.target

		setFields({
			...fields,
			[name]: value,
		})
	}
	return { fields, onChange, submit }
}
