import React from 'react'
import { connect } from 'redity'
import { HomeStyled } from './Home.style'
import { Icon } from '@aventura_tech/advance-erp-web-components/lib/atoms'

function Pages () {
  return (
    <HomeStyled>
      <h1>Welcome</h1>
      <p>Template vs. 1.0.0</p>
      <div title='Logout'>
        <Icon name='close' />
      </div>
    </HomeStyled>
  )
}

export default connect('home')(Pages)
