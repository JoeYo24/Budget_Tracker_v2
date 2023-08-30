import React from 'react';
import './home.scss';

const Home = () => {
  return (
    <div className='bg-blue-500 text-white p-4 rounded-lg shadow-md'>
      <h2 className='text-lg font-semibold'>
        Hello World!
      </h2>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <React.StrictMode>
            <Home />
        </React.StrictMode>,
        document.body.appendChild(document.createElement('div')),
    );
});