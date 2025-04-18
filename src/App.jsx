import AppRoutes from "./AppRoutes";
import { UserProvider } from "./services/UserContext";


export default function App() {
  return (
    <>
      
      <UserProvider>
          <AppRoutes/>
      </UserProvider>
     
    </>
  )
}
