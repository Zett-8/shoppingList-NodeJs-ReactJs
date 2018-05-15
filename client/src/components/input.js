import React from 'react'
import axios from "axios/index";

class Input extends React.Component {
  constructor(prop){
    super(prop)

    this.state = {
      input: ''
    }
  }

  inputChange(e){
    this.setState({ input: e.target.value })
  }

  async itemPost(e){
    e.preventDefault()
    let itemsList = this.state.input.split(',').map(v => v.trim())
    this.setState({input: ''})
    const res = await axios.post('/post', {itemName: itemsList}).catch(err => console.log('error occured ' + err))
  }

  render(){
    return (
      <form onSubmit={(e) => this.itemPost(e)} >
        <input
          placeholder='split by "," if you want to write more'
          value={this.state.input}
          onChange={(e) => this.inputChange(e)}
          style={{textAlign: 'left'}}
        />
      </form>
    )
  }
}

export default Input