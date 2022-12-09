import {UPDATE_CLIENT_VARIFICATION_DATA, ONE_WIM_SUBMIT_DATA} from "./constant"

const onewimActions = {
    updateVarifivationData(payload, key){
        console.log(payload)
        return{
            type:UPDATE_CLIENT_VARIFICATION_DATA,
            payload,
            key
        }
    },

    submitData(){
        return {
            type:ONE_WIM_SUBMIT_DATA
        }
    }
}

export default onewimActions;