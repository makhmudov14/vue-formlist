<template>
      <div class="form-header" v-if="$slots.header">
        <slot name="header">

        </slot>
      </div>
      <div class="form-body">
        <slot name="body"></slot>
      </div>
      <div class="form-footer">
        <slot v-if="$slots.footer" name="footer"></slot>
      </div>
</template>

<script>
export default {
  name: "FlexWrapper",
};
</script>

<style>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

/* Main container */
.main {
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
/* Form area */
.form-area {
  width: 100%;
  max-width: 500px;
  height: 100%;
  background-color: white;
  border: 1px solid #e3e4e6;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  animation: fadeIn 0.3s ease-in-out;
  border: 2px solid rgb(246, 110, 246);
  align-items: center;
  justify-content: flex-start;
}
/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Form header */
.form-header {
  display: flex;
  width:  100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  min-height: 60px;
}

.form-header p {
  cursor: pointer;
  color: #007bff;
  font-size: 1rem;
}

.form-header p:hover {
  text-decoration: underline;
}

.form-header h1 {
  color: #333;
  font-size: 1.8rem;
  text-align: center;
  flex-grow: 1;
  margin: 0;
}
.form-body{
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

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
@media (max-width: 600px) {
    .main {
      padding: 20px;
    }
  
    .form-area {
      padding: 5px;
      border: 3px solid rgb(246, 110, 246);
    }
  
    .form-header h1 {
      font-size: 2rem;
    }
  
    .btn-close {
      font-size: 2rem;
    }
  
  
    .text-area p {
      font-size: 1.25rem;
    }
  
    .next-screen-section .btn {
      font-size: 1.2rem;
    }
  }
  
  @media (min-width: 1024px) {
    .main {
      padding: 60px;
    }
  
    .form-area {
      padding: 16px 8px;
      border: 3px solid rgb(246, 110, 246);
    }
  
    .form-header h1 {
      font-size: 2.4rem;
    }
  
    .btn-close {
      font-size: 2rem;
    }
  
  
  
    .text-area p {
      font-size: 1.5rem;
    }
  
    .next-screen-section .btn {
      font-size: 1.5rem;
    }
  }
</style>
