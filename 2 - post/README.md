Queremos crear una aplicación que tenga dos rutas.

`GET /api/user`

`GET /api/user/cantidad`

En donde el endpoint de usuarios tiene que devolver un array con 5 objetos que contengan 3 propiedades. name surname y age.

El endpoint /api/user/cantidad tiene que devolver un objeto con la siguiente información

```
{
 qty: CANTIDAD_DE_USUARIO 
}
```