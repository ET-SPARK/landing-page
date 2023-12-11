<template>
  <Header />
  <div>
    <h1>Notes</h1>
    <ul>
      <li v-for="note in notes" :key="note.id">{{ note.description }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Use ref to create a reactive variable for storing the fetched notes
const notes = ref([]);

// Use onMounted to fetch data when the component is mounted
onMounted(async () => {
  try {
    // Fetch data from your API endpoint
    const response = await fetch("http://localhost:30001/notes");
    const data = await response.json();

    // Update the notes variable with the fetched data
    notes.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>
