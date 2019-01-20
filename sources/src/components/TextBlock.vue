<template>
  <div class="justify-content-between no-gutters">
    <div class="row">
    <div class="col-md-5 col-lg-4 order-1 textblock-left p-3">
      <h1 v-html="data.header"/>
    </div>
    <div class="col order-2 textblock-right ml-1 p-3">
      <div v-html="data.text"/>
    </div>

     <div v-if="data.twitter == true" class="col-md-12 col-lg-3 order-3 textblock-right ml-1 p-3">
       <twitter-timeline class="p-xs-5 p-lg-0" id="robotframework" widget-class="twitterprofile" sourceType="profile" :options="options"/>
     </div>
     </div>
     <div v-if="data.priceTable == true" class="row order-3 ml-sm-1 justify-content-end col-md-8 float-right">
       <b-table striped hover :items="items" :fields="fields"></b-table>
     </div>
     <div v-if="typeof data.textAfterTable == 'string'" class="row justify-content-end float-right">
      <div v-html="data.textAfterTable" class="ml-3 col-sm-12 col-md-8 order-3"/>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
import Timeline from "vue-tweet-embed/timeline";
export default {
  props: ["data"],
  components: {
    "twitter-timeline": Timeline
  },
  data() {
    return {
      fields: ["number_of_users", "service_providers", "product_companies"],
      items: [
        {
          isActive: true,
          age: 40,
          number_of_users: "1-10",
          service_providers: "1000€",
          product_companies: "500€"
        },
        {
          isActive: false,
          age: 21,
          number_of_users: "11-50",
          service_providers: "2000€",
          product_companies: "1000€"
        },
        {
          isActive: false,
          age: 89,
          number_of_users: "51-250",
          service_providers: "4000€",
          product_companies: "2000€"
        },
        {
          isActive: true,
          age: 38,
          number_of_users: "251-",
          service_providers: "8000€",
          product_companies: "4000€"
        }
      ],
      options: {
        theme: "light",
        tweetLimit: "3",
        chrome: ["nofooter", "noscrollbar"]
      }
    };
  }
};
</script>
