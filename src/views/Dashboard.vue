<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div>{{ project.status }}</div>
          </v-flex>
        </v-layout>
      </v-card>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "dashboard",
  data() {
    return {
      projects: [
        {
          title: "Design main site refresh",
          person: "Oreo",
          due: "11th Dec 2019",
          status: "ongoing"
        },
        {
          title: "Code main site",
          person: "Oreo",
          due: "19th Dec 2019",
          status: "ongoing"
        },
        {
          title: "Browser test site",
          person: "Oreo/Milk",
          due: "21st Dec 2019",
          status: "backlog"
        },
        {
          title: "Replace old site",
          person: "Oreo",
          due: "22nd Dec 2019",
          status: "backlog"
        },
        {
          title: "Finish Vuetify intro",
          person: "Oreo",
          due: "11th Nov 2019",
          status: "overdue"
        }
      ]
    };
  }
};
</script>

<style scoped>
.complete {
  border-left: 4px solid #3cd1c2;
}

.ongoing {
  border-left: 4px solid #24776f;
}

.backlog {
  border-left: 4px solid #ccc;
}

.overdue {
  border-left: 4px solid tomato;
}
</style>