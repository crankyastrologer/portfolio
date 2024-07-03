<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import avatar from '$lib/avatar.webp';
	import { P, Hr, Navbar, Button, NavLi, NavUl, NavHamburger, Avatar } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	import { Github, Linkedin, Gmail, Files } from 'svelte-simples';
	import { Motion } from 'svelte-motion';
	import Footer from '$lib/footer.svelte';
	import Clock from '$lib/clock.svelte';

	$: activeUrl = $page.url.pathname;
	function openLinkInNewTab(no: number) {
		if (no == 1) window.open('mailto:ansh0verma@gmail.com');
		if (no == 2) window.open('https://www.linkedin.com/in/ansh-vermaai/', '_blank');
		if (no == 3) window.open('https://github.com/crankyastrologer', '_blank');
		if (no == 4)
			window.open('https://utfs.io/f/47311458-cecc-450e-9daa-bd0364fd9afb-u30njs.pdf', '_blank');
	}
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
