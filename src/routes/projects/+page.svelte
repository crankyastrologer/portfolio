<script lang="ts">
    import Ctab from "$lib/project_tabs.svelte"
		import type {Projects} from "$lib/interface.ts"
    export let data:Projects;



  
</script>

<div class="mx-auto max-w-3xl">
<Ctab data = {data.data.projects}/>
</div>


