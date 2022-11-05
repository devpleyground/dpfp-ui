import axios from 'axios'
const globals = require("../global/" + process.env.NODE_ENV);

export function sempleCheckApi(){
    const url = `${globals.base_url}/sample/check`
    return axios.get(url).then(response => response.data)
}