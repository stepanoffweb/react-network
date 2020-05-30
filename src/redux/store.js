// import profileReducer from './profile-reducer'
// import dialogsReducer from './dialogs-reducer'

// let store = {
//   _state: {
//     profilePage: {
//       posts: [],
//       newPostText: ''
//     },
//     messagePage: {
//       dialogItems: [
//       ],
//       messages: [
//       ],
//       newMessageText: ''
//     }
//   },
//   getState() {
//     return this._state
//   },

//   subscribe(observer) {
//     this._callSubscriber = observer // переопределяем функцию?, передавая из index.js как параметр rerender() и пихаем в нее state как параметр
//   },

//   _callSubscriber() { // это уже не то, что ты видишь :))) это - глобальный Rerender(state)
//     console.log('State changed');
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.messagePage = dialogsReducer(this._state.messagePage, action)

//     this._callSubscriber(this._state)//???? как вызывая заглушку мы обращаемся к rerender() (В какой момент тот появляется в scope и замещает _callSubscriber)
//   },

//   likeCount: 0,
//   handleClick(e) {
//         this.likeCount++;
//         e.target.innerHTML = `Like ${this.likeCount}`;
//       }
// }

// export default store;

