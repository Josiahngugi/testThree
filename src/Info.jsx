 import React, { Component } from 'react';
class Info extends Component{

  constructor(props){
    super(props);
    this.state = {
      expanded: false,
    }
  }

   open(){
     this.setState({expanded: !this.state.expanded})
   }
   close(){
     this.setState({expanded: !this.state.expanded})
   }
  render(){
    this.Info =this.props.Info;
     if(!this.state.expanded){
       return <p className="btn btn-info" onClick={this.open}>show info</p>
     }
    return(
      <div></div>
    )
  }
}
export default Info;
