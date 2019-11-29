<template>
  <div class="projects">
    <h1 class="subheading grey--text">
      <span class="pink--text">My</span> Projects
    </h1>
    <v-container class="my-5">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="project in myProjects" :key="project.id">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">due by {{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
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
  computed: {
    myProjects() {
      return this.projects.filter(proj => {
        if (proj.person === "Oreo") return proj;
      });
    }
  }
};
</script>

<style scoped>
</style>