import { Router } from '@reach/router'
import React, { lazy, Suspense } from 'react'
import Loading from '../Components/Loading'
const Home = lazy(() => import('../Modules/Home'))

/**
 * Private Routes, only visible when there a session
 */
export default function Private () {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Home path='/' />
      </Router>
    </Suspense>
  )
}
