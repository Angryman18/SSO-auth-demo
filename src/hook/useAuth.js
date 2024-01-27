import { useEffect, useReducer, useCallback } from "react";
import axios from "axios";

export default function useAuth(loading = false) {
  const [state, setState] = useReducer(
    (state, action) => ({ ...state, ...action }),
    { authStatus: false, loading, userInfo: {}, error: false }
  );

  const getUserInformation = useCallback(async (token) => {
    try {
      const response = await axios({
        url: import.meta.env.VITE_BACKEND_URL + "/api/verify-user",
        method: "POST",
        data: { token },
      });
      setState({ loading: false, userInfo: response.data, authStatus: true });
    } catch (err) {
      console.log("Here we got error ", err);
      setState({ error: true, userInfo: {}, loading: false, authStatus: false });
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (state.userInfo?.username) return;
    if (token) {
      setState({ loading: true });
      getUserInformation(token);
    }
  }, [getUserInformation]);

  return { state };
}
