let user=document.getElementById("userId");
let pwd=document.getElementById("pwdId");


function validationSin(callback) {                              
    if(user.value.trim()==""||pwd.value.trim()==""){         
        alert("Fields  Cannot Be Empty"); 
        return false;
    }
    else{
            return callback();
    }
}
       
function validUser(){
    if(user.value == "admin" & pwd.value == "12345"){
            return true;
    }
    else{
            alert("Invalid Username or Password");
            return false;
    }
}

    var grid = document.getElementById("tab");


    var checkBoxes = grid.getElementsByTagName("INPUT");
    var count = 0;

    
    tab.addEventListener("input",boxChecked);
    function boxChecked(){
        var promise = new Promise(function(resolve,reject){
            for (var i = 0; i < checkBoxes.length; i++) {
                if (checkBoxes[i].checked) {
                    count++;
                }
            }
            if(count == 5){
                resolve("You have 5 completed");
            }
            else{
                reject("You can click up to 5");
            }

        });
        promise
        .then(function(){alert("Congrats!!! 5 Tasks have been Successfully Completed.");})
        .catch(function(e){console.log(e);})
        
        count = 0;
    }
   
  
    
    
    
    function myFunction() {
        location.replace("index.html")
      }
    

  
function ajax(){

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    
    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText); 
        
        console.log(response);
        var output=""
        
        
        for(var i=0;i<response.length;i++){
            var j=i+1;
            output += "<tr>"
            // output += "<td>" + j +"</td>";
            output += "<td>" + "<input type=checkbox id=\"check\" onCheck = GetSelected(); >" + "</td>"
            output += "<td>" + response[i].title +"</td>";
            
            
        }

        document.getElementById("demo").innerHTML=output;

    }
}

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

}