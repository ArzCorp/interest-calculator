import React from 'react'

export default function TextInput({ id, label, ...props }) {
	return (
		<div className="input-text">
			<label className="input-text__label" htmlFor={id}>
				{label}
			</label>
			<input className="input-text__input" type="text" id={id} {...props} />
		</div>
	)
}
