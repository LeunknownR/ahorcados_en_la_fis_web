# Game Service

```js
WS `ws://${host}/game`
```

## Headers
```txt
x-user-id: x0kSAD26
x-room-id: p0ZoB1FwH6
```

## Rooms

```js
`${roomId}`
```
*  **Descripción:** Agrupa los jugadores de una partida.
*  **Participantes:** 
    * Master.
    * Soothsayer.

## Events

### Iniciar el juego (Master)

```js
"master:start-game"
```

#### Descripción
Evento que emite el **master** para iniciar el juego.

#### Body

```json
// No emite con body
```

### Adivinar un caracter (Soothsayer)

```js
"soothsayer:soothsay"
```

#### Descripción
Evento que emite el **adivino** para adivinar un caracter.

#### Body

```json
{
    "key": "A"
}
```

### Notificar siguiente frase (Siguiente)

```js
"server:notify-next-phrase"
```

#### Descripción
Evento que emite el **master** o **soothsayer** para solicitar los datos de la partida.

#### Body

```json
{
    "reveleadedPhrase": "GIL"
}
```


### Conectar al juego (Server)

```js
"server:connect-to-game"
```

#### Descripción
Evento que emite el **server** para reconectar al jugador.

#### Body

```json
{
    "isMaster": true 
}
```

### Enviar datos del juego (Server)

```js
"server:send-game-data"
```

#### Descripción
Evento que emite el **server** para enviar los datos de la partida a los jugadores.

#### Body

```json
{
    "id": "x0xxx616X",
    "master": {
        "id": "x0kSAD26",
        "nickname": "leunknown"
    },
    "soothsayer": {
        "id": "zCkSlDb0",
        "nickname": "eldiablo"
    },
    "status": 3,
    "currentPhraseData": {
        "phrase": "GIL",
        "dataCharacterList": [
            {
                value: "G",
                found: true,
                nextIsSpace: false
            },
            {
                value: "I",
                found: false,
                nextIsSpace: false
            },
            {
                value: "L",
                found: false,
                nextIsSpace: false
            }
        ],
        "lifes": 6,
        "usedKeys": ["A", "B", "G"]
    }
}
```

### Notificar juego terminado al jugadores (Server)

```js
"server:game-over"
```

#### Descripción
Evento que emite el **server** a los jugadores para notificarle el juego terminado.

```json
{
    "winner": "MASTER"
}
```
```json
{
    "winner": "SOOTHSAYER"
}
```