import React from "react";
import { useSelector } from "react-redux";

import UserMain from "../User";
import {Link} from 'react-router-dom'


import './main_content.css';
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@200&display=swap" rel="stylesheet"></link>

const MainContent =() => {
    const sessionUser = useSelector(state => state.session.user)

    if (sessionUser) {
        return(
        <>
        
        <UserMain />
        {/* <UserSideNav /> */}
        </>

        )
    }
    return (
        <div className="main">
            <div className="main-script">
                <h1>Tame your work, organize your life</h1>
                <h5>Remember everything and tackle any project with your notes, tasks, and schedule all in one place</h5>
                <div className="sign-up-button-div">
                    <Link className="button" to="/signup"><button className="button1">Sign up for free</button></Link>
                </div>
                <a className="sign-up-button">
                </a>
                <a className="login-link" href="/login">Already have an account? Log in
                </a>
            </div>
            <div className="pic">
                <img className="img-container" src="https://evernote.com/c/assets/homepage-repackaging/task_hero_image@2x__en.png?b92f90d51cebbc17"></img>
                <div className="main-side-bar">
                    <div className="word-container">
                        <h4>WORK ANYWHERE</h4>
                            <p>Keep important info handy by syncting your notes to all your services.</p>
                    </div>
                    <div className="word-container">
                        <h4>REMEMBER EVERYTHING</h4>
                            <p>Make notes more useful by adding text, images, audio, scans, PDFs, and documents.</p>
                    </div>
                    <div className="word-container">
                        <h4>FIND THINGS FAST</h4>
                            <p>Get what you need, when you need it with powerful, flexible, search capabilities.</p>
                    </div>
                    <div className="word-container">
                        <h4>WORK ANYWHERE</h4>
                            <p>Keep important info handy by syncting your notes to all your services.</p>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default MainContent;