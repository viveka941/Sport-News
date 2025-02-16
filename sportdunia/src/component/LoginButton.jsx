import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="bg-orange-500 px-4 py-2 text-white font-medium rounded hover:bg-orange-600 transition-colors" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
