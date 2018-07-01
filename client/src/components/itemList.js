import React from 'react'


class ItemList extends React.Component{
  render(){
    return (
      <ul style={{textAlign: 'left', marginLeft: '100px'}}>
        {this.props.items.map(v => <li key={Math.random()} onClick={() => this.props.itemDelete(v['_id'])}>{v['itemname']}</li>)}
      </ul>
    )
  }
}

export default ItemList