<script lang="ts">
    import Ctab from "$lib/components/project_tabs.svelte"
		import type {Projects} from "$lib/interface/interface.ts"
		import {fade,scale} from 'svelte/transition'
		import { P } from 'flowbite-svelte';
    export let data:Projects;



  
</script>
<div  in:scale class="  max-w-3xl mx-auto">
	<P
		class="mb-3"
		weight="light"
		size="lg"
		color="text-gray-950 dark:text-gray-100 "
		justify
		align="center"
	>
		Here, you can find a collection of projects I have worked on.
		Which showcases my skill in different fields of machine learning and demonstrate my ability to provide
		solutions to unique problems.


	</P>
<br>
	<P
		class="mb-3"
		weight="light"
		size="lg"
		color="text-gray-950 dark:text-gray-100 "
		justify
		align="center"
	>
	From core concepts to high level implementations, I have worked on a variety of projects.
	I am always looking for new opportunities to learn and improve my skills,  and I am excited to continue building my
	portfolio with more challenging and rewarding projects in the future.
</P></div>
<div class="mx-auto max-w-3xl">
<Ctab data = {data.data.projects}/>
</div>


