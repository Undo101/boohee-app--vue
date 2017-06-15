
export default {
    setday: ({commit}, index) => {
        console.log(index)
     commit('setday', index)
 },
    lightHigh: ({commit},index) => {
        commit('lightHigh',index)
    }
}