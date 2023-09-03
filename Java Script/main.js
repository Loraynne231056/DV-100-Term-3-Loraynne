// ----------------------------------------------------------
// Trip Cards Array
// ----------------------------------------------------------

const arrTrips = [
    {
        name: "Icelandic Tour",
        locations: "Destinations: Reykjavik, Iceland", 
        duration: 10 + " Days",
        price: 7000,
        description: "Have you ever wanted to go to insufferably cold place like Island? Let's eat hangikjöt together and mull other the elves being apparently displeased by some offensive road they've deemed 'unimportant' and are now haunting the locals for. Never fear though, the goverment claims that 'Not all elves are nasty' so our cruises are not in danger of being sunk by 'Spoon Licker'.",
        image: "Vik Iceland.jpg",
        destinations: "single",
        time:"2023-05-12"
    },
    {
        name: "Greenland Route",
        locations: "Destinations: Nuuk, Greenland", 
        duration: 7 + " Days",
        price: 13000,
        description: "If you didn't know where Greenland was, this trip is for you. Finally discover Greenland and the lovely lack of greenery it has to offer. Discover glorious ice bergs that are no match for our 100% indestructable cruis ships, and visit Tang & Riis in Iceland... Oh wait, geography has failed me too. Join us and geography can fail us together while we eat hangikjöt on the wrong island.",
        image: "Tang & Riis.jpg",
        destinations: "single",
        time: "2023-08-29"
    },
    {
        name: "Animal Tour",
        locations: "Destinations: Ranging from the Baltic Sea to Iceland and back", 
        duration: 18 + " Days",
        price: 21000,
        description: "This tour goes to four different countries in search of arctic animals. You will get to see whales, harp seals, narwalls (the dollar store's verion of unicorns), and many more majestic animals that survive the coldest climates on earth. If you're thinking this card doesn't contain snark, it's because I'm tired and my life is sad. If you don't want to be sad, you better pay up and join the cruise.",
        image: "Penguin.jpg",
        destinations: "round",
        time: "2023-03-09"
    },
    {
        name: "Baltic Cruise",
        locations: "Destinations: Denmark, Norway, Sweden, Finland, and Poland", 
        duration: 5 + " Days",
        price: 9000,
        description: "Discover the beautiful lands surrounding the Blatic sea. Everyone keeps forgetting about the actual Baltic States, but for the purposes of this cruise we will also ignore them. Sorry Latvia and your (literally) bloody old flag, but we will have to skip you.",
        image: "Beach.jpg",
        destinations: "multi",
        time: "2023-10-01"
    },
    {
        name: "Forgotten Lands Cruise",
        locations: "Destinations: Latvia, Lithuania, and Estonia", 
        duration: 14 + " Days",
        price: 17000,
        description: "Welcome to the forgotten lands cruise. Discover places that even the ship captain does know exists. Emmerse yourself in that glorious brackish water, the (not creepy at all) hill of crosses, the lush forests, bloody flags, lynxes, and of course the bears spas. Great Velyke while your at it and tell her she's a piece of shit for not giving me easter eggs that one year. I remember you Velyke. ",
        image: "Tallin.jpg",
        destinations: "multi",
        time: "2023-03-28"
    },
    {
        name: "Iceberg Tour",
        locations: "Destinations: To the icebergs and back.", 
        duration: 15 + " Days",
        price: 16000,
        description: "Let's go see some majestic Icebergs and come back! Emphasis on coming back. Did you know that going to view icebergs is objectively a better life decision than having to deal with that bloody guy Dave. Oh yes... Dave the anthropomorphic version of dev. His mother must be proud.",
        image: "Iceberg.jpg",
        destinations: "round",
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
    $("#cardButton").hide();

    filterSortTrips(arrTrips);

// Hide the text on the carousel
setTimeout(function(){
    $("#vacation").fadeOut(400, function(){
        $("#vacation").text('Welcome to your Cruise Bob.').fadeIn(400);
    });
},5000);

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
        currentTrip.find("#cardButton").hide();

        $(".evilLogo").hover(function() { 
            $(this).attr("src", "../Assets/" + "LogoWhite.png"); 
          }, 
          function() { 
            $(this).attr("src", "../Assets/" + "LogoBlack.png"); 
          } 
        ); 
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
    $(this).find("#cardButton").toggle();
   

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
        let currentWeather = $(".weatherFucker").children().eq(i+2);

        // Content for current trip array
        currentWeather.find(".weatherPic").attr('src', weather.weatherImage);
        currentWeather.find("#city").text(weather.cityName);
        
        
    }
 };


// Hide cart items

$(".cancel-one").click(function(){
    $(".minus-first").remove();
  })
  $(".cancel-two").click(function(){
    $(".minus-second").remove();
  })
  $(".cancel-three").click(function(){
    $(".minus-third").remove();
  })
  $(".cancel-four").click(function(){
    $(".minus-fourth").remove();
  })
  $(".cancel-all").click(function(){
    $(".minus-first, .minus-second, .minus-third, .minus-fourth").remove();
  })

  // Total Cost

