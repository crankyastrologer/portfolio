<script>
	import { Img } from 'flowbite-svelte';
	import { P } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	export let data;
	const first = data.data[0];
	const second = data.data[1];
	console.log(data.data[0].blog.markdown);
</script>

<div class="flex justify-center max-w-3xl mx-auto">
	<P
		class="mb-3"
		weight="light"
		color="text-gray-950 dark:text-gray-100 max-w-2xl"
		justify
		align="center"
	>
		{first.blog.markdown}
	</P>
</div>
<div class="flex justify-center max-w-3xl mx-auto">
	<P
		class="mb-3"
		weight="light"
		color="text-gray-950 dark:text-gray-100 max-w-2xl"
		justify
		align="center"
	>
		{second.blog.markdown}
	</P>
</div>
