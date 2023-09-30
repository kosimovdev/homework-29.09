import {create} from "zustand";

const createTodo = create((set) => ({
    todo:[],
    addTodo:(task)=> set((state) => ({
        todo:[...state.todo , task]
    }))
}))

export default createTodo;