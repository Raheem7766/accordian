import React, {useState} from 'react'
import data from './Data'
import SingleQuestion from './Question'

export default function App() {
  const [question , setQuestions] = useState(data)
  return (
    <main >
      <div className='container'>
      <h3 >Questions and answers about login</h3>
      <section className='info'>
        {
          question.map((questions)=>{
            return(
                <SingleQuestion key={questions.id} {...questions}/>
            )
          })
        }
      </section>
      </div>
    </main>
  )
}
