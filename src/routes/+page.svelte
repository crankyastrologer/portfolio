<script lang="ts">
	import { Img } from 'flowbite-svelte';
	import { P } from 'flowbite-svelte';
	import {slide, fade, scale} from 'svelte/transition';
import type { main } from "$lib/interface/interface.js"
	import llm from "$lib/static/llm.png"
	import { onMount } from 'svelte';
	export let data:main;
	const first = data.data[0];
	const second = data.data[1];
  let ready = false;
  onMount(() => ready = true);
</script>
{#if ready}
	<div in:slide={{duration:1000}}>
<div  class="flex justify-center max-w-3xl mx-auto">
	<P
		class="mb-3"
		weight="light"
		size="lg"
		color="text-gray-950 dark:text-gray-100 max-w-2xl"
		justify
		align="center"
	>
		{first.blog.markdown}
	</P>
</div><div  class="flex justify-center max-w-3xl mx-auto my-10">
	<Img src={llm} alt="my img" /></div>
<div class="flex justify-center max-w-3xl mx-auto ">
	<P
		size="lg"
		class="mb-3"
		weight="light"
		color="text-gray-950 dark:text-gray-100 max-w-2xl"
		justify
		align="center"
	>
		{second.blog.markdown}
	</P>
</div>
		</div>
	{/if}