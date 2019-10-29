/* let mouse = "mouse";
let monitor = "monitor";
let precioMouse = 10;
let precioMonitor = 60;

const productoElegido = prompt(`¿Qué desea comprar?
- Monitor.
- Mouse.

*Escriba el nombre con minisculas. Gracias`);

productoElegido === mouse && alert(`Tenés que pagar ${precioMouse}`);
productoElegido === monitor && alert(`Tenés que pagar ${precioMonitor}`);

(productoElegido !== monitor && productoElegido !== mouse) && alert(`No elegiste ningún producto.`);*/

let nombreUsuario = prompt(`¡Bienvenides! 
Podrías decirme ¿cuál es tu nombre?`);
let añoNacimiento = prompt(`Bien ${nombreUsuario}, ¿en qué año naciste?`);
let mesNacimiento = prompt(`Veamos.. naciste en el año ${añoNacimiento}, ¿en qué mes?`);
let añoActual = 2019;
let edadUsuario = añoActual - añoNacimiento;
let diciembre = "diciembre";
(mesNacimiento !== diciembre) && alert(`Si mis cuentas y mi humana no falló tenés ${edadUsuario} años.`);
(mesNacimiento === diciembre) && alert(`Si mis cuentas y mi humana no falló tenés ${edadUsuario - 1} años.`);
