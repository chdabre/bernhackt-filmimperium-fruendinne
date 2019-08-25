<template>
  <div class="flex-grow-1">
    <h1 class="mt-12" id="intro__title">unentschlossen?</h1>
    <br/>
    <h2 class="intro-text">ich kann dir bei der qual der wahl helfen.</h2>
    <br/>
    <h2 class="intro-text">bitte beantworte dazu die nachfolgenden fragen.</h2>

    <v-btn
      class="mt-6"
      large
      color="primary"
      @click="$emit('nextPage')"
    >
      Los
    </v-btn>
  </div>
</template>

<style lang="scss">
#intro__title{
  font-family: 'Playfair Display Black';
  font-size: 3.5rem;
}

.intro-text {
  font-family: Roboto;
  font-size: 1.5rem;
  font-weight: 400;
}

</style>