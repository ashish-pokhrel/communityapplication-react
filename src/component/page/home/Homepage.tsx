import { useNavigate } from "react-router-dom";
import { useAuth } from "../../security/useAuth";

function Homepage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth?.logout();
    navigate('/');
  }

  return (
    <>
      <div>Homepage {auth?.user?.userName}</div>
      <button onClick={handleLogout}>LogOut</button>
    </>
  )
}

export default Homepage