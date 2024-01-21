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

### Solicitar datos del juego (Master & Soothsayer)

```js
"user:request-game-data"
```

#### Descripción
Evento que emite el **master** o **soothsayer** para solicitar los datos de la partida.

#### Body

```json
// No emite con body
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


### Reconectar al juego (Server)

```js
"server:reconnect-to-game"
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
    "master": {
        id: "x0kSAD26",
        nickname: "leunknown"
    },
    "soothsayer": {
        id: "zCkSlDb0",
        nickname: "eldiablo"
    },
    "status": 3,
    "phraseDataList": [
        {
            "phrase": "GIL",
            "characterList": [
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
    ]
}
```

### Notificar juego terminado al master (Server)

```js
"server:game-over-master"
```

#### Descripción
Evento que emite el **server** al master para notificarle el juego terminado.

```json
{
    "win": true
}
```

### Notificar juego terminado al adivino (Server)

```js
"server:game-over-soothsayer"
```

#### Descripción
Evento que emite el **server** al adivino para notificarle el juego terminado.

```json
{
    "win": true,
    "reveleadedPhrase": "GIL"
}
```