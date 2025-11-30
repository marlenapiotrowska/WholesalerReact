import styles from './Navbar.module.css';
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext.jsx";

function Navbar() {

   const navigate = useNavigate();
   const { user, logout } = useUser();
   const handleLogout = () => {
    logout();
    navigate("/login");
  };

    return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Majowy Wholesaler</div>
         <div className={styles.links}>
            <a onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</a>
         { user.isLoggedIn ? (
            <>
            <a className={styles.a} onClick={handleLogout}>Logout</a>
            <span className={styles.span}>Hello {user.name}!</span>
            </>
         ) : (
            <a className={styles.a} onClick={() => navigate("/login")}>Log in</a>
         )}
         { !user.isLoggedIn && (
            <a className={styles.a} onClick={() => navigate("/register")}>Sign in</a>
         )}
      </div>
    </nav>
  );
}

export default Navbar;