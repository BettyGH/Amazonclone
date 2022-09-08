import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:5001/clone-5833c/us-central1/api',

    //baseURL:'https://us-central1-clone-5833c.cloudfunctions.net/api',

});

export default instance;
