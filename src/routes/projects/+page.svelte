<script>
    import Ctab from "$lib/project_tabs.svelte"
    export let data;
    console.log("hello world!")
    
    let hCard = false;
  
</script>

<div class="mx-auto max-w-3xl">
<Ctab data = {data.data.projects}/>
</div>


