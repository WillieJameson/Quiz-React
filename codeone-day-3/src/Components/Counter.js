import React,{useState} from 'react'

const Counter = () => {
  const[Number, setNumber] = useState(0)

  const Increment = () =>{
    setNumber(Number + 1)
  }
  const Decrement = () =>{
    if(Number > 0){
      setNumber(Number - 1)
    }
    else{
      return 
    }
  }
  const Double = () =>{
    setNumber(Number * 2)
  }
  const Reset = () =>{
    setNumber(0)
  }

  return (
    <div>
      <h1 className='text-6xl'>Counter App</h1>
      <div className='mt-12 text-6xl'>
        {Number}
      </div>
      <div className='flex justify-center gap-8 mt-12'>
        <button className='bg-green-700 p-2 text-white rounded-lg' onClick={Increment}>
          Increment
        </button>

        <button className='bg-red-700 p-2 text-white rounded-lg' onClick={Decrement}>
          Decrement
        </button>

        <button className='bg-blue-700 p-2 text-white rounded-lg' onClick={Double}>
          Double
        </button>

        <button className='bg-gray-700 p-2 text-white rounded-lg' onClick={Reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter