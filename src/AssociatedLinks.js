import React from 'react';
//import './AssociatedLinks.css';

class AssociatedLinks extends React.Component {
    portfolio_json = {};
    wrap = [];
    constructor(props){
      super(props);
       this.portfolio_json = props.value;
    };
    
    render(){
        this.wrap = [];
        return(this.wrap);
    }
  
}

export default AssociatedLinks;