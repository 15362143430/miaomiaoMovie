<template>
  <div>
    <mt-index-list>
      <mt-index-section index="热门城市">
        <mt-cell v-for="item in cityHot" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id" @click.native="changeCity(item.id)"></mt-cell>
      </mt-index-section>
      <mt-index-section index="A">
        <mt-cell v-for="item in cityA" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell v-for="item in cityB" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>...
      <mt-index-section index="C">
        <mt-cell v-for="item in cityC" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="D">
        <mt-cell v-for="item in cityD" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="E">
        <mt-cell v-for="item in cityE" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="F">
        <mt-cell v-for="item in cityF" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="G">
        <mt-cell v-for="item in cityG" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="H">
        <mt-cell v-for="item in cityH" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="I">
        <mt-cell v-for="item in cityI" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="J">
        <mt-cell v-for="item in cityJ" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="K">
        <mt-cell v-for="item in cityK" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="L">
        <mt-cell v-for="item in cityL" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="M">
        <mt-cell v-for="item in cityM" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="N">
        <mt-cell v-for="item in cityN" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="P">
        <mt-cell v-for="item in cityP" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Q">
        <mt-cell v-for="item in cityQ" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="R">
        <mt-cell v-for="item in cityR" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="S">
        <mt-cell v-for="item in cityS" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="T">
        <mt-cell v-for="item in cityT" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="W">
        <mt-cell v-for="item in cityW" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Y">
        <mt-cell v-for="item in cityY" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell v-for="item in cityZ" :key="item.id" :title="item.nm" :to="'/movie/movienow/'+item.id"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: [],
      cityHot: [],
      cityA: [],
      cityB: [],
      cityC: [],
      cityD: [],
      cityE: [],
      cityF: [],
      cityG: [],
      cityH: [],
      cityI: [],
      cityJ: [],
      cityK: [],
      cityL: [],
      cityM: [],
      cityN: [],
      cityP: [],
      cityQ: [],
      cityR: [],
      cityS: [],
      cityT: [],
      cityW: [],
      cityX: [],
      cityY: [],
      cityZ: []
    };
  },
  mounted() {
    this.axios.get("/cityList").then(res => {
      this.city = res.data.data.cities;
      for (let i = 0; i < this.city.length; i++) {
        const firstLetter = this.city[i].py.substring(0, 1);
        if (this.city[i].isHot == 1) {
          this.cityHot.push(this.city[i]);
        }
        if (firstLetter == "a") {
          this.cityA.push(this.city[i]);
        } else if (firstLetter == "b") {
          this.cityB.push(this.city[i]);
        } else if (firstLetter == "c") {
          this.cityC.push(this.city[i]);
        } else if (firstLetter == "d") {
          this.cityD.push(this.city[i]);
        } else if (firstLetter == "e") {
          this.cityE.push(this.city[i]);
        } else if (firstLetter == "f") {
          this.cityF.push(this.city[i]);
        } else if (firstLetter == "g") {
          this.cityG.push(this.city[i]);
        } else if (firstLetter == "h") {
          this.cityH.push(this.city[i]);
        } else if (firstLetter == "i") {
          this.cityI.push(this.city[i]);
        } else if (firstLetter == "j") {
          this.cityJ.push(this.city[i]);
        } else if (firstLetter == "k") {
          this.cityK.push(this.city[i]);
        } else if (firstLetter == "l") {
          this.cityL.push(this.city[i]);
        } else if (firstLetter == "m") {
          this.cityM.push(this.city[i]);
        } else if (firstLetter == "n") {
          this.cityN.push(this.city[i]);
        } else if (firstLetter == "p") {
          this.cityP.push(this.city[i]);
        } else if (firstLetter == "q") {
          this.cityQ.push(this.city[i]);
        } else if (firstLetter == "r") {
          this.cityR.push(this.city[i]);
        } else if (firstLetter == "s") {
          this.cityS.push(this.city[i]);
        } else if (firstLetter == "t") {
          this.cityT.push(this.city[i]);
        } else if (firstLetter == "w") {
          this.cityW.push(this.city[i]);
        } else if (firstLetter == "x") {
          this.cityX.push(this.city[i]);
        } else if (firstLetter == "y") {
          this.cityY.push(this.city[i]);
        } else if (firstLetter == "z") {
          this.cityZ.push(this.city[i]);
        }
      }
    });
  },
  methods: {
    changeCity(id){
      console.log(id);
      this.$store.commit("changeId",id)
    }
  }
};
</script>

<style scoped>
a {
  color: black;
}
</style>