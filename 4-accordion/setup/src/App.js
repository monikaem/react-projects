import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';


function App() {
  const questions = data.map(question => {
    return <SingleQuestion key={question.id} {...question}></SingleQuestion>
  })

  return (
      <main>
      <div className='container'>
          <h3>questions and answers about login</h3>
          <section className='info'>
              {questions}
          </section>
      </div>
      </main>
  )

}

export default App;
