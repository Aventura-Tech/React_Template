import React from 'react'
import { connect } from 'redity'
// @ts-ignore
import TreeImg from '../../../Assets/img/tree.jpg'
import { SessionStyled, FormLogin, Label, Img, Message } from './Session.style'
import { Button, Input, Icon } from '@aventura_tech/advance-erp-web-components/lib/atoms'
import { Keys } from '../Controller/types'
import { getPropsInput } from '../Controller/parses/form.parse'

function Session () {
  return (
    <SessionStyled>
      <FormLogin>
        <Img src={TreeImg} alt='Logo' />
        <div>
          <Label htmlFor='username'>Username</Label>
          <Input {...getPropsInput('username', 'Username')} />
        </div>
        <div>
          <Label htmlFor='password'>Password</Label>
          <Input {...getPropsInput('password', 'Password')} type='password' />
        </div>
        <Message><Icon name='warning circle' /><span>sdgdsg</span></Message>
        <Button type='submit' maxWidth='100%'>Log In</Button>
      </FormLogin>
    </SessionStyled>
  )
}

export default connect(Keys.KEY_MAIN)(Session)
