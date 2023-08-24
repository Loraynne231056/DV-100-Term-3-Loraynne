// ----------------------------------------------------------
// Trip Cards Array
// ----------------------------------------------------------

const arrTrips = [
    {
        name: "Icelandic Tour",
        locations: "Destinations: Reykjavik, Isafjordur, Akureyri, Husavik, Hofn, and more.", 
        duration: 7 + " days",
        price: 7000,
        description: "Have you ever wanted to see the hidden beauties of Iceland? This trip will take you all around this majestic island. Let's eat hangikjöt together and mull other the elves being apparently displeased by some offensive road they've deemed 'unimportant' and are now haunting the locals for. Never fear though, the goverment claims that 'Not all elves are nasty' so our cruises are not in danger of being sunk by 'Spoon Licker'.",
        image: "Vik Iceland.jpg",
        destinations: "arctic",
        time:"2023-05-12"
    },
    {
        name: "Greenland Route",
        locations: "Destinations: Nuuk, Tasiilaq, Sisimiut, Qarqortoq, and Ilulissat", 
        duration: 10 + " days",
        price: 13000,
        description: "If you didn't know where Greenland was, this trip is for you. Finally discover the wonders of Greenland (geography failed you) and the lovely lack of greenery it has to offer. Discover glorious ice bergs that are no match for our 100% indestructable cruis ships, and visit Tang & Riis in Iceland... Oh wait, geography has failed me too. Join us and we can fail at geography together while eating hangikjöt in the wrong country.",
        image: "Tang & Riis.jpg",
        destinations: "arctic",
        time: "2023-08-29"
    },
    {
        name: "Animal Tour",
        locations: "Destinations: Ranging from the Baltic Sea to Iceland and Greenland.", 
        duration: 2 + " weeks",
        price: 21000,
        description: "This tour goes to four different countries in search of arctic animals. You will get to see whales, harp seals, narwalls (the dollar store's verion of unicorns), and many more majestic animals that survive the coldest climates on earth. If you're thinking that this card doesn't contain my usual snark, it's because I'm tired and my life is sad (today). If you don't want to be sad, you better pay up that R21000 and join the cruise. Please pay me.",
        image: "Penguin.jpg",
        destinations: "baltic",
        time: "2023-03-09"
    },
    {
        name: "Baltic Cruise",
        locations: "Destinations: Denmark, Norway, Sweden, Finland, and Poland", 
        duration: 5 + " days",
        price: 9000,
        description: "Discover the beautiful lands surrounding the Blatic sea. Everyone keeps forgetting about the actual Baltic States, but for the purposes of this cruise we will also ignore them. Sorry Latvia and your (literally) bloody old flag, but we will have to skip you.",
        image: "Beach.jpg",
        destinations: "baltic",
        time: "2023-10-01"
    },
    {
        name: "Forgotten Lands Cruise",
        locations: "Destinations: Latvia, Lithuania, and Estonia", 
        duration: 15 + " Days",
        price: 17000,
        description: "Welcome to the forgotten lands cruise. Discover places that even the ship captain does not know about. Emmerse yourself in that glorious brackish water, the (not creepy at all) hill of crosses, the lush forests, bloody flags, lynxes, and of course the bears spas. Great Velyke while your at it and tell her she's a piece of shit for not giving me easter eggs that one year. I remember you Velyke. ",
        image: "Tallin.jpg",
        destinations: "baltic",
        time: "2023-03-28"
    }
];

const weatherThing = [
    {
        weatherImage: "../Assets/Beach.jpg",
        cityName: "Sopot"
    },
    {
        weatherImage: "../Assets/Tallin.jpg",
        cityName: "Talin"
    },
    {
        weatherImage: "../Assets/Copenhagen.jpg",
        cityName: "Copenhagen"
    }
    
];

let appliedFilter = "";
let appliedSort = "time required";

// ----------------------------------------------------------
// Document Loads
// ----------------------------------------------------------

