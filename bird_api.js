//Day 10 of Daily Tiny Programming
//Using Bird API to get bird data
const fetch = require('node-fetch');
const API_URL = 'https://api.ebird.org/v2/ref/taxonomy/ebird?fmt=json';
const API_KEY = 'YOUR_API_KEY';
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => console.log(data));
