import React from 'react'
import ItemList from './itemList'
import Input from './input'
import axios from "axios/index";

class Container extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      input: '',
      items: []
    }
  }


  async componentDidMount(){
    const res = await axios.get('/get-items')
    this.setState({items: res.data})
    console.log(res.data)
    console.log('get item worked')
  }


  inputChange(e){
    this.setState({ input: e.target.value })
  }


  async itemPost(e){
    e.preventDefault()
    let itemsList = this.state.input.split(',').map(v => v.trim())
    const convertedItems = itemsList.map(v => Object({itemname: v}))
    this.setState({
      input: '',
      items: [...this.state.items, ...convertedItems]
    })
    await axios.post('/post', {itemName: itemsList}).catch(err => console.log('error occured ' + err))
  }


  async itemDelete(itemId){
    const items = this.state.items.slice()
    items.filter((v, i, arr) => {
      if(v['_id'] === itemId) {
        arr.splice(i,1)
      }
      return null
    },{})
    this.setState({items})

    const res = await axios.post('/item-del', {id: itemId}).then()
    console.log(res)
  }


  render(){
    return (
      <React.Fragment>
        <Input
          inputChange={(e) => this.inputChange(e)}
          itemPost={(e) => this.itemPost(e)}
          inputVal={this.state.input}
        />
        <ItemList itemDelete={(itemId) => this.itemDelete(itemId)} items={this.state.items}/>
      </React.Fragment>
    )
  }
}

export default Container