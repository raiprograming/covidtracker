import axios from "axios";
const url1 = "https://covid19.mathdro.id/api/daily";
async function getDailyData() {
    try {
        const response = await axios.get(url1);
        const confirmed = response.data.map((conf) => {
            return conf.confirmed.total
        });
        const deaths = response.data.map((death) => {
            return death.deaths.total
        });
        const dates=response.data.map((date)=>{
            return date.reportDate
        })
        return { confirmed, deaths ,dates };

    } catch (error) {
        return "error";

    }
}
export default getDailyData;