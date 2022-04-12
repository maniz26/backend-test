<template>
  <div>
    <v-card flat>
      <v-card-text>
        <v-container fluid>
          <h1 class="text text-large">
            How do you find our service?
          </h1>
          <v-row>
            <v-col
              cols="12"
              sm="3"
              md="3"
            >
              <v-checkbox
                v-model="answer"
                label="Good"
                value="Good"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col
              cols="12"
              sm="3"
              md="3"
            >
              <v-checkbox
                v-model="answer"
                label="Fair"
                value="Fair"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col
              cols="12"
              sm="3"
              md="3"
            >
              <v-checkbox
                v-model="answer"
                label="Neutral"
                value="Neutral"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col
              cols="12"
              sm="3"
              md="3"
            >
              <v-checkbox
                v-model="answer"
                label="Bad"
                value="Bad"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-btn x-large depressed class="radius__button text-none font-weight-bold mt-8 button__negative" @click="submit()">
            Submit
          </v-btn>
          <p>
            {{ resMessage }}
          </p>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      answer: '',
      resMessage: null
    }
  },
  methods: {
    async submit () {
      this.resMessage = null
      try {
        if (this.answer === '') {
          this.resMessage = 'Select and answer before submitting'
          return false
        }
        const formData = new FormData()
        formData.append('answer', this.answer)
        const result = await this.$axios.$post('/submit-answer', formData)
        if (result.errors) {
          if (result.errors.answers) {
            this.resMessage = result.errors.answers[0]
          }
        } else {
          this.answer = ''
          this.resMessage = 'Your answer has been submitted'
          setTimeout(function () {
            this.$nuxt.$router.push({ path: 'results' })
          }, 1000)
        }
      } catch (error) {
        this.resMessage = error.message
      }
    }
  }
}
</script>
