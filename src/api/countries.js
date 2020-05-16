import axios from "axios";
const url ="https://covid19.mathdro.id/api/countries/";
async function GetCountry(){
    const response=await axios.get(url);
    const country=response.data.countries.map((cnt)=>{
        return cnt.name
    });
    return country;
}
export default GetCountry;