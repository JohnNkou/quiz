import { CloseCircle } from '../Svg.jsx'
import { SIZE } from '../constant.js'

export default function ErrorMessage({message}){
	if(!message){
		return console.error("No message provided in ErrorMessage");
	}

	return <div className='bg-red-500 w-full text-white text-sm text-left'>
	<div className='float-end'><CloseCircle color='white' size={SIZE.TINY} /></div>
	<p className='p-2 text-center'>{message}</p>
	</div>
}