import { useState, useEffect } from 'react';
import { QName,Current } from 'constant.js'
import { getQuestionaires } from 'utils.js'

export default function Home(){
	let [questionnaires, setQuestionnaires] = useState([]);

	useEffect(()=>{
		let Q = localStorage.getItem(QName);

		setQuestionnaires(getQuestionaires() || []);
	},[true]);

	function handleClick(event){
		event.preventDefault();

		let target = event.target,
		index = target.getAttribute('data-id'),
		action = target.getAttribute('data-action');

		if(index){
			let questionnaire = questionnaires[index];

			if(questionnaire){
				console.log('QQQ',questionnaire);
				localStorage.setItem(Current,JSON.stringify(questionnaire));
			}
			else{
				return console.error("No question with the given index found",index);
			}

			switch(action){
				case 'view':
					location.hash = '/quiz/view';
					break;
				case 'play':
					location.hash = '/quiz/play';
					break;
				case 'edit':
					location.hash = '/quiz/edit';
					break;
			}
		}
	}

	return <div className='text-center p-3'>
		<h1 className='text-3xl font-bold'>Bienvenu sur Quiz</h1>
		<a href='#/quiz/new' className='bg-blue-600 py-1 px-3 text-white'>New</a>
		<div onClick={handleClick} className='mt-5 text-center'>
			<div className='inline-block p-2 relative'>
				{questionnaires.map((questionnaire,key)=> <div key={key}>
					<button data-id={key} data-action='view' className='p-2 mt-3 w-96 inline-block bg-yellow-500 text-white me-2 hover:bg-yellow-700'>{questionnaire.title}
					</button>
					<div className='inline-block absolute w-36 mt-5 divide-x'>
						<button className='p-1' data-id={key} data-action='play'>Quiz</button>
						<button className='p-1' data-id={key} data-action='edit'>edit</button>
					</div>
				</div> )}
			</div>
		</div>
	</div>
}