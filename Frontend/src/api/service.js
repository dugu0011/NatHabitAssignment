import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;
const weatherApiBaseUrl=process.env.REACT_APP_WEATHER_API_URL;
const baseURL = `${url}/api`;
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
const weatherApiUrl=`${weatherApiBaseUrl}`;


// Endpoints 
const endPointLocations = `${baseURL}/locations/`;
const endPointWeatherApi=`${weatherApiUrl}`



const client = axios.create({
    baseURL: baseURL || weatherApiUrl,
  });


// Methods 
const request = async ({ method = "GET", url, data,}) => {
    console.log(
      `endpoint: ${url}\nmethod: ${method}\nbody: ${data}`
    );
    try {
      console.log("method", method);
      if (method === "GET") {
        const response = await client.get(url, data);
        return response.data;
      } else if (method === "POST") {
        const response = await client.post(url, data);
        return response.data;
      } else if (method === "DELETE") {
        const response = await client.delete(url, data);
        return response.data;
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
      }
      throw new Error(error.response.data.detail);
    }
  };

  
// Api's

  const getLocations = async () => {
    return await request({
      method: "GET",
      url: endPointLocations,
    });
  };

  const getLocationWeatherData = async (locationName) => {
    return await request({
        method: "GET",
        url: endPointWeatherApi,
        data: { params: { q:locationName,days:4,key: weatherApiKey } },
      })
    
  };


export{getLocations,getLocationWeatherData};

