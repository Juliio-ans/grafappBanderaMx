# Práctica Integradora 1.4 - Bandera de México

## Materia
Graficación

## Proyecto
Aplicación web para controlar los colores verde y rojo de la Bandera de México.

## Integrantes

- Díaz Jiménez Julio Emanuel - Número de control: 24200260
- Pérez Gomez Jocelyn Patricia - Número de control: 24200830

---

# Prompts utilizados en ChatGPT

## Prompt 1 - Creación de la aplicación

Ayúdame a crear una aplicación web de la Bandera de México utilizando HTML, CSS y JavaScript en archivos separados.

La aplicación debe mostrar la bandera dividida en tres franjas verticales: verde, blanco y rojo.

En la parte superior debe existir un control tipo range para modificar la intensidad del color verde y otro control tipo range para modificar la intensidad del color rojo.

Debajo de cada control debe mostrarse el código hexadecimal correspondiente al color seleccionado.

La franja blanca debe permanecer siempre en color blanco con el código hexadecimal #FFFFFF.

Los archivos deben llamarse:

- index.html
- style.css
- script.js

El programa debe funcionar correctamente utilizando Live Server en Visual Studio Code.

---

## Prompt 2 - Textos de los colores

Modifica la interfaz para que arriba de los controles de colores aparezcan los siguientes textos:

Para el color verde:

"Esperanza"

Para el color blanco:

"Unidad"

Para el color rojo:

"Sangre de nuestros héroes nacionales"

También quiero que debajo de cada control aparezca el código hexadecimal del color utilizado.

---

## Prompt 3 - Agregar el escudo

Ahora agrega el Escudo Nacional de México en el centro de la franja blanca de la bandera.

El escudo debe estar centrado horizontal y verticalmente y debe tener un tamaño proporcional para que no sobresalga de la franja blanca.

La imagen debe adaptarse correctamente al tamaño de la bandera.

---

## Prompt 4 - Mejorar el diseño

Ayúdame a mejorar el diseño de la aplicación.

Quiero que tenga una apariencia limpia, moderna y ordenada.

Agrega un contenedor principal centrado, bordes suaves, sombra y espacios adecuados entre los elementos.

El título principal debe decir:

"Bandera de México"

También debe aparecer:

"Graficación - Práctica 1.4"

y debajo:

"Control interactivo de los colores verde y rojo"

La aplicación debe seguir siendo responsiva para poder visualizarse correctamente en diferentes tamaños de pantalla.

---

## Prompt 5 - Agregar datos de los alumnos

Agrega debajo de la bandera los datos de los integrantes del equipo.

Somos dos alumnos.

Los datos deben mostrarse de manera ordenada y separados para cada integrante.

Alumno 1:

Díaz Jiménez Julio Emanuel

Número de control:

24200260

Alumno 2:

Pérez Gomez Jocelyn Patricia

Número de control:

24200830

Los datos deben aparecer debajo de la bandera sin afectar el funcionamiento de los controles.

---

## Prompt 6 - Corregir el escudo

El escudo de la Bandera de México no se visualiza cuando ejecuto la página con Live Server.

Corrige el código para que la imagen del escudo se cargue desde un archivo local dentro de la misma carpeta del proyecto y no dependa de una dirección de Internet.

Utiliza un archivo llamado:

escudo.png

El código HTML debe cargarlo de la siguiente manera:

<img src="escudo.png" alt="Escudo Nacional de México">

El escudo debe mantenerse centrado en la franja blanca.

---

## Prompt 7 - Versión final

Revisa toda la aplicación y asegúrate de que funcione correctamente.

La estructura final del proyecto debe contener:

- index.html
- style.css
- script.js
- escudo.png

La Bandera de México debe mostrar tres franjas verticales.

El color verde debe poder modificarse mediante un control deslizante.

El color blanco debe permanecer fijo.

El color rojo debe poder modificarse mediante otro control deslizante.

Se debe mostrar el código hexadecimal de cada color.

El Escudo Nacional de México debe aparecer centrado en la franja blanca.

Debajo de la bandera deben aparecer los nombres y números de control de los dos integrantes.

La aplicación debe funcionar correctamente utilizando Live Server en Visual Studio Code.

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Live Server
- Git
- GitHub

---

# Estructura del proyecto

graf-appBanderaMx/
│
├── index.html
├── style.css
├── script.js
├── escudo.png
└── README.md
