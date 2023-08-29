import React from 'react'
import './Signuppage.css'

export const Loginpage = () => {
  return (
    <div>
        <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="First name" required=""/>
                    <input type="text" name="txt" placeholder="Last name " required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
                    <input type="number" name="num" placeholder="Contact" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
                    
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>
        {/* <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div> */}

    </div>
  )
}
export default Loginpage
