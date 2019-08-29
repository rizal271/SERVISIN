import axios from 'axios';

import url from './host'

export const notif = (data) => {
    console.log('id pohne action: ', data);
    return {
        type: 'NOTIF_ALL',
        payload: axios.post(`${url}/order/notif`, data)
    }
}
