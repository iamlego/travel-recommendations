function executeSearch() {
    // Read the input value
    let prompt = document.getElementById('search').value.toLowerCase();

    // Fetch the JSON data
    fetch('./travel_recommendation_api.json') // Replace 'data.json' with the actual path to your JSON file
        .then(response => response.json())
        .then(data => {
            let result = [];
            console.log(prompt);

            // Search through countries
            data.countries.forEach(country => {
                country.cities.forEach(city => {
                    if (city.name.toLowerCase().includes(prompt) || city.description.toLowerCase().includes(prompt)) {
                        result.push(city);
                    }
                });
            });

            // Search through temples
            data.temples.forEach(temple => {
                if (temple.name.toLowerCase().includes(prompt) || temple.description.toLowerCase().includes(prompt)) {
                    result.push(temple);
                }
            });

            // Search through beaches
            data.beaches.forEach(beach => {
                if (beach.name.toLowerCase().includes(prompt) || beach.description.toLowerCase().includes(prompt)) {
                    result.push(beach);
                }
            });

            // console.log(result);
            let res_a = document.getElementById('right');
            console.log(res_a);
            if (result.length > 0) {
                result.forEach((des) => {
                    console.log(des);
                    let curr_res = document.createElement('div');
                    curr_res.innerHTML =  `<div class="card">
                        <h3>${des.name}</h3>
                        <img src="${des.imageUrl}" alt="${des.name}">
                        <p>${des.description}</p>
                         </div>`
                    res_a.appendChild(curr_res);
                })

                
            } 
                        

            // Display the results in a specific div with id 'result-area'
            // let res = document.getElementById('result-area');
            

        })
        .catch(error => console.error('Error fetching data:', error));
}
