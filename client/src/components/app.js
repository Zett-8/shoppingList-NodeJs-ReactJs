import React from 'react'
import Container from './container'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default () => {
  return (
    <MuiThemeProvider>
      <div style={{ margin: '0 auto', width: '500px', textAlign: 'center' }}>
        <h1 style={{fontSize: '26px'}}>Shopping List</h1>
        <Container/>
      </div>
    </MuiThemeProvider>
  )
}

