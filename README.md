# POKI (APP)
 Esta app está dirigida a guarderías para que se use como un herramienta de trabajo diaria que aporta rapidez y fluidez en la comunicacion "padre-profesor" y un extra en seguridad a la hora que alguno de los tutores legales del niño/a no puediera ir a recogerlo.

Con ella, los profesores podrán informar de:
- Incidentes:
    - Accidentes (golpes, tropezones, heridas, etc..)
    - Mal comportamiento 

- Comidas:
    - Almuerzo
    - Comida
    - Merienda

- Deposiciones:
    - Tipo
    - Color
    - Sangre/ Parásitos/ Mocos en heces

- Convocar tutoria.

- Crear eventos.

A la misma vez los padres podrán consultar toda esa información de sus hijos, sabiendo en todo momento si algo va mal, evitando las colas que se forman a la recogida de los niños de los centros infantiles/ guarderias. </br>

# Para poder empezar : 

La APP estará deployada en Heroku, si aún así prefieres descargarla y usarla por tu cuenta:
1. Instalar las dependencias citadas mas abajo.
2. Arranca el servidor con el comando: npm start

# Organizacion de la faena :
He utilizado diferentes herramientas para organizarme: </br>
Con AdobeXD hice un prototipado para hacerme una idea de que vistas iba a necesitar y como organizarlas </br>
![adobeXD](https://i.imgur.com/HYt6UDV.png) </br>
Utilicé MIRO para el diseño de la BBDD, pensar en los diagramas de flujo que podía tener mi APP, pensar en los colores que iba a utilizar, etc... ejemplos: </br>

![colores](https://i.imgur.com/trcDblh.png) </br>

El resto de organización ya fue un poco sobre papel por la falta de tiempo, al igual que algunos diseños 😅

![ejemplo_diseños](https://i.imgur.com/j75OnpP.jpg) </br>

También he utilizado la aplicación de Responsively, para poder hacer la APP responsive y tener de una forma rápida un vistazo de las vistas y ver si realmente es 100% responsive o no.

![responsively_1](https://i.imgur.com/noAtect.png)
![responsively_2](https://i.imgur.com/GdsxRjP.png)


# Tecnologías usadas :
![JS](https://i.imgur.com/lDoNwKn.png)
![HTML5 & CSS3](https://i.imgur.com/YGFHOGJ.png)
![React & Redux](https://i.imgur.com/MFdnMMW.png)

# Dependencias usadas :
- axios</br>
- moment</br>
- react</br>
- react-datetime-picker</br>
- react-dom</br>
- react-qr-code</br>
- react-redux</br>
- react-router-dom</br>
- react-scripts</br>
- redux</br>
- redux-localstorage-simple</br>

# Futuras actualizaciones :
- Acabar todo lo que falta de funcionalidades básicas.
- Agregar el menu de opciones para que se pueda modificar los perfiles y que los padres puedan completar información extra del niño, como por ejemplo sus alergias o si toman algun tipo de medicación crónica o puntual, indicarlo para que le llegue esa información al profesor.
- Mejorar la seguridad en la generación del QR.
- Mejorar el sistema de los reports, haciendo que sea más rápido y cómodo generarlo haciendo que salgan desplegables como por ejemplo en el report de la comida, que no tengas que escribir si el report es de almuerzo, comida o merienda.
- Mejorar el sistema de reports para que autogenere los campos de día y hora.
- Integrar el menú semanal del comedor para que en caso que un niño tenga alergia a algo del menú, salte un aviso al profesor.
- Mejorar las cards de los niños.
- Integrar en la parte de arriba de la card los números de teléfono de los padres y al pinchar sobre ellos, que llame.
- Integrar un botón de emergencias con los teléfonos más importantes (bomberos, emergencias, etc... )