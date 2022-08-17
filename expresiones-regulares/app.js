/* CONSIGNA

Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una 
contraseña segura pero con las siguientes característica, que esta debe contener: 

1) Que tenga una longitud de 12 caracteres mínimo.
2) Debe contener al menos 1 letra en mayúscula.
3) Debe contener al menos 1 letra en minúscula.
4) No puede contener espacios vacíos.

*/
RegExp = /^(?=\w+[a-z])(?=\W+[A-Z])\S{12-20}$/;