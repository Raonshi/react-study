import { Component } from "react";

class Subject extends Component{
    render(){
      return (
        <header>
          <h1>{this.props.title}</h1>
          {this.props.subtitle}
        </header>
      );
    }
  }

  export default Subject;