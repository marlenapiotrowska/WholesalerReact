import { useNavigate } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome in the best Wholesaler in the world!</h1>
        
            <button className="button" onClick={() => navigate("/login")}>Log In</button>
            <button className="button" onClick={() => navigate("/register")}>Sign In</button>
        </div>);
}

export default LoginPage;