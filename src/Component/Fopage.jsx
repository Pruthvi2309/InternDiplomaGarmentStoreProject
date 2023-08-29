import React from 'react'
import './Fopage.css'

export const Fopage = () => {
  return (
    <div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
 <div className="form-gap"></div>
<div className="container">
	<div className="row">
		<div className="col-md-4 col-md-offset-4 main">
            <div className="panel panel-default">
              <div className="panel-body ">
                <div className="text-center">
                  <h3><i class="fa-solid fa-unlock"></i></h3>
                  <h2 className="text-center">Reset Password</h2>
                  <p>You can reset your password here.</p>
                  <div className="panel-body">
    
                    <form id="register-form" role="form" autocomplete="off" className="form" method="post">
    
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon"><i class="fa-solid fa-key"></i></span>
                          <input id="email" name="New password" placeholder="New password" className="form-control"  type="password"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon"><i class="fa-solid fa-key"></i></span>
                          <input id="email" name="Confirn password" placeholder="Confirn password" className="form-control"  type="password"/>
                        </div>
                      </div>

                      <div className="form-group">
                        <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit"/>
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
  )
}

export default Fopage;