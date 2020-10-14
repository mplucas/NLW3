import React from 'react';

import './styles/global.css';

import Routes from './routes';

interface TitleProps {
  index:string;
}

function Title(props:TitleProps) {
  return <h1>Hello World {props.index}</h1>
}

function App() {
  return (
    <Routes />
  );
}

export default App;
