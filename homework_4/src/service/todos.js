import axios from 'axios';
const API = `https://jsonplaceholder.typicode.com/todos`;

const todos = {
    patch: (id, item) => axios.patch(API+`/${id}`, item).then(({data}) => data),
    put: (id, item) => axios.put(API+`/${id}`, item).then(({data}) => data),
}

export default todos;