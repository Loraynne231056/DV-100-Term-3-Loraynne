// ----------------------------------------------------------
// Trip Cards Array
// ----------------------------------------------------------

const arrTrips = [
    {
        name: "Icelandic Tour",
        locations: "Destinations: Reykjavik, Isafjordur, Akureyri, Husavik, Hofn, and more.", 
        duration: 7 + " days",
        price: "R" + 7000,
        description: "Have you ever wanted to see the hidden beauties of Iceland? This trip will take you all around this majestic island. Let's eat hangikjöt together and mull other the elves being apparently displeased by some offensive road they've deemed 'unimportant' and are now huanting the locals for. Never fear though, the goverment claims that 'Not all elves are nasty' so our cruises are not in danger of being sunk by 'Spoon Licker'.",
        image: "Vik Iceland.jpg"
    },
    {
        name: "Greenland Route",
        locations: "Destinations: Nuuk, Tasiilaq, Sisimiut, Qarqortoq, and Ilulissat", 
        duration: 10 + " days",
        price: "R" + 13000,
        description: "If you didn't know where Greenland was, this trip is for you. Finally discover the wonders of Greenland (geography failed you) and the lovely lack of greenery it has to offer. Discover glorious ice bergs that are no match for our 100% indestructable cruis ships, and visit Tang & Riis in Iceland... Oh wait, geography has failed me too. Join us and we can fail at geography together while eating hangikjöt in the wrong country.",
        image: "Tang & Riis.jpg"
    },
    {
        name: "Icelandic Tour",
        locations: "Destinations: Ranging from the Baltic Sea to Iceland and Greenland.", 
        duration: 2 + " weeks",
        price: "R" + 21000,
        description: "This tour goes to four different countries in search of arctic animals. You will get to see whales, harp seals, narwalls (the dollar store's verion of unicorns), and many more majestic animals that survive the coldest climates on earth. If you're thinking that this card doesn't contain my usual snark, it's because I'm tired and can't come up with good jokes.",
        image: "Penguin.jpg"
    }
];

// ----------------------------------------------------------
// Document Loads
// ----------------------------------------------------------

// When Loading
$(document).ready(function(){

// Hide the text on the cards when page loads
    $("#description").hide();


    
    loadTrips();
});
// ----------------------------------------------------------  
// Load trips
// ---------------------------------------------------------- 
 function loadTrips(){

    console.log(arrTrips);

    for (let i = 0; i < arrTrips.length; i++) {

        const trip = arrTrips[i];
        
        console.log(trip);
        
        // Select the trip container and add the trips array to it
        $("#tripContainer").append($("#tripTemplate").html());
    }
 };


// ----------------------------------------------------------  
// When Car is Clicked
// ---------------------------------------------------------- 

$(".card").click(function(){

    $("#price").toggle();
    $("#locations").toggle();
    $("#duration").toggle();
    $("#description").toggle();
    


});