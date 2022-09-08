import React, { useEffect }from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';
import ErrorPage from "./ErrorPage";

const promise = loadStripe(
    'pk_test_51LbFWPGPkfBfL9oW4M3sDgX4DOhd9FJ19tNbIj2bv90qiPwAGekbdz27N5uiIOtj0heG9Bxpjxz9ZgFvlrFB3Dy300o5pIAXqT'
);

function App() {
    const [  , dispatch] = useStateValue();
    useEffect(()=>{
        auth.onAuthStateChanged(authUser => {
            if(authUser){
                dispatch({
                type: 'SET_USER',
                user: authUser,
                });
            }
            else {
                dispatch({
                type: 'SET_USER',
                user: null,
                });
            }
        })
    },[]);

    return (
    <Router>
        <>
            <Routes>
                <Route path="/" element={
                    <> 
                        <Header /> 
                        <Home /> 
                    </>}
                /> 
                <Route path="/Checkout" element={<> <Header /> <Checkout /> </>}/>
                <Route path="/Login" element={<> <Login /> </>}/>
                <Route path="/Orders" element={<> <Header /> <Orders /> </>} />
                <Route path="/payment" element={
                    <> 
                        <Header /> 
                        <Elements stripe={promise}> 
                            <Payment /> 
                        </Elements> 
                    </>}
                />
                <Route path="*" element={<> <ErrorPage /> </>}/>
            </Routes>
        </>
    </Router>
    );
}

export default App