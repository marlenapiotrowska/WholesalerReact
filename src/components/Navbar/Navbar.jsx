import styles from './Navbar.module.css';
import { useNavigate } from "react-router-dom";

function Navbar() {

   const navigate = useNavigate();

    return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Majowy Wholesaler</div>
         <div className={styles.links}>
            <a onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
         </div>
    </nav>
  );
}

export default Navbar;