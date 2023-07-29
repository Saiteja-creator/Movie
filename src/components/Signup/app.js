import {Component} from 'react'
import {Link} from 'react-router-dom'
import './app.css'

class Signup extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    phoneNumber: '',
    checkedRes: false,
    errorMessage: false,
    result: true,
  }

  handleChange = e => {
    this.setState({name: e.target.value})
  }

  handleChangeEmail = e => {
    this.setState({email: e.target.value})
  }

  handleChangePassword = e => {
    this.setState({password: e.target.value})
  }

  handleChangePhone = e => {
    this.setState({phoneNumber: e.target.value})
  }

  getFirstName = () => {
    const {name} = this.state

    return (
      <div className="input-label-container">
        <label htmlFor="namelb" className="label-text">
          Name
        </label>
        <input
          id="namelb"
          type="text"
          value={name}
          placeholder="Enter Your Name"
          className="input-value"
          onChange={this.handleChange}
        />
      </div>
    )
  }

  getPassword = () => {
    const {password} = this.state

    return (
      <div className="input-label-container">
        <label htmlFor="passwordlb" className="label-text">
          Password
        </label>
        <input
          type="password"
          id="passwordlb"
          value={password}
          placeholder="Enter Your Password"
          className="input-value"
          onChange={this.handleChangePassword}
        />
      </div>
    )
  }

  getEmail = () => {
    const {email} = this.state

    return (
      <div className="input-label-container">
        <label htmlFor="emailb" className="label-text">
          Email
        </label>
        <input
          id="emailb"
          type="text"
          value={email}
          placeholder="Enter Your Email"
          className="input-value"
          onChange={this.handleChangeEmail}
        />
      </div>
    )
  }

  getPhoneNumber = () => {
    const {phoneNumber} = this.state
    return (
      <div className="input-label-container">
        <label htmlFor="phone" className="label-text">
          PhoneNumber
        </label>
        <input
          id="phone"
          type="text"
          value={phoneNumber}
          placeholder="Enter Your Phone-Number"
          className="input-value"
          onChange={this.handleChangePhone}
          required="required"
        />
      </div>
    )
  }

  changeChecked = () => {
    const {checkedRes} = this.state
    this.setState({checkedRes: !checkedRes})
  }

  allowAll = () => {
    const {checkedRes} = this.state
    console.log(checkedRes)
    return (
      <div className="checkBox-container">
        <input type="checkbox" />
        <p>Accept all terms and conditions</p>
      </div>
    )
  }

  SumbitButton = e => {
    e.preventDefault()
    const {name, password, email, phoneNumber} = this.state

    if (name === '' || password === '' || email === '' || phoneNumber === '') {
      this.setState({errorMessage: true})
    } else {
      localStorage.setItem('name', name)
      localStorage.setItem('password', password)
      this.setState({result: false})
    }
  }

  SuccessfullySign = () => {
    console.log('Yes')
    return (
      <div className="login-success">
        <p>Successfully Sign Up</p>

        <Link to="/login" className="linked">
          Login Here
        </Link>
      </div>
    )
  }

  render() {
    const {errorMessage, result} = this.state
    return (
      <div>
        <h1 className="heading">Sign Up</h1>
        {result ? (
          <div>
            <form onSubmit={this.SumbitButton}>
              {this.getFirstName()}
              {this.getPassword()}
              {this.getEmail()}
              {this.getPhoneNumber()}
              {this.allowAll()}
              <div className="button-container">
                <button type="submit" className="button-class">
                  Sign Up
                </button>
              </div>
            </form>
            <h3 className="error-message">
              {errorMessage ? 'Please Enter Your All Details' : ''}
            </h3>
            <div className="already-login">
              <p>Already have an Account? </p>
              <Link to="/login">Login</Link>
            </div>
          </div>
        ) : (
          this.SuccessfullySign()
        )}
      </div>
    )
  }
}

export default Signup
