import React from 'react';
import './style.css'


const Searcher = ({ handleSubmit }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          placeholder="what are you looking for?"
          type="text"
        />
      </form>
    </div>
  );
}

export default Searcher;
