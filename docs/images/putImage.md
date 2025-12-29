# Put Image

Este endpoint permite modificar los datos de una imagen ya existente en la plataforma.
Se puede actualizar información como el nombre, el estado (active), facilitando la organización y gestión de los archivos almacenados.

## Api
```js
import { apiFetch } from '../apiFetch.api.js';

const putImageApi = async (image) => {

    return await apiFetch('/api/img', {
        method: 'PUT',
        body: JSON.stringify({ ...image, is: 'faraday' }),
    });

};

export { putImageApi };
```

## Request
```json
{
  "_id": "693b2eb993f10bb388aff1b4",
  "name": "Sophias",
  "img": "https://res.cloudinary.com/dhv8bgdke/image/upload/v1765486265/avatars/beyyfagzebxupfpgr01w.png",
  "active": true,
  "type": "avatar",
  "is": "faraday",
  "__v": 0
}
```

Mandamos el objeto completo con los datos ya actualizados.

* **_id:** Id de la imagen a modificar.
* **name:** Nombre o nuevo nombre de la imagen.
* **img:** Url cloudinary de la imagen.
* **active:** Estado activo true/false.
* **type:** Tipo de imagen (avatar, preset, etc).
* **is:** Indica desde qué plataforma de frontend se realiza la petición. Ejemplos: faraday, qresto.
* **__v:** Version mongo db (No es importante).

## Response

### error:
```js
{
    "error": "800"
}
```

### success:
```js
{
  "status": "success"
}
```