import { handleChange } from '../handles/form_login.handle'
import { form_session } from '../store/component.state'

export function getPropsInput (fieldname, placeholder) {
  const value = form_session.val[fieldname]
  return {
    name: fieldname,
    placeholder,
    required: true,
    id: fieldname,
    onChange: handleChange,
    value
  }
}
