# BlockEvents.drops

## Basic info

- Valid script types: [SERVER]

- Has result? ✔

- Event class: [BlockDropsKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/block/BlockDropsKubeEvent.java)

```
Modify dropped items and xp from block.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getLevel |  |  | Level | ✘ |
| getEntity |  |  | Entity | ✘ |
| removeItem | ItemPredicate |  | void | ✘ |
| getItems |  |  | List<ItemStack> | ✘ |
| addItem | ItemStack |  | ItemEntity | ✘ |
| getXp |  |  | int | ✘ |
| getTool |  |  | ItemStack | ✘ |
| setXp | int |  | void | ✘ |
| getBlock |  |  | LevelBlock | ✘ |
| containsItem | ItemPredicate |  | boolean | ✘ |
| getItemEntities |  |  | List<ItemEntity> | ✘ |
| getPlayer |  |  | Player | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| success | Context, Object |  | Object | ✘ |


### Documented members:

- `List<ItemStack> getItems()`
```
Dropped items. Immutable.
```

- `int getXp()`
```
The experience dropped by the block.
```

- `ItemStack getTool()`
```
The tool used when breaking this block. May be null.
```

- `void setXp(int var0)`

  Parameters:
  - var0: int

```
Sets the experience dropped by the block.
```

- `LevelBlock getBlock()`
```
The block that was broken.
```

- `List<ItemEntity> getItemEntities()`
```
Dropped item entities.
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
BlockEvents.drops(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

