import QuestionaireForm from '@/components/QuestionaireForm.jsx'
import { useState, useEffect } from 'react';
import { QName } from 'constant.js'
import { getQuestionaires, saveQuestionaire } from 'utils.js'

export default function AddQuestionnaire(){

	function save(questionnaire){
		saveQuestionaire(questionnaire);
		
		location.hash = "";
	}

	return <QuestionaireForm onSave={save} />
}