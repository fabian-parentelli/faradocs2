# Get Images

Este endpoint permite consultar y listar imágenes almacenadas en la plataforma, con soporte de paginación y filtros.
Se utiliza para recuperar imágenes según distintos criterios como tipo, nombre o estado, facilitando su uso en galerías, paneles de administración o vistas públicas.

## Api
```js
import { apiFetch } from "../apiFetch.api.js";

const getImageApi = async (obj) => {

    let urlData = '/api/img?';

    urlData += `is=faraday&`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.type) urlData += `type=${obj.type}&`;
    if (obj.name) urlData += `name=${obj.name}&`;
    if (obj.active !== undefined) urlData += `active=${obj.active}&`;

    if (urlData.endsWith('&')) urlData = urlData.slice(0, -1);

    return await apiFetch(urlData, {
        method: 'GET',
    });
};

export { getImageApi };
```

Los parámetros se envían por query (string, boolean) y permiten filtrar y paginar el listado de imágenes según las necesidades del cliente.

* **is:** `(required)` Indica desde qué plataforma de frontend se realiza la petición. Ejemplos: faraday, qresto.
* **page:** Número de página, por defecto siempre el servidor devuelve la página 1.
* **limit:** Número de imágenes a mostrar, el servidor por defecto devuelve 12.
* **type:** `(required)` El tipo de imagen (avatar, preset, etc).
* **name:** Nombre de la imagen.
* **active:** El valor es un boolean, el servidor por defecto devuelve todo, tanto true como false, pero si quieres especificar uno de los dos estados puedes hacerlo por medio de esta query.

## Response

### error:
```json
{
    "error": "800"
}
```

### success:
```json
{
  "status": "success",
  "result": {
    "docs": [
      {
        "active": true,
        "img": "https://res.cloudinary.com/dhv8bgdke/image/upload/v1765486265/avatars/beyyfagzebxupfpgr01w.png",
        "name": "Sophias",
        "__v": 0,
        "_id": "693b2eb993f10bb388aff1b4"
      }
    ],
    "page": 1,
    "limit": 24,
    "totalDocs": 30,
    "totalPages": 2,
    "hasNextPage": true,
    "hasPrevPage": false,
    "nextPage": 2,
    "prevPage": null,
    "pagingCounter": 2
  }
}
```