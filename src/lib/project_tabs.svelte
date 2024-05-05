<script >
import {Tabs,TabItem} from "flowbite-svelte";
import Ccards from "./card.svelte";
import Ecards from "./expCard.svelte";
export let data;
console.log(data)
</script>
<Tabs contentClass='p-4 bg-gray-50 rounded-lg dark:bg-gray-950 mt-4' tabstyle='underline'>
    <TabItem open title="Profile" class="dark:bg-gray-950" >
      {#each data as item }
      <Ccards data={item}/>
      {/each}
    </TabItem>
    <TabItem open title="Job" class="dark:bg-gray-950" >
      
    </TabItem>
  </Tabs>