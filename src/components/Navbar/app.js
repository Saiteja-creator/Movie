import {Link} from 'react-router-dom'
import './app.css'

const Navbar = () => (
  <>
    <nav className="nav-container">
      <div className="image-container">
        <img
          src="https://img.freepik.com/premium-vector/online-movie-television-vector-background-with-cinema-clapper-film-roll-clapper-board-f_53562-4200.jpg?w=740"
          alt="movie-url"
          className="nav-image"
        />
      </div>
      <h1>Movies List</h1>
      <div className="nav-menu">
        <Link to="/login" className="link">
          <p className="each-link">Login</p>
        </Link>
        <Link to="/sign-up" className="link">
          <p className="each-link">Sign-up</p>
        </Link>
        <a href="https://www.geeksynergy.com/" className="about each-link">
          about
        </a>
      </div>
    </nav>
  </>
)

export default Navbar
