import React from 'react';
import styles from './App.module.css';
import getdata from "./api/index.js";
import Cards from "./components/card.js";
import Header from "./components/header.js";
import CovidChart,{barset} from "./components/chart.js";
import CountryPicker from "./components/countryPicker.js";



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      confirmed:{},
      recovered:{},
      deaths:{},
      update:"",
      country:"world"
    }
    this.handleChange=this.handleChange.bind(this);
    this.setValues=this.setValues.bind(this);

  }
  async componentDidMount(){
    console.log(this.state.country);

    let data1=await getdata();

    this.setState({
      confirmed:data1.confirmed,
      recovered:data1.recovered,
      deaths:data1.deaths,
      update:data1.update
    }
    );
  }
  async componentDidUpdate(previousProps,previousState){
      if(previousState.country !==this.state.country){

      let data1 = await getdata(this.state.country);
      alert("data loading");
      this.setValues(data1);
      }

      
    
  }
  setValues(data){
    this.setState({
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      update: data.update
    }
    );
  }
  handleChange(cname){
    this.setState({
      country:cname
    });
    barset(cname);
    //console.log(this.state.country);

  }
  render(){
  return (
    <div className={styles.container}>
      <Header />
      <Cards confirmed={this.state.confirmed} recovered={this.state.recovered} deaths={this.state.deaths}
       update={this.state.update}/>
       <h1>choose the country to get specific country details</h1>
       
       <CountryPicker handleChange={this.handleChange} 
       />
       <CovidChart 
        confirmed={this.state.confirmed} recovered={this.state.recovered} deaths={this.state.deaths}
       />
    </div>
  );
  }
}

export default App;
