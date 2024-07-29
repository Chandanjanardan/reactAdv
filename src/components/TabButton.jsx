import React from 'react'

function TabButton({children}) {
  return (
    <ul>
        <li>
            <button>{children}</button>
        </li>
    </ul>
  )
}

export default TabButton