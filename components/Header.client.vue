<template>
  <header class="bg-gray-800 text-white p-2 sticky top-0 shadow-xl z-50">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo or Branding -->
      <div class="text-2xl font-bold flex items-center">
        <div>
          <NuxtLink to="/" class="hover:text-gray-300">
            <img
              class="w-20 h-20 cursor-pointer rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/009/123/201/non_2x/lms-logo-lms-letter-lms-letter-logo-design-initials-lms-logo-linked-with-circle-and-uppercase-monogram-logo-lms-typography-for-technology-business-and-real-estate-brand-vector.jpg"
            />
          </NuxtLink>
        </div>
        <nav class="flex">
          <NuxtLink to="/service" class="hover:text-gray-300 font-bold ml-5"
            >Courses
            <Icon
              name="material-symbols:arrow-drop-down"
              class="cursor-pointer text-3xl"
              color="white"
          /></NuxtLink>
        </nav>
        <div class="ml-5 flex items-center">
          <input
            type="text"
            placeholder="Search"
            class="bg-gray-700 text-white font-light text-xs px-4 w-80 py-2 rounded-sm focus:outline-none focus:shadow-outline"
          />
          <Icon
            name="material-symbols:search"
            class="bg-white cursor-pointer ml-2 text-3xl"
            color="black"
          />
        </div>
      </div>

      <!-- Navigation Links -->

      <div class="flex">
        <!-- Service Contact Information -->
        <div class="text-right flex items-center">
          <!-- If decodedToken exists, display the token, otherwise show signup and login buttons -->
          <template v-if="decodedToken">
            <p>hello {{ decodedToken.user.your_name }}</p>
            <NuxtLink to="/login">
              <button
                @click="logout"
                class="border border-blue-500 hover:border-blue-600 text-blue-500 hover:text-white px-4 py-2 rounded-full ml-6"
              >
                Log out
              </button>
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/signup">
              <button
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
              >
                Sign Up
              </button>
            </NuxtLink>
            <NuxtLink to="/login">
              <button
                class="border border-blue-500 hover:border-blue-600 text-blue-500 hover:text-white px-4 py-2 rounded-full ml-6"
              >
                Log in
              </button>
            </NuxtLink>
          </template>
        </div>
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

<script setup>
const counter = ref("አማ");

const toggleState = () => {
  counter.value = counter.value === "አማ" ? "En" : "አማ";
};

const jwtToken = localStorage.getItem("jwtToken");
let decodedToken = null;

try {
  // Decode the JWT token (assuming it's a valid JWT token)
  decodedToken = JSON.parse(atob(jwtToken.split(".")[1]));

  // Now, decodedToken contains the decoded information in JSON format
  console.log(decodedToken.user);
} catch (error) {
  // Handle error, e.g., token is not a valid JWT
  console.error("Error decoding token:", error.message);
}

const logout = () => {
  // Remove the JWT token from localStorage
  localStorage.removeItem("jwtToken");

  // Set decodedToken to null to trigger the rendering of the login/signup buttons
  decodedToken = null;
};
</script>

<style lang="scss" scoped></style>
