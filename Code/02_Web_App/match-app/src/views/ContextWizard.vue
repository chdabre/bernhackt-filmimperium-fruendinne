<template>
  <v-container class="wizard-container white d-flex flex-column">
    <transition name="slide" mode="out-in">
      <component
        :is="currentStepComponent"
        @nextPage="nextPage"
      />
    </transition>

    <BottomNav
      @nextPage="nextPage"
      @prevPage="prevPage"
    />
  </v-container>
</template>

<script>
import BottomNav from '../components/BottomNav'

const wizardSteps = [
  'WizardIntro',
  'WizardColors',
  'WizardWokeness',
  'WizardDarkness',
  'WizardRealism',
  'WizardHumor',
  'WizardCinematography',
  'WizardSuspense',
  'WizardAbstractness',
  'WizardComplexity',
  'WizardResults'
]

export default {
  components: {
    BottomNav,
    WizardIntro: () => import('./wizard/WizardIntro.vue'),
    WizardColors: () => import('./wizard/WizardColors.vue'),
    WizardWokeness: () => import('./wizard/WizardWokeness.vue'),
    WizardDarkness: () => import('./wizard/WizardDarkness.vue'),
    WizardRealism: () => import('./wizard/WizardRealism.vue'),
    WizardHumor: () => import('./wizard/WizardHumor.vue'),
    WizardCinematography: () => import('./wizard/WizardCinematography.vue'),
    WizardSuspense: () => import('./wizard/WizardSuspense.vue'),
    WizardAbstractness: () => import('./wizard/WizardAbstractness.vue'),
    WizardComplexity: () => import('./wizard/WizardComplexity.vue'),
    WizardResults: () => import('./wizard/WizardResults.vue')
  },
  data () {
    return {
      onboardingStepIndex: 0
    }
  },
  computed: {
    currentStepComponent () {
      return wizardSteps[this.onboardingStepIndex]
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
.wizard-container {
  height: 100%;
}

.slide-enter-active, .slide-leave-active {
  transition: .5s;
}
.slide-enter {
  transform: translate(100%, 0);
  opacity: 0;
}
.slide-enter-to {
  opacity: 1;
}
.slide-leave-to {
  transform: translate(-100%, 0);
  opacity: 0;
}
</style>
