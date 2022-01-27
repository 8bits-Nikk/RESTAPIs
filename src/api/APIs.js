import {create} from "apisauce";

export const api = create({
    baseURL: 'https://gorest.co.in/public/v1',
    headers: {
        'Content-type': 'application/json',
        'Accept' : 'application/json',
        'Authorization' : 'Bearer 37df5b7a26d9d2e0fc187c8311004c115e880f61ef6fd4f391bc532fc0f8de97'
    }
})
