'use client'

import { useState,createRef, useEffect } from 'react'
import Question from '@/components/Question.jsx'
import { build_question_name, build_question_assertion_name, build_question_assertion_check_name ,put_red_border, remove_red_border } from '../utils.js'
import { AddQuiz, AddAssertion, CloseCircle, CloseRectangle, QuizResume, Save } from '../Svg.jsx'

let id = 0,
formRef = createRef();

export default function QuestionaireForm(props){
	let [questions, setQuestions] = useState([]),
	[title,setTitle] = useState(props.title || ''),
	[errors, setErrors] = useState({}),
	loading = props.loading;

	useEffect(()=>{
		if(props.questions){
			let questions = [...props.questions];
			if(!('id' in questions[0])){
				questions = questions.map((question)=>{
					question.id = id++;

					return question;
				})

				setQuestions(questions);
			}
			else{
				setQuestions(props.questions);
			}
		}
		else{
			setQuestions([{
				title:'',
				assertions:[],
				id: id++,
				autoFocus:true
			}])
		}
	},[props.questions]);

	if(!props.onSave || !props.onClose){
		throw Error("Should provide both an onSave and onClose functions");
	}

	function addQuestionnaire(event){
		event.preventDefault();

		questions = questions.map((question)=>({ ...question, autoFocus:false }))

		questions.push({
			title:'',
			id: id++,
			assertions:[],
			autoFocus:true
		});

		setQuestions(questions);
	}

	function enregister(event){
		event.preventDefault();

		let form = formRef.current,
		errors = {};

		if(form){
			let newQuestions = [],
			length = questions.length,
			qTitleNode = form.elements['title'];

			if(qTitleNode.value.length){
				remove_red_border(qTitleNode);

				for(let i=0; i < length; i++){
					let titleName = build_question_name(i),
					checkNames = build_question_assertion_check_name(i),
					titleNode = form.elements[titleName],
					titleValue,assertions,assertionName,checks,checkNumber=0;

					if(titleNode){
						titleValue = titleNode.value;

						if(!titleValue){
							put_red_border(titleNode);
							titleNode.focus();

							errors[i] = "Veuillez entrer la question dans le champs prévu";
							continue;
						}
						else{
							remove_red_border(titleNode);
						}

						checks = form.elements[checkNames];
						assertions = [];

						if(!checks){
							put_red_border(titleNode);
							errors[i] = "Veuillez entrer au moins deux assertion pour cette question";
							continue;
						}

						if(checks.length){
							let wrote_assertions = 0;

							for(let a=0,id=0;; a++){
								let assertionNode;

								assertionName = build_question_assertion_name(i,a);
								assertionNode = form.elements[assertionName];

								if(assertionNode){
									if(assertionNode.value.length){
										wrote_assertions++;

										remove_red_border(assertionNode);
									}
									else{
										put_red_border(assertionNode);
										errors[i] = "Veuillez completer l'assertion " + (a+1) + " de la question " + (id + 1);
									}

									assertions.push({
										text: assertionNode.value,
										checked: checks[a].checked,
										id: id++
									})

									if(checks[a].checked){
										checkNumber++;
									}
								}
								else{
									break;
								}

							}

							if(!checkNumber){
								put_red_border(titleNode);
								checks[0].focus();

								errors[i] = "Veuillez valider une assertion pour cette question";
								continue;
							}
						}
						else{
							errors[i] = "Aucune validation d'assertion trouvé";
							continue;
						}

						if(!assertions.length){
							errors[i] = "Aucune assertion trouvé";
							continue;
						}

						newQuestions.push({
							title: titleValue,
							assertions
						})

						
					}
				}

				if(!props.onError){
					setErrors(errors);
				}

				if(Object.keys(errors).length){
					if(props.onError){
						props.onError(errors);
					}
					return;
				}

				console.log("NewQuestion is",{
					title: qTitleNode.value,
					questions:newQuestions
				});

				props.onSave({
					title: qTitleNode.value,
					questions:newQuestions
				})
			}
			else{
				put_red_border(qTitleNode);

				props.onError({
					'error':'Le titre est vide'
				})

				return console.error("No title provided");
			}
		}
		else{
			console.error("No form given");
		}
	}

	function close(event){
		event.preventDefault();

		props.onClose();
	}

	function removeQuestion(event){
		event.preventDefault();

		let target = event.target,
		qId = target.getAttribute('data-q-id'),
		qs;

		console.log('target',target);

		if(qId){
			qs = questions.filter((question)=> question.id != qId);

			setQuestions(qs);
		}
	}

	console.log('questions',questions);

	return <div className='text-center'>
		{(loading)? <div className='absolute w-full h-full bg-slate-950 opacity-80  spinner flex place-content-center place-items-center bg-white border p-10 left-0 top-0 z-50'>
			<span style={{borderRadius:'40%'}} className='animate-spin spinner shadow border bg-indigo-900 opacity-100 p-4 h-1/4 w-1/4'></span>
		</div> : null}
		<div className='sticky w-full bg-indigo-900 p-2 top-0 left-0 z-40 shadow'>
			<div className='grid grid-cols-3 text-white'>
				<button onClick={enregister} className=' text-white w-52 px-2'><Save color='white' /></button>
				<h1 className='text-3xl font-bold'>Questionnaires</h1>
				<div className='flex justify-end items-center pe-5'>
					<button className='me-2' onClick={addQuestionnaire}><AddQuiz color='white' /></button>
					<a onClick={close} href="#"><CloseRectangle color='rgb(255, 78, 78)' style={{color:'rgb(255, 78, 78)'}}  /></a>
					{/*<a href="#" className='text-red-800'>Fermer</a>
										<button className='absolute top-0 right-0 mr-10' onClick={addQuestionnaire}>Ajouter question</button>*/}
				</div>
			</div>
		</div>
		<form className='mt-20 grid grid-cols-1 place-items-center' ref={formRef}>
			<div>
				<div>
					<span></span>
					<input className='border text-center p-1 text-base grow rounded-lg w-96' name='title' defaultValue={title} placeholder='Titre du questionnaire' />
					<span></span> 
				</div>
				<div onClick={removeQuestion} className='mt-10'>
					{questions.map((question,number)=> <Question errorMessage={errors[number]} key={question.id} {...question} number={number} />)}
				</div>
			</div>
		</form>
	</div>
}