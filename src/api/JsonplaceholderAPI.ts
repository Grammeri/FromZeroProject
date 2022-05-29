import axios from 'axios';

let instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // withCredentials:true,
    // headers:{
    //   'API-KEY':'123456789'
    // }
})

export const JsonplaceholderAPI = {
    getJsonplaceholder: () => {
        return instance.get<Array<getJsonplaceholderType>>(`${'/posts'}`)
    }
}


export type getJsonplaceholderType = {
    userId: number,
    id:number,
    title: string,
    body: string
}