# Get Data

Este endpoint permite obtener información de la plataforma.   
- Información genérica del dashboard durante la sesión.

## Api
```js
import { apiFetch } from "../apiFetch.api.js";

const getDataApi = async (type) => {

    return await apiFetch(`/api/data/faraday/${type}`, {
        method: 'GET'
    });
};

export { getDataApi };
```

Se envían dos parámetros
- Desde que producto se hace la petición (faraday, qresto).
- El tipo de petición, que información estamos solicitando.

| type | peticion |
| ---- |----------|
| dashboard | información genérica para completar los primeros datos del dashboard |

## Dashboard

### success:
```json
{
  "users": {
    "customers": 12,
    "users": 135,
    "total": 147,
    "workers": [
      {
        "_id": "abc124",
        "name": "Nombre del usuario",
        "email": "email@gmail.com",
        "img": ["https://img...."]
      }
    ]
  }
}
```