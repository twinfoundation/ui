<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import {
		Checkbox,
		Heading,
		Label,
		Input,
		Select,
		i18n,
		Fileupload,
		Radio,
		Textarea
	} from '@twin.org/ui-components-svelte';

	let files: FileList | undefined;
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">{$i18n('navigation.forms')}</Heading>

	<div class="width-full flex flex-col gap-5">
		<Label>
			Input
			<Input value="value"></Input>
			<Input value="value" disabled></Input>
		</Label>

		<Label>
			Input type="password"
			<Input value="value" type="password"></Input>
			<Input value="value" type="password" disabled></Input>
		</Label>

		<Label>
			Textarea
			<Textarea value="value"></Textarea>
			<Textarea value="value with resize" resize></Textarea>
			<Textarea value="value disabled" disabled></Textarea>
		</Label>

		<Checkbox value="value" checked={true}>Checkbox</Checkbox>
		<Checkbox value="value" checked={false}>Checkbox Checked</Checkbox>
		<Checkbox value="value" checked={false} disabled>Checkbox Disabled</Checkbox>

		<Radio value="value">Radio</Radio>
		<Radio value="value" checked={true}>Radio Checked</Radio>
		<Radio value="value" checked={true} disabled>Radio Disabled</Radio>

		<Label>
			Select
			<Select
				value={undefined}
				placeholder="Select an item"
				items={[
					{ name: 'Item 1', value: 'item1' },
					{ name: 'Item 2', value: 'item2' },
					{ name: 'Item 3', value: 'item3' }
				]}
			></Select>
			<Select
				value={undefined}
				placeholder="Select an item"
				items={[
					{ name: 'Item 1', value: 'item1' },
					{ name: 'Item 2', value: 'item2' },
					{ name: 'Item 3', value: 'item3' }
				]}
				disabled
			></Select>
		</Label>

		<Label>
			File Upload
			<Fileupload value="value" bind:files></Fileupload>
			<Fileupload value="value" bind:files disabled></Fileupload>
		</Label>
	</div>
</section>
