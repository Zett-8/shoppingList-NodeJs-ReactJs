import React from 'react'

import Input from './input'
import ItemList from './itemList'

export default () => {
  return (
    <div style={{ margin: '0 auto', width: '500px', textAlign: 'center' }}>
      <h1 style={{fontSize: '26px'}}>Shopping List</h1>
      <Input itemPost={(e) => this.itemPost(e)}/>
      <ItemList/>
    </div>
  )
}

