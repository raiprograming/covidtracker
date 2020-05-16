import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { container } from "react-bootstrap";
import styles from "./header.module.css";
function Header(){
    return(
        <div className={styles.textManage}>
        <div  className="jumbotron text-center bg-primary" height="500" >
            <h1 className={styles.h1}><b><i>Track covid-19 with shivam</i></b>
                    <img className={styles.img} src="profile.jpg" alt="problem"></img>
                   <br></br> STAYHOME<br></br>STAYSAFE
            </h1>
            </div>
            </div>
    );
}
export default Header;