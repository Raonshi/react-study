import { Component } from "react";

class TOC extends Component{
    render(){
      var list = this.props.data.map((item) => {
        return (
          <li key={item.id}>
              <a 
                href={"/content/"+item.id}
                data-id={item.id}
                onClick={(event)=>{
                  event.preventDefault();
                  this.props.onChange(event.target.dataset.id);
                }}
              >
                {item.title}
              </a>
          </li>
        );
      });
      return (
        <nav>
            <ul>
                {list}
            </ul>
        </nav>
      );
    }
  }

  export default TOC;