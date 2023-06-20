<template>
  <div class="d-flex vh-100 w-100">
    <SideBar />
    <main class="dashboard overflow-scroll h-100 p-2 p-md-3 p-lg-4 p-xl-5 flex-grow-1">
      <MobileSideBar v-if="showMobileMenu" @close="showMobileMenu = !showMobileMenu" />
      <div class="mx-auto p-0 w-100 ">
        <div class="d-flex justify-content-between justify-content-lg-end align-items-center">
        <div class="hamburger d-lg-none" @click="showMobileMenu = !showMobileMenu">
         <img src="/src/assets/images/hamburger.svg" class="w-100 h-100" alt="hamburger">
        </div>
        <div class="notification d-flex align-items-center justify-content-between">
          <p class="text fw-bold">Take a tour</p>
          <div class="notification__icons__mail">
            <img src="/src/assets/images/mail.svg" class=" w-100 h-100" alt="">
          </div>
          <div class="notification__icons__notification">
            <img src="/src/assets/images/notification.svg" class=" w-100 h-100" alt="">
          </div>
          <div class="profile overflow-hidden rounded-circle d-flex justify-content-center align-items-center">
            <img alt="profile Image" class="w-100 h-100 object-fit-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/220px-Outdoors-man-portrait_%28cropped%29.jpg">
          </div>
        </div>
        </div>
      

        <Dasboard />
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
const { auth_token } = useRuntimeConfig()
const cookie = useCookie('token')
cookie.value = cookie.value || auth_token

const showMobileMenu = ref(false)
</script>

<style scoped>
.dashboard {
    background-color: #F5F5FB;
}

.dashboard > div {
  max-width: 64rem;
}
.hamburger {
  width: 1.5rem;
}

.profile {
  width: 30px;
  height: 30px;
}


.text {
  color: rgba(56, 47, 144, .6);
  font-size: 0.7rem;
  margin: 0.2rem 0 0 0;
}

.notification{
  width: 60%;
  max-width: 230px;
}

.notification__icons__mail{
  width: 8%;
}
.notification__icons__notification{
  width: 6%;
}

@media screen and (max-width: 1200px) {
  .notification{
    max-width: 210px;
  }
}
</style>
