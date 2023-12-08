<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo or Branding -->
      <div class="text-2xl font-bold flex items-center">
        <div>
          <NuxtLink to="/" class="hover:text-gray-300">
            <img
              class="w-20 h-14 cursor-pointer"
              src="https://static.vecteezy.com/system/resources/previews/009/123/201/non_2x/lms-logo-lms-letter-lms-letter-logo-design-initials-lms-logo-linked-with-circle-and-uppercase-monogram-logo-lms-typography-for-technology-business-and-real-estate-brand-vector.jpg"
            />
          </NuxtLink>
        </div>
        <div class="ml-5 flex items-center">
          <input
            type="text"
            placeholder="Search"
            class="bg-gray-700 text-white font-light text-sm px-6 py-2 rounded-full focus:outline-none focus:shadow-outline"
          />
          <Icon
            name="material-symbols:search"
            class="bg-white cursor-pointer"
            color="black"
          />
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="flex space-x-4">
        <NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink>
        <NuxtLink to="/service" class="hover:text-gray-300">Courses</NuxtLink>
        <NuxtLink to="/service" class="hover:text-gray-300">Service</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-gray-300">Contact</NuxtLink>
      </nav>

      <!-- Service Contact Information -->
      <div class="text-right">
        <NuxtLink to="/signup">
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
          >
            Sign Up
          </button>
        </NuxtLink>
        <button
          class="border border-blue-500 hover:border-blue-600 text-blue-500 hover:text-white px-4 py-2 rounded-full ml-6"
        >
          Log in
        </button>
      </div>
      <div>
        <div>
          <button
            @click="toggleState()"
            class="border border-blue-500 hover:border-blue-600 text-blue-500 hover:text-white px-4 py-2 ml-6"
          >
            {{ counter }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const counter = ref("አማ");

const toggleState = () => {
  counter.value = counter.value === "አማ" ? "En" : "አማ";
};
</script>

<style lang="scss" scoped></style>
