import axios from 'axios';
let url ="https://covid19.mathdro.id/api";
async function getdata(cn){
    let changable=url;
    if(cn){
        if(cn==="world"){
            changable=url;
        }
        else{
        changable = `${url}/countries/${cn}`;
        }
    }
    try{
    const response=await axios.get(changable);
    //const data2=await data.json();
    const modifieddata={
        confirmed:response.data.confirmed,
        recovered:response.data.recovered,
        deaths:response.data.deaths,
        update:response.data.lastUpdate
    }
    return modifieddata;
    }
    catch(error){
        return "error";
    }

}
export default getdata;