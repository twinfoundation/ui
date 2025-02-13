<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Tooltip, Button, Heading } from '$lib';
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">Tooltips</Heading>
	<Button>plain (default)</Button>
	<Tooltip>plain (default)</Tooltip>
	<Button color="primary">color=primary</Button>
	<Tooltip color="primary">color=primary</Tooltip>
	<Button color="secondary">color=secondary</Button>
	<Tooltip color="secondary">color=secondary</Tooltip>
	<Button color="error">color=error</Button>
	<Tooltip color="error">color=error</Tooltip>
	<Button color="warning">color=warning</Button>
	<Tooltip color="warning">color=warning</Tooltip>
	<Button color="success">color=success</Button>
	<Tooltip color="success">color=success</Tooltip>
	<Button color="info">color=info</Button>
	<Tooltip color="info">color=info</Tooltip>
	<Button>left</Button>
	<Tooltip placement="left">left</Tooltip>
	<Button>right</Button>
	<Tooltip placement="right">right</Tooltip>
	<Button>bottom</Button>
	<Tooltip placement="bottom">bottom</Tooltip>
	<Button>click</Button>
	<Tooltip trigger="click">click</Tooltip>
	<Button>hover</Button>
	<Tooltip trigger="hover">hover</Tooltip>
</section>
