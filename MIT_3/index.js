var in1= document.getElementById("in1").value="First Name"
var in2= document.getElementById("in2").value="Last Name"
var in3= document.getElementById("in3").value="Email Address"
var in4= document.getElementById("in4").value="Password"
function work(){
    var in1= document.getElementById("in1").value
var in2= document.getElementById("in2").value
var in3= document.getElementById("in3").value
var in4= document.getElementById("in4").value
if(in1.length==0){
var p1 =document.getElementById("p1")
p1.innerHTML="First name cannot be empty"


}
if(in2.length==0){
var p2 =document.getElementById("p2")
 p2.innerHTML="Last name cannot be empty"
        
        
}
 if(in3.length==0){
 var p3 =document.getElementById("p3")
p3.textContent=" Looks like this is not an Email"
        
 }
 if(in4.length==0){
 var p4 =document.getElementById("p4")
 p4.textContent="password cannot be empty"
            
 }

if(in1==in4){
 p1.innerHTML="First name and password should not be same"
 p4.innerHTML="First name and password should not be same"
}
if(in1.length<4){
 p1.innerHTML="Username should contain atleast 4 characters"
}      
if(in4.length!=0&&in4.length<6||in4.length>16){
    var p4=document.getElementById("p4")
    p4.textContent="Password should contain minimum 6 and maximum 16 characters "
   
   }   
if(in2.length<4){
    p1.innerHTML="Username should contain atleast 4 characters"
   }           

//  if(in4.length>6&&in4.length>16){
//     var a=in4.toUppercase()
//     for(i=0;i<in4.length;i++){
//         if(in4.charAt(i)!=a.charAt(i)){
//           p4.textContent=""
//         }
//     }

//     }
 
         
           

}