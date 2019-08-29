import axios from 'axios';
import url from './host'


export const postNotifMitra = (data) => {
    return {
        type: 'POST_NOTIF_MITRA',
        payload: axios.post(`${url}/order/notif/`, data),

    }
};
