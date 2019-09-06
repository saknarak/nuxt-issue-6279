<template>
  <div>
    <div>Load time: {{ loadTime }} ms</div>
    <div>Update time: {{ updateTime }} ms</div>
    <button @click="updateState">UPDATE STATE</button>
  </div>
</template>
<script>
import master from '~/static/master.json'
import update1 from '~/static/update1.json'
import update2 from '~/static/update1.json'

export default {
  data() {
    return {
      loadTime: 0,
      updateTime: 0,
      idx: 0,
    }
  },

  async created() {
    let obj = {}
    for (let table of Object.keys(master.data)) {
      obj[table] = { set: master.data[table] }
    }
    let ts = new Date().getTime()
    this.$store.commit('update', obj)
    this.loadTime = new Date().getTime() - ts
  },

  methods: {
    updateState() {
      let ts = new Date().getTime()
      this.$store.commit('update', this.idx ? update1 : update2) 
      this.updateTime = new Date().getTime() - ts
      this.idx = (this.idx + 1) % 2
    },
  },
}
</script>