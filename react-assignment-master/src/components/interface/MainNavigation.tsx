import { Link } from "react-router-dom";

const LinkStyle = {
  textDecoration: "none",
  fontSize: "1.5rem",
  color: "white",
};

const MainNavigation = () => {
  return (
    <header
      style={{
        width: "90%",
        height: "5em",
        display: "flex",
        padding: "0 5%",
        backgroundColor: "#348bd1",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: "2rem", color: "white", fontWeight: "bold" }}>
        Pet Registration
      </div>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          <li style={{ marginLeft: "3rem" }}>
            <Link to="/" style={LinkStyle}>
              Home
            </Link>
          </li>
          <li style={{ marginLeft: "3rem" }}>
            <Link to="/register" style={LinkStyle}>
              Register
            </Link>
          </li>
          <li style={{ marginLeft: "3rem" }}>
            <Link to="/pet-records" style={LinkStyle}>
              Pet Records
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
