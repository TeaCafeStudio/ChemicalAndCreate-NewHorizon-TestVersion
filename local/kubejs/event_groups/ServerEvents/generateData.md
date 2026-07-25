# ServerEvents.generateData

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: [KubeDataGenerator](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/generator/KubeDataGenerator.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| dataMap | DataMapType<R, T>, Consumer<VirtualDataMapFile<R, T>> |  | void | ✘ |
| setWaxable | Block, Block |  | void | ✘ |
| setFurnaceFuel | ItemPredicate, TickDuration |  | void | ✘ |
| setMonsterRoomMobs | EntityType<?>, int |  | void | ✘ |
| removeCompostable | ItemPredicate |  | void | ✘ |
| setRaidHeroGifts | VillagerProfession, ResourceKey<LootTable> |  | void | ✘ |
| setVillagerType | ResourceKey<Biome>, VillagerType |  | void | ✘ |
| setParrotImitation | EntityType<?>, SoundEvent |  | void | ✘ |
| setOxidizable | Block, Block |  | void | ✘ |
| setCompostable | ItemPredicate, float, boolean |  | void | ✘ |
| removeFurnaceFuel | ItemPredicate |  | void | ✘ |
| setVibrationFrequency | GameEvent, int |  | void | ✘ |
| flush |  |  | void | ✘ |
| add | GeneratedData |  | void | ✘ |
| text | ResourceLocation, String |  | void | ✘ |
| getRegistries |  |  | RegistryAccessContainer | ✘ |
| json | ResourceLocation, JsonElement |  | void | ✘ |
| getGenerated | ResourceLocation |  | GeneratedData | ✘ |
| exit | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| success | Context, Object |  | Object | ✘ |


### Documented members:

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
ServerEvents.generateData(extra_id, (event) => {
	// This space (un)intentionally left blank
});
```

