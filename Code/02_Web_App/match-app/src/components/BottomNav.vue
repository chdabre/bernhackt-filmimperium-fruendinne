<template>
  <v-row class="flex-grow-0">
    <v-toolbar flat>
      <v-btn icon @click="$emit('prevPage')">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text small @click="$emit('skip')">
        skip
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="$emit('nextPage')">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-toolbar>
  </v-row>
</template>
