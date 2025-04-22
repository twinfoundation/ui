# Class: FigmaVariables

The figma variable processing.

## Constructors

### Constructor

> **new FigmaVariables**(): `FigmaVariables`

#### Returns

`FigmaVariables`

## Methods

### loadDefaultVariables()

> `static` **loadDefaultVariables**(): [`IFigmaVariableCollections`](../interfaces/IFigmaVariableCollections.md)

Load the default figma variables.

#### Returns

[`IFigmaVariableCollections`](../interfaces/IFigmaVariableCollections.md)

The default figma variables.

***

### getVariableCollection()

> `static` **getVariableCollection**(`figmaVariables`, `collectionName`): `undefined` \| [`IFigmaVariableCollection`](../interfaces/IFigmaVariableCollection.md)

Get the specified figma variables collection.

#### Parameters

##### figmaVariables

[`IFigmaVariableCollections`](../interfaces/IFigmaVariableCollections.md)

A complete figma variables object.

##### collectionName

`string`

The name of the collection to get.

#### Returns

`undefined` \| [`IFigmaVariableCollection`](../interfaces/IFigmaVariableCollection.md)

The tailwind config theme.

***

### getVariableFromCollection()

> `static` **getVariableFromCollection**(`collections`, `collectionName`, `variableName`): `undefined` \| `string` \| `number`

Get the specified variable from the collection.

#### Parameters

##### collections

A complete figma variables object.

##### collectionName

`string`

The name of the collection to get.

##### variableName

`string`

The name of the variable to get.

#### Returns

`undefined` \| `string` \| `number`

The variable if it exists.
