 import React, { Component } from 'react';
 import Info from './Info';
 class List extends Component{
   render(){
     const traits = this.props.traits;

     return(
       <div className="">
        {
        traits.map((property) =>{
          console.log(property);
          return(
            <div key={property.url}>
              <h1 className ="char-name">{property.name}</h1>
              <Info Info ={property} />
            </div>
          )
        })
      }
       </div>
     );
   }

 }

 export default List;
