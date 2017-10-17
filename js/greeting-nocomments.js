(function(){
  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  let myHeader = document.getElementById("my-header");//this is me
  //ADD ANOTHER GETELEMENTBYID
	
  
  function PerformGreeting() {
    myName.innerHTML = userName.value;
	myHeader.innerHTML = userName.value;//this is me
	//COPY LINE ABOVE BUT USE THE VARIABLE HOLDING YOUR H2 ID
    event.preventDefault();
    return false;
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
  } else {
    getName.addEventListener("submit", PerformGreeting);
  }
  
}());
