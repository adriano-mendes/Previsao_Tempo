const key = '9619681c24d010f363a9cdc00e4c948d'

function dadosTela(dados) {
    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector('.txt-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = 'Umidade: ' + dados.main.humidity + '%'
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    dadosTela(dados)
}

function buscar() {
    const cidade = document.querySelector('.input-cidade').value
    buscarCidade(cidade)
}