<template>
  <div>
    <div
      class="fixed top-0 bottom-0 left-0 right-0 flex justify-center modal-overlay bg-black bg-opacity-60"
    >
      <div class="text-center bg-white h-500 w-500 mt-10 p-16 rounded-lg modal">
        <h6 class="font-semibold text-4xl my-5">Create Account</h6>
        <form @submit.prevent="submitForm" class="mt-20">
          <div class="flex mb-8">
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Your Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                class="mt-1 p-2 border rounded-md px-6"
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
                type="text"
                id="fathersName"
                name="fathersName"
                class="mt-1 p-2 border rounded-md px-6 ml-3"
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
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                class="mt-1 p-2 border rounded-md w-full px-8"
                required
              />
            </div>

            <div class="mb-4">
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
                >Password</label
              >
              <input
                type="password"
                id="password"
                name="password"
                class="mt-1 p-2 border rounded-md w-full px-8"
                required
              />
            </div>
          </div>
          <div class="flex1">
            <div class="mb-4">
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-blue-500"
                />
                <span class="ml-2 text-gray-700"
                  >I accept the terms and conditions</span
                >
              </label>
            </div>
            <div>
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const submitForm = () => {
  // Handle form submission logic here
  console.log("Form submitted with data:", formData.value);
};
</script>

<style lang="scss" scoped></style>
