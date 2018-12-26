$("document").ready(function(){
    var page = 1;
    var $cards = $("section#mtg-cards");
    var $win = $(window);

    // INITIAL PETITION
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
    
    // SEARCH FUNCTION
    $("button#search").click(function(){
        var name;
        if( !$("input#search").val() ){
            $("input#search").css("border-color","red");
        }else{
            name = $("input#search").val();
            $.ajax({
                method: "GET",
                url: "https://api.magicthegathering.io/v1/cards?page="+ page +"&pageSize=12&name=" + name,
                success: function(result){
                    $(".mtg-card").hide();
                    for(let i = 0; i < result.cards.length; i++){
                        $cards.append("<div class='mtg-card col-md-4'></div>");
                        var $card = $("div.mtg-card:last-child");
                        // TAGS
                        $card.append("<h3>"+ result.cards[i].name +"</h3>");
                        $card.append("<img src="+ result.cards[i].imageUrl +">");
                    }
                }
            });
        }
    });

    // WHITE
    $("a#white").click(function(){
        $.ajax({
            method: "GET",
            url: "https://api.magicthegathering.io/v1/cards?page=1&pageSize=12&colors=white",
            success: function(result){
                $(".mtg-card").hide();
                for(let i = 0; i < result.cards.length; i++){
                    $cards.append("<div class='mtg-card col-md-4'></div>");
                    var $card = $("div.mtg-card:last-child");
                    // TAGS
                    $card.append("<h3>"+ result.cards[i].name +"</h3>");
                    $card.append("<img src="+ result.cards[i].imageUrl +">");
                }
            }
        });
    });

    // BLUE
    $("a#blue").click(function(){
        $.ajax({
            method: "GET",
            url: "https://api.magicthegathering.io/v1/cards?page=1&pageSize=12&colors=blue",
            success: function(result){
                $(".mtg-card").hide();
                for(let i = 0; i < result.cards.length; i++){
                    $cards.append("<div class='mtg-card col-md-4'></div>");
                    var $card = $("div.mtg-card:last-child");
                    // TAGS
                    $card.append("<h3>"+ result.cards[i].name +"</h3>");
                    $card.append("<img src="+ result.cards[i].imageUrl +">");
                }
            }
        });
    });

    // RED
    $("a#red").click(function(){
        $.ajax({
            method: "GET",
            url: "https://api.magicthegathering.io/v1/cards?page=1&pageSize=12&colors=red",
            success: function(result){
                $(".mtg-card").hide();
                for(let i = 0; i < result.cards.length; i++){
                    $cards.append("<div class='mtg-card col-md-4'></div>");
                    var $card = $("div.mtg-card:last-child");
                    // TAGS
                    $card.append("<h3>"+ result.cards[i].name +"</h3>");
                    $card.append("<img src="+ result.cards[i].imageUrl +">");
                }
            }
        });
    });

    // BLACK
    $("a#black").click(function(){
        $.ajax({
            method: "GET",
            url: "https://api.magicthegathering.io/v1/cards?page=1&pageSize=12&colors=black",
            success: function(result){
                $(".mtg-card").hide();
                for(let i = 0; i < result.cards.length; i++){
                    $cards.append("<div class='mtg-card col-md-4'></div>");
                    var $card = $("div.mtg-card:last-child");
                    // TAGS
                    $card.append("<h3>"+ result.cards[i].name +"</h3>");
                    $card.append("<img src="+ result.cards[i].imageUrl +">");
                }
            }
        });
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

});