<template>
  <div class="projects">
    <h1 class="subheading grey--text">
      <span class="pink--text">My</span> Projects
    </h1>
    <v-container class="my-5">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
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
export default {
  data() {
    return {
      projects: [
        {
          title: "Design main site refresh",
          person: "Oreo",
          due: "11th Dec 2019",
          content:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
          status: "ongoing"
        },
        {
          title: "Code main site",
          person: "Oreo",
          due: "19th Dec 2019",
          content:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
          status: "ongoing"
        },
        {
          title: "Browser test site",
          person: "Oreo/Milk",
          due: "21st Dec 2019",
          content:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
          status: "backlog"
        },
        {
          title: "Replace old site",
          person: "Oreo",
          due: "22nd Dec 2019",
          content:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
          status: "backlog"
        },
        {
          title: "Finish Vuetify intro",
          person: "Oreo",
          due: "11th Nov 2019",
          content:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
          status: "overdue"
        },
        {
          title: "Insult Oreo",
          person: "Frost",
          due: "15th Nov 2019",
          content:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
          status: "overdue"
        }
      ]
    };
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