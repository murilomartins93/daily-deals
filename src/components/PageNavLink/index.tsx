import { NavLink } from "react-router-dom";

export default function PageNavLink({ to, ...props }: any) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "dd-font-bold" : "dd-font-regular"
      }
      {...props}
    />
  );
}
