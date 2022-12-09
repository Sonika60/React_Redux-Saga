import {UPDATE_CLIENT_VARIFICATION_DATA} from "./constant"

export const onewim = (data = [], action) => {
    switch (action.type) {
            case UPDATE_CLIENT_VARIFICATION_DATA:
                const {payload, key} = action
                console.warn("PRODUCT_LIST condition ", payload)
                return {
                    ...action,
                    [key]:payload
                }
        default:
            return data
    }
}