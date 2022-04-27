import { Component } from "react";
import App from "../../App";

class Subject extends Component{
    render(){
      return (
        <header>
          <h1><a href='/' onClick={(event) => {
            event.preventDefault();
            this.props.onChange();
          }}>{this.props.title}</a></h1>
          {this.props.subtitle}
        </header>
      );
    }

    
  }

  export default Subject;