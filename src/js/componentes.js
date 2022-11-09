
//importando el archivo de css
import '../css/componentes.css';
//importando imagenes
import webpacklogo from '../assets/img/webpack-logo.png';

//funcion
export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!!`;
    document.body.append(h1);

    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
}