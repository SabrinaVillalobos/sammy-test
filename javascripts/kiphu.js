window.onload = function () {
    var khipu = require ('khipu-api-client');
    KhipuLib.onLoad({
        elementId: 'pay-button'
        , data: {
                "id":"vzkeh1wk82ax"
                ,"bill-id":"V1A6y"
                ,"url":"https://khipu.com/payment/show/vzkeh1wk72ax"
                ,"manual-url":"https://khipu.com/payment/manual/vzkeh1wk72ax"
                ,"mobile-url":"khipu:///pos/vzkeh1wk72ax"
             ,"ready-for-terminal":true}
    })
}