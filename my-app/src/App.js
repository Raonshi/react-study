import './App.css';
import { Component } from 'react';
import Subject from './components/subject/Subject';
import TOC from './components/toc/TOC';
import Content from './components/content/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      welcome:{title:'Welcome', desc:'Hello React'},
      subject:{title:'Web', subtitle:'world wide web'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interacive'},
      ],
    };
  }

  //props나 state가 바뀌면 render함수가 다시 호출됨
  render() {
    var _title = null;
    var _desc = null;
    if(this.state.mode == 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if(this.state.mode == 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          subtitle={this.state.subject.subtitle}
          onChange={()=>{
            this.setState({mode: 'welcome'});
          }}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} text={_desc}></Content>
      </div>
    );
  }
}

export default App;
