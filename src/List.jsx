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
            <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>Star Name</th>
                  <th>Characters</th>
                </tr>
              </thead>
              <tbody>
                {traits.map(obj =>{
                  return(
                    <tr>
                      <td>
                      {obj.name}
                      </td>
                      <td>
                       <Info Info ={property} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              </table>
              </div>

            // <div key={property.url}>
            //   <h5 className ="char-name">{property.name}  <span>&nbsp;&nbsp;</span> <Info Info ={property} /></h5>
            // </div>
          )
        })
      }
       </div>
     );
   }

 }

 export default List;
