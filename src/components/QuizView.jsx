import Quiz from '@/components/Quiz.jsx'
import { getQuestionaire } from 'utils.js'
import { useState, useEffect } from 'react'

export default function QuizView(){
	let [start, setStart] = useState(false),
	[questionaire, setQuestionaire] = useState(null);

	useEffect(()=>{
		setQuestionaire(getQuestionaire());

		if(location.hash.indexOf('start') != -1){
			setStart(true);
		}
	},[true]);

	if(questionaire == undefined){
		return <p className='bg-red-600 text-white'>Aucun questionnaire trouvé</p>
	}

	if(questionaire == null){
		return null;
	}

	return <div style={{minHeight:'500px'}} className='flex items-center'>
		{!start? <div className='text-center flex-1'>
			<h1 className='text-xl font-bold mb-5'>Lancer le quiz</h1>
			<button className='bg-indigo-950 p-3 text-white rounded-xl' onClick={()=> setStart(true)}>Commencer</button>
		</div>: <div className='flex-1 text-center'><Quiz onBack={()=> location.hash = ""} questionaire={questionaire} /></div>}
	</div>
}