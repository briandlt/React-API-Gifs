import React, { useState } from 'react';
import Gif from '../../Components/Gif'
import Searcher from '../../Components/Searcher'
import useGetGifs from '../../Hooks/gifs/useGetGifs'

const Home = () => {
  const [keyword, setKeyword] = useState('panda')
  const {gifs} = useGetGifs(keyword)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setKeyword(e.target[0].value)
  }

  return (
    <>
      <h2>React-API-Gifs</h2>
      <Searcher
        handleSubmit={handleSubmit}
      />
      <Gif value={ gifs } />
    </>
  );
}

export default Home;