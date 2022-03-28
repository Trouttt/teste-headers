<template>
  <v-container fluid class="mx-0 py-0 px-0"
  >
    <v-app-bar
      color="grey darken-4"
      dark

    >
      <v-container class="d-flex align-center">
        <v-app-bar-nav-icon class="mr-10" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="mr-2">HEADER</v-toolbar-title>
         <v-toolbar-title><strong>DX</strong></v-toolbar-title>
      </v-container>

      <v-spacer></v-spacer>

      <v-menu
      class=""
      style="width:auto;"
      transition="slide-y-transition"
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-container class="d-flex align-center" style="width:13vw; height:100%;" >
                  <p  dark class="mb-0"
          v-bind="attrs"
          v-on="on">Company name</p>
        </v-container>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn icon>
        <v-icon>fa-regular fa-circle-question</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>fa-regular fa-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-badge bordered bottom left overlap color="green" dot>
        <v-icon>fa-regular fa-user</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon>
        <v-icon>fa-regular fa-map</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MenuBar',

  data: () => ({
    selectItem: 0,
    drawer: null,
    items: [
      'fasfsa',
      '231312',
      '421412',

    ],
  }),
});
</script>
