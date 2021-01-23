import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import DonorRegistration from './pages/DonorRegistration';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/blooddonorreg' exact component={DonorRegistration} />
      </Switch>
      <Footer className='mt-auto' />
    </Router>
  );
};

export default App;
