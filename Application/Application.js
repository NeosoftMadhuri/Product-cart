import React, { Component } from 'react'

//const regForName=RegExp(/^[A-Za-z]{3,10}+$/);
const regForName = RegExp('[a-zA-Z][a-zA-Z ]{3,10}$')
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForNumber = RegExp('^[6-9][0-9]{9}$')
const regForAddress=RegExp('[a-zA-Z][a-zA-Z ]{3,10}$');
export class Applivation extends Component {
   constructor(props){
      super(props);
      this.state={
         fname:null,
         lname:null,
         address:null,
         gender:null,
         mstatus:null,
         email:null,
         aemail:null,
         age:null,
         DOB:null,
         quali:null,
         pemplyoee:null,
         experiance:null,
         psalary:null,
         exsalary:null,
         mobile:null,
        
         errors:{
             fname:'',
             lname:'',
             address:'',
             email:'',
             age:'',
             aemail:'',
             mobile:''
         }
     }
   }

   handler=(event)=>{
      const {name,value}=event.target;
     
      let errors=this.state.errors;
      switch(name){
          case 'fname':
              errors.fname=regForName.test(value)?'':'Name should be characher & greater than 3 char long ';
              break;
          case 'lname':
             errors.lname=regForName.test(value)?'':'Name should be characher & greater than 3 char long';
              break;
          case 'email':
              errors.email=regForEmail.test(value)?'':'Email is not valid';
              break;
          case 'age':
              errors.age=value<0?'Age is always greater than 0':'';
              break;
          case 'address':
              errors.address=regForAddress.test(value)?'':'Address should be greater than 4 char long';

              break;
          case 'aemail':
              errors.aemail=regForEmail.test(value)?'':'Email is not valid';
              break;  
          case 'mobile':
               errors.mobile=regForNumber.test(value)?'':'Mobile number should be start from 6-9,must be 10 digit long';       
              break;
              default:
              break;
      }
      this.setState({errors,[name]:value},()=>{
          console.log(errors)
      })
  }

