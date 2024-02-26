import React from 'react';
import styles from "../page.module.css";

const NavBar: React.FC = () => {
    return(
        <div className={styles.nav}>
            <a href="#">Home</a>
            <a href="#">Experience</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
        </div>
    )
}

export default NavBar;