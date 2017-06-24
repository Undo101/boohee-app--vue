import state from './state'
export default {
    setday: (state, index)=>{
        // console.log(id)
        state.day[index].count++
        // console.log(state.day[0].count)
        state.day[index].isActive = false
        state.day[index].com = true
        state.per += (16.66)
    },
    lightHigh: (state,index) => {
                state.chooses[index].isSecond = true
                state.chooses[index].isThird = true
        state.chooses.forEach(list => {
            list.light=false})
        state.chooses[index].light = true
    }
}