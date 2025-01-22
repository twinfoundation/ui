# Class: TailwindConfig

The tailwind config.

## Constructors

### new TailwindConfig()

> **new TailwindConfig**(): [`TailwindConfig`](TailwindConfig.md)

#### Returns

[`TailwindConfig`](TailwindConfig.md)

## Methods

### generateTheme()

> `static` **generateTheme**(`figmaVariablesCollections`, `replacements`, `flattenSections`, `removeSections`): `undefined` \| `Partial`\<`CustomThemeConfig` & `object`\>

Generate the tailwind config theme from the figma variables.

#### Parameters

##### figmaVariablesCollections

[`IFigmaVariableCollection`](../interfaces/IFigmaVariableCollection.md)[]

The figma variables collection.

##### replacements

`object`[] = `...`

The replacements to apply to the theme.

##### flattenSections

`string`[] = `...`

The sections to flatten from the variables.

##### removeSections

`string`[] = `...`

The sections to remove from the variables.

#### Returns

`undefined` \| `Partial`\<`CustomThemeConfig` & `object`\>

The tailwind config theme.

***

### buildContentPath()

> `static` **buildContentPath**(`npmRoot`, `pkg`, `extensions`): `string`

Build a content path.

#### Parameters

##### npmRoot

`string`

The root for the node modules.

##### pkg

`string`

The package to get the content from.

##### extensions

`string`[]

The extensions to use for content processing.

#### Returns

`string`

The content path.

***

### getPlugins()

> `static` **getPlugins**(): `undefined` \| (`undefined` \| `PluginCreator` \| \{\} \| (`options`) => `object`)[]

Get the plugins.

#### Returns

`undefined` \| (`undefined` \| `PluginCreator` \| \{\} \| (`options`) => `object`)[]

The plugins.

***

### getDefaultThemeReplacements()

> `static` **getDefaultThemeReplacements**(): `object`[]

Get the default theme replacements.

#### Returns

`object`[]

The default theme replacements.

***

### getDefaultFlattenSections()

> `static` **getDefaultFlattenSections**(): `string`[]

Strip the sections from the variables.

#### Returns

`string`[]

The sections to strip from variables.

***

### getDefaultRemoveSections()

> `static` **getDefaultRemoveSections**(): `string`[]

Remove the specified sections.

#### Returns

`string`[]

The sections to remove from variables.
