# newPassword

Este endpoint restablece la contraseña del usuario utilizando el código de recuperación generado previamente.
Verifica que el código sea válido, no esté vencido y luego actualiza la contraseña del usuario en la plataforma.

## Api
```js
import { apiFetch } from '../apiFetch.api.js';

const newPasswordApi = async (user) => {

    return await apiFetch('/api/session/password', {
        method: 'PUT',
        body: JSON.stringify({ ...user, is: 'faraday', admin: true }),
    });
};

export { newPasswordApi };
```

## Request
```js
{
    "admin": true
    "uid": "1234abcd",
    "password": "1234",
    "is": "faraday",
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