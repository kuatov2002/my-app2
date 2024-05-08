import React from 'react';
import './Overall.css';

const Overall = () => {
  return (
    <div className='overall'>
            <div class="slider">
        <div class="line"></div>
        <div class="ellipse">

        </div>
        <div class="ellipse">

        </div>
        <div class="ellipse">
          
        </div>
        <div class="ellipse"><div class="inner-circle"></div></div>
      </div>
      <div className="problem">
        <h2>Your Problem:</h2>
        <textarea name="" id="" readOnly>biliberda biliberda biliberda biliberda biliberda biliberda </textarea>
      </div>
      <div className="parameters">
        <h2>Parameters:</h2>
        <div className="topic">
          <p>Main Topic</p>
          <textarea readOnly  className='Card'>ArrayList</textarea>
        </div>
        <div className="input">
        <p>Input</p>
          <textarea readOnly  className='Card'>ArrayList</textarea>
        </div>
        <div className="output">
        <p>Output</p>
          <textarea readOnly  className='Card'>ArrayList</textarea>
        </div>
        <div className="difficulty">
        <p>Difficulty</p>
          <textarea readOnly  className='Card'>ArrayList</textarea>
        </div>
        <div className="tags">
          <h2>Tags</h2>
        </div>
      </div>
      <div className="others">
        <div className="analyses">
            <h2>MapReduce Analyses</h2>

            <p><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.345 15.895C12.4015 15.895 15.69 12.5606 15.69 8.44752C15.69 4.33437 12.4015 1 8.345 1C4.28847 1 1 4.33437 1 8.44752C1 12.5606 4.28847 15.895 8.345 15.895Z" stroke="black" stroke-width="1.84" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.1416 6.21328C6.1416 3.60663 10.1814 3.60665 10.1814 6.21328C10.1814 8.07516 8.3451 7.70271 8.3451 9.93697" stroke="black" stroke-width="1.84" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.34497 12.9236L8.35256 12.9153" stroke="black" stroke-width="1.84" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>Something</p>
            <p><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.345 15.895C12.4015 15.895 15.69 12.5606 15.69 8.44752C15.69 4.33437 12.4015 1 8.345 1C4.28847 1 1 4.33437 1 8.44752C1 12.5606 4.28847 15.895 8.345 15.895Z" stroke="black" stroke-width="1.84" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.1416 6.21328C6.1416 3.60663 10.1814 3.60665 10.1814 6.21328C10.1814 8.07516 8.3451 7.70271 8.3451 9.93697" stroke="black" stroke-width="1.84" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.34497 12.9236L8.35256 12.9153" stroke="black" stroke-width="1.84" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>Something2</p>
        </div>
        <div className="top3">
          <h2>Top 3 Similar Problems</h2>
        </div>
      </div>
    </div>
  );
};

export default Overall;