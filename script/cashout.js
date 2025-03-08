document.getElementById("cashout-btn").addEventListener("click", 
    function(event){
        event.preventDefault();
        const pin = document.getElementById("cashout-pin").value;
        const convertedPin = parseInt(pin);
        const amount = document.getElementById("cashout-amount").value;
        const convertedAmount = parseFloat(amount);
        const mainBalance = document.getElementById("main-balance").innerText;
        const convertedMainBalance = parseFloat(mainBalance);

        const account = document.getElementById("account-number").value;
        const convertedAccount = parseInt(account);


        if (amount > convertedMainBalance) {
            alert("You don't have enough balance");
            return;
        }

        if (convertedPin === 1234) {
            const sum = convertedMainBalance - convertedAmount;
            document.getElementById("main-balance").innerText = sum;
            alert("Cashout successful");


            const container = document.getElementById("transection-history");
            const p = document.createElement("p");
            p.innerText = `You  Cashout $${convertedAmount} from this account ${convertedAccount}`;
            container.appendChild(p);
        }
        else {
            alert("Pin is incorrect");
        }

 })