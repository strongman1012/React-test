// components/Error.js
import React from 'react';
import Typography from '../components/Typography';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';

const Error = () => {
  const history = useHistory();
  const handleButtonClick = () => {
    history.push('/');
  };
  return (
    <div className='flex justify-center items-center flex-col custom-container'>
      <div className='w-1/2'>
        <Typography fontStyle="font-secondary text-sm pb-6">
          CARIBBEAN WEATHER
        </Typography>
        <Typography fontStyle="font-primary text-5xl font-bold pb-4">
          Not all who wander are lost
        </Typography>
        <Typography fontStyle="font-primary text-2xl pb-12">
          Unfortunately, this page does not exist. 
        </Typography>
        <Button buttonStyle="font-primary text-base py-4 px-24 rounded-lg text-white bg-primary"
          onClick={handleButtonClick}>
          Take me Home
        </Button>
      </div>
    </div>
  );
};

export default Error;
