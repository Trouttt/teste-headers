<template>
 <v-card
      max-width="400"
      class="mx-auto"
    >
      <v-virtual-scroll
        :bench="benched"
        :items="users"
        height="440"
        item-height="110"
      >
        <v-list >
          <v-list-item-group>
              <v-list-item v-for="(user, index) in users" :key="index"   >
                <v-avatar size="50" class="mr-2">
                  <v-img :src="user.imgUrl"></v-img>
                </v-avatar>
            <v-list-item-content>
              <section class="d-flex">
                              <v-list-item-title  style="width:2rem">
                <strong>{{ user.name }}</strong>
              </v-list-item-title>
                            <v-list-item-title>
               {{ user.date }}
              </v-list-item-title>
              </section>
                <section class="d-flex">
                  <v-list-item-subtitle>
                <strong>{{ user.lastMessage }}</strong>
                    </v-list-item-subtitle>
                    <v-spacer></v-spacer>
                  <v-list-item-subtitle>
                <strong>12</strong>
                    </v-list-item-subtitle>
                </section>
              <section
               v-for="(chip, index) in users[index].status" :key="index">
                <v-chip >
                  {{chip}}
                </v-chip>
              </section>
            </v-list-item-content>

          </v-list-item>
          </v-list-item-group>
        </v-list>
          <v-divider></v-divider>
      </v-virtual-scroll>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ListContact',
  data: () => ({
    selectItem: 0,
    drawer: null,
    users: [
      {
        id: '1',
        imgUrl: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        name: 'Tatiae de oliveira',
        date: 'NOV 20, 20:20',
        lastMessage: 'Olá,  gostaria de um atendimento',
        status: [
          'NEW',
        ],
      }, {
        id: '2',
        imgUrl: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        name: 'Leonardo de Souza Melo',
        date: 'JULY 07, 07:45',
        lastMessage: 'Bom dia, estou a procura de um serviço',
        status: [
          'NEW',
        ],
      },
      {
        id: '3',
        imgUrl: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'Tatiane',
        date: 'NOV 20, 20:20',
        lastMessage: 'Eu gostaria de saber se vocês estão contratando',
        status: [
          'ASSGINED',
        ],
      }, {
        id: '4',
        imgUrl: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        name: 'Leonardo',
        date: 'JULY 07, 07:45',
        lastMessage: 'Então, aqui está dando um problema',
        status: [
          'NEW',
        ],
      },
    ],
  }),
  components: {
  },
});

</script>
