const axios = require("axios")

// const asyncFunction = {
//     fetchUser: () => {
//         return axios.get('https://jsonplaceholder.typicode.com/users/1').then(({data}) => {
//             return data;
//         }).catch(err => {throw new Error('Data not available', err)});
//     }
// }
const asyncFunction = {
    fetchUser: async () => {
        try {
            let {data} = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            return data;            
        } catch (error) {
            throw new Error('Data not available', error)
        }
    }
}

module.exports = asyncFunction;