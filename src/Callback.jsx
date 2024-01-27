import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  useEffect(() => {
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      navigate("/");
    }
  }, []);

  return <div>This is the Callback Section</div>;
};

export default Callback;
