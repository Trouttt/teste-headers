<template>
                   <section :class="['d-flex' ,'align-center',
                   this.$store.state.chat.isIncoming ?'background-green' : 'background-blue']">
                  <v-avatar size="50" class="mx-2">
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                  </v-avatar>
                  <section class="d-flex flex-column justify-center">
                    <p class="mb-0" style="color:white">Case Number</p>
                    <p class="mb-0" style="color:white"><strong>00012313</strong></p>
                  </section>
                  <v-spacer></v-spacer>
                  <v-chip class="mr-2" style="color:white;background-color:rgb(32,227,130)">
                    NEW
                  </v-chip>
                  <section>
                    <p class="mb-0" style="color:white">Priority:</p>
                    <p class="mb-0" style="color:white"><strong>High</strong></p>
                  </section>
                  <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
                class="mx-1"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
                 </section>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ChatMessageBoxHeader',
  data: () => ({
  }),
  created() {
    console.log('ata pow');
    console.log(this.$store.state.chat.isIncoming);
    console.log('entendi');
  },
});
</script>

<style scoped>
  .background-green {
  height:5rem;
  background-color:rgb(26,188,156);
  }
  .background-blue{
    height:5rem;
background-color:rgb(32,92,227);

  }
</style>
