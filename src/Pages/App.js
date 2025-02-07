// import logo from './logo.svg';
import '../App.css';
import {useState} from "react";
import NavBar from '../Components/NavBar';

function App() {
  const [counter, setCounter] = useState(0);

  // const add = () => {
  //     // const AddedNumber = counter + 1;
  //     // setCounter(AddedNumber);

  //     setCounter((prev) => {
  //       if (prev < 20)
  //       {
  //         const newNo = prev + 1;
  //         return newNo;
  //       }

  //       return prev = 0;
  //     })
  // }

  // const subtract = () => {
  //   // if (counter > 0)
  //   // {
  //   //   const SubNumber = counter - 1;
  //   //   setCounter(SubNumber);
  //   // }
  //   // else
  //   //   setCounter(0);
  //   setCounter((holder) => {
  //     if (holder > 0)
  //     {
  //       const sub = holder - 1;
  //       return sub
  //     }
  //     return holder = 0;
  //   })
  // }
  

  return (
    // <div className="App">
    //   <NavBar/>
    //   <button onClick={() => {
    //     setCounter((prev) => {
    //       if (prev < 20)
    //       {
    //         const newNo = prev + 1;
    //         return newNo;
    //       }
  
    //       return prev = 0;
    //     })
    //   }}>+</button>
    //   <p>{counter}</p>
    //   <button onClick={ () => {
    //     setCounter((holder) => {
    //       if (holder > 0)
    //       {
    //         const sub = holder - 1;
    //         return sub
    //       }
    //       return holder = 0;
    //     })
    //   }}>-</button>
    // </div>
    <h1 className="text-3xl text-red-600 font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
