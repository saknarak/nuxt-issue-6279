import Vue from 'vue'

export const state = () => ({
  asset: [],
  assetType: [],
  beacon: [],
  holder: [],
  location: [],
  locationItem: [],
  receptor: [],
  redZone: [],
  staff: [],
})

export const mutations = {
  update(state, data) {
    let ts = new Date().getTime()
    for (let table of Object.keys(data)) {
      let tableObj = state[table]
      if (!tableObj) {
        continue
      }
      let dataTable = data[table]
      if (dataTable.set) {
        state[table] = dataTable.set
      }
      if (dataTable.upd) {
        if (!dataTable.partial) {
          for (let row of dataTable.upd) {
            tableObj[row.id] = row
          }
        } else {
          for (let row of dataTable.upd) {
            if (tableObj[row.id]) {
              let ts = new Date().getTime()
              Vue.set(state[table], row.id, { ...state[table][row.id], ...row })
              // slow update here
              console.log('update for', table, 'id=', row.id, 'duration=', new Date().getTime() - ts, 'ms')
            }
          }
        }
      }
      if (dataTable.del) {
        for (let id of dataTable.del) {
          Vue.delete(tableObj, id)
        }
      }
    }
    console.log('update time=', new Date().getTime() - ts)
  },
}

export const actions = {
    async fetchAll({ commit }) {
    try {
      let { data } = await Vue.axios.get('/master/all')
      let obj = {}
      for (let table of Object.keys(data.data)) {
        obj[table] = { set: data.data[table] }
      }
      commit('update', obj)
      readyResolve()
    } catch (e) {
      console.log('ERROR fetchAll', e)
      readyReject()
    }
  },
}
