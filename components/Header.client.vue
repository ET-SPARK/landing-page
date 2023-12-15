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
          <div class="relative">
            <div
              class="text-gray-300 text-xl font-semibold ml-5 cursor-pointer"
              @click="toggleDropdown"
            >
              Courses
              <Icon
                name="material-symbols:arrow-drop-down"
                class="cursor-pointer text-3xl"
                color="white"
              />
            </div>

            <!-- The div you want to show on absolute -->
            <div
              v-show="isDropdownVisible"
              class="absolute bg-white text-black p-4 text-sm w-[600px] mt-8 rounded-xl shadow-md"
            >
              <div class="flex1">
                <div class="flex justify-between mb-5">
                  <div class="text-lg">Categories</div>
                  <div class="text-sm text-blue-500 underline">
                    <NuxtLink to="/course"> View all </NuxtLink>
                  </div>
                </div>

                <div class="flex-1 font-light border-gray-200 border-t-2">
                  <div class="grid grid-cols-2 gap-5 justify-between mt-4 mb-4">
                    <div class="flex items-center">
                      <div class="bg-blue-500 p-1 mr-2 rounded-md">
                        <Icon
                          name="streamline:money-cash-bill-1-billing-bills-payment-finance-cash-currency-money-accounting"
                          class="cursor-pointer text-white text-2xl"
                        />
                      </div>
                      <div>Accounting & Finance</div>
                    </div>
                    <div class="flex items-center">
                      <div class="bg-blue-500 p-1 mr-2 rounded-md">
                        <Icon
                          name="ep:brush"
                          class="cursor-pointer text-white text-2xl"
                        />
                      </div>
                      <div>Art & Crafts</div>
                    </div>
                    <div class="flex items-center">
                      <div class="bg-blue-500 p-1 mr-2 rounded-md">
                        <Icon
                          name="mdi:brush-off"
                          class="cursor-pointer text-white text-2xl"
                        />
                      </div>
                      <div>Beauty & Makeup</div>
                    </div>
                    <div class="flex items-center">
                      <div class="bg-blue-500 p-1 mr-2 rounded-md">
                        <Icon
                          name="material-symbols:ink-pen-sharp"
                          class="cursor-pointer text-white text-2xl"
                        />
                      </div>
                      <div>Creatives & Design</div>
                    </div>
                    <div class="flex items-center">
                      <div class="bg-blue-500 p-1 mr-2 rounded-md">
                        <Icon
                          name="ic:round-fastfood"
                          class="cursor-pointer text-white text-2xl"
                        />
                      </div>
                      <div>Food & Beverage</div>
                    </div>
                    <div class="flex items-center">
                      <div class="bg-blue-500 p-1 mr-2 rounded-md">
                        <Icon
                          name="material-symbols:ecg-heart-outline"
                          class="cursor-pointer text-white text-2xl"
                        />
                      </div>
                      <div>Health & Fitness</div>
                    </div>
                    <div class="flex items-center">
                      <div class="bg-blue-500 p-1 mr-2 rounded-md">
                        <Icon
                          name="lucide:languages"
                          class="cursor-pointer text-white text-2xl"
                        />
                      </div>
                      <div>Language & Literature</div>
                    </div>
                    <div class="flex items-center">
                      <div class="bg-blue-500 p-1 mr-2 rounded-md">
                        <Icon
                          name="ph:music-notes-fill"
                          class="cursor-pointer text-white text-2xl"
                        />
                      </div>
                      <div>Music & Theater</div>
                    </div>
                    <div class="flex items-center">
                      <div class="bg-blue-500 p-1 mr-2 rounded-md">
                        <Icon
                          name="guidance:office"
                          class="cursor-pointer text-white text-2xl"
                        />
                      </div>
                      <div>Office productivity</div>
                    </div>
                    <div class="flex items-center">
                      <div class="bg-blue-500 p-1 mr-2 rounded-md">
                        <Icon
                          name="guidance:meeting-point"
                          class="cursor-pointer text-white text-2xl"
                        />
                      </div>
                      <div>Personal development</div>
                    </div>
                    <div class="flex items-center">
                      <div class="bg-blue-500 p-1 mr-2 rounded-md">
                        <Icon
                          name="material-symbols:camera"
                          class="cursor-pointer text-white text-2xl"
                        />
                      </div>
                      <div>Photography & Videography</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex justify-between mt-5 items-center bg-gray-100 p-4"
              >
                <div class="flex1">
                  <div>Get started</div>
                  <div class="font-light">
                    Discover a wide range of online courses in variety <br />
                    of fields to enhance your abilities and knowledge
                  </div>
                </div>
                <div>
                  <button class="cursor-pointer border bg-gray-300 px-4 py-2">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="ml-5 flex items-center">
          <input
            type="text"
            placeholder="what do you went to learn?"
            class="bg-gray-700 text-white font-light text-xs px-4 w-80 py-2 rounded-sm focus:outline-none focus:shadow-outline"
          />
          <Icon
            name="material-symbols:search"
            class="bg-white cursor-pointer ml-2 text-3xl rounded-sm"
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
            <div @click="profile" class="relative">
              <Icon
                name="material-symbols:account-circle-outline"
                class="cursor-pointer ml-2 text-4xl rounded-sm"
                color="white"
              />
            </div>

            <div
              v-show="isProfileVisible"
              class="absolute bg-white text-black p-4 text-sm w-[150px] mt-48 ml-10 rounded-xl shadow-md"
            >
              <div class="flex1">
                <NuxtLink to="/">
                  <div class="flex items-center mb-2">
                    <div>
                      <Icon
                        name="streamline:interface-favorite-award-ribbon-reward-like-social-rating-media"
                        class="cursor-pointer ml-1 text-xl rounded-sm mr-2"
                        color="black"
                      />
                    </div>
                    <div>My course</div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/">
                  <div class="flex items-center mb-2">
                    <div>
                      <Icon
                        name="material-symbols:person-outline"
                        class="cursor-pointer ml-1 mr-2 text-xl rounded-sm"
                        color="black"
                      />
                    </div>
                    <div>Profile</div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/login" @click="logout">
                  <div class="flex items-center mb-2">
                    <div>
                      <Icon
                        name="clarity:sign-out-line"
                        class="cursor-pointer ml-1 mr-2 text-xl rounded-sm"
                        color="black"
                      />
                    </div>
                    <div>Sign out</div>
                  </div>
                </NuxtLink>
              </div>
            </div>
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

const isDropdownVisible = ref(false);
const isProfileVisible = ref(false);

const profile = () => {
  isProfileVisible.value = !isProfileVisible.value;
};

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};
</script>

<style lang="scss" scoped></style>
