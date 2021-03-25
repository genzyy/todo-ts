import React, { useState, useEffect } from 'react';

interface JokeCardProps {}

const exampleReq: string = `https://v2.jokeapi.dev/joke/Any`;

const JokeCard: React.FC<JokeCardProps> = ({}) => {
  const [joke, setJoke]: any = useState('');
  const getJokes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setJoke(data);
  };

  useEffect(() => {
    getJokes();
  }, [joke]);

  return (
    <div>
      <p>{joke.setup}</p>
      <p>{joke.delivery}</p>
      <button
        onClick={() => {
          getJokes();
        }}
      >
        Fetch Jokes for me please!
      </button>
    </div>
  );
};
export default JokeCard;
