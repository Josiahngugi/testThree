 import React, { Component } from 'react';
class Info extends Component{

  constructor(props){
    super(props);
    this.state = {
      expanded: false,
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

   open(){
     this.setState({expanded: !this.state.expanded})
   }
   close(){
     this.setState({expanded: !this.state.expanded})
   }
  render(){
    const Info =this.props.Info;

     if(!this.state.expanded){
       return <p className="btn btn-info" onClick={this.open}>show info</p>
     }

    return(
      <div className="user-details">
      <ul>
        <li><h3>Gender: {Info.gender}</h3></li>
        <li><h3>Birth date: {Info.birth_year}</h3></li>
        <li><h3>Hair color: {Info.hair_color}</h3></li>
      </ul>
      <p className="btn btn-primary" onClick={this.close}> Hide info </p>
      </div>
    )
  }
}
export default Info;
