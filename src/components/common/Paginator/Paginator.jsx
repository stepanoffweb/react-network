import React, {useState} from 'react'

import s from './Paginator.module.css'

export const Paginator = ({...props}) => {

  let [bunchNumber, setBunchNum] = useState(1)

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
    let i = 1
    while(i <= pagesCount) {
      pages.push(i)
      i++
    }

  let  bunchSize = 10 // props.bunchSize
  let bunchQuantity = Math.ceil(pagesCount / bunchSize)
  let leftBunchBoundary = (bunchNumber - 1) * bunchSize + 1
  let rightBunchBoundary = bunchNumber * bunchSize

  return <div className={s.paginator}>
            {bunchNumber > 1 && <button className={s.show} onClick={() => setBunchNum(bunchNumber - 1)}>Show Prev</button>}

            { pages
                .filter(p => p >= leftBunchBoundary && p <= rightBunchBoundary)
                .map(p => <span key={p}
                                className={`${s.pagination} ${props.currentPage === p ? s.selected : ''}`}
                                onClick={() => props.handleClickPage(p)} >{p}</span>) }

            {bunchQuantity > bunchNumber && <button className={s.show} onClick={() => setBunchNum(bunchNumber + 1)} >Show Next</button>}

        </div>
}

