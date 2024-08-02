<!-- src/components/MaintenanceMode.vue -->
<template>
    <div v-if="isMaintenanceMode">
      <h1>Maintenance Mode</h1>
      <p>We're currently undergoing maintenance. Please check back later.</p>
    </div>
    <div v-else>
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMaintenanceMode: false //手动维护
      };
    }
  };
  </script>