 import React, { Component } from 'react';
 import Info from './Info';
 class List extends Component{
   constructor(props){
     super(props);

     this.state={
       favourite: [],
     }
     }

   add(){

   }

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
                  <th>Fouvourite</th>
                  <th>Star Name</th>
                  <th></th>
                  <th>Characters</th>
                </tr>
              </thead>
              <tbody>
                {traits.map(obj =>{
                  return(
                    <tr>
                      <td>

                      </td>
                      <td>
                      {obj.name} <span>&nbsp;</span>
                      </td>
                      <td>
                      <p className="btn btn-warning btn-xs">Add to list</p>
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
