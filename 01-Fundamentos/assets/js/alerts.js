// Alertas y prompts en javascript

// Alerta

// alert('Hola mundo');

// Prompt

// let nombre = prompt('¿Cuál es tu nombre?');

// Si se cancela, el valor de la variable es null
// Si no se cancela, el valor de la variable es el texto introducido y si se deja en blanco el valor de la variable es un string vacío

// console.log(nombre);

// Confirm

// let respuesta = confirm('¿Estás seguro de querer continuar?');

// Regresa valor booleano

// console.log(respuesta);

// Todos estas funciones se encuentran dentro del objeto window, por lo que se pueden llamar de la siguiente manera: window.alert('Hola mundo'); window.prompt('¿Cuál es tu nombre?'); window.confirm('¿Estás seguro de querer continuar?'); Esto se usa solo en el explorador, en node no se puede hacer.

// En node se puede usar el objeto global, pero no es recomendable usarlo, ya que no es estándar y puede cambiar en el futuro.

// global.alert('Hola mundo');
