import './App.css';
import { Component } from 'react';
import Subject from './components/subject/Subject';
import TOC from './components/toc/TOC';
import Content from './components/content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title='HiHi' subtitle='Oh, Hi!'></Subject>
        <TOC></TOC>
        <Content title='Content' text='This is Content text'></Content>
      </div>
    );
  }
}

export default App;
