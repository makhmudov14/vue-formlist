<template>
  <div class="form-header">
    <font-awesome-icon
      icon="arrow-left"
      style="color: blue"
      @click="changePage"
      class="back-link"
    />
    <h1 class="spc-h1">SPC</h1>
    <button
      type="button"
      class="btn-close"
      aria-label="Close"
      @click="closeForm"
    >
      &times;
    </button> 
  </div>
</template>

<style >

.btn-close {
    background: white;
    border: #e3e4e6;
    cursor: pointer;
    font-size: 2rem;
    color: blue;
  }
  .back-link {
    font-size: 1rem;
    margin-top: 23px;
  }
  
  
  .btn-close:hover {
    color: #ff6b6b; /* Change color on hover */
  }
</style>
<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="scss" scoped></style>
