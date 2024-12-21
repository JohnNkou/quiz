import { useState, useEffect, createRef } from 'react';
import { build_question_name, build_question_assertion_name, build_question_assertion_check_name } from '../utils.js'
import { AddQuiz, AddAssertion, CloseCircle, CloseRectangle, QuizResume, Save } from '../Svg.jsx'
import { SIZE } from '../constant.js'

export default function Question(props){
	let [assertions, setAssertions] = useState(props.assertions),
	[id, setId] = useState(0),
	[updating, setUpdating] = useState(false),
	[myRef, setMyRef] = useState(createRef()),
	titleName = build_question_name(props.number);

	useEffect(()=>{
		let node = myRef.current;

		if(node){
			node.scrollIntoView();
		}
		else{
			console.error("No Node?",node);
		}
	},[myRef]);

	useEffect(()=>{
		if(updating){
			setAssertions(assertions.map((assertion)=> ({...assertion, focus:false})))
		}
	},[updating, assertions]);

	useEffect(()=>{
		if(assertions.length == 0){
			addAssertion(); addAssertion();
		}
		else{
			let maxId = assertions.reduce((x,y)=>{
				if(x.id > y.id){
					return x.id;
				}

				return y.id;
			},0);

			maxId++;

			setId(maxId);
		}
	},[assertions]);

	function addAssertion(event){
		let node = myRef.current;

		if(event){
			event.preventDefault();
			event.stopPropagation();
		}

		assertions.push({
			text:'',
			checked:false,
			id: id++,
			focus: (props.autoFocus)? false: true
		})

		setAssertions([...assertions]);
		setId(id);
	}

	function removeAssertion(event){
		event.stopPropagation();

		let target = event.target,
		index = target.getAttribute('data-q-id'),
		index_2 = target.getAttribute('data-c-id');

		if(index){
			event.preventDefault();

			index = Number(index);

			assertions.splice(index,1);

			setAssertions([...assertions])
		}
	}

	if(!props.assertions){
		return <p className='text-red-500 bg-white-100'>No assertion givens</p>
	}
	if(props.id == undefined){
		return <p className='text-red-500 bg-white-100'>No id given</p>
	}

	return <div className='mt-5 bg-white grid grid-cols-1 place-items-center'>
		<div className='content-center relative w-full'>
			<div className='text-center bg-indigo-900 rounded-t-xl'>
				<p className='align-top mb-2 font-bold text-white'>Question.{props.number + 1}</p>
				<textarea autoFocus={props.autoFocus} name={titleName} className='w-80 p-2 text-sm rounded' defaultValue={props.title}></textarea>
			</div>
			<div className='absolute left-full top-0 flex gap-2 ms-2'>
				<button className='' onClick={addAssertion}><AddAssertion /></button>
				<button className=''><CloseCircle color='rgb(255, 78, 78)' data={{ 'data-q-id': props.id }} /></button>
				{/*<button onClick={addAssertion} className='text-sm ms-3 bg-zinc-500 text-white px-2'>Ajouter assertion</button>*/}
			</div>
		</div>
		<div className='' ref={myRef} onClick={removeAssertion}>
			<div className='bg-white'>
				<h1 className='font-bold'>Assertions</h1>
				{assertions.map(({ text, checked,id, focus },key)=>{
					let assertionNameText = build_question_assertion_name(props.number, key),
					assertionCheckName = build_question_assertion_check_name(props.number, key) ;

					return <div key={id} className='relative mb-5'>
						<div className=''>
							<textarea autoFocus={focus} defaultValue={text} name={assertionNameText} className='border rounded text-center w-72 align-bottom me-1' placeholder=''></textarea>
						</div> 
						<div className='absolute left-full grid grid-cols-2 w-10 place-items-center top-0'>
							<input type='checkbox' defaultChecked={checked} data-check='true' data-c-id={key} name={assertionCheckName} />
							{assertions.length > 2? <>
							<button data-q-id={key} className='text-sm px-2 text-white align-bottom me-2'><CloseRectangle size={SIZE.TINY} color='rgb(255, 78, 78)' data={{'data-q-id':key}} /></button>
							</> : null }
						</div>
				</div>
				})}
			</div>
		</div>
	</div>
}