import QuestionaireForm from '@/components/QuestionaireForm.jsx'
import { useState, useEffect } from 'react';
import { QName } from 'constant.js'
import { getQuestionaires, saveQuestionaire } from 'utils.js'

export default function AddQuestionnaire(){
	let [loading, setLoading] = useState(true);

	function save(questionnaire){
		saveQuestionaire(questionnaire);
		
		location.hash = "";
	}

	function close(){
		location.hash = "";
	}

	return <QuestionaireForm loading={loading} onSave={save} onClose={close} />
}