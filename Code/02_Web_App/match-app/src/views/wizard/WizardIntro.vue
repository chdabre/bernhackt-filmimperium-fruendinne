<template>
  <div class="flex-grow-1">
    <h2 class="mt-12">unentschlossen?</h2>
    <br/>
    <h2>ich kann dir mit der qual der wahl helfen.</h2>
    <br/>
    <h2>bitte beantworte die folgenden fragen.</h2>

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
