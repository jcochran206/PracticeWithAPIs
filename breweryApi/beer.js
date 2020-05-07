'use strict';

function getBreweries(state) {
    let url = `https://api.openbrewerydb.org/breweries?by_state=${state}`;
    console.log(url);
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error(response.statusText)
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
        return err.message;
    })
}

function displayResults(data) {
    console.log(data);
    let htmlOutput = '';

    for(let i = 0; i < data.length; i++){
        htmlOutput += `
        <h1>${data[i].name}</h1><br>
        <p>${data[i].website_url}</p>
        `;
    }
    
    $('.js-search-results').append(htmlOutput);
}

function watchForm() {
$('.js-search-form').submit(function(event) {
    event.preventDefault();
    let state = $('.js-query').val();
    getBreweries(state);
    console.log(state)
});
  
}

$(watchForm);