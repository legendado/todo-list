import axios from 'axios'
import store from './store/'

export default () => {
    return axios.create({
        baseURL: `${process.env.VUE_APP_API}` || store.state.baseURL,
        timeout: 10000,
        headers: {
            Authorization: `Bearer ${store.state.Authentication.token}`            
        }
    })
}
