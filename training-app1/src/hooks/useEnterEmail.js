import { useState } from "react";

export const useEnterEmail = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const enterEmail = async ( email ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:5000/api/user/enterEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      // localStorage.setItem("user", JSON.stringify(json));
      

    //   navigate("/login");

      // update loading state
      setError('')
      setIsLoading(false);
    }
  };

  return { enterEmail, isLoading, error };
};
