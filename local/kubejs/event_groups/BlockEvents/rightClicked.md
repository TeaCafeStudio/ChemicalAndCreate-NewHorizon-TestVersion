# BlockEvents.rightClicked

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: [BlockRightClickedKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/block/BlockRightClickedKubeEvent.java)

```
Invoked when a player right clicks on a block.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getItem |  |  | ItemStack | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| getHand |  |  | InteractionHand | ✘ |
| getHitResult |  |  | BlockHitResult | ✘ |
| getBlock |  |  | LevelBlock | ✘ |
| getFacing |  |  | Direction | ✘ |
| getPlayer |  |  | Player | ✘ |
| getLevel |  |  | Level | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| success | Context, Object |  | Object | ✘ |


### Documented members:

- `ItemStack getItem()`
```
The position of the block that was right clicked.
```

- `LivingEntity getEntity()`
```
The player that right clicked the block.
```

- `InteractionHand getHand()`
```
The hand that was used to right click the block.
```

- `LevelBlock getBlock()`
```
The block that was right clicked.
```

- `Direction getFacing()`
```
The face of the block being right clicked.
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
BlockEvents.rightClicked(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

