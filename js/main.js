$(".bitcoin-address").text("19356KxTs9Bw5AAdxens5hoxDSp5bsUKse")
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
