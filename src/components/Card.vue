<template>
  <div class="card" style="width: 18rem">
    <div class="card-body flex justify-between flex-col">
      <h5 class="card-title">{{ name }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ city }}</h6>
      <a
        type="button"
        class="btn btn-outline-primary btn-sm w-fit"
        v-bind:href="[url]"
      >
        Detail
      </a>
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
  url: {
    type: String,
  },
});
</script>
