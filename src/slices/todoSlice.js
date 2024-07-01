import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        list: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload);
        },
        updateTodo: (state, action) => {
            const todoIndex = state.list.findIndex(todo => todo.id === action.payload.id);
            if (todoIndex !== -1) {
                state.list[todoIndex] = action.payload;
            }
        },
        listTodos: (state) => {
            return state.list;
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
        completeTodo: (state, action) => {
            const todoIndex = state.list.findIndex(todo => todo.id === action.payload);
            if (todoIndex !== -1) {
                state.list[todoIndex].status = 'completed';
            }
        },
    },
});

export const { addTodo, updateTodo, listTodos, deleteTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;


