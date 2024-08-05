<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ city }}</h6>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  city: {
    type: String,
  },
});
</script>
