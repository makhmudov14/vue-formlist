<script>
import FlexWrapper from "@/components/FlexWrapper.vue";
export default {
  components: {
    FlexWrapper,
  },
  navigatePage() {
      this.$router.push({
        name: "SecondPage",
        params: {
          router: true,

          
        },
      });
    },
    
}
</script>


<template>
  <Transition>
    <FlexWrapper>
      <template #body>
        <div class="page-title">
          <p >
            이미지 업로드 화면
          </p>
        </div>
      
        <!-- text area -->
        <div class="main-text-section">
          <div class="text-area">
            <div class="main-p">
              <p>
                안녕하세요? SPC 파리크라상 고객센터입니다. 저희가 요청드린 이미지
                또는 동영상을 업로드 해주시면 신속하게 처리하여 드리겠습니다.
                감사합니다.
              </p> 
            </div>
             
          </div>
        </div>
      </template>
    </FlexWrapper>
  </Transition>
</template>

<style  scoped >
/* Reset */

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Helvetica Neue", Arial, sans-serif;
}





/* Image section */
.page-title{
  width: 100%;
  height: 50px;
  background-color:#f70000 ;
  color: #ffffff; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

/* Main text section */
.main-text-section {
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.text-area {
  width: 100%;
}

.text-area p {
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.5;
  color: rgb(3, 3, 3);
}



/* Media Queries for Responsiveness */

</style>
  
  
  
  
  
  
  
  
  
  
  
  
















<!--<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Setup for the router
const router = useRouter();

// Function to navigate to another page
const changePage = () => {
  router.push('/'); // Adjust the path '/next' as needed
};




</script>

<template>

    
<body>
  <div class="main" >
<div class="form-area">
  <div class="form-header">
    <p>back</p>
    
    <h1 >SPC</h1>
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="form-body">
    <div class="image-section">
      이미지 등로화면
    </div>

    
    <div class="main-text-section">
      <div class="text-area">
        <p>
          안녕하세요? 
          SPC 파리크라상 고객센터입니다. 
          저희가 요청드린 이미지 또는 동영상을 
          업로드 해주시면 신속하게 처리하여
          드리겠습니다. 
          감사합니다. 
        </p>
      </div>
    </div>
     
    
    <div class="nex-screen-section">
      
      <button class="btn"  v-on:click="firstPage">다음단계</button>
    </div>
  </div>
</div>
  </div>
</body>
</template>

<style scoped>
    *{
  
    margin: 0px;
    padding: 0px;
   }
   .main{
    width: 100vw;
    height: 100vh;
    background-color: rgb(240, 240, 240);
    display: flex;
    justify-content: center;
    align-items: center;
   }
   .form-area{
    max-width: 50%;
    width: 480px;
    height: 90vh;
    background-color: white;
    border: 1px solid #f6f6f6;
    padding: 20px 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 3px solid rgb(246, 110, 246);

   }
   .form-header{
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
   }
   .header1{
    color: #646183;
   }
   .btn{
    color: #646183;;
   }
   .form-body{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   }
   .image-section{
    background-color: red;
    color: white;
    width: 100%;
    height: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
   }
   .main-text-section{
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;

   }
   .nex-screen-section{
    width:  100%;
    height: 50px;
    padding: 0px 12px;
    display: flex;
    justify-content:  center;
    align-items: center;

   }
   .nex-screen-section .btn{ 
    width:  100%;
    height: 100%;
    color: white;
    background-color: #1e1868;

   }
   .text-area{
    width: 50%;
   }
   .text-area p{
    text-align: center;
    
    font-size: 22px;
   }
   .header{
    display:inline-block;
    justify-content: center;

   }
   .mb-3 {
    
    margin-right: 20px;
    margin-left: 25px;
   }
   .header-text {
    font-size: 25px;
    background-color: red;
    color: white;
   }

   @media screen and (min-width: 600px ) {
    .main {
      display: flex;
      
    }
    .form-area .form-header .header1 .btn-close {
      width: 100px;

    }
    
   }
   
</style>  -->







