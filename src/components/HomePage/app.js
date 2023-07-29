import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import EachMovie from '../EachMovie/app'
import './app.css'

const ApiStatusPresent = {
  initial: 'INITIal',
  InProgress: 'INPROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class HomePage extends Component {
  state = {apiStatus: ApiStatusPresent[0], dataList: []}

  onSuccess = () => {
    const {dataList} = this.state

    const {result} = dataList

    const UpdateResult = result.map(each => {
      console.log('sss')
      return {id: uuidv4(), ...each}
    })

    console.log(UpdateResult)

    console.log(result)
    return (
      <div>
        <ul className="listed-movies">
          {UpdateResult.map(eachMovie => (
            <EachMovie movieDetails={eachMovie} key={eachMovie.id} />
          ))}
        </ul>
      </div>
    )
  }

  getApiCall = async () => {
    this.setState({apiStatus: ApiStatusPresent.InProgress})
    const url = 'https://hoblist.com/api/movieList'
    const bodyData = {
      category: 'movies',

      language: 'kannada',
      genre: 'all',
      sort: 'voting',
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      this.setState({apiStatus: ApiStatusPresent.success, dataList: data})
      this.onSuccess()
    } else {
      this.setState({apiStatus: ApiStatusPresent.failure})
    }
  }

  componentDidMount = () => {
    this.getApiCall()
  }

  getLoader = () => (
    <div className="products-loader-container ">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  Logoutfirm = () => {
    Cookies.remove('jwt_token')
  }

  getResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case ApiStatusPresent.InProgress:
        return this.getLoader()
      case ApiStatusPresent.success:
        return this.onSuccess()

      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <nav className="nav-container">
          <img
            src="https://img.freepik.com/premium-vector/movie-cinema-premiere-background_41737-251.jpg?w=740"
            alt="movie-images"
            className="movie-nav"
          />
          <h1>Moviez Watch</h1>
          <div className="nav-sub">
            <p className="each-nav">Kannada Movies</p>

            <a href="https://www.geeksynergy.com/" className="each-nav">
              Comapany-info
            </a>
            <button type="button" className="logout" onClick={this.Logoutfirm}>
              Logout
            </button>
          </div>
        </nav>
        <div className="loader-value">{this.getResult()}</div>
      </div>
    )
  }
}

export default HomePage
