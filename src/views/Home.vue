<script setup>
import { getData } from "@/api/user";
import Card from "@/components/Card.vue";
import { onMounted, ref } from "vue";

const shops = ref([]);
const isLoading = ref(true);
const isLoadingFirst = ref(true);
const count = ref(10);

const fetchMoreData = async () => {
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    count.value += 10;

    const response = await getData(count.value);
    shops.value = response;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  try {
    const response = await getData(count.value);
    shops.value = response;

    await new Promise((resolve) => setTimeout(resolve, 2000));
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
    isLoadingFirst.value = false;
  }
});
</script>

<template>
  <section class="h-fit w-full flex justify-center items-center flex-col">
    <div class="h-fit flex flex-col justify-center items-center p-10">
      <ul class="w-full h-full grid grid-cols-4 gap-3" v-if="!isLoadingFirst">
        <Card v-for="item in shops" :city="item.state" :name="item.name" />
      </ul>
    </div>
    <button
      @click="fetchMoreData"
      type="button"
      class="btn btn-primary mb-10"
      v-bind:disabled="isLoading"
    >
      <div v-if="isLoading">
        <span
          class="spinner-grow spinner-grow-sm mr-2"
          aria-hidden="true"
        ></span>
        <span role="status">Loading...</span>
      </div>
      <span v-else>Fetching Data</span>
    </button>
  </section>
</template>
