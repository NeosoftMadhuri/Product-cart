import React, { Component } from 'react'
import ListDetails from './ListDetails';
export class List extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            empList:[
                {emp_id:101,emp_name:"Mahesh D",emp_Dep:"Development",emp_sal:4234},
                {emp_id:102,emp_name:"Anuj S",emp_Dep:"Testing",emp_sal:4234},
                {emp_id:103,emp_name:"Priya P",emp_Dep:"Javascript",emp_sal:4234},
                {emp_id:104,emp_name:"Manik S",emp_Dep:"PHP",emp_sal:4234},
                {emp_id:105,emp_name:"Rupali A",emp_Dep:"Development",emp_sal:4234},
                {emp_id:106,emp_name:"Neha L",emp_Dep:"JAVA",emp_sal:4234},
                {emp_id:107,emp_name:"Swati A",emp_Dep:"Development",emp_sal:4234},
                {emp_id:108,emp_name:"Prasad A",emp_Dep:"Testing",emp_sal:4234},
                {emp_id:109,emp_name:"Sachin k",emp_Dep:"PHP",emp_sal:4234},
                {emp_id:110,emp_name:"Vaishali G",emp_Dep:"Javascript",emp_sal:4234},
                {emp_id:111,emp_name:"Viraj G",emp_Dep:"Development",emp_sal:4234},
                {emp_id:112,emp_name:"Apurva K",emp_Dep:"JAVA",emp_sal:4234},
                {emp_id:113,emp_name:"Madhuri A",emp_Dep:"Testing",emp_sal:4234},
                {emp_id:114,emp_name:"Anuj S",emp_Dep:"PHP",emp_sal:4234},
                {emp_id:115,emp_name:"Rupali A",emp_Dep:"Development",emp_sal:4234},
                {emp_id:116,emp_name:"Neha L",emp_Dep:".NET",emp_sal:4234},
                {emp_id:117,emp_name:"Prasad A",emp_Dep:"Javascript",emp_sal:4234},
                {emp_id:118,emp_name:"Mahesh R",emp_Dep:"PHP",emp_sal:4234},
                {emp_id:119,emp_name:"Ramesh T",emp_Dep:"Development",emp_sal:4234},
                {emp_id:120,emp_name:"Mayur S",emp_Dep:"Testing",emp_sal:4234},
            ]
        }
    }
    render() {
        return (
            <>
            <div className="container main bg-light">
                <h2 className="heading">Employee Details</h2>
               
                     <ListDetails data={this.state.empList} />
                    
            </div>
            </>
        )
    }
}

export default List
