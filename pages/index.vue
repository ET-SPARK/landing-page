<template>
  <div>
    <Header />
    <p v-if="$route.query.your_name">Hello, {{ $route.query.your_name }}!</p>
    <LanPage />
  </div>
</template>
