import { QName, Current } from 'constant.js'

export function build_question_name(question_number){
	return `q-${question_number}`;
}

export function build_question_assertion_name(question_number,assertion_number){
	return build_question_name(question_number) + `-a-${assertion_number}`;
}

export function build_question_assertion_check_name(question_number){
	return build_question_name(question_number) + `-c`;
}

export function put_red_border(node){
	if(node.className.indexOf('border-red-500') == -1){
		node.className += ' border-red-500';
	}
}

export function remove_red_border(node){
	node.className = node.className.replaceAll('border-red-500','');
}

export function getQuestionaire(){
	let current = localStorage.getItem(Current);

	if(current){
		try{
			current = JSON.parse(current);
		}
		catch(error){
			console.error("Error parsing localStorage",current,error);
			return undefined;
		}

		return current;
	}
	else{
		return undefined;
	}
}

export function getQuestionaires(){
	let questionaires = localStorage.getItem(QName);

	if(questionaires){
		try{
			questionaires = JSON.parse(questionaires);

			if(!(questionaires instanceof Array)){
				console.error("Questionnaire not an array. Returning undefined",questionaires)
				return undefined;
			}

			return questionaires;
		}
		catch(error){
			console.error("Error parsing questionaires",error);
			return undefined;
		}
	}

	return undefined;
}

export function saveQuestionaire(questionaire){
	let questionaires = getQuestionaires(),
	index;

	if(questionaires){
		index = Math.max(0,questionaires.length - 1);

		questionaires.push({...questionaire, index});
	}
	else{
		questionaires = [{...questionaire, index:0}];
	}

	localStorage.setItem(QName,JSON.stringify(questionaires));
}

export function updateQuestionaire(updatedQuestionaire){
	let questionaires = getQuestionaires(),
	index = updatedQuestionaire.index;

	if(questionaires){
		if(index != undefined){
			let questionaire = questionaires[index];

			if(questionaire){
				questionaires[index] = updatedQuestionaire;
			}
			else{
				console.error("No questionaire found at index",index, questionaires);

				return false;
			}
		}
		else{
			console.error("No index given", updatedQuestionaire);
			return false;
		}
	}
	else{
		questionaires = [updatedQuestionaire];
	}

	localStorage.setItem(QName, JSON.stringify(questionaires));

	return true;
}