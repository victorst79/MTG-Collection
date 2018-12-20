$("document").ready(function(){
    var page = 1;
    var $cards = $("section#mtg-cards");
    console.log("DOCUMENT LOAD");

    $.ajax({
        method: "GET",
        url: "https://api.magicthegathering.io/v1/cards?page="+ page +"&pageSize=12"
    })
        .done(function(result){
            console.log(result.cards.length);

            
            for(let i = 0; i < result.cards.length; i++){
                $cards.append("<div class='mtg-card'></div>");
                var $mtg_card = $("div.mtg-card");
                
                // TAGS
                $mtg_card.append("<h3>"+ result.cards[i].name +"</h3>");
                $mtg_card.append("<img src="+ result.cards[i].imageUrl +">");
            }
        })

        .fail(function(){
            console.error("API NOT WORKING");
        });
});