import React, { useState } from 'react';

function VariableFormFields() {
	const [inputFields, setInputFields] = useState([
		{
			firstName: '',
			lastName: '',
		},
	]);

	const onChangeHandler = (index, e) => {
		let values = [...inputFields];
		values[index][e.target.name] = e.target.value;
		setInputFields(values);
	};

	const onAddHandler = (index) => {
		if (
			inputFields[index + 1]?.firstName !== '' &&
			inputFields[index - 1]?.firstName !== ''
		) {
			setInputFields([
				...inputFields,
				{
					firstName: '',
					lastName: '',
				},
			]);
		}
	};

	const onDeleteHandler = (index) => {
		let values = [...inputFields];
		values.splice(index, 1);
		setInputFields(values);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		let values = [...inputFields];
		if (
			values[values.length - 1]?.firstName === '' &&
			values[values.length - 1]?.lastName === ''
		)
			values.splice(-1, 1);
		console.log('Input Fields = ', values);
	};

	return (
		<div>
			<h1>Add details</h1>
			<form>
				{inputFields.map((inputField, index) => (
					<div key={index}>
						<input
							name='firstName'
							value={inputField.firstName}
							onChange={(e) => onChangeHandler(index, e)}
							onClick={() => onAddHandler(index)}
						/>
						<input
							name='lastName'
							value={inputField.lastName}
							onChange={(e) => onChangeHandler(index, e)}
						/>
						<button type='button' onClick={() => onDeleteHandler(index)}>
							-
						</button>
					</div>
				))}
				<button type='button' onClick={() => onAddHandler(-1)}>
					+
				</button>

				<button type='submit' onClick={(e) => onSubmitHandler(e)}>
					Send
				</button>
			</form>
		</div>
	);
}

export default VariableFormFields;
