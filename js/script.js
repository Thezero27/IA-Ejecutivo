// Obtener la voz femenina
function getFemaleVoice() {
    var voices = speechSynthesis.getVoices();
    // Buscar la voz específica
    var voice = voices.find(function (voice) {
        return voice.name === "Microsoft Sabina - Spanish (Mexico)";
    });
    return voice;
}



// API de Clima
const apiKey = '0b15df09486e5a9db2cf2f9a615cee08';
const ciudad = 'Tingo Maria';
var clima;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const climaActual = data;
        const temperaturaKelvin = climaActual.main.temp;
        const temperaturaCelsius = temperaturaKelvin - 273.15;
        clima = "El clima en Tingo Maria es " + temperaturaCelsius.toFixed(2) + "°C";

        // Aquí puedes realizar otras operaciones con el clima actual si es necesario
    })
    .catch(error => {
        console.error('Error al obtener los datos del clima:', error);
    });

var btnEnviar = document.getElementById("btnE");
btnEnviar.onclick = function () {
    // Preguntas NOMBRE DE IA
    var preguntaNom = "cual es tu nombre,como te llamas";
    var text = document.getElementById("text-to-speech").value;
    var valores = preguntaNom.split(",");
    var valorEncontrado = valores.find(function (valor) {
        return text.includes(valor);
    });

    // PREGUNTA SI QUIERE SER TU AMIGA   
    var pregAmiga = "puedes ser mi amiga,quiero ser tu amiga";
    var Amigos = pregAmiga.split(",");
    var valorAmigo = Amigos.find(function (valor) {
        return text.includes(valor);
    });

    // PREGUNTA QUE PELICULA RECOMIENDAS
    var pregPeli = "jose castillo,jose orlando,orlando castillo,orlando cornelio,jose cornelio";
    var Pelicula = pregPeli.split(",");
    var valorPeli = Pelicula.find(function (valor) {
        return text.includes(valor);
    });

    // PREGUNTA DEL CLIMA--------   
    var pregClim = "como esta el clima,como va el clima,va llover";
    var Climax = pregClim.split(",");
    var valorClime = Climax.find(function (valor) {
        return text.includes(valor);
    });

    // REDIRECCIONAR A WEBSITE DE SEARCH-DNI
    var pregDni = "buscar dni,hallar dni,dni por nombre,consultar dni";
    var Dnisearch = pregDni.split(",");
    var valorDni = Dnisearch.find(function (valor) {
        return text.includes(valor);
    });

    var pregRest = "tengo hambre,que hay de comer,muestrame el menu,go restaurant,Tengo hanbre,Muestrame el menu,dame el lista del restaurante,muestrame el restaurante";
    var Restn = pregRest.split(",");
    var valorRestn = Restn.find(function (valor) {
        return text.includes(valor);
    })
     





    var fechaActual = new Date(); // Obtener la fecha y hora actual
    var horaExacta = fechaActual.toLocaleTimeString(); // Obtener la hora exacta en formato de cadena

    console.log(horaExacta); // Imprimir la hora exacta en la consola

    // Respuestas
    var nombreIA = "Mi nombre es Valeria y me crearon para estar a tu lado y poder ayudarte en lo que necesites";
    var friends = "No se diga más, a partir de ahora, siendo " + horaExacta + ", me declaro tu amiga incondicional";
    var fue = "No entiendo lo que me quieres decir, aún estoy en desarrollo y no logro entender muchas cosas";
    var mantenimientoxt = "Servicio no disponible por temas de mantenimiento Fabian esta mejorando dicho servicio, puedes revisar en la tabla los diferentes comandos";
    var mantenimientox = "Para buscar personas solo escriba un nombre y un apellido"
    var peli = "Nombres, josé orlando, apellidos, castillo cornelio, dni, 46364875, dirección, HUANUCO, LEONCIO PRADO, RUPA-RUPA, jirón Alfonso ugarte";
    var restaun = "Abriendo Menú ejecutivo";

    var speechSynthesis = window.speechSynthesis;
    var speechUtterance = new SpeechSynthesisUtterance();

    // Establecer la voz femenina
    speechUtterance.voice = getFemaleVoice();

    if (valorEncontrado) {
        speechUtterance.text = nombreIA;
    } else if (valorAmigo) {
        speechUtterance.text = friends;
    } else if (valorPeli) {
        speechUtterance.text = peli;
    } else if (valorClime) {
        speechUtterance.text = clima;
    } else if (valorDni) {
        speechUtterance.text = mantenimientox;
    } else if (valorRestn) {//AQUI
        speechUtterance.text = restaun;
        //open("https://thezero27.github.io/Restaurant-Fabian")
        var link = document.createElement('a');
        link.href = "https://thezero27.github.io/PelixPlayer";
        link.target = "_blank"; // Te abre xD pero en otra pestaña
        link.click();
    } else {
        speechUtterance.text = fue;
    }

    speechSynthesis.speak(speechUtterance);
};

window.speechSynthesis.onvoiceschanged = function () {
    var voices = window.speechSynthesis.getVoices();
    console.log(voices);
};
