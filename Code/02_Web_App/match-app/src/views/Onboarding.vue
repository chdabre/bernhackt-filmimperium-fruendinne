<template>
  <v-container
    class="onboarding-container white d-flex flex-column"
  >
    <component
      :is="currentStepComponent"
    />
    <BottomNav
      @nextPage="nextPage"
      @prevPage="prevPage"
    />
  </v-container>
</template>

<script>
import BottomNav from '../components/BottomNav'

const onboardingSteps = [
  'OnboardingGenres',
  'OnboardingPeople'
]

export default {
  components: {
    BottomNav,
    OnboardingGenres: () => import('./onboarding/OnboardingGenres.vue'),
    OnboardingPeople: () => import('./onboarding/OnboardingPeople.vue')
  },
  data () {
    return {
      onboardingStepIndex: 0
    }
  },
  computed: {
    currentStepComponent () {
      return onboardingSteps[this.onboardingStepIndex]
    }
  },
  methods: {
    nextPage () {
      this.onboardingStepIndex++
    },
    prevPage () {
      this.onboardingStepIndex--
    }
  }
}
</script>

<style>
.onboarding-container {
  height: 100%;
}
</style>
