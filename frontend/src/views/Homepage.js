// Home.js
import React from 'react';
import './Page.css';

const Homepage = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">TO DO APP</h1>
            <p className="home-description">
                Welcome to the To Do app, where you can record your daily tasks and manage your life with ease.
                This tool is designed to help you stay organized and on top of your responsibilities.
            </p>
            <p className="home-university">
                Created by Ulukbek kyzy Soledat and Maksatova Marina 
            </p>
            <p className="home-university">
                Students at Salymbekov University
            </p>
            <p className="home-purpose">
                This project was made for educational purposes.
            </p>
        </div>
    );
};

export default Homepage;
