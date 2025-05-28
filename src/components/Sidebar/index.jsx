import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const style = "flex align-center gap-2 p-2 rounded-br-full rounded-tr-full";

  const getStyle = ({ isActive }) => {
    return isActive
      ? `text-slate-50 bg-red-800 ${style}`
      : `hover:bg-red-800 hover:text-slate-50 ${style}`;
  };
  return (
    <aside className="flex flex-col gap-3 border-r-2 border-gray-200 w-[150px] h-screen p-3">
      <NavLink className={getStyle} to="/">
        <span className="material-icons-outlined">home</span>Home
      </NavLink>
      <NavLink className={getStyle} to="/important">
        <span class="material-icons-outlined">star_rate</span>
        Important
      </NavLink>
      <NavLink className={getStyle} to="/archive">
        <span className="material-icons-outlined">archive</span>Archive
      </NavLink>
      <NavLink className={getStyle} to="/bin">
        <span className="material-icons-outlined">delete</span>Delete{" "}
      </NavLink>
    </aside>
  );
};
export default Sidebar;
