# Logout

Este endpoint elimina las cookies de autenticación accessToken y refreshToken.
Al borrarlas, el usuario queda deslogueado automáticamente.

## Api
```js
import { apiFetch } from "../apiFetch.api.js";

const userLogoutApi = async () => {
    
    return await apiFetch('/api/session/logout', {
        method: 'POST'
    });
};

export { userLogoutApi };
```

## Response
```js
{
  "status": "success"
}
```