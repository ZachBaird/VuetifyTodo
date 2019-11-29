
<template>
  <v-dialog max-width="600" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn text class="rose white--text" v-on="on">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>
          <v-menu>
            <template v-slot:activator="{on}">
              <v-text-field
                v-on="on"
                :value="formattedDate"
                label="Due date"
                prepend-icon="mdi-calendar"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import db from "../fb";
import moment from "moment";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      dialog: false
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: moment(this.due).format("MMMM Do YYYY"),
          person: "Oreo",
          status: "ongoing"
        };

        await db.collection("projects").add(project);
        this.loading = false;
        this.dialog = false;

        this.$emit("projectAdded");
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? moment(this.due).format("MMMM Do YYYY") : "";
    }
  }
};
</script>