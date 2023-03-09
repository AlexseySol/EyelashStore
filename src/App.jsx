import React from 'react';
import './App.scss';
import { Description } from './conponents/Description/Description';
import { Footer } from './conponents/Footer/Footer';
import { Header } from './conponents/Header/Header';
import { Help } from './conponents/Help/Help';
import { Info } from './conponents/Info/Info';
import { Programs } from './conponents/Programs/Programs';
import { Rates } from './conponents/Rates/Rates';

function App() {
  return (
    <div className="App">
<Header />
<Description />
<Info />
<Programs />
<Rates />
<Help />
<Footer />
    </div>
  );
}

export default App;
