<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import { fade ,slide,scale} from 'svelte/transition';
	import { Gmail,Github } from 'svelte-simples';
	import type {Project} from '$lib/interface/interface'
	import Badge from '$lib/components/badge.svelte';
	import openLinkInNewTab from '$lib/utils/openLink';
	let hCard = false;
	export let data:Project;
	const tech = data.techused.used;
	console.log(data.imgLink)
	  import { onMount } from 'svelte';

  let ready = false;
  onMount(() => ready = true);
</script>
{#if ready}
<div  in:slide={{duration:500}} out:fade class="flex justify-center card-container">
	<div class="space-y-4">
		<Card  img={data.imgLink} horizontal size="xl" reverse={hCard} class="dark:bg-gray-950">
			<div class="justify-end flex-row">
				<Button on:click={()=>window.open(data.link)}
					shadow
					size="xs"
					color="bg-gray-950"
					class="text-white hover:bg-gradient-to-r from-purple-500 to-pink-500"
					><Github size="16" class="" /></Button
				>
			</div>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{data.title}
			</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				{data.description}
			</p>
			{#each tech as item}
				<Badge data={item}   />
			{/each}
		</Card>
	</div>
</div>
	{/if}
<style>
	.card-container {
		margin-bottom: 50px; /* Adjust the margin as needed */
	}
</style>
