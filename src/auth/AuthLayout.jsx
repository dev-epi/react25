import { Outlet } from "react-router-dom";
import Card from "../ui/Card";

export default function AuthLayout() {
  return (
    <div className="container">
      <img src="/vite.svg"/>
      <h2>React App</h2>
      <Card>
        <Outlet/>
      </Card>
    </div>
  )
}
