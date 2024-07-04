<script lang="ts">
	import { Tabs, TabItem } from 'flowbite-svelte';
 import EX from "$lib/components/exp.svelte"
	import type {Project} from '$lib/interface/interface'
	import Ccards from './card.svelte';

	export let data:Project[];

</script>

<Tabs contentClass="p-4 bg-gray-50 rounded-lg dark:bg-gray-950 mt-4" tabstyle="underline">
	<TabItem open title="Experience" class="transition delay-150 duration-300  dark:bg-gray-950">
		<EX/>
	</TabItem>
	<TabItem open title="Projects" class="transition delay-150 duration-300 dark:bg-gray-950">
		{#each data as item}

			<Ccards  data={item} />
		{/each}
	</TabItem>
</Tabs>
