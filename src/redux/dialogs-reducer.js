// const SHOW_MASSAGE = 'SHOW_MESSAGE'
const ADD_MESSAGE = 'ADD_MESSAGE'

export let createActionAddMessage = (id, text) => ({type: ADD_MESSAGE, id, text})
// export let createActionShowMessage = (text) => ({type: SHOW_MESSAGE, text })

let initialState = {
      dialogItems: [
        {name: "userName-1", id: 0},
        {name: "userName-2", id: 2},
        {name: "userName-3", id: 3},
        {name: "userName-4", id: 4},
        {name: "userName-5", id: 5},
        {name: "userName-6", id: 6},
      ],
      messages: [
        {text: "What's up?", id: 0},
        {text: "Yo!!!" , id: 1},
        {text: "How is Your webDev?", id: 2},
        {text: "Who are you??", id: 3},
      ]
}

const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_MESSAGE:
      return  {...state,
        messages: [...state.messages, {id: action.id, text: action.text}], // перезаписывает свойство с предыдущей строки на его deep copy
          }
    default:
      return state
  }
}

export default dialogsReducer
