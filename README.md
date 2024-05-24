# Evaluación Frontend Developer -24-05-24
_Jorge Joel Anaya Moreno_
_Frontend Developer_

___Este repositorio corresponde a una evaluación técnica para un proceso de postulación para el puesto de Frontend Developer___

# Parte 1: Conceptos Teóricos
-- **Explica la diferencia entre marging y padding en CSS**

Podría decirse que la diferencia es que la propiedad margin es el espaciado que se aplica hacia afuera del modelo de caja de CSS mientras que Padding es el espaciado que se aplica hacia adentro del modelo de caja

-- **¿Qué es el modelo de caja en CSS y cuales son los elementos principales**

El modelo de caja es la forma base en como podemos modelar y estilizar los componentes HTML sus elementos principales es el tamaño del contenido, el padding, el borde y el margin

-- **Explique el concepto de Hoisting en Javascript**

Hoisting es la forma en como el motor de Javascript "eleva" las declaraciones de variables y de funciones al inicio de un script para que estén disponibles las funciones y variables dentro del script

-- **¿Cual es la diferencia entre let, const y var en la declaración de variables?**

La diferencia principal se tiene al nivel del "alcance" (scope) de las variables el scope que tiene una variable tipo var es de alcance global o de función dependiendo de donde sea su declaracion, const y let tienen un nivel de alcance de tipo bloque, en parte la diferencia con var es que tanto const y let solo pueden ser declarados una sola vez, y let a diferencia de const puede ser reasignado.

-- **Describa como funciona el event bubbling en el contexto de eventos de Javascript**

Es el como el evento puede ir desde el primer elemento pasando por todos sus ancestros hasta llegar al nodo window, esto se puede prevenir deteniendo la propagación del evento  

-- **Responsive Web Design**
-- **¿Que son los media queries y cómo se utilizan en CSS par crear un diseño receptivo?**
Los media queries son las reglas que se aplican a una cantidad de pixeles en pantalla definida en CSS, nos permiten establecer estilos dependiendo del tamaño de la pantalla o el tipo de dispositivo, haciendo que las paginas web se adapten a diferentes tipos y tamaños de pantallas sin necesidad de trabajar una página aparte para cada dispositivo

-- **Menciona al menos dos técnicas para hacer que las imagines sean receptivas en una página web**

con CSS3:

El uso de la propiedad max-width al 100% y la propiedad de la altura de la imagen en automático, esto nos permite tener una imágen que se adapta al contenido del contenedor padre

con HTML5:

Usar la etiqueta picture con los sources de cada imagen a usar como si fueran media queries

# Parte 2 Ejercicio práctico
**-- Crea una página web simple con un encabezado, un párrafo de texto y un botón, cambia el texto de colod del fondo del párrafo de texto a otro color diferente**
[Solución en Github Pages](https://artick.github.io/EvaFront-24-05-24/practico-4/)
[Código en repositorio](https://github.com/Artick/EvaFront-24-05-24/tree/main/practico-4)

# Parte 3: Resolución de problemas
**-- Escribe una función en JavaScript que tome un arreglo de números como parámetro y devuelva el número más grande.**

```
let arreglo = [];
function mayorDelArreglo(arreglo) {
	let mayor;
	mayor = Math.max(...arreglo);
	return mayor;
}
```
[Solución en Github Pages](https://artick.github.io/EvaFront-24-05-24/practico-5/)
[Código en repositorio](https://github.com/Artick/EvaFront-24-05-24/tree/main/practico-5)


# Parte4: Proyecto Práctico

-- **Desarrolla un componente de barra de navegación (navbar) completamente responsivo utilizando HTML, CSS y opcionalmente JavaScript si es necesario.**
-- **Asegúrate de que la barra de navegación tenga al menos tres elementos de navegación y que se adapte adecuadamente a diferentes tamaños de pantalla.**
[Solución en Github Pages](https://artick.github.io/EvaFront-24-05-24/practico-6/)
[Código en repositorio](https://github.com/Artick/EvaFront-24-05-24/tree/main/practico-6)

-- **Crea tu CV como una página web integrando sass en donde este pueda ser descargado mediante un botón en formato pdf.**

[Solución en Github Pages](https://artick.github.io/EvaFront-24-05-24/)
[Código en repositorio](https://github.com/Artick/EvaFront-24-05-24/tree/main/practico-7)