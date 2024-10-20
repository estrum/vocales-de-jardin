// Función para obtener la imagen al azar
function getImagenAlAzar(letra, numero) {
  const imagenElement = document.getElementById(`imagen${numero}`);
  // Obtiene la lista de archivos de la carpeta
  fetch('../assets/images/')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const anchors = doc.querySelectorAll('a');

      // Filtra los archivos que comienzan con la letra seleccionada y tienen extensión de imagen
      const imagenes = Array.from(anchors).filter(anchor => {
        const href = anchor.getAttribute('href');
        return href.startsWith(`/assets/images/${letra}`) && ['jpg', 'jpeg', 'png', 'gif'].includes(href.split('.').pop());
      });

      // Selecciona una imagen al azar
      const imagenAlAzar = imagenes[Math.floor(Math.random() * imagenes.length)];
      
      // Muestra la imagen seleccionada
      if (imagenAlAzar) {
        const src = imagenAlAzar.getAttribute('href');
        const decodeSrc = decodeURIComponent(src)
        const imgtext = decodeSrc.split('/').pop().split('.')[0]

        imagenElement.src = decodeSrc;
        imagenElement.alt = decodeSrc;
        document.getElementById(`imgtxt${numero}`).innerHTML = imgtext
      } else {
        imagenElement.src = '';
        imagenElement.alt = 'No se encontró ninguna imagen';
      }
    })
    .catch(error => console.error(error));
}

//funcion para obtener parametro
function getParameterByName(name) {
  const url = window.location.href;
  const param = url.split('?')[1].split('&');
  for (let i = 0; i < param.length; i++) {
    const pareja = param[i].split('=');
    if (pareja[0] === name) {
      return pareja[1];
    }
  }
  return null;
}

// Asignamos valor del parametro:
const parametroLetra = getParameterByName('letra');
let magicNumber = 0

//creamos un array con las vocales para sacarle la letra
//obtenida por el parametro y usar el resto para los bloques
//erroneos
const vocales = ['A', 'E', 'I', 'O', 'U']
const vocalesFiltradas = vocales.filter(v => v != parametroLetra)

//creamos un numero aleatorio que sirve para asignar nuestra
//respuesta a uno de los 3 bloques
const numeroCorrecto = Math.ceil(Math.random() * 3);

//iteramos y asignamos la letra correcta a uno de los 3 bloques al azar
for(i = 1; i < 4; i++){
  if(i != numeroCorrecto){
    getImagenAlAzar(vocalesFiltradas[Math.floor(Math.random() * 4)], i)
  }else{
    getImagenAlAzar(parametroLetra, i)
    magicNumber = i
  }
}

//reproduce sonido y tira confetti
const player = document.getElementById('player');

document.getElementById('box1').onclick = () =>{
  if("box1" == `box${magicNumber}`){
    player.src = '../assets/sounds/yay.mp3'
    startConfetti();
  }else{
    player.src = '../assets/sounds/noo.mp3'
  }
  player.play();
}

document.getElementById('box2').onclick = () =>{
  if("box2" == `box${magicNumber}`){
    player.src = '../assets/sounds/yay.mp3'
    startConfetti();
  }else{
    player.src = '../assets/sounds/noo.mp3'
  }
  player.play();
}

document.getElementById('box3').onclick = () =>{
  if("box3" == `box${magicNumber}`){
    player.src = '../assets/sounds/yay.mp3'
    startConfetti();
  }else{
    player.src = '../assets/sounds/noo.mp3'
  }
  player.play();
}