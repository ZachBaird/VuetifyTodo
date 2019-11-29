<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="rose">
      <span>Awesome! You added a new project!</span>
      <v-btn text color="white" @click="snackbar=false">Close</v-btn>
    </v-snackbar>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="pink--text darken-1" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase pink--text">
        <span class="font-weight-light">Oreo</span>
        <span>TODO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{on}">
          <v-btn text v-on="on" color="pink">
            <v-icon>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >{{ link.text }}</v-list-item>
        </v-list>
      </v-menu>
      <v-btn text color="pink">
        <span style="margin-right: 5px;">Sign Out</span>
        <v-icon small>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="rose white--text lighten-1">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100" class="rose">
            <img src="/avatar-1.png" alt="Avatar" />
          </v-avatar>
          <p class="white--text text-center subheading mt-1">Oreo</p>
        </v-flex>
        <v-flex class="mt-3 mb-4">
          <Popup @projectAdded="snackbar=true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon color="white">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";

export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      snackbar: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" }
      ]
    };
  }
};
</script>