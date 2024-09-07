import './style/emailVerified.css';

function PasswordUpdated(){
    return(
        <div style={{paddingTop:"50px"}}>
            <div className="container">
                <h1>Password Updated!</h1>
                <p>Your password has been successfully updated. You can now proceed to your account.</p>
            </div>
        </div>
    );
}

export default PasswordUpdated;