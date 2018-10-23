//json object
var objJason = ["atest","btest","ctest","dtest","etest","ftest","gtest","htest","itest","jtest","ktest","ltest","mtest","ntest","otest","ptest"]

function getInfo(){
    //creating promise
    var promise =  new Promise(function(resolve, reject){
        
    //it'll wait untill the object's length to execute
        setTimeout(resolve(runThis()) ,objJason.length, {
            message: 'Promise is resolved'
        });
    });

    promise.then(function(data){    
        console.log("After converting to uppercase : ");
        console.log(data);
    }).catch(function(er){
        console.log(er);
        Error();
    });

    function runThis(){  
        if (objJason!=null){
            console.log("Initial object : ")
            console.log(objJason)

            var upobjJson = objJason.map(function(x){
                return x.toUpperCase();
            });
        }
        return upobjJson;
    }
}
window.onload = function(){
    getInfo();
}
