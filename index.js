import QuizComponent from './src/components/Quiz.jsx';
import QuestionaireFormComponent from './src/components/QuestionaireForm.jsx'
import { createRoot } from 'react-dom/client'

export const renderForm = function(node,props={}){
	let root = createRoot(node);

	root.render(<QuestionaireFormComponent {...props}  />);

	return root;
}

export const renderQuiz = function(node,props={}){
	let root = createRoot(node);

	root.render(<QuizComponent {...props} />);

	return root;
}