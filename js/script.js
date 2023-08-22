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
     
    var pregIvan = "roger ivan,roger,roger ochoa,roger fernandez,ivan ochoa,ivan fernandez,ochoa fernandez";
    var Ivanx = pregIvan.split(",");
    var valorIvan = Ivanx.find(function (valor) {
        return text.includes(valor);
    })

    var pregJunior = "junior evaristo,junior jara,jose junior,jose evaristo,jose jara,jose";
    var Juniorx = pregJunior.split(",");
    var valorJunior = Juniorx.find(function (valor) {
        return text.includes(valor);
    })

    var pregHans = "arnold hans,arnold mays,arnold melendez,mays melendez,hans,mays";
    var Hansx = pregHans.split(",");
    var valorHans = Hansx.find(function (valor) {
        return text.includes(valor);
    })


    var pregMartin = "jherson hamilton,jherson martin,jherson artica,martin,hamilton martin,hamilton artica,jherson,hamilton";
    var Martinx = pregMartin.split(",");
    var valorMartin = Hansx.find(function (valor) {
        return text.includes(valor);
    })

    var pregFabian = "miguel angel,miguel fabian,fabian,angel fabian,fabian sangama,angel sangama,miguel sangama";
    var Fabianx = pregFabian.split(",");
    var valorFabian = Fabianx.find(function (valor) {
        return text.includes(valor);
    })


    var pregPelis = "muestrame peliculas,abre peliculas,reproduce peliculas,muestrame peli,peliculas";
    var Pelix = pregPelis.split(",");
    var valorPelit = Pelix.find(function (valor) {
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
    var peli = "Nombres, josé orlando, apellidos, castillo cornelio, dni, 46364875, dirección, Huánuco, LEONCIO PRADO, RUPA-RUPA, jirón Alfonso ugarte";
    var ivan = "Nombres, ROGER IVAN, apellidos, Ochoa Fernandez, dni, 76264195, dirección, SAN MARTIN, TOCACHE, PÓLVORA, CENTRO POBLADO NUEVO SAN MARTIN"
    var junior = "Nombres, JOSE JUNIOR, Apellidos, Evaristo Jara, dni, 77706675, dirección, Huánuco, PACHITEA, UMARI, CASERIO SAN MARCOS"
    var martin = "Nombres, JHERSON HAMILTON, Apellidos, Martin Artica, dni, 72756369, dirección, Huánuco, LEONCIO PRADO, JOSE CRESPO Y CASTILLO, MARIA PARADO DE BELLIDO MZ C"
    var hans = "Nombres, Arnold Hans, Apellidos, Mays Melendez, dni, 75696755, dirección, Huánuco, Leoncio Prado, Santo Domingo de Anda, Caserío Arabe"
    var fabian = "Nombres, Miguel Angel, Apellidos, Fabián Sangama, dni, 74950634, dirección, Huánuco, Leoncio Prado, Pueblo Nuevo"
    var pelis = "Abriendo Peliculas7"
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
    } else if (valorJunior) {
        speechUtterance.text = junior;
    } else if (valorIvan) {
        speechUtterance.text = ivan;
    } else if (valorHans) {
        speechUtterance.text = hans;
    } else if (valorMartin) {
        speechUtterance.text = martin;
    } else if (valorPelit) {
        speechUtterance.text = pelis;
        var link = document.createElement('a');
        link.href = "https://thezero27.github.io/PeliPlayer";
        link.target = "_blank"; // Te abre xD pero en otra pestaña
        link.click();
    } else if (valorFabian) {
        speechUtterance.text = fabian;
    } else if (valorRestn) {//AQUI
        speechUtterance.text = restaun;
        //open("https://thezero27.github.io/Restaurant-Fabian")
        var link = document.createElement('a');
        link.href = "https://thezero27.github.io/Restaurant-Fabian";
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
