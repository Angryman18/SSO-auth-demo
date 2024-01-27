import React, { useEffect } from "react";
import useAuth from "./hook/useAuth";
import userImg from "./assets/user.jpg";

const Home = () => {
  const { state } = useAuth(!!localStorage.getItem("token"));
  const user = state.userInfo;
  const origin = window.location.origin;
  const handleButtonClick = () => {
    window.location.href = `${import.meta.env.VITE_FE_URL}?next=${origin}/callback&next=${origin}`;
  };

  useEffect(() => {
    console.log("state ", state);
  }, [state]);

  const handleSignOut = () => {
    const buildURL =
      `${import.meta.env.VITE_FE_URL}/logout` + `?next=${origin}/signout`;
    window.location.href = buildURL;
  };
  if (state.loading) return <div>Loading...</div>;
  if (state.authStatus)
    return (
      <div>
        <h2>You are Logged In</h2>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            margin: "auto",
            marginTop: "50px",
            display: "flex",
            // justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <img
              src={user.avatar ?? userImg}
              alt="User Avatar"
              style={{
                width: "100px",
                padding: "2px",
                border: "3px solid #f4f0ec",
                borderRadius: "50%",
              }}
            />
          </div>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "15px",
              textAlign: "left",
              rowGap: "2px",
            }}
          >
            <span
              style={{
                fontWeight: "600",
                fontSize: "18px",
                fontFamily: "Noto Sans Meetei Mayek",
                color: "teal",
              }}
            >
              {user.fullname}
            </span>
            <span
              style={{
                fontWeight: "500",
                fontFamily: "Noto Sans Meetei Mayek",
                color: "teal",
              }}
            >
              {user.email}
            </span>
            <button onClick={handleSignOut}>Sign out</button>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <button onClick={handleButtonClick}>Login Here Via Engine SSO</button>
    </div>
  );
};

export default Home;
