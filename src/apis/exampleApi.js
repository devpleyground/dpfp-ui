import axios from 'axios'
const globals = require("../global/" + process.env.NODE_ENV);

export function exampleCheck(){
    const url = `${globals.base_url}/examples/check`
    return axios.get(url)
        .then(response => response.data);
}

export function exampleError(){
    const url = `${globals.base_url}/examples/errormsg`
    return axios.get(url)
        .then(response => response.data);
}

