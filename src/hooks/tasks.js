import { useReducer } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Task } from "../models";

const Actions = {
    REQ_START: 0,
    REQ_SUCCESS: 1,
    REQ_FAILED: 2
}

function reducer(state, action) {
    switch (action.type) {
        case Actions.REQ_START:
            return { ...state, isLoading: true, data: null, error: null };
        case Actions.REQ_SUCCESS:
            return { ...state, isLoading: false, data: action.payload, error: null };
        case Actions.REQ_FAILED:
            return { ...state, isLoading: false, data: null, error: action.payload };
        default:
            throw new Error("Invalid action");
    }
}

const initialState = {
    data: null,
    isLoading: false,
    error: null
};

export function useSaveTask() {
    const [state, dispatch] = useReducer(reducer, initialState);

    async function saveTask(task) {
        dispatch({ type: Actions.REQ_START });
        try {
            const result = await DataStore.save(new Task(task));
            dispatch({ type: Actions.REQ_SUCCESS, payload: result });
        } catch (error) {
            dispatch({ type: Actions.REQ_FAILED, payload: error });
        }
    }

    return {
        save: saveTask,
        ...state,
    }
}