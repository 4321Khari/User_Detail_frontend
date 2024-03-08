// NavigationBar.js

import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './NavigationBar.module.css'; // Import your CSS file for styling

const NavigationBar = () => {
    return (
        <>

        <div className={styles.navbar}>
            <NavLink to="/" exact activeClassName={styles.active}>Home</NavLink>
            <Link to="add">
            <button className={styles.addButton}>Add</button>
            </Link>
        </div>
            <Outlet />
        </>
    );
}

export default NavigationBar;
