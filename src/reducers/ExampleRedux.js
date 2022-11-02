const {createStore,combineReducers} = 'redux'

const initialState =
    {
        todos:[
            "homework",
            "buy Monitor",
            "Visit Beach"
        ],
    }

//Create Action
const CreateList = (title) => {
    return {
        type: "ADD_TODO_LIST",
        payload: {
            title: title
        }
    }
}

//Create Reduer
const AddTodoList = (state = initialState,action) =>
{
    if(action.type === "ADD_TODO_LIST")
    {
        return [...initialState.todos,action.payload.title]
    }
}
const log = (state = initialState,action) =>
{
    if(action.type === "ADD_TODO_LIST")
    {
        return "Hello Another World!"
    }
}


const allReducer = combineReducers(
    {
        AddTodoList:AddTodoList,
        log:log
    })

const store = createStore(allReducer)
store.dispatch(CreateList("KI"))
console.log(store.getState())