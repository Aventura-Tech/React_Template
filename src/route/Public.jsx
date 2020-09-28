import { Router } from '@reach/router'
import React, { lazy, Suspense } from 'react'
import Loading from '../Components/Loading'

const Session = lazy(() => import('../Modules/Session'))

/**
 * Public Routes, only visible when there is no session
 */
export default function Public () {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Session path='/' />
      </Router>
    </Suspense>
  )
}
