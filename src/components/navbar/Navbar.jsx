// import styles from "./Navbar.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavbar = styled.div`
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  li {
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin: 0 1rem;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>Movie App</h1>
        </div>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movie/create">Add Movie</Link></li>
            <li><Link to="/movie/popular">Popular</Link></li>
            <li><Link to="/movie/now">Now Playing</Link></li>
            <li><Link to="/movie/top">Top Rated</Link></li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
