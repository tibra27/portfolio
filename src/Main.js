import React from 'react';
import Porfolio from './Portfolio';
import Detail from './Detail';

class Main extends React.Component {
    constructor(props){
      super(props);
      let portfolio_json = props.value;
      this.state = {
        isPorfolioActive: false,
      };
    };
    goToPortfolio(){
      console.log("Going to portfolio..........");
      this.setState({
        isPorfolioActive: true,
      });
    }
    goToMain(){
      console.log("Going to home..........");
      this.setState({
        isPorfolioActive: false,
      });
    }
    render(){
      if(!this.state.isPorfolioActive){
        return <Porfolio value={this.props} onClick={()=>this.goToPortfolio()}/>;
      }else{
        return <Detail value={this.props} onClick={()=>this.goToMain()}/>;
      }
      
    }
  
}

export default Main;