import { useState, useEffect } from 'react';
import { QName,Current } from 'constant.js'
import { getQuestionaire } from 'utils.js'

export default function QuestionaireView(){
	let [questionnaire, setQuestionnaire] = useState(null);

	useEffect(()=>{

		setQuestionnaire(getQuestionaire());
	},[true]);

	if(questionnaire === undefined){
		return <p className='text-red-500'>Aucun questionnaire trouvé</p>
	}

	if(questionnaire === null){
		return null;
	}

	return <div className='text-center p-3'>
		<div>
			<h1 className='text-3xl font-bold'>Questionnaire {questionnaire.title}</h1>
			<a href="#" className='text-yellow-800'>Back</a>
		</div>

		<div className='mt-10 pb-10 p-3 inline-block min-w-96 shadow'>
			{questionnaire.questions.map((question,key)=>{
				let number = key + 1,
				title = question.title,
				assertions = question.assertions,
				divClass = `mt-5 ${key != 0 ? 'divide-y' : ''}`

				return <div className={divClass} key={key}>
					<p className='text-xl font-bold'><span className='me-2'>{number}.</span>{title}</p>
					<div className=''>
						{assertions.map((assertion,key)=>{
							let assertionClass = `p-2 min-w-72 inline-block rounded ${(assertion.checked)? 'bg-green-500 text-white':'bg-white'}`;

							return <p key={key} className='mt-3'><span className={assertionClass}>{assertion.text}</span></p>
						})}
					</div>
				</div>
			})}
		</div>
	</div>
}