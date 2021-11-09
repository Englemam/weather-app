import { api } from './api';


export const fetchCurrentWeatherInfo = async (location) => {

    try {
        const response = await api.get(`weather?lat=${location.lat}&lon=${location.long}&appid=9997c56866a63215f905efd1be2db505&lang=pt_br&units=metric`)

        return response;

    } catch (error) {
        return error;
    }
}