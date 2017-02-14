require(["jquery","dialog"],function($,Dialog){
    $("#open").on('click',function(){
        var settings={
            width:600,
            height:500,
            title:"HS",
            content:"form.html"
        };
        var dialog=new Dialog();
        dialog.open(settings);
    });
})
