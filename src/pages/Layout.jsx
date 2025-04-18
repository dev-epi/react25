import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SocketProvider } from "../services/SocketContext";

export default function Layout() {
  
  return (
    <div>
      <SocketProvider>
        <Navbar></Navbar>
        <main>
            <Outlet/>


            <footer>CopyRights</footer>
        </main>
        </SocketProvider>

    </div>
  )
}
