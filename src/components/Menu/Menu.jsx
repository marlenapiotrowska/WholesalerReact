import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import styles from "./Menu.module.css";

function Menu() {
  const { user } = useUser();

  if (!user.isLoggedIn) return null;

  const menuByRole = {
    Owner: [
      { to: "/owner/costs", label: "Costs" },
    ],
    Manager: [
      { to: "/manager/dashboard", label: "Dashboard" },
      { to: "/manager/orders", label: "Orders" },
      { to: "/manager/products", label: "Products" },
    ],
    Employee: [
      { to: "/employee/tasks", label: "Tasks" },
      { to: "/employee/products", label: "Products" },
    ],
  };

  const links = menuByRole[user.role] || [];

  return (
    <div className={styles.menuWrapper}>
        <nav className={styles.menu}>
            {links.map((item) => (
                <Link key={item.to} to={item.to} className={styles.menuLink}>
                {item.label}
                </Link>
            ))}
        </nav>
    </div>
  );
}

export default Menu;
