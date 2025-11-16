import styles from './Navbar.module.css';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";

function Navbar() {

   const navigate = useNavigate();
   const { user, logout } = useContext(UserContext);

    return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Majowy Wholesaler</div>
         <div className={styles.links}>
            <a onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</a>
         { user ? (
            <>
            <a className={styles.a} onClick={logout}>Logout</a>
            <span className={styles.span}>Hello {user.name}!</span>
            </>
         ) : (
            <a className={styles.a} onClick={() => navigate("/login")}>Log in</a>
         )}
      </div>
    </nav>
  );
}

export default Navbar;