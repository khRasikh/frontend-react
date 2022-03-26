import React, {useState, useEffect} from 'react'; 


const MyUseEffect = ()=> {
	const[time, setTime] = useState(0); 
	const[count, setCount] = useState(0); 

	useEffect(() => {
    setTimeout(() => {
      setTime((time) => time + 1);
    }, 1000);
  });

  return(
  <div>
	  <p>It means that the useEffect function updates
	  in every 1000s. </p>
	  <h2>Here is the result you see alive: {time} times!</h2>;
  </div>
  )
}


export default MyUseEffect; 

