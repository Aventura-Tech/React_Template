import { form_session } from '../store/component.state'
import { render } from 'redity'
import { Keys } from '../types'

export function handleChange (ev) {
  const name = ev.target.name
  const value = ev.target.value

  form_session.method[name](value)
  render(Keys.KEY_MAIN)
}
