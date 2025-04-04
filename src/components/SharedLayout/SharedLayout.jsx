import { NavLink, Outlet } from "react-router-dom";


export default function SharedLayout() {
    
    return (<>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"} >Home</NavLink>
                    </li>
                    <li>
                      <NavLink to={"movies"}>Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </>);

};