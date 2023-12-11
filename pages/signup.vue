<template>
  <div>
    <div
      class="fixed top-0 bottom-0 left-0 right-0 flex justify-center modal-overlay bg-black bg-opacity-60"
    >
      <div class="text-center bg-white h-500 w-500 my-5 p-16 rounded-lg modal">
        <h6 class="font-semibold text-4xl my-5">Create Account</h6>
        <form @submit.prevent="submitForm" class="mt-20">
          <div class="flex mb-8">
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Your Name</label
              >
              <input
                v-model="yourName"
                type="text"
                id="name"
                name="name"
                class="mt-1 p-2 border rounded-md px-6"
                placeholder="Enter your name"
                required
              />
            </div>

            <div class="mb-4">
              <label
                for="fathersName"
                class="block text-sm font-medium text-gray-700"
                >Father's Name</label
              >
              <input
                v-model="fathersName"
                type="text"
                id="fathersName"
                name="fathersName"
                class="mt-1 p-2 border rounded-md px-6 ml-3"
                placeholder="Enter your father's name"
                required
              />
            </div>
          </div>

          <div class="flex1">
            <div class="mb-4">
              <label
                for="phoneNumber"
                class="block text-sm font-medium text-gray-700"
                >Phone Number</label
              >

              <div class="relative">
                <Icon
                  name="material-symbols:smartphone"
                  class="absolute inset-y-0 left-0 pl-2 mt-2 text-gray-500 text-3xl"
                />
                <input
                  v-model="phoneNumber"
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  class="pl-10 mt-1 p-2 border rounded-md w-full"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div class="mb-4">
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
                >Password</label
              >
              <div class="relative">
                <Icon
                  name="mynaui:lock-password"
                  class="absolute inset-y-0 left-0 pl-2 mt-2 text-gray-500 text-3xl"
                />
                <Icon
                  v-if="showPassword"
                  @click="togglePasswordVisibility"
                  name="material-symbols:visibility-lock"
                  class="absolute inset-y-0 right-0 pr-2 mt-2 text-gray-500 text-3xl"
                />
                <Icon
                  v-else
                  @click="togglePasswordVisibility"
                  name="material-symbols:visibility"
                  class="absolute inset-y-0 right-0 pr-2 mt-2 text-gray-500 text-3xl"
                />
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  name="password"
                  class="pl-10 mt-1 p-2 border rounded-md w-full"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
          </div>
          <div class="flex-col justify-start">
            <div class="mb-4">
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-blue-500 items-start"
                />
                <span class="ml-2 text-gray-700 text-start"
                  >I accept the terms and conditions</span
                >
              </label>
            </div>
            <div>
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<script setup>
import { ref } from "vue";
import axios from "axios";

const yourName = ref("");
const fathersName = ref("");
const phoneNumber = ref("");
const password = ref("");
const acceptTerms = ref(false);

const submitForm = async () => {
  const formData = {
    your_name: yourName.value,
    father_name: fathersName.value,
    phone_number: phoneNumber.value,
    password: password.value,
  };
  try {
    const response = await axios.post("http://localhost:30001/users", formData);

    if (response.status === 200) {
      console.log("Registration successful!");
    } else {
      console.error("Registration failed:", response.statusText);
    }
  } catch (error) {
    console.error("Error submitting form:", error.message);
  }
};
</script>

<style lang="scss" scoped></style>
