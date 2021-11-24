import { api } from './api';

const { REACT_APP_API_KEY } = process.env;


export const fetchCurrentWeatherInfo = async (location) => {

    try {
        const response = await api.get(`weather?lat=${location.lat}&lon=${location.long}&appid=${REACT_APP_API_KEY}&lang=pt_br&units=metric`)

        return response;

    } catch (error) {
        return error;
    }
}