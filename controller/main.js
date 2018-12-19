$("document").ready(function(){
    var page = 1;
    var $cards = $("section#mtg-cards");
    console.log("DOCUMENT LOAD");

    $.ajax({
        method: "GET",
        url: "https://api.magicthegathering.io/v1/cards?page="+ page +"&pageSize=12"
    })
        .done(function(result){
            console.log(result);

            $cards.append("<div class='mtg-card'></div>");
            var $mtg_card = $("div.mtg-card");
            // TAGS
            $mtg_card.append("<h3>"+ result.cards[0].name +"</h3>");
            $mtg_card.append("<img src="+ result.cards[0].imageUrl +">")

        })

        .fail(function(){
            console.error("API NOT WORKING");
        });
});