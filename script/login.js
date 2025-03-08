document.getElementById("login-btn").addEventListener("click", 
    function(event) {

        // stop reloading the page
       event.preventDefault();

       //    store the value 
       const accountNumber = document.getElementById("account-number").value;
       const pin = document.getElementById("pin").value;

       //    convert the pin to integer
       const convertedPin = parseInt(pin);

    //    validate the account number and pin
       if (accountNumber.length === 11){
        if (convertedPin === 1234){
            // console.log("Account number is correct");
            window.location.href = "./main.html";
           
        }
        else{
            alert("Pin is incorrect");
        }
       }
         else{
          alert("Account number is incorrect");
         }
    

});