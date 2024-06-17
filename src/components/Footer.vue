<template>
  <!-- next screen button -->
  <div class="next-screen-section">
    <router-link class="btn" to="secondpage">다음 단계</router-link>
    <!-- <span @click="navigatePage">다음 단계</span> -->
  </div>
  
</template>


<script>
export default {
  name: "MainFooter",
};
</script>

<style  >
/* Next screen section */
.next-screen-section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .next-screen-section .btn {
    width: 100%;
    height: 50px;
    color: white;
    background-color: #003369;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    font-size: 1rem;
    transition: background-color 0.2s;
  }
  
  .next-screen-section .btn:hover {
    background-color: #0056b3;
  }
</style>
