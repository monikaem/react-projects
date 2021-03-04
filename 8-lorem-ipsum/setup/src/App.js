import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleChangeCount = (e) => setCount(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count === 0){
      amount = 1;
    }

    setText(data.slice(0, amount));
  }

  return (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>Paragraphs: </label>
      <input id='amount' type='number' min='0' max='8' value={count} onChange={handleChangeCount}/>
      <button type='submit' className='btn'>generate</button>
    </form>
    <article className='lorem-text'>
      {text.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </article>
  </section>
    )
}

export default App;
