import React, { Component } from 'react';
import json from '../../Product.json';
export class Product extends Component {
    constructor(props)
    {
        super(props);
      
        this.state={arr:[],proData:[],count:'',mycart:0,
        lengthquan:null};
        
    }
    componentDidMount(){
     
       this.setState({proData:json.product})
        
    }
    
    
//localStorage
    addCard=(pro)=>
    {       let check=0;
        if(localStorage.getItem('mycart')!=undefined){
            let arr = JSON.parse(localStorage.getItem('mycart'));
            arr.map(obj =>{
                if(obj.Pro_id==pro.Pro_id){
                    obj.quantity ++;                
                    localStorage.setItem('mycart',JSON.stringify(arr));
                    alert('quantity incresed');
                    check=1
                }
            })
            if(!check){
                    arr.push(pro);
                    localStorage.setItem('mycart',JSON.stringify(arr));
                    alert('product added in cart');
            }
        }
          
           
        else{
            let arr = [];
            arr.push(pro);
            localStorage.setItem('mycart',JSON.stringify(arr));
            alert("product added in cart");
            
        }
         
        if(localStorage.getItem('mycart')!=undefined)
             {
                 let arr=JSON.parse(localStorage.getItem('mycart'));
               this.setState({count:arr.length});

            }
       
      
    }

    render() {
      
        return (
            <>

               <nav className="nav bg-dark" style={{padding:"10px"}}>
                  <a className="nav-link active" href="#">Home</a>
                  <a className="nav-link" href="#">About</a>
                  <a className="nav-link" id="cart" href="#none" onClick={(event)=>this.cartShow(event)}>Cart<span>{this.state.count}</span></a>
                  <a className="nav-link disabled" href="#">Disabled</a>
            </nav>
            <div className="container bg-dark"style={{border:"3px solid red"}}>
                    <h2 style={{color:"white",fontFamily:"serif"}}>Bike.india</h2>
                <div className="row" >
                {this.state.proData.map((pro,index)=>
                    <div className="col-md-4" key={index}>
                       <div className="card mt-3 bg-light">
                           <div className="card-body">
                           {/* src={`./Image/${pro.image}`} */}
                             <img className="card-img-top" height="200px" width="200px" src={`./Image/${pro.image}`}/>
                             <p className="card-title">{pro.pname}</p>
                              <p className="card-text">
                                  Price:{pro.price}<br/>
                                  quantity:{pro.quantity}
                              </p>
                              <button className="btn btn-primary" onClick={()=>{this.addCard(pro)}}>Add to Cart</button>
                           </div>
                       </div>
                    </div>
                    )
                    }
                </div>  
            </div>
           <div className="container m-4">
               <h2 style={{textAlign:"center"}}>Cart Detils</h2>
           </div>
            <div className="container" id="details">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {localStorage.getItem('mycart')!=undefined?
                        JSON.parse(localStorage.getItem('mycart')).map((pro,index)=>
                                <tr key="index">
                                    <th>{pro.Pro_id}</th>
                                    <th>{pro.pname}</th>
                                    <th>{pro.price}</th>
                                    <th>{pro.quantity}</th>
                                    <th>{Number.parseInt(pro.price,10)*Number.parseInt(pro.quantity,)}</th>
                                    {/* <th>{Number.parseInt(pro.price,10)*Number.parseInt(pro.quantity,10)}</th> */}
                                </tr>
                            ):<tr><td colSpan="5">Please Add Item to Cart</td></tr>
                        }
                    </tbody>
                </table>
            </div>
    
            </>
        )
      
    }
}

export default Product

