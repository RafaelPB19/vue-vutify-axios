<template>
  <v-app>
    

    <v-main>
      
      <v-container>
        <h1 class="text-center">
          Equivalencia histórica de los pesos chilenos y dólares
        </h1>
        <router-view/>
        <v-dialog
          v-model="loading.state"
          hide-overlay
          persistent
          width="300"
        >
          <v-card
            :color="loading.color"
            dark
          >
            <v-card-text>
              {{loading.title}}
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapState(['loading'])
  }
};
</script>
