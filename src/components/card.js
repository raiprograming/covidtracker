import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card } from 'react-bootstrap';
import styles from './card.module.css';
import CountUp from "react-countup";
function Cards(props){
    const time=new Date(props.update).toString();
    /*const confirm1=props.confirmed.value;//value
    if(!confirm1){
        return 'loading...';
    }
   // const confirm=props.confirmed.value;*/
   if(props.confirmed.value){
    return(
        <div className="row">
                <div className="col-sm-4">
                <div className={styles.wdm}>
                <div className="card">
                    <div className="card-body badge-warning" >
    <h1 className="card-title">Infected</h1>
                        <p className="card-text">
                                <h3>no of active cases </h3>
                                <h1>
                                    <CountUp
                                    start={0}
                                    end={props.confirmed.value} 
                                    duration={3}
                                    />
                                </h1>
    <h3>last updated on</h3>
    <h5>{time}</h5>
                            </p>
                        <a href={props.confirmed.detail} target="_blank" className="btn btn-primary">more details</a>
                    </div></div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className={styles.wdm}>
                <div className="card badge-success">
                    <div className="card-body ">
                        <h1 className="card-title">Recovered</h1>
                            <p className="card-text">
                                <h3>no of recovered people </h3>
                                <h1>
                                    <CountUp
                                    start={0}
                                    end={props.recovered.value} 
                                    duration={4}
                                    />
                                </h1>
                                <h3>last updated on</h3>
                                <h5>{time}</h5>
                            </p>
                        <a href={props.recovered.detail} target="_blank" className="btn btn-primary">more details</a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
            <div className={styles.wdm}>
                <div className="card bg-danger">
                    <div className="card-body ">
                        <h1 className="card-title ">Deaths</h1>
                            <p className="card-text">
                                <h3>no of deaths due to covid-19 </h3>
                                <h1>
                                    <CountUp
                                    start={0}
                                    end={props.deaths.value}
                                    duration={5}
                                    />
                                </h1>
                                <h3>last updated on</h3>
                                <h5>{time}</h5>
                            </p>
                            <a href={props.deaths.detail} target="_blank" className="btn btn-primary">more details</a>

                    </div></div>
                </div>
            </div>
        </div>
    )
   }
   else{
       return "loading...";
   }
}
export default Cards;