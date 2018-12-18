$("document").ready(function(){
    console.log("DOCUMENT LOAD");

    $.ajax({
        url: "https://api.magicthegathering.io/v1/cards",
        succes: function(){
            console.log(cards);
        }
    });
});