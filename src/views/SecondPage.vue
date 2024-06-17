
<template>
  <Transition>
    <FlexWrapper>
      <template #body>
        

        
        <div class="input-section">
          <div class="img-color">이미지 업로드</div>
          <div class="underline"><label for="inputField" ><strong>고객정보</strong> </label></div>
          
          <br/>
          <input id="inputField"  type="text" v-model="inputValue" @input="handleInput" placeholder=" 고객명"/>
        </div>
        

        
        <div class="main-text-section">
          <div class="text-area">
            <p class="p-number">123456789</p>
          
            <h6>* 제출 이미지</h6>
            <h6>1. 이물질 사진</h6>
            <h6>2. 기타 증적 통영상</h6>

            <div class="input-section">
              <label for="inputField"><strong>제출서류</strong> </label>
              <input id="inputField"  type="text" v-model="inputValue" @input="handleInput"/>
              <input id="inputField"  type="text" v-model="inputValue" @input="handleInput" placeholder="제출서류를 선택해주세요" />
              
              
              
              
              
            </div>
            
            
          </div>
        </div>
        <div class="paragraph">
          <p>1.첨부 파일은 PDF 또는 JPG,GIF,PNG,BMP 등의 이미지만 업로드 가능합냐다</p>
          <p>2.각 첨부파일 당 최대 10MG까지 업로드 가능합니다</p>

        </div>

        
      </template>
    </FlexWrapper>
  </Transition>
</template>

<script>
import FlexWrapper from "@/components/FlexWrapper.vue";
import { text } from '@fortawesome/fontawesome-svg-core';
export default {
  components: {
    FlexWrapper,
  },
  navigatePage() {
      this.$router.push({
        name: "/ThirdPage",
        params: {
          router: true,
        },
      });
    },
    
}
</script>

<style scoped>
.underline {
  border-bottom: 1px solid black;
  font-size: 1rem;
  color: #333;
  text-decoration: underline; /* Adds an underline to the label */
}
.input-section {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}



.input-section label {
  font-size: 1rem;
  color: #333;
}

.input-section input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.next-screen-section .btn {
  width: 45%;
  height: 45px;
  color: white;
  background-color: #003369;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.2s;
}
.main-text-section{
  width: 100%;
}
.main-text-section .text-area{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}


.img-color {
  background-color: red;
  color: white;
  text-align: center;
  justify-content: center;
  height: 100%;
  border: none;
  padding: 20px;
  margin:0;
  

}
.paragraph {
  font-size: 12px;
}

</style>





