
import React, { useState, useEffect}from  "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const urlToDo= "https://playground.4geeks.com/apis/fake/todos/user/Mov1ux"
	
	//logica
	const [toDos, setToDos] = useState([])

	/* useEffect(()=>{
		se ejecuta accion solo 1 vez
	}, []) */
	useEffect (()=> {
		fetch(urlToDo) 
	.then((response)=>{return response.json()}) 
	.then((data)=>{setToDos(data),console.log(data)}) 
	.catch((err)=>{return err})
	},[])
	//Get
	//peticion  resultado    data
	


	/* //Post
	fetch (urlToDo, {
		method: "POST",
		body: JSON.stringify([]),
		headers: {
			'Content-Type': 'application/json'
		}
	}) 
	.then((response)=>{return response.json()}) 
	.then((data)=>{console.log(data)}) 
	.catch((err)=>{return err}) */

	function addNewTask(){
		let newTodo = {
			label: "estudiar",
			done: false
		}
		let body = [
		{
			done: false,
			label: "barrer casa"
		},
		{
			done: false,
			label: "hace cafe"
		},
		{
			done: false,
			label: "sacar perro"
		},]
	setToDos([...toDos, newTodo])	
	
	fetch (urlToDo, {
		method: "PUT",
		body: JSON.stringify(toDos, newTodo),
		headers: {
			'Content-Type': 'application/json'
		}
	}) 
	.then((response)=>{return response.json()}) 
	.then((data)=>{console.log(data)}) 
	.catch((err)=>{return err})
	}
	//Put
	


	return (
		<div className="">
			{toDos.map((value, index, array)=>{
				return (
					<h1>{value.label}</h1>
				)
			})}
			<button className="btn btn-success" onClick={addNewTask}>♥</button>
		</div>
	);
};

export default Home;
