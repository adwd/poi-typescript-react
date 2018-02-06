import * as React from 'react'
import { render } from 'react-dom'
import Hello from './hello';

const App = () => <Hello />

render(<App />, document.getElementById('app'))
