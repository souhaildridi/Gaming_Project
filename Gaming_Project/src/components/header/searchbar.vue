<!-- searchbar.vue -->
<template>
    <div class="mt-4 flex relative">
        <!-- hne bg yaani background mr-5 heya margin right 5 et un si de suite -->
        <input type="text" class="rounded-full bg-gray-300 px-7 w-50 h-10 mr-3 fpcus:outline-none focus:outline-shadow" placeholder="Search Games ..">
        <div class="absolute top-0 pr-3">
 
        </div>
        <div v-if="false" class="absolute mt-12 top-10 ml-2 rounded bg-gray-600 w-60">
          <ul class="mt-3">
            <li class="flex items-center border-b border-gray-500 p-1"><img src="../../assets/images/i1.png" alt="" class="w-20 p-1"/> <span class="ml-3">Die hard</span></li>
            <li class="flex items-center border-b border-gray-500 p-1"><img src="../../assets/images/i1.png" alt="" class="w-20 p-1"/> <span class="ml-3">Die hard</span></li>
            <li class="flex items-center border-b border-gray-500 p-1"><img src="../../assets/images/i1.png" alt="" class="w-20 p-1"/> <span class="ml-3">Die hard</span></li>
            <li class="flex items-center border-b border-gray-500 p-1"><img src="../../assets/images/i1.png" alt="" class="w-20 p-1"/> <span class="ml-3">Die hard</span></li>
            <li class="flex items-center border-b border-gray-500 p-1"><img src="../../assets/images/i1.png" alt="" class="w-20 p-1"/> <span class="ml-3">Die hard</span></li>

          </ul>
        </div>
        
        <img src="../../assets/images/av1.png" alt="" class="h-10 rounded-full">
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchbarComponenet', // Change component name to multi-word
  };
  </script>
  
  <style>
  /* You can add styles here if needed */
  </style>
  