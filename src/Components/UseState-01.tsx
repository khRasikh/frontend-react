import React, {useState} from 'react'; 

const UseStateCounter = () =>{
	const[value, SetEven] = useState("Initial value"); 
	const[count, addCount] = useState(0); 

	return(
		<>

			<button type="button" className="newButton"
				onClick={()=> SetEven("Even Value")}

			>{value}</button>
			<button type="button" className="newButton"
				onClick={()=> addCount(1)}>Count{count}</button>
		</>
		);
}


export default UseStateCounter; 