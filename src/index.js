import React from 'react';
import ReactDOM from 'react-dom';
import {ErrorBoundaries, ShowData} from "./components/errorBoundaries";

ReactDOM.render(<ErrorBoundaries><ShowData name="Mayank" /></ErrorBoundaries>, document.getElementById('root'));

