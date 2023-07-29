import './app.css'
import Navbar from '../Navbar/app'
import Signup from '../Signup/app'

const Home = () => (
  <>
    <Navbar />
    <div className="sign-container">
      <Signup />
    </div>
  </>
)

export default Home
