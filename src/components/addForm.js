import React, { useState } from "react";
import axios from "axios";
import ErrorPage from "./errorPage";

const AddForm = ({didUpdate,setDidUpdate}) => {
	let [todoText, setTodoText] = useState("")
	const [error,setError]=useState(false)
	const [errorMessage,setErrorMessage]=useState("")

	const handleForm = (event) => {
		event.preventDefault()
		if (todoText === "") {
			alert("This field can not be emtpy")
			return
		}
		if (todoText.length < 3) {
			alert("Todo must be at least 3 charachter")
			return
		}

		const newTodo = {
			id: String(new Date().getTime()),
			text: todoText,
			date: new Date(),
			isDone: false
		}

		axios
		.post("http://localhost:3004/todos", newTodo)
		.then(()=>{
			setDidUpdate(!didUpdate)
			setTodoText("")
		})
		.catch((err)=>{
			setError(true)
			setErrorMessage("hata var")
		})
	}
	return (
		<>
		<form onSubmit={handleForm} className="container d-flex justify-content-center">
			<div className="w-75 input-group mb-3">
				<input value={todoText}
					onChange={(e) => { setTodoText(e.target.value) }}
					type="text" className="form-control"
					placeholder="Type Your To-do" />
				<button className="btn btn-primary" type="submit" id="button-addon2">Add</button>
			</div>
		</form>
		{
			error===true && (<ErrorPage errorMessage={errorMessage} handleClose={()=>{
				setError(false)
				setTodoText("")
			}}/>)
		}
		</>
	)
}

export default AddForm;