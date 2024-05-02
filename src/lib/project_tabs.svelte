<script >
import {Tabs,TabItem} from "flowbite-svelte";
import Ccards from "./card.svelte";
</script>
<Tabs class="dark:bg-gray-950">
    <TabItem open title="Profile" class="dark:bg-gray-950" >
      <Ccards/>
    </TabItem></Tabs>