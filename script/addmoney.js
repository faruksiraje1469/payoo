document.getElementById("add-money").addEventListener("click", 
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

        const account = document.getElementById("account-number").value;
        const convertedAccount = parseInt(account);

        const selectBank = document.getElementById("allbank").value;
        
        console.log(selectBank);


        if (convertedAmount < 0){
            alert("Please enter a valid amount");
            return;
        }
        else
        {
            alert("Money added successfully");
        }

        if (convertedPin === 1234){
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;

            const container = document.getElementById("transection-history");
            const p = document.createElement("p");
            p.innerText = `You Add Money $${convertedAmount} from this account ${convertedAccount}`;
            container.appendChild(p);
        }
        else{
            alert("Pin is incorrect");
        }


})