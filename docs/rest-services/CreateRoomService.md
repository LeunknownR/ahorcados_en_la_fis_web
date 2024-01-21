# Create Room Service

```js
POST `http://${host}/create-room`
```

### Request

```json
{
    "masterNickname": "leunknown",
    "phrases": [
        "Frase 1",
        "Frase 2",
        "Frase 3",
        "Frase 4",
        "Frase 5",
    ]
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
        "userId": "x0kSAD26",
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
    "data": null
}
```