<template>
<button @click="clickEvent"><slot /></button>
</template>

<script setup>
const { clickEvent } = defineProps(['clickEvent']);
</script>