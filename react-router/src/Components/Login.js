import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectrPath = location.state?.path || '/';

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectrPath, { replace: true });
  };

  return (
    <>
      <label>
        Username :
        <input
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button onClick={handleLogin}>Login</button>
      </label>
    </>
  );
};