// When Loading
$(document).ready(function(){

// Hide the text on the cards when page loads
    $("#description").hide();

    filterSortTrips(arrTrips);
});
// ----------------------------------------------------------  
// Load trips
// ---------------------------------------------------------- 
 function loadTrips(tripsToShow){

    console.log(tripsToShow);

    // Clear the Elements in the Container

    $("#tripContainer").empty();

    // Loop through the shit

    for (let i = 0; i < tripsToShow.length; i++) {

        const trip = tripsToShow[i];
        
        console.log(trip);

        // Select the trip container and add the trips array to it
        $("#tripContainer").append($("#tripTemplate").html());

        // variable for current trip
        let currentTrip = $("#tripContainer").children().eq(i);

        // Content for current trip array
        currentTrip.find("#title").text(trip.name);
        currentTrip.find("#location").text(trip.locations);
        currentTrip.find("#duration").text(trip.duration);
        currentTrip.find("#price").text(trip.price);
        currentTrip.find("#description").text(trip.description);
        currentTrip.find("#imageTag").attr('src', "Assets/" + trip.image);

        // Hide discription text from current trip 
        currentTrip.find("#description").hide();
    }
 };

// ----------------------------------------------------------  
// When a Filters or Sorts is Clicked
// ---------------------------------------------------------- 

$("input[name='filterRadio']").click(function(){

    appliedFilter = $(this).attr('value');

    console.log(appliedFilter);

    filterSortTrips();

});

$("input[name='sortRadio']").click(function(){

    appliedSort = $(this).attr('value');

    console.log(appliedSort);

    filterSortTrips();

});

function filterSortTrips (){

    let filterSortArrTrips = [];

    // Filter the Trips

    if(appliedFilter){
        filterSortArrTrips = arrTrips.filter(trip => trip.destinations == appliedFilter);
    } else {
        filterSortArrTrips = arrTrips;
    }

    // Sort the Trips

    if(appliedSort == "low to high"){

        // Sort the Trips from Low to High Cost
        filterSortArrTrips = filterSortArrTrips.sort((a,b) => {
            return a.price - b.price;
        });

     } else if(appliedSort == "time required") {

        // Sort Trips from Short to Long Trips
        filterSortArrTrips = filterSortArrTrips.sort((a,b) => {
            let da = new Date(a.time);
            let db = new Date(b.time);

            return db - da;
     });
    }

    loadTrips(filterSortArrTrips);
};




// ----------------------------------------------------------  
// When Card is Clicked
// ---------------------------------------------------------- 

$("#tripContainer").on('click', '.card', function(){

    $(this).find("#price").toggle();
    $(this).find("#locations").toggle();
    $(this).find("#duration").toggle();
    $(this).find("#location").toggle();
    $(this).find("#description").toggle();

});

// Weather Thing 

$(document).ready(function(){
    loadWeatherThing()
});

function loadWeatherThing(){

    // Loop through the shit

    for (let i = 0; i < weatherThing.length; i++) {

        const weather = weatherThing[i];
        
        $.ajax({
            type:"GET",
            url:"https://api.openweathermap.org/data/2.5/weather?q=" + weather.cityName +"&appid=ee6722071b8e9b2573d5fc48096d8600",
            success:function(data){
                cityWeather = data
            }
        }).done(function(){
            $(currentWeather).find("#temperature").text(Math.round(cityWeather.main.temp-273) + " Celsius");
            $(currentWeather).find("#feelz").text("Feels like: " + Math.round(cityWeather.main.feels_like-273));
            $(currentWeather).find("#main").text(cityWeather.weather[0].main);
            
        })

        

        // Select the trip container and add the trips array to it
        $(".weatherFucker").append($("#weatherTemp").html());

        // variable for current weather
        let currentWeather = $(".weatherFucker").children().eq(i+1);

        // Content for current trip array
        currentWeather.find(".weatherPic").attr('src', weather.weatherImage);
        currentWeather.find("#city").text(weather.cityName);
        
        
    }
 };