import React, { useEffect } from 'react';
import HOC from './HOC';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { MainURL } from '../App';
import { setInitialCartCount } from '../redux/action/actions';

const Home = () => {
    const dispatch = useDispatch();
    const auth = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    useEffect(() => {
        getCartList();
    }, []);


    const getCartList = () => {
        axios.get(`${MainURL}/addtocart/get`, auth).then((res) => {
            dispatch(setInitialCartCount(res?.data?.data?.length ? res.data.data?.length : 0));
            // console.log(res?.data?.data?.length);
            
        }).catch(function (error) {
            console.log(error.message); 
            alert(error.message);
        });
    }
    return (
        <div
            className='container-fluid'
            style={{
                backgroundImage: `url(${require('../Assets/Images/home.webp')})`,
                backgroundSize: 'cover',
                minHeight: '90vh',
                boxShadow: 'rgba(0, 0, 0, 0.9)',
                position: 'relative',
                overflow: 'hidden',
            }}>
            <div className="text-center mt-5 pt-3">
                <h1
                    style={{
                        fontWeight: "700",
                        color: "#000",
                        textTransform: "uppercase",
                        letterSpacing: "3px",
                        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                        position: "relative",
                        paddingBottom: "10px"
                    }}
                >
                    Make Your Home Good Nutrition

                </h1>
            </div>

        </div>
    );
};

export default HOC(Home);
