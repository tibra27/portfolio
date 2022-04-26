import React from 'react';
import Porfolio from './Portfolio';

class Main extends React.Component {
    constructor(props){
      super(props);
      let portfolio_json = props.value;
      this.state = {
        isPorfolioActive: false,
      };
    };
    handleClick(){
      console.log("Going to portfolio..........");
      this.setState({
        isPorfolioActive: true,
      });
    }
    render(){
      if(!this.state.isPorfolioActive){
        return <Porfolio value={this.props} onClick={()=>this.handleClick()}/>;
      }else{

      }
      
    }
  
}

export default Main;