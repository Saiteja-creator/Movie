import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const tokenValue = Cookies.get('jwt_token')
  console.log(tokenValue)
  if (tokenValue === undefined) {
    return <Redirect to="/Home" />
  }
  return <Route {...props} />
}
export default ProtectedRoute
