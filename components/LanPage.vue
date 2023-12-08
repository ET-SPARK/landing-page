<template>
  <div>
    <div class="flex">
      <div>
        <h1 class="ml-20 text-4xl font-semibold">For every student,</h1>
        <h1 class="ml-20 text-4xl font-semibold">every classroom.</h1>
        <h1
          class="text-gray-700 font-tahoma text-3xl font-semiboldt leading-1.5 uppercase whitespace-no-wrap overflow-hidden relative w-550"
        >
          <span class="text-4xl font-semibold ml-20">Real</span>
          <div
            class="message bg-blue-300 text-gray-700 block font-bold overflow-hidden absolute pl-2 top-0.2 left-44 animate-openclose"
          >
            <div class="word1 font-tahoma text-3xl">results</div>
            <div class="word2 font-tahoma text-3xl">results</div>
            <div class="word3 font-tahoma text-3xl">results</div>
          </div>
        </h1>
        <p class="text-justify mr-24 mt-10 ml-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="animate__animated animate__slideInLeft">
        <img
          src="../assets/images/landImg.png"
          alt="My Image"
          class="w-75 h-70"
        />
      </div>
    </div>
    <div class="flex">
      <div>
        <p class="ml-12 text-gray-500">LEARNERS AND STUDENTS</p>
        <p class="text-4xl ml-12">You can learn</p>
        <p class="text-4xl ml-12">anything.</p>
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full ml-16 mt-5"
        >
          Get Started!
        </button>
      </div>
      <div class="mx-5">
        <div
          class="flex items-center justify-center animate__animated animate__slideInDown"
        >
          <img
            src="https://cdn.kastatic.org/images/lohp/personalized_learning_icon.png"
            class="w-20 h-20"
          />
        </div>
        <div class="animate__animated animate__slideInUp">
          <div>
            <p class="text-center text-gray-500 text-2xl">
              Personalized learning
            </p>
          </div>
          <div>
            <p class="text-center">
              Students practice at their own pace, <br />first filling in gaps
              in their understanding<br />
              and then accelerating their learning.
            </p>
          </div>
        </div>
      </div>
      <div class="mx-5">
        <div
          class="flex items-center justify-center animate__animated animate__slideInDown"
        >
          <img
            src="https://cdn.kastatic.org/images/lohp/trusted_content_icon.png"
            class="w-20 h-20"
          />
        </div>
        <div class="animate__animated animate__slideInUp">
          <div>
            <p class="text-center text-gray-500 text-2xl">Trusted content</p>
          </div>
          <div>
            <p class="text-center">
              Created by experts, Andenet Academy’s library of <br />
              trusted practice and lessons covers math, <br />science, and more.
              Always free for learners and teachers.
            </p>
          </div>
        </div>
      </div>
      <div class="mx-5">
        <div
          class="flex items-center justify-center animate__animated animate__slideInDown"
        >
          <img
            src="https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png"
            class="w-20 h-20"
          />
        </div>
        <div class="animate__animated animate__slideInUp">
          <div>
            <p class="text-center text-gray-500 text-2xl">
              Tools to empower teachers
            </p>
          </div>
          <div>
            <p class="text-center">
              With Andenet Academy, teachers can identify<br />
              gaps in their students’ understanding, tailor <br />
              instruction, and meet the needs of every student.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FeaturedCourses />
  <UpcomingCourses />
  <Footer />
</template>

<script>
export default {};
import "animate.css";
</script>

<style>
@import url("animate.css");
.animate__animated.animate__slideInDown {
  --animate-duration: 3s;
}
.animate__animated.animate__slideInUp {
  --animate-duration: 3s;
}
@keyframes openclose {
  0% {
    top: 0.2rem;
    width: 0;
  }
  5% {
    width: 0;
  }
  15% {
    width: 230px;
  }
  30% {
    top: 0.2rem;
    width: 230px;
  }
  33% {
    top: 0.2rem;
    width: 0;
  }
  35% {
    top: 0.2rem;
    width: 0;
  }
  38% {
    top: -4.5rem;
  }
  48% {
    top: -4.5rem;
    width: 190px;
  }
  62% {
    top: -4.5rem;
    width: 190px;
  }
  66% {
    top: -4.5rem;
    width: 0;
    text-indent: 0;
  }
  71% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }
  86% {
    top: -9rem;
    width: 285px;
  }
  95% {
    top: -9rem;
    width: 285px;
  }
  98% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }
  100% {
    top: 0;
    width: 0;
    text-indent: 0;
  }
}

.animate-openclose {
  animation: openclose 5s ease-in-out infinite;
}
</style>
