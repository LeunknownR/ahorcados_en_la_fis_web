# Join Room Service

```js
POST `http://${host}/api/join-room`
```

### Request

```json
{
    "roomId": "p0ZoB1FwH6",
    "soothsayerNickname": "eldiablo"
}
```

### Response

* Éxito
```js
200 OK
```
```json
{
    "message": "SUCCESS",
    "data": {
        "soothsayerNickname": "goku",
        "roomId": "p0ZoB1FwH6"
    }
}
```

* Datos inválidos
```js
400 Bad Request
```
```json
{
    "message": "INVALID_DATA",
    "data": {
        "userId": "x0kSAD26",
        "roomId": "p0ZoB1FwH6"
    }
}
```

* Sala llena
```js
404 Not Found
```
```json
{
    "message": "FULL_ROOM",
    "data": null
}
```

* Sala no existe
```js
404 Not Found
```
```json
{
    "message": "NOT_FOUND_ROOM",
    "data": null
}
```