  formSubmit=(event)=>{
   event.preventDefault();
   if(this.validate(this.state.errors))
   {
       alert("Valid Form");
   }
   else {
       alert("Invalid Form");
   }
}
 validate=(errors)=>{
    let valid=true;
    Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
    return valid;
}
    render() {
       const {errors}=this.state;
        return (
           
            <div className="container main bg-light">
                <h2 className="h2">Job Application Form</h2>
                
                <form className="form1" onSubmit={this.formSubmit} >
                    <div className=" form-group">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="row">
                                 <div className="col-md-4">
                                   <label >First Name:</label> 
                                 </div>
                                 <div className="col-md-8">
                                   <input type="text" name="fname" className="form-control" onChange={this.handler}/>
                                     {errors.fname.length>0&&
                                       <span style={{color:'red'}}>{errors.fname}</span>}<br/>
                                 </div>  
                              </div>
                           </div>

                           <div className="col-md-6">
                             <div className="row">
                                 <div className="col-md-4">
                                   <label >Last Name:</label> 
                                 </div>
                                 <div className="col-md-8">
                                   <input type="text" name="lname" className="form-control" onChange={this.handler}/>
                                     {errors.lname.length>0&&
                                       <span style={{color:'red'}}>{errors.lname}</span>}<br/>
                                 </div>  
                              </div> 
                           </div>  
                        </div>
                        
                        <br/>

                        <div className="row">
                           <div className="col-md-6">
                              <div className="row">
                                 <div className="col-md-4">
                                   <label >Street Address</label>
                                 </div>
                                 <div className="col-md-8">
                                   <input type="text" className="form-control" name="address" placeholder="Street Address Line 1" onChange={this.handler}/>
                                   {errors.address.length>0&&
                                       <span style={{color:'red'}}>{errors.address}</span>}<br/>
                                 </div>  
                              </div>
                           </div>

                           <div className="col-md-6">
                             <div className="row">
                                 <div className="col-md-4">
                                 <label >Street Address</label>
                                 </div>
                                 <div className="col-md-8">
                                 <input type="text" className="form-control" name="address" placeholder="Street Address Line 2" />
                                    
                                 </div>  
                              </div> 
                           </div>  
                        </div>

                       <br/>

                        <div className="row">
                           <div className="col-md-6">
                              <div className="row">
                                 <div className="col-md-4">
                                    <label >City</label>
                                 </div>
                                 <div className="col-md-8">
                                    <div className="form-group">
                    
                                     <select className="form-control" >
                                       <option>Mumbai</option>
                                      <option>Pune</option>
                                      <option>Sangli</option>
                                      <option>Satara</option>
                                     </select>
                                    </div>
                                     {/* {errors.fname.length>0&&
                                       <span style={{color:'red'}}>{errors.fname}</span>}<br/> */}
                                 </div>  
                              </div>
                           </div>

                           <div className="col-md-6">
                             <div className="row">
                                 <div className="col-md-4">
                                    <label >State</label>
                                 </div>
                                 <div className="col-md-8">
                                    <div className="form-group">
                                            <select className="form-control">
                                                 <option>Maharashtra</option>
                                                 <option>Goa</option>
                                                 <option>Panjab</option>
                                                  <option>Hariyana</option>
                                            </select>
                                    </div>
                                     {/* {errors.fname.length>0&&
                                       <span style={{color:'red'}}>{errors.fname}</span>}<br/> */}
                                 </div>  
                              </div> 
                           </div>  
                        </div>

                        <br/>

                        <div className="row">
                           <div className="col-sm-4 col-md-4 col-lg-4">
                              <div className="row">
                                 <div className="col-md-5">
                                 <label >Gender *</label>
                                 </div>
                                 <div className="col-md-7">
                                    <div className="form-group">
                                          <div className="form-check" >
                                            <input className="form-check-input" type="radio" name="gender"  />
                                            <label className="form-check-label" htmlFor="Radios1"> Male </label>
                                            <input className="form-check-input ml-4" type="radio" name="gender"/>
                                            <label className="form-check-label ml-5" htmlFor="Radios2"> Female </label>
                                          </div>
                                   </div>  
                                </div> 
                              </div>  
                           </div>

                           <div className="col-sm-5 col-md-5 col-lg-5">
                              <div className="row">
                                 <div className="col-md-5">
                                     <label >Marrital status</label>
                                 </div>
                                 <div className="col-md-7">
                                    <input type="text" name="mstatus"  className="form-control" required/>
                                        {/* {errors.email.length>0 && 
                                           <span style={{color:'red'}}>{errors.email}</span>}<br/> */}
                                </div> 
                              </div>  
                           </div> 

                           <div className="col-sm-3 col-md-3 col-lg-3">
                              <div className="row">
                                 <div className="col-md-3">
                                     <label >Age</label>
                                 </div>
                                 <div className="col-md-9">
                                    <input type="text" name="age"  className="form-control" onChange={this.handler}/>
                                       {errors.age.length>0&&
                                 <span style={{color:'red'}}>{errors.age}</span>}<br/> 
                                </div> 
                              </div>  
                           </div> 
                        </div> 

                      

                        <div className="row">
                           <div className="col-sm-6 col-md-6 col-lg-6">
                              <div className="row">
                                 <div className="col-md-4">
                                     <label > Email :</label>
                                 </div>
                                 <div className="col-md-8">
                                    <input type="text" name="email"  className="form-control" onChange={this.handler} required/>
                                        {errors.email.length>0 && 
                                           <span style={{color:'red'}}>{errors.email}</span>}<br/>
                                </div> 
                              </div>  
                           </div>

                           <div className="col-sm-6 col-md-6 col-lg-6">
                              <div className="row">
                                 <div className="col-md-4">
                                     <label >Alternet Email :</label>
                                 </div>
                                 <div className="col-md-8">
                                    <input type="text" name="aemail"  className="form-control" onChange={this.handler} required/>
                                        {errors.aemail.length>0 && 
                                           <span style={{color:'red'}}>{errors.aemail}</span>}<br/>
                                </div> 
                              </div>  
                           </div>     
                        </div>    

                        <br/>

                        <div className="row">
                           <div className="col-sm-6 col-md-6 col-lg-6">
                              <div className="row">
                                 <div className="col-md-4">
                                    <label>Mobile No</label>
                                 </div>
                                 <div className="col-md-8">
                                    <input type="text" name="mobile"  className="form-control" onChange={this.handler}/>
                                      {errors.mobile.length>0&& <span style={{color:'red',fontWeight:'bold'}}>{errors.mobile}</span>}<br/>  
                                </div> 
                              </div>  
                           </div>

                           <div className="col-sm-6 col-md-6 col-lg-6">
                              <div className="row">
                                 <div className="col-md-4">
                                   <label>Date of Birth:</label>
                                 </div>
                                 <div className="col-md-8">
                                    <input type="Date" name="DOB"  className="form-control" required/>
                                        {/* {errors.email.length>0 && 
                                           <span style={{color:'red'}}>{errors.email}</span>}<br/> */}
                                </div> 
                              </div>  
                           </div>     
                        </div>

                       <br/>

                        <div className="row">
                           <div className="col-sm-2 col-md-2 col-lg-2">
                              <label  >Qualification</label>
                           </div>
                           <div className="col-sm-10 col-md-10 col-lg-10">
                           <input type="text" name="quali"  className="form-control" required/>
                           </div>
                        </div>

                         <br/>

                         <div className="row">
                           <div className="col-md-6">
                              <div className="row">
                                 <div className="col-md-4">
                                   <label >Present Employee:</label> 
                                 </div>
                                 <div className="col-md-8">
                                   <input type="text" name="pemplyoee" className="form-control" required />
                                 </div>  
                              </div>
                           </div>

                           <div className="col-md-6">
                             <div className="row">
                                 <div className="col-md-4">
                                   <label >Total Experiance</label> 
                                 </div>
                                 <div className="col-md-8">
                                   <input type="text" name="experiance" className="form-control" required/>
                                 </div>  
                              </div> 
                           </div>  
                        </div>       

                        <br/>

                        <div className="row">
                           <div className="col-md-6">
                              <div className="row">
                                 <div className="col-md-4">
                                   <label>Present Salary:</label> 
                                 </div>
                                 <div className="col-md-8">
                                   <input type="text" name="psalary" className="form-control" required/>
                                 </div>  
                              </div>
                           </div>

                           <div className="col-md-6">
                             <div className="row">
                                 <div className="col-md-4">
                                   <label >Expected Salary</label> 
                                 </div>
                                 <div className="col-md-8">
                                   <input type="text" name="exsalary" className="form-control" required/>
                                 </div>  
                              </div> 
                           </div>  
                        </div>     

                         <br/>
                        
                         <div className="row">
                           <div className="col-md-4">
                              <div className="row">
                                 <div className="col-md-12">
                                   <label>Willing to relocate anywhere in India</label> 
                                 </div>
                              </div>
                           </div>

                           <div className="col-md-8">
                             <div className="row">
                                 <div className="col-md-6">
                                   <label>YES</label> 
                                   <input type="checkbox" name="relocate"/>
                                 </div>
                                 <div className="col-md-6">
                                    <label>NO</label> 
                                   <input type="checkbox" name="relocate1"/>
                                 </div>  
                              </div> 
                           </div>  
                        </div>       
                            
                          <br/>
                          <div className="row">
                               <div className="col-sm-6 col-md-6 col-lg-6">
                                    <input type="submit" className="btn btn-success" value="Submit"/>
                              </div>
                              <div className="col-sm-6 col-md-6 col-lg-6">
                                  <input type="reset" className="btn btn-warning " value="Reset"/>
                              </div>
                           
                           </div>
                                   
                    </div>
                
               

                
           
                </form>
            </div>
        )
    }
}

export default Applivation
