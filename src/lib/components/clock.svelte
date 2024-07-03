<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { getDateTime } from '$lib/utils/get-date-time';

	let time = getDateTime();
	let intervalId: number;
	let [formattedDay, formattedDate, formattedTime] = time;
	onMount(() => {
		intervalId = setInterval(() => {
			time = getDateTime();
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	});
</script>

<div class="text-primary-white text-right space-y-3. hidden md:block">
	<h1 class="text-4xl mb-5">{formattedTime}</h1>
	<div class="text-primary-gray">
		<p class="text-lg">{formattedDate}</p>
		<p class="text-lg">{formattedDay}</p>
	</div>
</div>
