$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getWeather(searchText);
        e.preventDefault();
    })
});

function getWeather(searchText) {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + searchText + '&APPID=2dd987c29db7d616537fa21ca1b301e4')
        .then((response) => {
            console.log(response);
            let weather_page = response.data;
            console.log('result: ',weather_page.name);

            let output = `
            <div class = "row">
                <div class = "col-md-4">
                    <img src= "https://www.thelocal.it/userdata/images/article/448c28d89b397330b0def227ddbbb2086ae2d23bc765964e27bbbc6492d1e563.jpg">
                </div>

                <div class ="col-md-8">
                    <h1>${searchText}</h1>
                        <ul class="list-group">
                        <li class="list-group-item"><strong>Location:</strong> ${weather_page.name}</li>
                        <li class="list-group-item"><strong>Description:</strong> ${weather_page.weather[0].description}</li>
                        <li class="list-group-item"><strong>Main:</strong> ${weather_page.weather[0].main}</li>
                        </ul>
                </div>
            </div>
            `;
            $('#weather').html(output)
        })

        .catch((err) => {
            console.log(err)
        })
}