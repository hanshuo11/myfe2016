define(function(){
    function checkArry(arr){
        if(arr instanceof Array){
            return true;
        }
        return false;
    }
    return checkArry;
})