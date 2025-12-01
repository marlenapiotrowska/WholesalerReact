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
      { to: "/manager/assignTask", label: "Assign task to an Employee" },
      { to: "/manager/requirements", label: "Requirements" },
      { to: "/manager/tasks", label: "Tasks" },
      { to: "/manager/departMushrooms", label: "Depart Mushrooms" },
    ],
    Employee: [
      { to: "/employee/worktasks", label: "Tasks" },
      { to: "/employee/deliverMushrooms", label: "Products" },
      { to: "/employee/startWork", label: "Products" },
      { to: "/employee/finishWork", label: "Products" },
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
