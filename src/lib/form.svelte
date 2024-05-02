
<script>
    import { Img } from 'flowbite-svelte';
    import { GradientButton,Heading,P,Span,Label, Input } from 'flowbite-svelte';
    import { Textarea } from 'flowbite-svelte';
    
  let textareaprops = {
    id: 'message',
    name: 'message',
    label: 'Your message',
    rows: 4,
    placeholder: 'Leave a comment...'
  };
</script>
<div class="mx-auto max-w-3xl">
    <Heading tag="h2" class="text-center mb-4 ">
      <Span gradient>CONTACT</Span>
    </Heading>
    <div class="mb-2">
      
      <Input id="default-input" placeholder="Default input" />
    </div>
    <div class="mb-2">
      
      <Input id="default-input" placeholder="Default input" />
    </div>
    <Textarea {...textareaprops} />
   
    <GradientButton outline color="purpleToBlue" class="gradient-button">Submit</GradientButton>

  </div>
  
  
