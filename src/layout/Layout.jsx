import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppPlayerConsole from "../components/AppPlayerConsole";

export default function Layout() {
    return(
        <>
            <AppHeader />

            <main>
                <Outlet/>
            </main>

            <AppPlayerConsole />
        
        </>
    )
}