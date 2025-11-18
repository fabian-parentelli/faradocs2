# what_email

Este endpoint gestiona la recuperación de contraseña.
Verifica si el email existe, genera un código temporal (passId), registra la fecha de solicitud, actualiza al usuario y envía un correo con las instrucciones de recuperación.
También registra la actividad en el sistema.

## Api
```js
import { apiFetch } from '../apiFetch.api.js';

const sessionPostApi = async (user) => {

  return await apiFetch('/api/session', {
    method: 'POST',                              
    // admin lo pasmos directo desde faraday desde otros servicios frontend hacemos un switch
    body: JSON.stringify({ ...user, is: 'faraday', admin: true }),
  });
};

export { sessionPostApi };
```

## Request
```js
{
  "email": "faradayshouse.ar@gmail.com",
  "type": "what_email",
  "is": "faraday",
  "admin": true
}
```

* **type:** Define la acción que debe ejecutar el endpoint. Puede ser 'register', 'login' o 'what_email' (recuperación de contraseña).

* **is:** Indica desde qué plataforma de frontend se realiza la petición. Ejemplos: faraday, qresto.

* **admin:** Valor booleano que indica si la petición proviene de un **administrador interno** o de un **cliente que contrata el servicio**.
  * `true` → administradores internos (ej. `master`, `admin`) **y** clientes contratantes.
  * `false` → usuarios finales que usan el producto.

## Response

### error:
```js
{
  "error": "603"
}
```

### success:
```js
{
  "status": "success",
  "result": null
}
```