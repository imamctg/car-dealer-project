// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Home/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AboutUs from './components/AboutUs/AboutUs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs';
import Register from './components/Home/Register/Register';
import Login from './components/Home/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Home from './components/Home/Home';
import Footer from './components/Home/Footer/Footer';
import AllProducts from './components/Home/AllProducts/AllProducts';
import Dashboard from './components/Dashboard/Dashboard';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import Payment from './components/Dashboard/Payment/Payment';
import Reviews from './components/Home/Reviews/Reviews';
import AddProduct from './components/AdminPanel/AddProduct/AddProduct';
import AllOrders from './components/AdminPanel/AllOrders/AllOrders';
import MyOrders from './components/AdminPanel/MyOrders/MyOrders';
import Purchase from './components/AdminPanel/Purchase/Purchase';
import Products from './components/Home/Products/Products';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/makeAdmin'>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path='/payment'>
              <Payment></Payment>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path='/products'>
              <Products></Products>
            </PrivateRoute>
            {/* <PrivateRoute path='/servicedetail/:id'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute> */}

            <PrivateRoute path='/booking/:id'>
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path='/contact'>
              <ContactUs></ContactUs>
            </Route>
            <Route path='/myOrders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/addProduct'>
              <AddProduct></AddProduct>
            </Route>
            <Route path='/allOrders'>
              <AllOrders></AllOrders>
            </Route>
            <Route path='/allProducts'>
              <AllProducts></AllProducts>
            </Route>
            <Route path='/reviews'>
              <Reviews></Reviews>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
