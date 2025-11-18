# login

Este endpoint inicia sesión del usuario en la plataforma.
Valida las credenciales enviadas, registra la información del dispositivo (User-Agent), genera los tokens de autenticación (accessToken y refreshToken) y los envía en cookies seguras.
Finalmente devuelve los datos del usuario logueado.

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
  "isEmail": true,
  "email": "faradayshouse.ar@gmail.com", || "phone": '11111111',
  "password": "1234",
  "type": "login",
  "is": "faraday",
  "admin": true
}
```

* **isEmail:** Es un boleano, en true indica que el usuario se va a logear mediante el email, y si es false indica que se va a logear por medio del teléfono.

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
  "result": {
    "isEmail": true,
    "name": "Sirius back",
    "email": "siriusblack.ar@gmail.com",
    "phone": "11111112",
    "type": "register",
    "is": "faraday",
    "admin": true,
    "active": true,
    "role": "customer",
    "lastConnection": "2025-11-18T20:02:45.869Z",
    "img": [],
    "_id": "691cd0e5c22e3a8519d2f90a",
    "created": "2025-11-18T20:02:45.874Z",
    "favorites": [],
    "__v": 0
  }
}
```