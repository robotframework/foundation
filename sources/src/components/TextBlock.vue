<template>
  <div class="justify-content-between no-gutters">
    <div class="row">
    <div class="col-md-5 col-lg-4 order-1 textblock-left p-3">
      <h1 v-html="data.header"/>
    </div>
    <div class="col order-2 textblock-right ml-1 p-3">
      <div v-html="data.text"/>
      <div v-if="data.priceTable == true" class="row order-3">
        <div class="col-sm-12 mt-3">
          <b>Annual Fees</b>
        </div>
        <div class="col-sm-12">
          Annual fee is determined by how many Robot Framework users are in your organization.
        </div>
        <div class="col-sm-12 col-md-10">
          <b-table striped hover class="mt-2" :items="items" :fields="fields"></b-table>
        </div>
      </div>
    </div>

     <div v-if="data.twitter == true" class="col-md-12 col-lg-3 order-3 textblock-right ml-1 p-3">
       <twitter-timeline class="p-xs-5 p-lg-0" id="robotframework" widget-class="twitterprofile" sourceType="profile" :options="options"/>
     </div>
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
      fields: ["users", "fee"],
      items: [
        {
          isActive: true,
          users: "1-10",
          fee: "1500€"
        },
        {
          isActive: false,
          users: "11-50",
          fee: "3000€"
        },
        {
          isActive: false,
          users: "51-250",
          fee: "6000€"
        },
        {
          isActive: true,
          users: "251-",
          fee: "12000€"
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
