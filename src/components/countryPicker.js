import React from "react";
import{useState,useEffect} from "react";

import GetCountry from "../api/countries.js";
import styles from "./countryPicker.module.css";

function CountryPicker({handleChange}){
    const [country,setCountry]=useState([]);
    useEffect(()=>{
        const fetchApi=async ()=>{
            setCountry(await GetCountry());
        };
        fetchApi();
    })
    return(
        <div className="container">
            <select className={styles.custom} defaultValue="" onChange={(e) => { handleChange(e.target.value) }}>
                <option value="world">world</option>
                {country.map((cnt)=>
                    <option value={cnt}>{cnt}</option>
                )}
            </select>
           
                    </div>
    );
}
export default CountryPicker;