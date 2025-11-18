# getCurrent

Este endpoint obtiene la información del usuario actualmente autenticado.
Valida el token recibido, consulta los datos del usuario en el servicio correspondiente y verifica que su cuenta esté activa.
Si el usuario está inactivo, envía una notificación por email y devuelve un error específico.

## Api
```js
import { apiFetch } from "../apiFetch.api.js";

const currentSessionApi = async () => {
    
  return await apiFetch('/api/session/current', {
    method: 'GET',
  });
};

export { currentSessionApi };
```

Este endpoint obtiene la información del usuario actualmente autenticado.
No requiere que el cliente envíe ningún dato:
los datos del usuario se obtienen directamente del token almacenado en la cookie.

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