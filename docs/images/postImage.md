# Post Image

Este endpoint permite subir imágenes al servidor para su almacenamiento y posterior uso dentro de la plataforma.
La imagen se envía junto con el nombre de la carpeta de destino, permitiendo organizar los archivos según su contexto (usuarios, contenidos, recursos, etc.).
Es utilizado para gestionar imágenes asociadas a distintos módulos del sistema.

## Api
```js
import { apiFetch } from '../apiFetch.api.js';

const postImageApi = async (image) => {

    return await apiFetch('/api/img', {
        method: 'POST',
        body: image,
    }, true); // Al ser un FormData, pasamos true como tercer parámetro.

};

export { postImageApi };
```

## Request
```js
{
  "folderName": 'avatars',
  "type": "avatar",
  "name": "nombre de la imagen",
  "is": "faraday" || "qresto",
}
```

* **folderName:** Es la carpeta en la cual se va a guardar la imagen en Cloudinary.
* **type:** EL tipo de imagen (Avatar, preset de menú, etc).
* **name:** Nombre de la imagen.
* **is:** Indica desde qué plataforma de frontend se realiza la petición. Ejemplos: faraday, qresto.

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
  "status": "success",
  "result": {
    "active": true,
    "img": "https://res.cloudinary.com/dhv8bgdke/image/upload/v1767043209/avatars/rsaxpmqfim9tssbk2cmb.png",
    "name": "Nombre de la imagen",
    "__v": 0
    "_id": "691cd0e5c22e3a8519d2f90a",
  }
}
```