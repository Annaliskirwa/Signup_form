import React,{Component, useState} from "react";
import {render} from 'react-dom';
import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormValidator from "./FormValidator";

class App extends Component {
  constructor(){
    super();
    this.validator = new FormValidator([{
      field: 'first_name',
      method: 'isEmpty',
      validWhen: false,
      message: 'First Name cannot be empty'
    },{
      field: 'last_name',
      method: 'isEmpty',
      validWhen: false,
      message: 'Last Name cannot be empty'
    },{
      field: 'email',
      method: 'isEmpty',
      validWhen: false,
      message: 'Email cannot be empty'
    },
    {
      field: 'email',
      method: 'isEmail',
      validWhen: true,
      message: 'Looks like this is not an email'
    },
    {
      field: 'password',
      method: 'isEmpty',
      validWhen: false,
      message: 'Password cannot be empty'
    }
   
  ]);
  this.state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    validation: this.validator.valid(),
  }
  this.submitted = false;
  }
  // handling the input change, picking values from the form
  handleInputChange = event => {
    event.preventDefault();
    this.setState({
    [event.target.name]: event.target.value,
    });
    }
  // handling the form submission event
  handleFormSubmit = event =>{
    event.preventDefault();
    // validate the values in the current state
    const validation = this.validator.validate(this.state);
    // the setter
    this.setState({
      validation
    });
    // Successful form submission when all fields are true
    this.submitted = true;
    if (validation.isValid){
      console.log("Sign up form validation was succcesful")
      this.clearState()
    }
  }
  clearState = () =>{
    // this.setState({ ...this.state});
    this.setState = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',}
    window.location.reload();
  }
 
    render (){
      // checks the validation condition on the form
      let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
      return(
        <div>
          <div className="container">
            <div className="row">
              <div className = "col-md -6">
                <div className="content">
                  <div><h1>Learn to code by watching others</h1></div><br></br>
                  <div><p>See how experienced developers solve problems in real-time. Watching scripted
                    tutorials is great, but understanding how developers think is invaluable.</p>
                  </div>
                  <div><Link to  = "/login">Click here to log in via auth0</Link></div>
                </div>
              </div>
              <div className = "col-md -6">
              <div className="form" data-testid="form">
                <div className="try"><button className="btn btn-primary">Try it free 7 days then $20/mo. thereafter</button></div>
              <form className="signUpForm">
                <div className= {validation.first_name.isInvalid && 'has-error'}>
                  <input type="string" className="form-control" name="first_name" placeholder="First Name" onChange={this.handleInputChange} /> <span className="help-block">{validation.first_name.message}</span> 
                </div>
                <div className={validation.last_name.isInvalid && 'has-error'}>
                  <input type="string" className="form-control" name="last_name" placeholder="Last Name" onChange={this.handleInputChange} /> <span className="help-block">{validation.last_name.message}</span> 
                </div>
                <div className={validation.email.isInvalid && 'has-error'}>
                  <input type="string" className="form-control" name="email" placeholder="Email Address" onChange={this.handleInputChange} /> <span className="help-block">{validation.email.message}</span> 
                </div>
                <div className={validation.password.isInvalid && 'has-error'}>
                  <input type="string" className="form-control" name="password" placeholder="Password" onChange={this.handleInputChange} /> <span className="help-block">{validation.password.message}</span> 
                </div>
                <button onClick={this.handleFormSubmit} className="btn btn-success" > CLAIM YOUR FREE TRIAL </button>
                <div className="terms"><p><span className="by">By clicking the button, you are agreeing to our </span><span className="term"><a href = "#">Terms and Services</a></span></p></div>
              </form>
              </div>
              </div>
            </div>
          </div>
        </div>
      )
    };
  };
 


export default App;
