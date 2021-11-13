let downs = document.querySelectorAll('.btn, .button');
let tariffs = document.querySelectorAll('.change');
let getTariff = document.querySelector('.price_heading')
let freeTariff = document.querySelector('.heading')
let changeButtons = document.querySelectorAll('.btn1')
let yearPrice=0;



for (let down of downs) {
    down.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector('.price').scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    })
}

for (let tariff of tariffs) {
    tariff.addEventListener('click',function (e){
       if( e.target.textContent==='Yearly'){
           freeTariff.textContent = '$49/month';
           getTariff.textContent ='$29/month';
            document.getElementById('yearly').classList.add('active_change');
           document.getElementById('monthly').classList.remove('active_change');
       }
       if(e.target.textContent==='Monthly'){
            getTariff.textContent='$69/month';
           freeTariff.textContent= '$89/month';
           document.getElementById('monthly').classList.add('active_change');
           document.getElementById('yearly').classList.remove('active_change');
       }


    })
}

for (let changeButton of changeButtons ) {
    changeButton.addEventListener('click', function (e) {
        if (e.target.id === 'free') {
            document.getElementById("starter").classList.add('active_card');
            document.getElementById('premium').classList.remove('active_card');
            document.getElementById('enterprise').classList.remove('active_card');
            console.log('Название выбранного тарифа : ' + document.getElementById('name_starter').innerText);
            console.log('Месячная стоимость: ' + document.getElementById('price_starter').innerText);
            console.log('Годовая стоимость: ' + document.getElementById('price_starter').innerText);
        }
        if (e.target.id === 'prem') {
            document.getElementById("premium").classList.add('active_card');
            document.getElementById('starter').classList.remove('active_card')
            document.getElementById('enterprise').classList.remove('active_card');
            console.log('Название выбранного тарифа : ' + document.getElementById('name_premium').innerText);
            console.log('Месячная стоимость: ' + document.getElementById('price_premium').innerText);
            yearPrice = parseInt('document.getElementById[price_premium]',10)*12;
            console.log('Годовая стоимость: ' + '$'+yearPrice+'/moth');
        }
        if (e.target.id === 'enter') {
            document.getElementById("enterprise").classList.add('active_card');
            document.getElementById('premium').classList.remove('active_card')
            document.getElementById('starter').classList.remove('active_card');
            console.log('Название выбранного тарифа : ' + document.getElementById('name_enterprise').innerText);
            console.log('Месячная стоимость: ' + document.getElementById('price_enterprise').innerText);





        }})}

