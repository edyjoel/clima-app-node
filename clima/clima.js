const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=2d4d967798f278410593e88f05f49761&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}