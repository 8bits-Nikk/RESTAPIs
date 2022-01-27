import {create} from "apisauce";

export const api = create({
    baseURL: 'https://gorest.co.in/public/v1',
    headers: {
        'Content-type': 'application/json',
        'Accept' : 'application/json',
        'Authorization' : ''
    }
})
