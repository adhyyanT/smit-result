import React, { useState, useEffect, useRef } from 'react';
import data21 from '../21.json';
import ResultCards from './ResultCards';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './SearchnButton.css';
import sample from '../videos/video-1.mp4';
import Card from '@material-ui/core/Card';
import { fade } from '@material-ui/core/styles/colorManipulator';

const SearchnButton = () => {
  const [regno, setRegno] = useState('201700403');
  const [query, setQuery] = useState('201700403');
  const [result, setResult] = useState([]);

  const updateSearch = (e) => {
    setRegno(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(regno);
  };

  let refResult = useRef([]);

  useEffect(() => {
    const response = data21[`${query}`];

    refResult.current = [];
    for (let i in response) {
      refResult.current.push(response[i]);
    }
    setResult(refResult.current);
  }, [query]);

  return (
    <div>
      <div></div>
      <form onSubmit={handleSubmit} className='WhlForm'>
        <Card
          style={{
            backgroundColor: fade('#802008', 0.4),
            padding: '1% 1% 1% 1%',
          }}
        >
          <TextField
            className='SearchBar'
            id='outlined-basic'
            label='Reg. No.'
            type='number'
            value={regno}
            variant='outlined'
            onChange={updateSearch}
            color='secondary'
            style={{ color: 'white' }}
          />
          {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
          <Button className='SearchButton' variant='contained' type='submit'>
            Search
          </Button>
        </Card>
      </form>
      <div>
        <ResultCards allSubjectCodes={result} />
      </div>
    </div>
  );
};

export default SearchnButton;
