import React from 'react'

export default function useRender () {
  const [hash, setHash] = React.useState(-1)

  function render () {
    setHash(new Date().getTime())
  }

  return {
    hash,
    render
  }
}
