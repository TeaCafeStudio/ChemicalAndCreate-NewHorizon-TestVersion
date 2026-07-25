# CDGEvents.lighterSkins

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: LighterSkinsEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| removedIds | Map<String, String> | ✔ |
| addedIds | Map<String, String> | ✔ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| remove | String, String |  | void | ✘ |
| create | String, String |  | void | ✘ |
| exit | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| success | Context, Object |  | Object | ✘ |


### Documented members:

- `void remove(String var0, String var1)`

  Parameters:
  - var0: String
  - var1: String

```
Removes a new lighter skin
```

- `void create(String var0, String var1)`

  Parameters:
  - var0: String
  - var1: String

```
Adds a new lighter skin
```

- `Object exit(Context var0)`

  Parameters:
  - var0: Context

```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit(Context var0, Object var1)`

  Parameters:
  - var0: Context
  - var1: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Context var0)`

  Parameters:
  - var0: Context

```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel(Context var0, Object var1)`

  Parameters:
  - var0: Context
  - var1: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object success(Context var0)`

  Parameters:
  - var0: Context

```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success(Context var0, Object var1)`

  Parameters:
  - var0: Context
  - var1: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
CDGEvents.lighterSkins((event) => {
	// This space (un)intentionally left blank
});
```

