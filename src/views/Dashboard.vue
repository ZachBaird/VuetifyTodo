<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn outlined block class="primary">Click here</v-btn>
        </v-flex>
        <v-flex xs12 md6>
          <v-btn outlined block class="primary">Click here</v-btn>
        </v-flex>
        <v-flex xs12 md6>
          <v-btn outlined block class="primary">Click here</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-space-around>
        <v-flex xs4 md3>
          <v-btn outlined block class="info">Click here</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outlined block class="info">Click here</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
