import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>Technologies Used:</h1>
          <h2>
            <ul>React</ul>
            <ul>Redux</ul>
            <ul>Redux-Saga</ul>
            <ul>Express</ul>
          </h2>
      </div>
    </div>
  );
}

export default AboutPage;
