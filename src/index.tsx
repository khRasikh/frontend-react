import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
/*1.Displaying Props*/
// import PropsApp from './Components/Propss';

/*2. Displaying useState */
// import UseStateType from './Components/UseState';
// import UseStateCounter from './Components/UseState-01';

/*3. Displaying useEffect */
// import MyUseEffect from './Components/UseEffect'; 

/*4. Displaying useContext */
import MyUseContext from './Components/UseContext'; 

ReactDOM.render(
  <React.StrictMode>
    <MyUseContext />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



