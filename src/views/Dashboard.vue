<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip color="primary" top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="pink" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by title</span>
        </v-tooltip>
        <v-tooltip color="primary" top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="pink" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort by assignee</span>
        </v-tooltip>
      </v-layout>
      <v-card flat v-for="project in projects" :key="project.id">
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
            <div class="right">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
              >{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from "../fb";

export default {
  data() {
    return {
      projects: []
    };
  },
  async created() {
    await db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(ch => {
        if (ch.type === "added") {
          this.projects.push({
            ...ch.doc.data(),
            id: ch.doc.id
          });
        }
      });
    });
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
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

.v-chip.complete {
  background: #3cd1c2 !important;
}

.v-chip.ongoing {
  background: #24776f !important;
}

.v-chip.backlog {
  background: #ccc !important;
}

.v-chip.overdue {
  background: tomato !important;
}
</style>