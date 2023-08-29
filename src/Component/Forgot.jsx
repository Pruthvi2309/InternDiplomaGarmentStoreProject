import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
const Forgot = () => {
  return (
    <Wrapper>
    <div>
    <div className='bobby'>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
 <div className="form-gap"></div>
<div className="container">
	<div className="row">
		<div className="col-md-4 col-md-offset-4 main">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="text-center">
                  <h3><i className="fa fa-lock fa-4x"></i></h3>
                  <h2 className="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div className="panel-body">
    
                    <form id="register-form" role="form" autoComplete="off" className="form" method="post">
    
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input id="email" name="email" placeholder="email address" className="form-control"  type="email"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <NavLink to="/reset">
                        <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit"/>
                        </NavLink>
                      </div>
                      
                      <input type="hidden" className="hide" name="token" id="token" value=""/> 
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
	</div>
    </div>
    </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.bobby{
    // background-color: black;
}
.form-gap {
    // padding-top: 70px;
}
.form{
    height: 100%;
}
.main{
    margin-top: 20rem;
}`;
   

export default Forgot
