Cinco prácticas básicas de JavaScript para el módulo Desarrollo web en entorno CLIENTE

1 .- Lectura de números

Crea una página web que pida al usuario un número a través de un cuadro de lectura(prompt). Un cuadro de mensaje indica si realmente era un número o no, lo que escribió el usuario.

2 .- Fondo aleatorio

Crear una página web que muestre un color de fondo aleatorio cada vez que entremos en ella.

#fondo{

position:fixed;

left:0;

top:0;

width:100%;

height:100%;
} 3 .- Adivinar un número

Haz una página web que implemente un juego de encontrar un número aleatorio bajo las premisas que se explican a continuación:

La página calculará un número del 1 al 100.

Luego preguntará al usuario por el número.

Si el usuario escribe algo que no es un número, se indica el error de número inválido y solicita un número valor.

Si el número escrito por el usuario es correcto, se indica que se acertó y finalizaremos el juego.

Si no, le dice si el número es menor o mayor y vuelve a preguntar cuál es.

Si se cancela cualquier cuadro, el juego termina indicando que se canceló el juego.

Al final, si ha finalizado correctamente el juego se indica el número de intentos.

Se permite volver a jugar al usuario mediante un cuadro de confirmación

----> Ampliación sobre ejercicio 3

a) Almacenar en un array los diferentes valores introducidos (almacenar en otro array los números repetidos).

c) Comprobar si el número introducido es repetido

d) Mostrar en una tabla, las diferentes partidas.....

Número Final : xxx

Valores insertados: x , y , z , ..... e) Otras aportaciones que consideres interesantes......

4 .- Factorial

Crea una página web que pida un número entero positivo al usuario y calcule su factorial. El factorial de 5(se suele denotar como 5!), es el resultado de multiplicar: 12345, es decir:120.

Implementa los tres tipos de funciones(clásica, anónima, flecha)

5 .- Cuadros aleatorios

Crear una aplicación web que muestre 2000 cuadrados de color aleatorio de 50x50 píxeles. La posición de cada cuadrado en la página también será aleatoria.

div{

    position:fixed;

    width:50px;

    height:50px;

}
document.write( '

');