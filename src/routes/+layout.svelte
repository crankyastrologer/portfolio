<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import avatar from '$lib/static/avatar.webp';
	import { P, Hr, Navbar, Button, NavLi, NavUl, NavHamburger, Avatar } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	import { Github, Linkedin, Gmail, Files } from 'svelte-simples';
	import Footer from '$lib/components/footer.svelte';
	import Clock from '$lib/components/clock.svelte';
	import openLinkInNewTab from '$lib/utils/openLink';
	$: activeUrl = $page.url.pathname;

</script>

<div class="flex justify-between mx-auto max-w-3xl item-center mt-32">
	<div class="flex-col">
		<Avatar size="lg" src={avatar}></Avatar>
		<P
			class=" font-semibold mt-5"
			weight="light"
			color="text-gray-950 dark:text-gray-100 max-w-96"
			justify>Ansh Verma</P
		>
	</div>
	<div class="ml-64 flex items-center flex-col">
		<!-- Adjust the margin as needed -->

		<Clock />
	</div>
</div>
<Navbar let:NavContainer class="dark:bg-gray-950 ">
	<NavContainer class="  max-w-3xl">
		<NavHamburger />
		<NavUl {activeUrl}>
			<NavLi activeClass="underline" href="/">Home</NavLi>
			<NavLi href="/projects">Work</NavLi>
			<NavLi href="/contacts">Contact</NavLi>

		</NavUl>
		<div class="flex">
			<Button
				shadow
				size="xs"
				color="bg-gray-950"
				class="text-white hover:bg-gradient-to-r from-purple-500 to-pink-500"
				on:click={() => openLinkInNewTab(1)}><Gmail size="20" /></Button
			>
			<Button
				size="xs"
				color="bg-gray-950"
				class="text-white hover:bg-gradient-to-br from-purple-600 to-blue-500 "
				on:click={() => openLinkInNewTab(2)}><Linkedin size="20" /></Button
			>
			<Button
				size="xs"
				color="bg-gray-950"
				class="text-white hover:bg-gradient-to-br from-green-400 to-blue-600 "
				on:click={() => openLinkInNewTab(3)}><Github size="20" /></Button
			>
			<Button
				size="xs"
				color="bg-gray-950"
				class="text-white hover:bg-gradient-to-r from-emerald-500 to-lime-600 "
				on:click={() => openLinkInNewTab(4)}><Files size="20" /></Button
			>

			<DarkMode class="my-auto" />
		</div>
	</NavContainer>
</Navbar>
<Hr classHr="w-64 h-1 mx-auto my-4 rounded md:my-10" />

<slot />
<Hr classHr="w-64 h-1 mx-auto my-4 rounded md:my-10" />
<Footer  />
<svelte:head>
	<title>Ansh's Portfolio</title>
	<meta name="description" content="Hello this is my portfolio website made with the help of sveltekit,
hygraph, tailwind, and flowbite-svelte"/>
	<meta property="og:title" content="Ansh's Portfolio" />
<meta property="og:description" content="Hello checkout my portfolio website made in sveltekit with help of tailwind and hygraph" />
<meta property="og:image" content="https://utfs.io/f/8a69b87b-c6da-4ef2-8917-942d26fb46e9-747opx.jpeg" />
</svelte:head>