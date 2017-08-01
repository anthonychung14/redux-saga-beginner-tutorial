import React, { Component, PropTypes } from 'react'
import Counter from './Counter'

const App = props => (
    <div>
        <Counter { ...props } />
    </div>
)

export default App;