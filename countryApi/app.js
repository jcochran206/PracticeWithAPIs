function getDataFromApi(searchTerm) {
    
    let url = `https://restcountries.eu/rest/v2/name/${searchTerm}?fullText=true`
    console.log(url);
    fetch(url)
    .then(response =>{
        if(response.ok){
            return response.json();
        }
        throw new Error (response.statusText);
    })
    .then(responseJson => displaySearchData(responseJson))
    .catch(err => {
        console.log(err)
    });
  }
  
  function displaySearchData(data) {
   console.log(data);
   let htmlOutput = '';

   for(let i = 0; i < data.length; i++) {
       htmlOutput +=`
        <h2> ${data[i].name}</h2><br />
        <p> ${data[i].population}</p>
        <p> ${data[i].capital}</p>
        <p> ${data[i].region}</p>
        `;
   }

   $('.js-search-results').html(htmlOutput);

  }
  
  function watchSubmit() {
    $('.js-search-form').submit( e => {
        e.preventDefault();

        let queryTgt = $(e.currentTarget).find('.js-query');
        let query = queryTgt.val();

        queryTgt.val("");
        getDataFromApi(query, displaySearchData);

        console.log(query);

    })
  };
  
  $(watchSubmit);