export const state= ()=>({
    clickedState:false,
    elephantList:[]
})

export const mutations={
    setClickedState(state, payload){
        state.clickedState= payload;
    },
    setElephantList(state, payload){
        state.elephantList= payload;
    }
}
export const getters = {
    getElephantById: (state) => (id) => {
        return state.elephantList.find(elephant => elephant._id == id)
    } 
}