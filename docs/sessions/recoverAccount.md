# recoverAccount

Permite que un usuario recupere su cuenta restableciendo su contraseña mediante un código OTP previamente enviado. Si algo falla, el proceso se registra en la cola de tareas para intentar nuevamente.

## Api
```js
import { apiFetch } from '../apiFetch.api.js';

const recAccountApi = async (user) => {

    return await apiFetch('/api/session/recaccount', {
        method: 'PUT',
        body: JSON.stringify({ ...user, is: 'faraday', admin: true }),
    });

};

export { recAccountApi };
```

## Request
```js
{
    "admin": true
    "uid": "1234abcd",
    "password": "1234",
    "is": "faraday",
    "code": "Abcd1234",
}
```

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
    "status": "success"    
}
```