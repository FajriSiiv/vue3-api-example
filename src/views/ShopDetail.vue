<script setup>
import { getDataById } from "@/api/user";
import { reactive, onMounted, ref } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();

const shopId = route.params.id;
const dataShop = ref({});
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await getDataById(shopId);
    dataShop.value = response;

    await new Promise((resolve) => setTimeout(resolve, 2000));
  } catch (error) {
    console.log(error, "ERROR FETCHING DATA!!", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="container flex flex-col gap-y-3 py-5" v-if="!isLoading">
    <h1>{{ dataShop.name }}</h1>
    <span>{{ dataShop.address_1 }}</span>
    <span>{{ dataShop.city }}</span>
    <span>{{ dataShop.country }}</span>
    <span>{{ dataShop.state }}</span>

    <a href="/" type="button" class="btn btn-sm btn-outline-primary w-fit"
      >Back</a
    >
  </div>
  <div class="d-flex justify-content-center items-center h-screen" v-else>
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
