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
            <div className="row">

            <div className="col-md-6">
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

                <div className="col-md-6">
                <h3>List of favourites</h3>
                </div>

              </div>
              </div>
          )
        })
      }
       </div>
     );
   }

 }

 export default List;
