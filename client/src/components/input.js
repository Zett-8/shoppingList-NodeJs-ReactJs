import React from 'react'

export default (props) => {
  return (
    <form onSubmit={e => props.itemPost(e)} >
      <input
        placeholder='split by "," if you want to write more'
        value={props.inputVal}
        onChange={(e) => props.inputChange(e)}
        style={{textAlign: 'left', width: '300px'}}
      />
    </form>
  )
}