<script lang="ts">
	import { Img } from 'flowbite-svelte';
	import { P } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	export let data;
	let blogData: any;
	data = data;

	console.log(data);
</script>

<div class="flex justify-center max-w-3xl mx-auto">
	<P
		class="mb-3"
		weight="light"
		color="text-gray-950 dark:text-gray-100 max-w-2xl"
		justify
		align="center"
	>
  Hi there! My name is Ansh Verma and welcome to my portfolio website. I am a software developer specializing in AI/ML and backend development and I am passionate about AI and its uses in daily lives that can help us create a brighter future.

  Adapting to new challenges is my thing, and I'm always eager to learn the coolest skills and latest technologies out there. I'm open to collaborating, sharing ideas, and making new friends in the tech world. Don't hesitate to message me and let's build something great together
	</P>
</div>
