<template>
   <v-container fluid style="width:80%" class="pt-0">
                <section class="d-flex align-center flex-column"
                style="background-color:rgb(250,250,250)">
                  <v-avatar size="100" class="mx-2 pt-5">
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                  </v-avatar>
                  <p style="font-size:1.4rem" class="mb-0"><strong>Tony Montana</strong></p>
                  <p style="font-size:1.2rem;color:grey;"><strong>Curitiba, PR, Brasil</strong></p>
                </section>
 <v-list flat class="mt-0">

        <v-list-item v-for="(item,i) in DataAnalytics"
         :key="i"  :ripple="false">
          <v-list-item-content>
            <v-list-item-title
            style="font-weight:bold"
            v-text="item.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-subtitle
            v-text="item.value"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon v-text="item.icon">
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
    </v-list>
              </v-container>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ChatUserInfo',
  data: () => ({
    selectItem: 0,
    drawer: null,
    DataAnalytics: [
      { value: 'fulano@hotmail.com', title: 'Email', icon: 'fa-solid fa-pen' },
      { value: '(46) 61112-3456', title: 'Telefone', icon: 'fa-solid fa-pen' },
      { value: 'São Paulo', title: 'City', icon: 'fa-solid fa-pen' },
      { value: 'SP', title: 'State', icon: 'fa-solid fa-pen' },
      { value: 'Brasil', title: 'Country', icon: 'fa-solid fa-pen' },
      { value: 'BG Company', title: 'Company', icon: 'fa-solid fa-pen' },
    ],
    tabs: [
      {
        icon: 'fa-regular fa-user',
        title: 'Ongoing',
      }, {
        icon: 'fa-regular fa-user',
        title: 'Incoming',
      },
    ],
  }),
  components: {
  },
});
</script>
<style scoped>
  .text-central{
    text-align:center;
    color:black;
  }
  .text-user {
    background-color:rgb(250,250,250);
    padding:0.3rem 1rem 0.3rem 1rem;
    word-break: break-word;
    max-width:60%;
    margin:0.5rem 0.5rem 0.5rem 2rem;
  }
  .text-user--hour{
    padding:0.3rem 1rem 0.3rem 1rem;
    margin:0.5rem 0rem;
  }
  .text-attendent {
    background-color:rgb(160,255,255);
    padding:0.3rem 1rem 0.3rem 1rem;
    margin:0.5rem 0.5rem 0.5rem 0.5rem;
    max-width:60%;
    word-break: break-word;
  }
  .text-attendent--hour{
    font-size: 0.9rem;
    padding:0.3rem 1rem 0.3rem 1rem;
    margin:0.5rem 0rem;
  }
</style>
