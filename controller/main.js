$("document").ready(function(){
    var page = 1;
    var $cards = $("section#mtg-cards");
    var $win = $(window);
    console.log("DOCUMENT LOAD");

    $.ajax({
        method: "GET",
        url: "https://api.magicthegathering.io/v1/cards?page="+ page +"&pageSize=12"
    })
        .done(function(result){         
            
            for(let i = 0; i < result.cards.length; i++){
                $cards.append("<div class='mtg-card col-md-4'></div>");
                var $card = $("div.mtg-card:last-child");
                // TAGS
                $card.append("<h3>"+ result.cards[i].name +"</h3>");
                $card.append("<img src="+ result.cards[i].imageUrl +">");
            }
            page++;
        })

        .fail(function(){
            console.error("API NOT WORKING");
        });

    // SCROLL FUNCTION
	$win.scroll( function() {
        if ( $(document).height() - $win.height() == $win.scrollTop()) {
            $.ajax({
                method: "GET",
                url: "https://api.magicthegathering.io/v1/cards?page="+ page +"&pageSize=12",
                success: function(result) {
                        
                    for(let i = 0; i < result.cards.length; i++){
                        $cards.append("<div class='mtg-card col-md-4'></div>");
                        var $card = $("div.mtg-card:last-child");
                        // TAGS
                        $card.append("<h3>"+ result.cards[i].name +"</h3>");
                        $card.append("<img src="+ result.cards[i].imageUrl +">");
                    }
                    page++;
                }
            });
		}
    });
    
    // SEARCH FUNCTION
    $("button#search").click(function(){
        console.log("entra");
    });
});