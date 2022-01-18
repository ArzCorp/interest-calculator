import React from 'react'
import CalculatorForm from './components/CalculatorForm'
import { ContextProvider } from './context/Context'

export default function App() {
	return (
		<div className="app">
			<ContextProvider>
				<CalculatorForm />
			</ContextProvider>
		</div>
	)
}
