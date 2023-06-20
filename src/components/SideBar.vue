<template>
  <aside role="navigation" class="sidebar-wrapper h-100 d-none d-lg-block overflow-scroll">
    <div>
      <SideBarElement 
        v-for="element in SideBarElements"
        class="sidebar-element" 
        :icon-name="element.iconName" 
        :label="element.label" 
        :dropdown="element.dropdown" 
        />
    </div>
    <hr />
    <div>
      <SideBarElement 
        v-for="element in SideBarElementsII"
        class="sidebar-element-II" 
        :icon-name="element.iconName" 
        :label="element.label" 
        :dropdown="element.dropdown" 
        />
    </div>
  </aside>
</template>
 
<script setup lang="ts">
const SideBarElements = ref([
  { label: 'Dasboard', iconName: 'dashboard', dropdown: false},
  { label: 'Profile', iconName: 'profile', dropdown: false},
  { label: 'Service', iconName: 'services', dropdown: true},
  { label: 'Medical Records', iconName: 'medical-records', dropdown: false},
  { label: 'Care Wallet', iconName: 'care-wallet', dropdown: false},
  { label: 'Messages', iconName: 'messages', dropdown: false},
  { label: 'Resources', iconName: 'resources', dropdown: false}
])

const SideBarElementsII = ref([
  { label: 'Account Settings', iconName: 'setting', dropdown: false},
  { label: 'Contact Support', iconName: 'contact-support', dropdown: false},
  { label: 'Logout', iconName: 'logout', dropdown: false}
])
</script>
 
<style scoped>
.sidebar-wrapper {
  width: 30%;
  max-width: 18rem;
}

.sidebar-wrapper{
  padding-top: 8rem;
}

.icon{
  font-size: 14px;
}

.sidebar-element,
.sidebar-element-II{
  color: #A0A0A0;
}
.sidebar-element:hover,
.sidebar-element-II:hover{
  color: white;
  background-color: #2A36A4;
}

.sidebar-element:first-child {
  color: white;
  background-color: #2A36A4;
}

@media screen and (max-width: 1200px) {
  .sidebar-wrapper{
    padding-top: 7rem;
  }
}
</style>