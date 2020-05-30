// import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'

import s from './Dialogs.module.css'
import {createActionAddMessage} from '../../redux/dialogs-reducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return {
        dialogItems: state.messagePage.dialogItems,
        messages: state.messagePage.messages,
    }
}

const mapDispatchToProps = (dispatch) => { //oldscool technique
    return {
        callDispatchAddMessage: (id, text) => {
            dispatch(createActionAddMessage(id, text))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs)
