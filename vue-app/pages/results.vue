<template>
  <div>
    <v-card flat>
      <v-card-text>
        <v-container fluid>
          <h1 class="text text-large">
            Results :
          </h1>
          <br/>
          <p>
            A. Good {{ goodData }}
          </p>
          <br/>
          <p>
            B. Fair {{ fairData }}
          </p>
          <br/>
          <p>
            C. Neutral {{ neutralData }}
          </p>
          <br/>
          <p>
            D. Bad {{ badData }}
          </p>
          <br/>
          <p>
            {{ serverResponseMessage }}
          </p>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ResultPage',
  data () {
    return {
      goodData: null,
      fairData: null,
      neutralData: null,
      badData: null,
      serverResponseMessage: null
    }
  },
  async created () {
    try {
      const { data } = await this.$axios.$get('/results')
      console.log(data)
      if (data.Fair) {
        this.fairData = data.Fair
      }
      if (data.Good) {
        this.goodData = data.Good
      }
      if (data.Neutral) {
        this.neutralData = data.Neutral
      }
      if (data.Bad) {
        this.badData = data.Bad
      }
    } catch (error) {
      this.serverResponseMessage = error.message
    }
  }
}
</script>
