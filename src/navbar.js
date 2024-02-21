import { NavLink } from "react-router-dom";
import NavBtn from "./components/navBtn";


function Navbar(props) {
    return (
        <div className="h-[95px] py-4 px-6 w-full bg-[#101323] fixed top-[calc(100vh-95px)] rounded-t-[20px] flex justify-between">
            <NavLink to="/">
                {({ isActive, }) => (
                    <NavBtn img="img/home.svg" text="Главная" status={isActive ? "active" : ""}/>
                )}
            </NavLink>
            <NavLink to="/unions">
                {({ isActive, }) => (
                    <NavBtn img="img/union.svg" text="Объединения" status={isActive ? "active" : ""}/>
                )}
            </NavLink>
            <NavLink to="/events">
                {({ isActive, }) => (
                    <NavBtn img="img/afisha.svg" text="Мероприятия" status={isActive ? "active" : ""}/>
                )}
            </NavLink>
            <NavLink to="/calendar">
                {({ isActive, }) => (
                    <NavBtn img="img/calendar.svg" text="Расписание" status={isActive ? "active" : ""}/>
                )}
            </NavLink>
        </div>
    );
  }
  export default Navbar;
  