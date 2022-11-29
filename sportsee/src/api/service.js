import axios from 'axios';
import EndpointFactory from 'axios-endpoints';

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001"
});

const Endpoint = EndpointFactory(axiosInstance);

const params = new URLSearchParams(window.location.search);
const userId = params.get('id');

const userEndpoint = new Endpoint(({postId = ""}) => "/user/" + postId);
const activityEndpoint = new Endpoint(({postId = ""}) => "/user/" + postId + "/activity");
const averageSessionsEndpoint = new Endpoint(({postId = ""}) => "/user/" + postId + "/average-sessions");
const performanceEndpoint = new Endpoint(({postId = ""}) => "/user/" + postId + "/performance");

async function requestUserData() {
    return new Promise((resolve, reject) => {
        userEndpoint.get({
            uriParams: {
                postId: userId
            }
        })
        .then(response => {
            return resolve(response.data.data)
        })
        .catch(error => {
            console.log(error)
            return reject(error)
        });
    })
};

function requestUserActivity() {
    return new Promise((resolve, reject) =>{
        activityEndpoint.get({
            uriParams: {
                postId: userId
            }
        })
        .then(response => {
            return resolve(response.data.data)
        })
        .catch(error => {
            console.log(error)
            return reject(error)
        })
    })
}

function requestUserAverageSessions() {
    return new Promise((resolve, reject) =>{
        averageSessionsEndpoint.get({
            uriParams: {
                postId: userId
            }
        })
        .then(response => {
            return resolve(response.data.data)
        })
        .catch(error => {
            console.log(error)
            return reject(error)
        })
    })
}

function requestUserPerformance() {
    return new Promise((resolve, reject) =>{
        performanceEndpoint.get({
            uriParams: {
                postId: userId
            }
        })
        .then(response => {
            return resolve(response.data.data)
        })
        .catch(error => {
            console.log(error)
            return reject(error)
        })
    })
}

export { requestUserData }
export { requestUserActivity }
export { requestUserAverageSessions }
export { requestUserPerformance }