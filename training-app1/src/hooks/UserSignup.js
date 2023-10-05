import { useState } from "react";
import { useAuthContext } from "../hooks/UserAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (firstname, lastName, email, password, address, contact) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:5000/api/user/userSignup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, lastName, email, password, address, contact }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      navigate("/login");

      // update loading state
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
