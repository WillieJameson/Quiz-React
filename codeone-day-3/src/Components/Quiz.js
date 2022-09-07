import React,{useState} from 'react'

const Quiz = () => {
  const question = [
  {
    questionText: 'What is the capital city of Indonesia?',
    answerOptions: [
      { id:1, answerText: 'New York', isCorrect: false },
      { id:2, answerText: 'London', isCorrect: false },
      { id:3, answerText: 'Jakarta', isCorrect: true },
      { id:4, answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is the CEO of Tesla?',
    answerOptions: [ 
      {id:1, answerText: 'Jeff Bezos', isCorrect: false },
      {id:2, answerText: 'Elon Musk', isCorrect: true },
      {id:3, answerText: 'Bill Gates', isCorrect: false },
      {id:4, answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'which company created the iPhone was created ?',
    answerOptions: [
      {id:1, answerText: 'Apple', isCorrect: true },
      {id:2, answerText: 'Intel', isCorrect: false },
      {id:3, answerText: 'Amazon', isCorrect: false },
      {id:4, answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      {id:1, answerText: '1', isCorrect: false },
      {id:2, answerText: '4', isCorrect: false },
      {id:3, answerText: '6', isCorrect: false },
      {id:4, answerText: '7', isCorrect: true },
    ],
  },
]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [ShowScore, setShowScore] = useState(false)
  const [Score, setScore] = useState(0)

  const handleAnswerOptionClick = (IsCorrect) =>{

    if (IsCorrect){
      setScore(Score + 1)
    }


    const nextQuestion = currentQuestion + 1 
    if(nextQuestion < question.length){
      setCurrentQuestion(nextQuestion)
    }
    else{
      setShowScore(true)
    }
  }
  return (
    <div className='bg-blue-900 w-[800px] h-[300px] rounded-2xl p-[20px] flex justify-evenly drop-shadow-xl text-white'>
      {ShowScore ? (
        <div className='flex text-5xl items-center'>You scored {Score} out of {question.length}</div>
      ):
      (
        <>
          <div className='w-full relative'>
            <div className='mt-4'>
              <span className='text-4xl'>Question {currentQuestion + 1}/{question.length}</span>
            </div>
            <div className='mt-4 text-2xl mx-2'>
              {question[currentQuestion].questionText}
            </div>
          </div>
          <div className='w-full flex flex-col justify-between my-5'>
            {question[currentQuestion].answerOptions.map((question) => {
              return(
                <button key={question.id} onClick={() => handleAnswerOptionClick(question.isCorrect)}  className='w-full text-xl bg-blue-900 rounded-xl flex p-2 justify-start items-center border-2 border-blue-600 cursor-pointer hover:bg-blue-500'>{question.answerText}</button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default Quiz