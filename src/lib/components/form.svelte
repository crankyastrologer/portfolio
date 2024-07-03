
<script lang="ts">
    import { Img } from 'flowbite-svelte';
    import { GradientButton,Heading,Span, Input } from 'flowbite-svelte';
    import { Textarea } from 'flowbite-svelte';
    let message : string;
    let email : string;
    let success:string = '';
  let error = '';
  let textareaprops = {
    id: 'message',
    name: 'message',
    label: 'Your message',
    rows: 4,
    placeholder: 'Leave a comment...'
  };

  const validateEmail = (input:string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(input);
  };
  function checkVal()
    {
      const re = /\S+@\S+\.\S+/;
      console.log("checking")
      if(re.test(email))
      {
        error=''
      }
      else error="Please enter a valid email"
    }
    function handleSubmit(){
      if(validateEmail(email))
      {

        success = "Message sent successfully"
        error = ''
        email=''
        message =''
      }
      else error = "Please enter a valid email"

    }
</script>
<div class="mx-auto max-w-3xl">
    <Heading tag="h2" class="text-center mb-4 ">
      <Span gradient>CONTACT</Span>
    </Heading>
    <div class="mb-5">
      
      <Input on:keypress={checkVal} bind:value={email} id="default-input" placeholder="Email" type="email"/>
      <p class="text-red-500">{error}</p>
    </div>

    <Textarea {...textareaprops} bind:value={message} />
   
    <GradientButton outline color="purpleToBlue" class="gradient-button my-5" on:click={handleSubmit}>Submit</GradientButton>
  <p class="text-green-500">{success}</p>

  </div>
  
  
