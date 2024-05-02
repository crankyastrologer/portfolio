<script>
    import { Card, Button, Toggle } from 'flowbite-svelte';
    let hCard = false;
  
</script>

<style>
  .card-container {
    margin-bottom: 50px; /* Adjust the margin as needed */
  }
</style>

<div class="flex justify-center card-container">
  <div class="space-y-4">
    <Card img="src/lib/OIP.jpeg" href="/" horizontal size="lg" reverse={hCard} class="dark:bg-gray-950">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </Card>
  </div>
</div>
