import * as React from 'react';
import { AllExamples } from "./components/examples";

export const App = () => (
    <div>
        <h3>React App</h3>
        <div>This is the root of your app</div>
        <div>
            <AllExamples />
        </div>
    </div>
);