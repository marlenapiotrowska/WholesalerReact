import styles from './Footer.module.css';

function Footer() {
    return (
    <footer className={styles.footer}>
      <hr />
      <p>© {new Date().getFullYear()} Wholesaler</p>
    </footer>
  )
}

export default Footer;