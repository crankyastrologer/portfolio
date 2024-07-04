<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import {slide} from 'svelte/transition'
    import { GiftBoxSolid, ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
</script>
<div in:slide={{duration:500}}>
<Card horizontal size="xl" class="dark:bg-gray-950">
<div class="">
<div class="mx-auto flex items-center">
    <div class="flex items-center">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">IIIT-Delhi</h5>
        <a href="https://iiitd.ac.in/"><ArrowUpRightFromSquareOutline class="w-4 h-4 ms-2.5" /></a>
    </div>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight ml-auto">
     June,2023 - August,2023
    </p>
</div>
  <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Here  I majorly dabbled in rehauling their website which included
Reworked the datapipeline for the website improving load times by upto 300% and eliminating hangups
Made front end more user friendly and added features like database search filtering along with different modes for relative positions of satellites
Created an server communicate between the supercomputer and the website regarding the collision probability
Assisted in the migration of atmospheric models to new platforms, ensuring seamless integration and functionality.
Designed and implemented an auto-updating MongoDB database system to streamline data management processes.</p>

  </div>
</Card></div>