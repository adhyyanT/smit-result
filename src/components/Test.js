import React, { useRef, useEffect, useState } from 'react';
import Data21 from '../21.json';
const Test = () => {
  let response = Data21['201700403'];
  let subNameList = useRef([]);

  const [display, setDisplay] = useState([]);

  const handleClick = (w) => {
    w.preventDefault();
  };

  useEffect(() => {
    for (let i in response) {
      subNameList.current.push(response[i]);
      //   console.lg(response[i]);
    }
    setDisplay(subNameList.current);
    // for (var i = 0; i < response.length; i++) {
    //   console.log(subNameList.current[i]);
    // }
    // console.log(subNameList);
    // console.log(response);
  }, []);

  return (
    <div>
      <h1>All the subjects of 201700403</h1>
      <form onSubmit={handleClick}>
        {display.map((subject) => (
          <li>{subject.sub}</li>
        ))}
        <button type='submit'>YEP</button>
      </form>
    </div>
  );
};

export default Test;
