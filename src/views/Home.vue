<template>
  <v-container>
    <v-row justify="center">
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-date-picker
          v-model="dates"
          year-icon="mdi-calendar-blank"
          full-width
          color="teal darken-3"
          :elevation="elevation"
          :min="min"
          :max="max"
          locale="es-ve"
          @change="getData(dates)"
        ></v-date-picker>

        <v-card color="green darken-1" :elevation="elevation">
          <v-card-text class="display-2 text-center">{{value}}</v-card-text>
        </v-card>
      </v-col>
        
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios"
import { mapMutations } from "vuex";

export default {
  name: 'Home',
  data() {
    return {
      dates: new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      value: null,
      elevation: 15,
      max: new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      min: "1984"
    }
  },
  created(){
    this.getData(this.dates)
  },
  methods: {
    ...mapMutations(['showLoading', 'hideLoading']),
    async getData(date) {
      let arrayDate = date.split('-')
      let ddmmyy = arrayDate[2]+'-'+arrayDate[1]+'-'+arrayDate[0]

      this.showLoading({
        title: 'Recibiendo información',
        color: 'secondary'
      })
      try {
        let data = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)
        
        if (await data.data.serie.length > 0){
          this.value = data.data.serie[0].valor
        } else {
          this.value = "No especificado"
        }
      } catch (error) {
        
      }
      finally {
        this.hideLoading()
      }
    }
  },
  computed: {
    verifyDate() {
      if (this.dates[0] === this.dates[1]) {
        return this.dates = this.dates.slice(0,0)
      }
      return this.dates
    }
  }
}
</script>
