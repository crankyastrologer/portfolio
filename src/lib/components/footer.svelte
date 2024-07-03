<script>
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterBrand,
		FooterLink
	} from 'flowbite-svelte';
</script>

<Footer footerType="logo" class="mx-auto max-w-3xl dark:bg-gray-950">
	<div class="sm:flex sm:items-center sm:justify-between ">
		
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
		>
			<FooterLink href="/">Home</FooterLink>
			<FooterLink href="/projects">Work</FooterLink>
			<FooterLink href="/Contact">Contact</FooterLink>

		</FooterLinkGroup>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
<div class="flex justify-center text-gray-500 ">
	Made with ❤️</div>
</Footer>
