import './app.css'

const EachMovie = props => {
  const {movieDetails} = props

  const stars = movieDetails.stars.join(',')

  return (
    <li className="each-listed-movie">
      <div className="top-container">
        <div className="voting-container">VotingImage</div>
        <img
          src={movieDetails.poster}
          alt={movieDetails.title}
          className="image-container"
        />
        <div className="text-continer">
          <h3 className="title">{movieDetails.title}</h3>
          <p>{`Genre : ${movieDetails.genre}`}</p>
          <p>Director : {movieDetails.director[0]}</p>
          <p>Stars : {stars}</p>
          <div className="language-container">
            <p className="text">Mins|</p>
            <p className="text">{movieDetails.language}|</p>
          </div>
        </div>
      </div>

      <button type="button" className="button-trailer">
        Watch Trailer
      </button>
    </li>
  )
}

export default EachMovie
