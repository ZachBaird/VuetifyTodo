<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="member in team" :key="member.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="member.avatar" alt="Avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ member.name }}</div>
              <div class="pink--text">{{ member.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn small flat class="rose white--text">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "team",
  data() {
    return {
      team: [
        { name: "Oreo", role: "Web developer", avatar: "/avatar-1.png" },
        { name: "Milk", role: "Wife", avatar: "/avatar-1.png" },
        { name: "Frost", role: "Quebecois shmuck", avatar: "/avatar-1.png" }
      ]
    };
  }
};
</script>

<style scoped></style>