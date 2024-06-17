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
