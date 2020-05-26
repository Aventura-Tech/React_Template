import Redity from 'redity'
import Session from './Pages/Session/Model'
import Home from './Pages/Home/Model'

// Register your models
Redity
  .register('session', Session)
  .register('home', Home)

export default Redity
