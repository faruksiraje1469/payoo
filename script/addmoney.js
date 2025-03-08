document.getElementById("addmoney-btn").addEventListener("click", 
    function(event){
        event.preventDefault();
        // input fiel hole dot value dite hoy
        const amount = document.getElementById("amount").value; 
        const convertedAmount = parseFloat(amount);
        const pin = document.getElementById("pin").value;
        const convertedPin = parseInt(pin);
        // h tag hole dot innerText dite hoy
        const mainBalance = document.getElementById("main-balance").innerText;
        const convertedMainBalance = parseFloat(mainBalance);



        if (convertedPin === 1234){
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;
           
        }
        else{
            alert("Pin is incorrect");
        }


})