import './App.css';
import Quiz from './Components/Quiz';
import Header from './Components/Header'
import {useState, useEffect} from 'react'
import Product from './Components/Product';
import Counter from './Components/Counter'

function App() {
  // const [Data,setData] = useState("Jason")
  // const [name,setName] = useState("Codeone")
  // const [Array,setArray] = useState([
  //   {id:1, title : 'Product 1', price : 899},
  //   {id:2, title : 'Product 2', price : 769},
  //   {id:3, title : 'Product 3', price : 989},
  //   {id:4, title : 'Product 4', price : 871},
  //   {id:5, title : 'Product 5', price : 459}	
  // ])


  // const age = 20
  // const link = "https://www.google.com/"

  // const clickme = () =>{
  //   setName("State")
  // } 

  // const clickData = () =>{
  //   setData("Klein")
  // } 



  // const DeleteArray = (SelectedID) =>{
  //   const Newarray = Array.filter((product) => product.id !== SelectedID)
  //   setArray(Newarray)
  // }
  // // useEffect(()=>{
  // //   console.log("useEffect is running 1")
  // // },[])

  // useEffect(()=>{
  //   console.log("useEffect Data is running")
  // },[Data])

  return (
    <div className="text-5xl text-center">
      {/* <Counter/> */}

      {/* <Header/>



      {/* <div className='mt-6'>
        Hello {name}
      </div>

      <div>
        Ages : {age}
      </div> */}

      {/* <div >
        <button className='bg-gray-400 p-2 mt-2' onClick={() => clickData()}>{Data}</button>
      </div>

      <Product Product={Array} deleteFunction={DeleteArray}/> */}


      <div className='bg-blue-300 flex justify-center h-screen items-center'>
        <Quiz/>
      </div>
    </div>
  );
}

export default App;
