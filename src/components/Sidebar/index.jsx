import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const style = 'flex align-center gap-2 p-2 rounded-br-full rounded-tr-full'

    const getStyle = ({ isActive }) => {
        return isActive ? `text-slate-50 bg-red-800 ${style}` : `hover:bg-red-800 hover:text-slate-50 ${style}`
    }
    return (
        <aside className="flex flex-col gap-3 border-r-2 border-gray-200 w-[150px] h-screen p-3" >
            <NavLink className={getStyle} to='/' >Home</NavLink>
            <NavLink className={getStyle}  to='/archive' >Archive</NavLink>
            <NavLink className={getStyle}  to='/important' >Important</NavLink>
            <NavLink className={getStyle}  to='/bin' >Bin</NavLink>
        </aside>
    )
}
export default Sidebar