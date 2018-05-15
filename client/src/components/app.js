import React from 'react'

import Input from './input'
import ItemList from './itemList'

export default () => {
  return (
    <React.Fragment>
      <h1 style={{fontSize: '18px'}}>Shopping List</h1>
      <Input itemPost={(e) => this.itemPost(e)}/>
      <ItemList/>
    </React.Fragment>
  )
}

