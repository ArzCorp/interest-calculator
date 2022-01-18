import React, { createContext, useState } from 'react'

export const Context = createContext({ value: 'Valor inicial' })

export const ContextProvider = ({ children }) => {
	const [values, setValues] = useState({
		rate: '',
	})

	const setRate = (newValue) => {
		setValues({
			rate: newValue,
		})
	}

	const state = {
		rate: values.rate,
		setRate,
	}
	return <Context.Provider value={state}>{children}</Context.Provider>
}
