import axios from "axios";
import React, { useState } from "react";

const SingleTodo = ({ item, didUpdate, setDidUpdate }) => {
	const [isEditClicked, setIsEditClicked] = useState(false)
	const [newText, setNewText] = useState(item.text)

	const handleDelete = () => {
		axios
			.delete(`http://localhost:3004/todos/${item.id}`)
			.then((res) => {
				setDidUpdate(!didUpdate)
			})
	}

	const handleChangeDone = () => {
		const changedDone = {
			...item,
			isDone: !item.isDone
		}
		axios
			.put(`http://localhost:3004/todos/${item.id}`, changedDone)
			.then((res) => {
				setDidUpdate(!didUpdate)
			})
			.catch((err) => { })
	}

	const handleEdit=()=>{
		if (newText === "") {
			alert("This field can not be emtpy")
			return
		}
		if (newText.length < 3) {
			alert("Todo must be at least 3 charachter")
			return
		}
		const editedTodo={
			...item,
			text:newText,
			date: new Date()
		}
		axios
		.put(`http://localhost:3004/todos/${item.id}`,editedTodo)
		.then((res)=>{
			setDidUpdate(!didUpdate)
		})
		.catch((err)=>{})
	}
	return (
		<div className={item.isDone === false ? "alert alert-danger d-flex justify-content-between align-items-center" : "alert alert-success d-flex justify-content-between align-items-center"} >
			{isEditClicked === false ? (
				<div >
					<h1 className="d-flex text-left">{item.text}</h1>
					<small className="d-flex text-left">{new Date(item.date).toLocaleString()}</small>
				</div>) :
				(<form className="container d-flex justify-content-center">
					<div className="w-75 input-group mb-3">
						<input value={newText}
							onChange={(e) => { setNewText(e.target.value) }}
							type="text" className="form-control"
							placeholder="Type Your To-do" />
						<button onClick={() => {
							setIsEditClicked(false)
							setNewText(item.text)
						}}
							className="btn btn-danger" type="submit" id="button-addon2">Cancel</button>
						<button onClick={handleEdit} className="btn btn-primary" type="submit" id="button-addon2">Edit</button>
					</div>
				</form>)}

			{isEditClicked === false && (
				<div className="btn-group" role="group" aria-label="Basic example">
					<button onClick={handleDelete} className="btn btn-danger">Delete</button>
					<button onClick={() => { setIsEditClicked(!isEditClicked) }} className="btn btn-primary">Edit</button>
					<button onClick={handleChangeDone} className="btn btn-success">{item.isDone === false ? "done" : "Undone"}</button>
				</div>
			)}


		</div>
	)
}

export default SingleTodo;