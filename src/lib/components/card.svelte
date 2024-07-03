<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import { Gmail } from 'svelte-simples';
	import type {Project} from '$lib/interface/interface'
	import Badge from '$lib/components/badge.svelte';
	let hCard = false;
	export let data:Project;
	const tech = data.techused.used;
</script>

<div class="flex justify-center card-container">
	<div class="space-y-4">
		<Card img="src/lib/OIP.jpeg" horizontal size="xl" reverse={hCard} class="dark:bg-gray-950">
			<div class="justify-end flex-row">
				<Button
					shadow
					size="xs"
					color="bg-gray-950"
					class="text-white hover:bg-gradient-to-r from-purple-500 to-pink-500"
					><Gmail size="16" class="" /></Button
				>
			</div>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{data.title}
			</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				{data.description}
			</p>
			{#each tech as item}
				<Badge data={item} />
			{/each}
		</Card>
	</div>
</div>

<style>
	.card-container {
		margin-bottom: 50px; /* Adjust the margin as needed */
	}
</style>
