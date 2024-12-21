'use client'

import AddQuestionnaire from '@/components/AddQuestionnaire.jsx'
import QuestionaireView from '@/components/QuestionaireView.jsx'
import QuestionaireEdit from '@/components/QuestionaireEdit.jsx';
import QuizView from '@/components/QuizView.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '@/components/Home.jsx'

export default function Page(){
	return <HashRouter>
		<Routes>
			<Route path="/" element=<Home /> />
			<Route path="/quiz/new" element=<AddQuestionnaire /> />
			<Route path="/quiz/view" element=<QuestionaireView /> />
			<Route path="/quiz/play/*" element=<QuizView /> />
			<Route path='/quiz/edit' element=<QuestionaireEdit /> />
		</Routes>
	</HashRouter>
}