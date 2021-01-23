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
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashBoard';
import RequesterRegistration from './pages/RequesterRegistration';

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
    // eslint-disable-next-line
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
        <Route path='/forgot/password' exact component={ForgotPassword} />
        <Route path='/blooddonorreg' exact component={DonorRegistration} />
        <Route path='/bloodtakerreg' exact component={RequesterRegistration} />
        <Route path='/adminlogin' exact component={AdminLogin} />
        <Route path='/admindashboard' exact component={AdminDashboard} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
