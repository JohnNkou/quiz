import { useState, useEffect } from 'react'

export default function Quiz(props){
	let [questionaire,setQuestionaire] = useState(props.questionaire),
	[cursor, setCursor] = useState(0),
	[visited, setVisited] = useState([]),
	[myAssertion, setMyAssertion] = useState({}),
	[choiceAvailable, setChoiceAvailable] = useState(),
	[totalResponse, setTotalResponse] = useState(0),
	[userTotalResponse, setUserTotalResponse] = useState(0),
	[showResult, setShowResult] = useState(false),
	title = questionaire.title,
	questions = questionaire.questions,
	currentQuestion = questions[cursor];

	useEffect(()=>{
		if(location.hash.indexOf('start') == -1){
			location.hash += '/start';
		}

		if(totalResponse == 0){
			questionaire.questions.forEach((question,index)=>{
				question.assertions.forEach((assertion)=>{
					if(assertion.checked){
						totalResponse++;
					}
				})
			})

			setTotalResponse(totalResponse);
		}

		/*let id = 0, 
		bulkAssertion = questionaire.questions.reduce((x,y)=>{
			x[id++] = [0,Math.max(y.assertions.length -1, 3)];

			return x;
		},{ })

		setMyAssertion(bulkAssertion);
		setShowResult(true);*/

	},[totalResponse, questionaire]);

	function navigate(newCursor){
		setCursor(newCursor);
	}

	function updateAssertion(newUserAssertions){

		if(newUserAssertions){
			myAssertion[cursor] = [...newUserAssertions];
		}
		else if(newUserAssertions === null){
			delete myAssertion[cursor];
		}
		else{
			return console.error("ODD NEW USERASSERTION",newUserAssertions);
		}

		let totalUserResponse = 0;

		Object.keys(myAssertion).forEach((assCursor)=>{
			totalUserResponse += myAssertion[assCursor].length;
		})

		setMyAssertion({...myAssertion});
		setUserTotalResponse(totalUserResponse);
	}

	function goBack(event){
		if(event){
			event.preventDefault();
		}

		if(props.onBack){
			props.onBack();
		}
	}

	function updateChoice(number){
		setChoiceAvailable(number);
	}

	return <div className='shadow w-full sm:w-3/4 md:w-2/3 lg:w-1/3 bg-white text-center inline-block pb-10'>
		{showResult? <Resultat myAssertion={myAssertion} questions={questions} onClose={goBack} totalResponse={totalResponse} /> : 
		<div className='relative'>
			<div className='p-5'>
				<div className=''>
					<h1 className='text-2xl font-bold relative '><button onClick={goBack} className='absolute text-sm mt-2 left-0'>Back</button>{title}</h1>
				</div>
			</div>
			<InteractiveQuiz allowResult={true} cursor={cursor} questions={questions} onShowResult={()=> setShowResult(true)} onAssertionUpdated={updateAssertion} onNavigation={navigate} totalResponse={totalResponse} userTotalResponse={userTotalResponse} userAssertions={myAssertion} />
		</div>
		}
	</div>

	
}

function Resultat({ myAssertion, questions, totalResponse, onClose }){
	let [percentage, setPercentage] = useState(''),
	[correctAnswers, setCorrectAnswers] = useState(0),
	[cursor, setCursor] = useState(0),
	[report, setReport] = useState(null);

	useEffect(()=>{
		let myPoint = 0,
		report = {};

		questions.forEach((question,index)=>{
			let currentReport = { success:false, assertions:{} };

			if(myAssertion[index].every((answerIndex)=>{
				let status = false;

				if(question.assertions[answerIndex].checked){
					myPoint++;
					status = true;
				}

				currentReport.assertions[answerIndex] = status;

				return status;
			})){
				currentReport.success = true;
			}

			report[index] = currentReport;
		})

		percentage = Math.floor((myPoint / totalResponse) * 100) + "%";

		setPercentage(percentage);
		setCorrectAnswers(myPoint);
		setReport(report);
	},[true]);

	function navigate(newCursor){
		setCursor(newCursor);
	}

	function close(event){
		event.preventDefault();

		if(onClose){
			onClose();
		}
	}

	return <div>
		<div className='mb-5'>
			<h1 className='text-3xl font-bold text-blue-500'>Resultats</h1>
		</div>
		<div>
			<div className='text-blue-900'>
				<p className='grid grid-cols-2'>
					<span className='text-right font-medium'>Pourcentage:</span>
					<span>{percentage}</span>
				</p>
				<p className='grid grid-cols-2'>
					<span className='text-right font-medium'>Bonne reponse:</span>
					<span>{correctAnswers}/{totalResponse}</span>
				</p>
			</div>
		</div>
		<div className='mt-5'>
			<h3 className='text-red-500 text-xl'>Corrections</h3>
			<InteractiveQuiz cursor={cursor} report={report} questions={questions} onNavigation={navigate} userAssertions={myAssertion} />
		</div>
		<p className='mt-5'>
			<button onClick={close} className='bg-indigo-900 p-2 rounded-xl text-white'>Fermer</button>
		</p>
	</div>
}

