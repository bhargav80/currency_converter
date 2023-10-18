const url = 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=USD&want=EUR&amount=5000';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cc13dad59amsh37b111c061b3fe6p1da314jsn1763daa489c5',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
    }
};


function getCurrency() {
    let cur1 = document.getElementById("cur1").value;
    let cur2 = document.getElementById("cur2").value;
    const url = 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have='+cur1+'&want='+cur2+'&amount='+document.getElementById("amount").value;
    console.log(cur1);
    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            new_amount.innerHTML = response.new_amount;

        })
        .catch(err => console.error(err));

}

document.getElementById("submit").addEventListener("click", getCurrency);

//getCurrency();
console.log("Hello");