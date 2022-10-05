document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#currency-converter").addEventListener("submit", (event) => {



        event.preventDefault();

        const { target: { from, to, amount } } = event;

        let headers = new Headers();
        headers.append("apikey", "NoLNb7lMAqO0PRbnYwR7MG2E9Jf3D4n1");
        const requestOptions = {

            method: "GET",//put post delete 
            headers,


        }

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
            .then(response => response.json())
            .then(data => {

                let { info, date, query: { to }, result } = data;
                document.querySelector(".result").textContent = `As per the exchange rate :${info.rate} for ${data} => converted value in ${to} is ${result.toFixed(2)}`;
            }).catch(error => console.log(error));



    })
})