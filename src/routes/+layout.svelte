<script>
  import "../app.css";
  import { page } from '$app/stores';
  import {P,Hr, Navbar,Img, NavBrand, NavLi, NavUl, NavHamburger ,Avatar} from 'flowbite-svelte';
  import { DarkMode } from 'flowbite-svelte';
  import{Github,Linkedin,Gmail} from 'svelte-simples';
  import Footer from "$lib/footer.svelte";
  import Clock from '$lib/clock.svelte';
  import Time from "svelte-time";
	let time = new Date();
  $: hours = time.getHours();
	$: minutes = time.getMinutes();
  $: activeUrl = $page.url.pathname;
</script>
<div class="flex justify-between  mx-auto max-w-3xl item-center  mt-32 ">
  <div class='flex-col'>
    <Avatar size="lg" src="/src/routes/avatar.webp"></Avatar>
    <P class=" font-semibold mt-5" weight="light" color="text-gray-950 dark:text-gray-100 max-w-96" justify>Ansh Verma</P>
  </div>
    <div class="ml-64 flex items-center flex-col"> <!-- Adjust the margin as needed -->
      
      <Clock/>

    </div>
</div>
<Navbar let:NavContainer class="dark:bg-gray-950 ">
  <NavContainer class="  max-w-3xl">
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/projects">Navbar</NavLi>
    <NavLi href="/contacts">Accordion</NavLi>
    <NavLi href="/docs/components/alert">Alert</NavLi>
    <NavLi href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
  <div class='flex'>
  <Gmail class='mx-3'/>
  <Linkedin class='mx-3'/>
</div>

</NavContainer>
</Navbar>
<Hr classHr="w-64 h-1 mx-auto my-4 rounded md:my-10" />

<slot/>
<Footer/>