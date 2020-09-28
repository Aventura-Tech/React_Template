import React from 'react'
import Public from './Public'
import Private from './Private'
import Layout from '../Components/Layout'
import { connect } from 'redity'

function Route () {
  return (
    <>
      <Public />
      {false && <Layout><Private /></Layout>}
    </>
  )
}

export default connect('session')(Route)
