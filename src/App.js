import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// firebase
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import SignUpComplete from './pages/Auth/SignUpComplete';
import DonorRegistration from './pages/DonorRegistration';
import Home from './pages/Home';

const App = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/signup/complete' exact component={SignUpComplete} />
        <Route path='/blooddonorreg' exact component={DonorRegistration} />
      </Switch>
      <Footer className='mt-auto' />
    </Router>
  );
};

export default App;
