import React from 'react'
import axios from 'axios'

// export default () => async () => {
//   console.log('aaa')
//   const items = await axios.get('/get-items')
//   console.log(items)
//   // items.map(v => console.log(v))
//
//
//   return (
//     <div>list</div>
//   )
// }

class ItemList extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount(){
    this.getItemList()
  }

  async getItemList(){
    const res = await axios.get('/get-items')
    console.log(res.data)
    this.setState({items: res.data})
    console.log('get item worked')
  }

  async itemDelete(itemId){
    const res = await axios.post('/item-del', {id: itemId}).then()
    this.getItemList()
    console.log(res)
  }

  render(){
    return <ul style={{textAlign: 'left', marginLeft: '100px'}}>{this.state.items.map(v => <li key={Math.random()} onClick={() => this.itemDelete(v['_id'])}>{v['itemname']}</li>)}</ul>
  }
}

export default ItemList