function InteractiveQuiz({ cursor, report, questions, onShowResult,  onAssertionUpdated, allowResult, onNavigation, totalResponse, userTotalResponse, userAssertions}){
	let [visited, setVisited] = useState([]),
	[choiceAvailable, setChoiceAvailable] = useState(),
	currentQuestion = questions[cursor];

	if(!currentQuestion){
		return <p>No current question found</p>
	}

	function updateAssertion(event){
		event.preventDefault();

		let target = event.target,
		assertion_index = target.getAttribute('data-assertion-index'),
		my_index;

		if(assertion_index){
			assertion_index = Number(assertion_index);

			if((assertion_index != assertion_index) == true){
				return console.error("Assertion_index is not a number",assertion_index, assertion_index != assertion_index)
			}

			let u_assertions = userAssertions[cursor] || [],
			in_assertions = u_assertions.indexOf(assertion_index);

			if(in_assertions == -1){
				if(choiceAvailable == 1){
					if(u_assertions.length){
						u_assertions.pop();
					}
					
					u_assertions.push(assertion_index);
				}
				else if(u_assertions.length < choiceAvailable){
					u_assertions.push(assertion_index);
				}
				else if(choiceAvailable == u_assertions.length){
					return;
				}
			}
			else{
				u_assertions.splice(in_assertions,1);

				if(u_assertions.length == 0){
					u_assertions = null;
				}
			}

			if(onAssertionUpdated){
				onAssertionUpdated(u_assertions);
			}
		}
	}

	function navigate(event){
		event.preventDefault();

		let target = event.target,
		newCursor = target.getAttribute('data-cursor');

		if(newCursor){
			if(userAssertions[cursor]){
				if(visited.indexOf(cursor) == -1 && userAssertions[cursor].length == choiceAvailable){
					visited.push(Number(cursor));
				}
			}

			if(onNavigation){
				onNavigation(newCursor);
			}
		}
	}

	function updateChoice(number){
		setChoiceAvailable(number);
	}

	return <div style={{minHeight:'500px'}} className='relative h-full px-4'>
		<div className='mt-3'>
			<div className='bg-indigo-950 rounded text-white grid grid-cols-3 place-items-start items-start p-2'>
				<p className='font-bold'>Question {Number(cursor) + 1}.</p>
				<p className='col-span-2'>{currentQuestion.title}</p>
				<p className='col-span-2'><AssertionHint onAssertionNumber={updateChoice} assertions={currentQuestion.assertions} /></p>
			</div>
			<div onClick={updateAssertion} className='mt-5'>
				{currentQuestion.assertions.map((assertion,index)=>{
					let id = assertion.id,
					text = assertion.text,
					className = `mb-5 border rounded p-2`,
					myAnswers = userAssertions[cursor];

					if(report){
						let report_assertions = report[cursor].assertions;
						if(report_assertions[index] || assertion.checked){
							className += ' bg-green-500 text-white'
						}
						else if(report_assertions[index] === false){
							className += ' bg-red-500';
						}
					}
					else if(myAnswers && myAnswers.indexOf(index) != -1){
						className += ' bg-green-500 text-white active:bg-red-500';
					}
					else{
						className += ' hover:bg-indigo-500 active:bg-blue-800 hover:text-white'
					}

					return <p data-assertion-index={index} className={className} key={id}>
						{text}
					</p>
				})}
			</div>
		</div>
		{allowResult && totalResponse == userTotalResponse ? <div className='mb-5'>
				<button onClick={onShowResult} className='bg-indigo-900 text-white p-2 rounded'>Terminer</button>
			</div> : null}

		<div className='absolute bottom-2 w-full' onClick={navigate}>
			{questions.map((question,index)=>{
				let number = index + 1,
				className = 'py-1 px-3 rounded-xl me-2 shadow';

				if(report){
					if(report[index].success){
						className += ' bg-green-500 text-white';
					}
					else{
						className += ' bg-red-500';
					}
				}
				else if(index == cursor){
					className += ' bg-indigo-500 text-white'
				}
				else if(visited.indexOf(index) != -1){
					className += ' bg-zinc-400 text-white';
				}
				else{
					className += ' text-black'
				}
				return <span key={index} className={className} data-cursor={index}>{number}</span>
			})}
		</div>
	</div>
}

function AssertionHint(props){
	let [message, setMessage] = useState('');

	useEffect(()=>{
		let assertions = props.assertions,
		number = assertions.reduce((x,y)=>{
			if(y.checked){
				x++;
			}

			return x;
		},0);

		if(number == 1){
			setMessage("choix Unique");
		}
		else{
			setMessage(`choix multiple (${number})`)
		}

		if(props.onAssertionNumber){
			props.onAssertionNumber(number);
		}
	},[props.assertions]);

	return <span className='text-xs mt-5 inline-block'>{message}</span>
}