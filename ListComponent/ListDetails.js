import React, { Component } from 'react'

export class ListDetails extends Component {
    render() {
      //  console.log(this.props.items.emp_id)
        return (
            <>
               
                <table className="table table-striped table-bordered table-hover" >
                    <thead className="thead-dark" >
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Employee Department</th>
                            <th>Employee Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                     {this.props.data.map((items,index)=>
                      
                           <tr key={index}>
                                <td>{items.emp_id}</td> 
                                <td>{items.emp_name}</td>
                                <td>{items.emp_Dep}</td>
                                <td>{items.emp_sal}</td>
                            </tr>
                       )}

                      
                          
                        
                    </tbody>
                </table>
            </>
        )
    }
}

export default ListDetails
