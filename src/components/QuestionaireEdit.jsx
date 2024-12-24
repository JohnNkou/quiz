import QuestionaireForm from '@/components/QuestionaireForm.jsx'
import { getQuestionaire, updateQuestionaire } from 'utils.js'
import { useState, useEffect } from 'react';

export default function QuestionaireEdit(){
	let [questionaire, setQuestionaire] = useState(null);

	useEffect(()=>{
		setQuestionaire(getQuestionaire());
	},[true]);

	if(questionaire === null){
		return null;
	}
	else if(questionaire == undefined){
		return <p className='bg-red-500 text-white'>Mauvais questionaire donnée</p>
	}

	function update(updatedQuestionaire){
		console.log('QMA',questionaire);
		if(updateQuestionaire({...updatedQuestionaire, index: questionaire.index})){
			location.hash = "#";
		}
		else{

		}
	}

	function close(){
		location.hash = "";
	}

	return <QuestionaireForm {...questionaire} onClose={close} onSave={update} />
}