<template>
    <div>
      <p>Maintenance Mode: {{ maintenanceMode }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        maintenanceMode: process.env.VUE_APP_MAINTENANCE_MODE
      };
    }
  };
  </script>