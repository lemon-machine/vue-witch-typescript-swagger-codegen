<template>
  <div>{{logs}}</div>
</template>

<script>
import { PetApi, PetApiFactory } from "./assets/petts";
import pfetch from "portable-fetch";

export default {
  data() {
    return {
      logs: []
    };
  },
  methods: {
    async r() {
      let r = await PetApiFactory(null, pfetch).getPetById(1);
      console.log(r);
      this.logs.push(r);
    }
  },
  mounted() {
    this.r();
  }
};
</script>