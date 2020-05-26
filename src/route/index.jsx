import React from 'react'
import PropTypes from 'prop-types'
import Public from './Public'
import Private from './Private'
import Layout from '../Components/Layout'
import { connect } from 'redity'

function Route ({ isSession }) {
  return (
    <>
      {!isSession && <Public />}
      {isSession && <Layout><Private /></Layout>}
    </>
  )
}

Route.prototype = {
  isSession: PropTypes.bool.isRequired
}

const mapStateToProps = states => ({
  isSession: states.isSession
})

export default connect('session', mapStateToProps)(Route)
