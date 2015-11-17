$.get("http://sleepy-caverns-2145.herokuapp.com/address", function(data) {
    $(".loading").hide();
    $(".bitcoin-address").attr("data-bc-address", data) 
    bitcoinaddress.init({
        selector: ".bitcoin-address",
        template: "bitcoin-address-template",
        qr : {
            width: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff"
        },
        qrRawAddress: false
    });
});