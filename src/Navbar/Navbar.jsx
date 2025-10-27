import styles from './Navbar.module.css';

function Navbar() {

    return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Majowy Wholesaler</div>
         <div className={styles.links}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
         </div>
    </nav>
  );
}

export default Navbar;