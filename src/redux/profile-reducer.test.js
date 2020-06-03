import profileReducer, { createActionAddPost, createActionDeletePost } from './profile-reducer'

    let state = {
      posts: [
        {id: 0,message: "Hi, it's my first post!", likeCount: 0, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
        {id: 1,message: "You'r welcome, my friend!!!!", likeCount: 0, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
        {id: 2,message: "Ammmmm...", likeCount: 0, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
      ]}

it ('length of posts should be incremented', () => {

    let action = createActionAddPost(3, 'Test post')
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
  })

it ('Message text should be added', () => {

    let action = createActionAddPost(3, 'Test post')
    let newState = profileReducer(state, action)

    expect(newState.posts[3].message).toBe('Test post')
  })

it ('After post delete posts length should decrements', () => {

    let action = createActionDeletePost(2)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
  })

it ('After wrong postId delete posts length should not decrements', () => {

    let action = createActionDeletePost(1000)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
  })

