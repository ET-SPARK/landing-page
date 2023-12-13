<template>
  <div>
    <div
      class="fixed top-0 bottom-0 left-0 right-0 flex justify-center modal-overlay bg-black bg-opacity-60"
    >
      <div class="text-center bg-white h-500 w-500 my-5 p-16 rounded-lg modal">
        <h6 class="font-semibold text-2xl my-5">Good to see you again!</h6>
        <form @submit.prevent="submitForm" class="mt-20">
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
                  class="absolute inset-y-0 right-0 pr-2 mt-2 text-gray-500 text-3xl cursor-pointer"
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
          <div class="mt-16">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showPassword: false,
      phoneNumber: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      const formData = {
        phone_number: this.phoneNumber,
        password: this.password,
      };
      try {
        const response = await axios.post(
          "http://localhost:30001/login",
          formData
        );
        if (response.status === 200) {
          // Access the router instance
          const token = response.data.token;
          console.log(token);

          // Save the token to local storage or Vuex store for future use
          localStorage.setItem("jwtToken", token);

          // // Access the router instance
          const router = useRouter();

          // // Navigate to the home screen or any other route
          router.push({ name: "index" });
          console.log("Login successful!");
        } else {
          console.error("Login failed:", response.statusText);
          // Handle login failure, e.g., show an error message
        }
      } catch (error) {
        console.error("Error submitting login form:", error.message);
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style lang="scss" scoped></style>
