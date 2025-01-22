import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://geek.itheima.net/v1_0/channels"

const channelstore = createSlice({
    name: "channel",
    initialState:{
        channelList: []
    },
    reducers:{
        setChannels (state, action) {
            state.channelList = action.payload
        }
    }
})

// async request
const { setChannels } = channelstore.actions
const fetchChannelList = () => {
    return async (dispatch) => {
        const res = await axios.get(url)
        dispatch(setChannels(res.data.data.channels))
    }
}

export { fetchChannelList }

const channelReducer = channelstore.reducer
export default channelReducer