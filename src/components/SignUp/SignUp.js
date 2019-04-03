import React from 'react';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '' 
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onSubmitSignIn = () => {
    fetch('https://desolate-hollows-77381.herokuapp.com/signup', {
      method: 'post', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if(user.id){
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } 
      })
  }

  render() {
    return(
      <article className="br3 ba white b--white mv4 w-100 w-50-m w-25-l mw6 center shadow">
        <main className="pa4 white">
          <div action="sign-up_submit" method="get" acceptCharset="utf-8">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
                <input 
                  onChange={this.onNameChange}
                  className="pa2 input-reset ba b--white bg-transparent hover-bg-white hover-black w-100" 
                  type="text" 
                  name="name"  
                  id="name" 
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                <input 
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba b--white bg-transparent hover-bg-white hover-black w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address" 
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba b--white bg-transparent hover-bg-white hover-black w-100" 
                  type="password" 
                  name="password"  
                  id="password" 
                />
              </div>
            </fieldset>
            <div className="mt3">
              <input 
                onClick={this.onSubmitSignIn} 
                className="b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="Sign Up"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignUp;