<template>
  <v-dialog v-model="dialog" max-width="600">
    <template v-slot:activator="{ on }">
      <v-btn text class="rose white--text" v-on="on">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title" v-model="title"></v-text-field>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  }
};
</script>

<style scoped>
</style>