import React, { useState } from 'react';
import './InputForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const InputForm = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post('/api/classify', { input:input });
      // console.log(response.data);
      // navigate('/', { state: response.data });
      navigate('/', { state: { input } });
      // You can pass the response data to the TagsForm component here
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="slider">
        <div className="line"></div>
        <div className="ellipse">
          <div className="inner-circle"></div>
        </div>
        <div className="ellipse"></div>
        <div className="ellipse"></div>
        <div className="ellipse"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <p id="description">Type your problems description here</p>
        <textarea
          id="inputTextArea"
          name="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;