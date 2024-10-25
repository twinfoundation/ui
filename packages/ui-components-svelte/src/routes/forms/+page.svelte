<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Checkbox, Fileupload, Heading, Input, Label, Radio, Select, Textarea } from '$lib';

	let files: FileList | undefined = $state();
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">Forms</Heading>

	<div class="width-full flex flex-col gap-5">
		<Label class="flex gap-2">
			Input
			<Input value="value"></Input>
			<Input value="value disabled" disabled></Input>
			<Input value="value error" color="error"></Input>
			<Input value="value success" color="success"></Input>
		</Label>

		<Label class="flex gap-2">
			Input type="password"
			<Input value="value" type="password"></Input>
			<Input value="value" type="password" disabled></Input>
			<Input value="value error" type="password" color="error"></Input>
			<Input value="value success" type="password" color="success"></Input>
		</Label>

		<Label class="flex gap-2">
			Textarea
			<Textarea value="value"></Textarea>
			<Textarea value="value error" color="error"></Textarea>
			<Textarea value="value success" color="success"></Textarea>
			<Textarea value="value with resize" resize></Textarea>
			<Textarea value="value disabled" disabled></Textarea>
		</Label>

		<Checkbox value="value" checked={true}>Checkbox checked</Checkbox>
		<Checkbox value="value" checked={true} disabled>Checkbox checked / disabled</Checkbox>
		<Checkbox value="value" checked={false}>Checkbox not checked</Checkbox>
		<Checkbox value="value" checked={false} disabled>Checkbox not checked / disabled</Checkbox>

		<Radio value="value" checked={true}>Radio checked</Radio>
		<Radio value="value" checked={true} disabled>Radio checked disabled</Radio>
		<Radio value="value" checked={false}>Radio not checked</Radio>
		<Radio value="value" checked={false} disabled>Radio not checked disabled</Radio>

		<Label class="flex gap-2">
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
				placeholder="Select an item disabled"
				items={[
					{ name: 'Item 1', value: 'item1' },
					{ name: 'Item 2', value: 'item2' },
					{ name: 'Item 3', value: 'item3' }
				]}
				disabled
			></Select>
			<Select
				value={undefined}
				placeholder="Select an item error"
				items={[
					{ name: 'Item 1', value: 'item1' },
					{ name: 'Item 2', value: 'item2' },
					{ name: 'Item 3', value: 'item3' }
				]}
				color="error"
			></Select>
			<Select
				value={undefined}
				placeholder="Select an item success"
				items={[
					{ name: 'Item 1', value: 'item1' },
					{ name: 'Item 2', value: 'item2' },
					{ name: 'Item 3', value: 'item3' }
				]}
				color="success"
			></Select>
		</Label>

		<Label class="flex gap-2">
			File Upload
			<Fileupload bind:files></Fileupload>
			<Fileupload bind:files disabled></Fileupload>
			<Fileupload bind:files color="error"></Fileupload>
			<Fileupload bind:files color="success"></Fileupload>
		</Label>
	</div>
</section>
