<template>
      <v-list flat class="mt-5" style="width:15%;">
      <v-list-item-group>
        <v-list-item v-for="(item,i) in items.DataAnalytics"
         :key="i"  :ripple="false">
          <v-list-item-icon>
            <v-icon v-text="item.icon">
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
            v-if="item.type === 'mainTopic'"
            style="font-weight:bold"
            v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle
            v-if="item.type === 'subTopic'"
            v-text="item.title"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
                <v-list-item v-for="(item,i) in items.InformationManagement"
         :key="i" active-class="border" :ripple="false">
          <v-list-item-icon>
            <v-icon v-text="item.icon">
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
            v-if="item.type === 'mainTopic'"
            style="font-weight:bold"
            v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle
            v-if="item.type === 'subTopic'"
            v-text="item.title"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
                <v-list-item v-for="(item,i) in items.ExperiencePlanning"
         :key="i" active-class="border" :ripple="false">
          <v-list-item-icon>
            <v-icon v-text="item.icon">
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
            v-if="item.type === 'mainTopic'"
            style="font-weight:bold"
            v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle
            v-if="item.type === 'subTopic'"
            v-text="item.title"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SideBarLeft',

  data: () => ({
    selectedItem: null,
    drawer: null,
    items: {
      DataAnalytics: [
        { type: 'mainTopic', title: 'Data Analytics', icon: 'fas fa-plus' },
        { type: 'subTopic', title: 'Overview' },
        { type: 'subTopic', title: 'Dashboards' },
      ],
      InformationManagement: [
        { type: 'mainTopic', title: 'Information Management', icon: 'fas fa-plus' },
        { type: 'subTopic', title: 'Data Engineering' },
        { type: 'subTopic', title: 'Database' },
        { type: 'subTopic', title: 'Contact Lists' },
        { type: 'subTopic', title: 'Relational Table' },
        { type: 'subTopic', title: 'Segmentation' },
        { type: 'subTopic', title: 'Compilance' },
      ],
      ExperiencePlanning: [
        { type: 'mainTopic', title: 'Experience Planning', icon: 'fas fa-plus' },
        { type: 'subTopic', title: 'Journey Designer' },
        { type: 'subTopic', title: 'Scoring' },
      ],
      CustomerEngagement: [
        { type: 'mainTopic', title: 'Customer Engagement', icon: 'fas fa-plus' },
      ],
    },
  }),
});
</script>

<style>
/*
  .border {
    margin-left: 12px;
    margin-right: 12px;
    background: #49D9A0;
    border-radius: 50%;
    text-decoration: none;
  }
  .v-list-item-group .v-list-item--active {
    color: white !important;
  }
  */
  .v-list-item-group .v-list-item--active {
    color: black !important;
  }
</style>
