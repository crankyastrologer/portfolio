<script lang='ts'>
    import {Badge } from 'flowbite-svelte'


    export let data: str;

</script>

<Badge large color='dark' class="mx-1 hover:bg-gradient-to-r from-emerald-500 to-lime-600">{data}</Badge>
