<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const changePage = () => {
  router.push('/first-page'); // Navigate to another page
};

const closeForm = () => {
  alert('Form Closed'); // Replace with actual close logic
};
</script>

<template>
  <div class="main">
    <div class="form-area">
      <div class="form-header">
        <p @click="changePage" class="back-link">Back</p>
        <!-- <h1 class="spc-h1">SPC</h1> -->
        <button type="button" class="btn-close" aria-label="Close" @click="closeForm">&times;</button>
      </div>
      <div class="form-body">
        <div class="image-section">
          이미지 업로드
        </div>
        <div class="main-text-section">
          <div class="text-area">
            <p>
              안녕하세요? SPC 파리크라상 고객센터입니다.
              저희가 요청드린 이미지 또는 동영상을
              업로드 해주시면 신속하게 처리하여 드리겠습니다.
              감사합니다.
            </p>
          </div>
        </div>
        <div class="next-screen-section">
          <button class="btn" @click="changePage">다음 단계</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

/* Main container */
.main {
  width: 100vw;
  height: 100vh;
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
  height: auto;
  background-color: white;
  border: 1px solid #e3e4e6;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  animation: fadeIn 0.3s ease-in-out;
  border: 3px solid rgb(246, 110, 246);
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

.btn-close {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #007bff;
}

.btn-close:hover {
  color: #ff6b6b; /* Change color on hover */
}

/* Form body */
.form-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Image section */
.image-section {
  background-color: #ec0f0f;
  color: rgb(255, 255, 255);
  width: 100%;
  height: 150px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 1rem;
}

/* Main text section */
.main-text-section {
  width: 100%;
  display: flex;
  justify-content: center;
}

.text-area {
  width: 100%;
}

.text-area p {
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #555;
}

/* Next screen section */
.next-screen-section {
  width: 100%;
  display: flex;
  justify-content: center;
}

.next-screen-section .btn {
  width: 100%;
  height: 50px;
  color: white;
  background-color: #007bff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.next-screen-section .btn:hover {
  background-color: #0056b3;
}

/* Media Queries for Responsiveness */
@media (min-width: 600px) {
  .main {
    padding: 40px;
  }

  .form-area {
    padding: 30px;
    border: 3px solid rgb(246, 110, 246);
  }

  .form-header h1 {
    font-size: 2rem;
  }

  .btn-close {
    font-size: 1.8rem;
  }

  .image-section {
    height: 200px;
    font-size: 1.2rem;
  }

  
