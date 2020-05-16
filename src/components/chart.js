import React ,{ useState ,useEffect} from "react";
import {Line,Bar} from "react-chartjs-2";
import getDailyData from "../api/dailyData.js";
import styles from "./chart.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
let status="line";
export const  barset=(cn)=>{
    if(cn==="world"){
        status="line";
    }
    else{
    status=cn;
    }
}
function CovidChart(props){
    const [data1,setData1]=useState({});
    useEffect(()=>{
        const fetchApi=async ()=>{
            setData1(await getDailyData());
        }
        fetchApi();
    }

    );
    
    const LineChart = <Line data = {{
        labels: data1.dates,
        datasets: [{
            data: data1.confirmed,
            label:"infected",
            borderColor:"#3333ff",
            fill:true,
        },
            {
                data: data1.deaths,
                label:"deaths",
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true

                    }
        ]
    } 
}/>
let BarChart=<h1>loading...</h1>
    if(props.confirmed.value){
        BarChart=<Bar 
        data={{
            labels:['infected','Recovered','deaths'],
            datasets:[{
                label:"people",
                backgroundColor:[
                    'rgba(0,0,255,0.5)',
                    'rgba(0,255,0,0.5)',
                    'rgba(255,0,0,0.5)'
                ],
                data:[props.confirmed.value,props.recovered.value,props.deaths.value]
            }]
        }}
        options={{
            legend:{display:false},
            title:{display:true}
        }}
        

        
    
        />
    }
  
    
    if(status==="line"){
        return(
            <div className={styles.container}>
                {LineChart}
            </div>
        );
    }
    else{
        return(
        <div className={styles.container}>
        {BarChart}
        </div>
        )
    }
        


}
export default CovidChart;





