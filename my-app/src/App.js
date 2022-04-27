import './App.css';
import { Component } from 'react';
import Subject from './components/subject/Subject';
import TOC from './components/toc/TOC';
import Content from './components/content/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject:{title:'Web', subtitle:'world wide web'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interacive'},
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          subtitle={this.state.subject.subtitle}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title='HTML' text='HTML is HyperText Markup Language'></Content>
      </div>
    );
  }
}

export default App;
