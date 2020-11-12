import React from 'react';
import styles from "./SideBar.module.scss";

import { Link } from '@reach/router';
import firebase from '../../firebase';

import BookmarkIcon from '../../assets/img/SideBarIcons/Bookmark.svg';
import ProfileIcon from '../../assets/img/SideBarIcons/Profile.svg';
import DoorIcon from '../../assets/img/SideBarIcons/DoorIcon.svg';
import CogIcon from '../../assets/img/SideBarIcons/Cog.svg';
import InfoIcon from '../../assets/img/SideBarIcons/Info.svg';
import QuestionIcon from '../../assets/img/SideBarIcons/Question.svg';



const SideBar = (props) => {

    const { user, openSideBar } = props;

    console.log(user);

    const toggleSideBar = openSideBar ? styles.popOut : "";

    // firebase.auth().signOut()

    const signOutUser = firebase.auth().signOut();

    const displaySignInLogIn = user ? (null) : 
    (
        <div className={styles.buttonContainer}>
            <Link to="/sign-up">
            <button className={styles.signUpBtn}>Sign Up</button>
            </Link>
            <button className={styles.loginBtn}>Login</button>
        </div>
    );

    const displayLogOut = user ? 
    (
        <footer className={styles.sideBarFooter} onClick={signOutUser}>
            <img src={DoorIcon} alt="logout-icon" />
            <p>Logout</p>
        </footer>
    ) : (
        (null)
    );

    const favouritesRedirect = user ? 
    (
        <Link to="/favourites">
            <div className={styles.pathItems}>
                <img src={BookmarkIcon} alt="sidebar-icons"/>
                <p>Favourites</p>
            </div>
        </Link>
    ) : (
        <Link to="/profile-sign-in">
            <div className={styles.pathItems}>
                <img src={BookmarkIcon} alt="sidebar-icons"/>
                <p>Favourites</p>
            </div>
        </Link>
    );

    const profileRedirect = user ?
    (
        <Link to="/registereduserprofile">
            <div className={styles.pathItems}>
                <img src={ProfileIcon} alt="sidebar-icons"/>
                <p>Profile</p>
            </div>
        </Link>
    ) : (
        <Link to="/profile-sign-in">
            <div className={styles.pathItems}>
                <img src={ProfileIcon} alt="sidebar-icons"/>
                <p>Profile</p>
            </div>
        </Link>
    );

    // const displaySignInLogIn = (user) => {
    //     if (user === null) {
    //         return (<div className={styles.buttonContainer}>
    //                     <Link to="/sign-up">
    //                     <button className={styles.signUpBtn}>Sign Up</button>
    //                     </Link>
    //                      <button className={styles.loginBtn}>Login</button>
    //                 </div>)
    //     } else {
    //         return null;
    //     }
    // }

    // const checkUserSignedIn = (props) => {
    //     (user) ? null : 
    //     (<div className={styles.buttonContainer}>
    //         <Link to="/sign-up">
    //         <button className={styles.signUpBtn}>Sign Up</button>
    //         </Link>
    //         <button className={styles.loginBtn}>Login</button>
    //     </div>)
    // }
   
    return (
        <section className={`${styles.sideBarContainer} ${toggleSideBar}`}>
            {displaySignInLogIn}
            <main className={styles.appPathLinks}>
                <div className={styles.appPathItems}>
                    {favouritesRedirect}
                    {profileRedirect}
                </div>
                <div className={styles.appInfoItems}>
                    <div className={styles.infoItems}>
                        <img src={CogIcon} alt="sidebar-icons"/>
                        <p>Settings</p>
                    </div>
                    <div className={styles.infoItems}>
                        <img src={InfoIcon} alt="sidebar-icons"/>
                        <p>About Us</p>
                    </div>
                    <div className={styles.infoItems}>
                        <img src={QuestionIcon} alt="sidebar-icons"/>
                        <p>FAQ</p>
                    </div>
                </div>
            </main>
            {displayLogOut}
        </section>
    )
}

export default SideBar;
