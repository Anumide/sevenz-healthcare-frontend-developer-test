<template>
<div class="sidebar px-xl-4 py-xl-3 d-flex gap-3 gap-xl-4 align-items-center">
    <Icon :name="iconName" />
    <div class="flex-grow-1 d-flex align-items-center justify-content-between">
        <span class="fw-semibold">{{ label }}</span>
        <Icon v-if="dropdown" name="arrow-down" />
    </div>
</div>
</template>
 
<script setup lang="ts">
const props = withDefaults(defineProps<{
    iconName: string
    label: string
    dropdown?: boolean
}>(), {
    dropdown: false
})
</script>
 
<style scoped>
.sidebar {
    padding: 0.9rem 0.7rem;
    transition: all 200ms;
}
</style>