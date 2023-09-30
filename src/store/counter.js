import {create} from "zustand";

const useCounter =create((set) => (
    {
        num:0,
        increment: ()=> set((state) => ({num:state.num+1}) ),
        decrement: ()=> set((state) => ({num:state.num-1}) )
    }
))

export default useCounter;