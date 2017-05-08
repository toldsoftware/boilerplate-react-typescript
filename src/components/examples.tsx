import { Callback } from 'awesome-typescript-loader/dist/paths-plugin';
import * as React from 'react';

const action = () => {
    // This is usually declared in the data store as an action method.
    console.log('Action!');
};

export const AllExamples = () => (
    <div>
        <h2>001</h2> <Simple text='ABC' callback={action}></Simple>
        <h2>002</h2> <WithFunctionBody text='ABC' callback={action}></WithFunctionBody>
        <h2>003</h2> <WithLogic text='ABC' isVisible={true} callback={action}></WithLogic>
        <h2>004</h2> <WatchOutForText textControlsVisibility='ABC' callback={action}></WatchOutForText>
        <h2>005</h2> <WithChildren text='ABC' isVisible={true} callback={action}>
            <div>Here are some children</div>
            <div>This should be visible</div>
        </WithChildren>
        <h2>006</h2> <WithState text='ABC' isVisible={true} callback={action}>
            <div>Here are some children</div>
            <div>This should be visible</div>
        </WithState>
    </div>
);

export const Simple = (props: { text: string, callback: () => void }) => (
    <div>
        <h3>This is a simple component.</h3>
        <div onClick={props.callback}>{props.text}</div>
    </div>
);

export const WithFunctionBody = (props: { text: string, callback: () => void }) => {
    return (
        <div>
            <h3>This is a simple component with a full function body.</h3>
            <div onClick={props.callback}>{props.text}</div>
        </div>
    );
};

export const WithLogic = (props: { text: string, isVisible: boolean, callback: () => void }) => {
    return (props.isVisible &&
        <div>
            <h3>This is a component with some logic mixed in.</h3>
            <div onClick={props.callback}>{props.text}</div>
        </div>
    );
};

export const WatchOutForText = (props: { textControlsVisibility: string, callback: () => void }) => {
    // Use !! to test for the presence of text
    // Otherwise it will return the raw text value which probably wasn't intended
    return (
        <div>
            <h3>This is a component with some logic mixed in.</h3>
            <div onClick={props.callback}>{props.textControlsVisibility}</div>
            {!!props.textControlsVisibility &&
                <div onClick={props.callback}>This should be visible</div>
            }
            {!props.textControlsVisibility &&
                <div onClick={props.callback}>This should not be visible</div>
            }
        </div>
    );
};

export const WithChildren = (props: { children?: React.ReactNode, text: string, isVisible: boolean, callback: () => void }) => {
    return props.isVisible && (
        <div>
            <h3>This is a stateless component with children</h3>
            <div>{props.text}</div>
            {props.children}
        </div>
    )
};

export class WithState extends React.Component<
    {
        // props
        children?: React.ReactNode,
        text: string,
        isVisible: boolean,
        callback: () => void
    }, {
        // state 
        count: number
    }>{

    constructor() {
        super();

        // No need to call setState in constructor for initial value
        this.state = {
            count: 0
        };
    }

    // private functions should be set as lambda values
    // so they bind the this value automatically
    clickCallback = () => {

        // Call setState to change state and trigger a re-render
        const newCount = this.state.count + 1;
        this.setState({
            count: newCount
        });
    };

    render() {
        return this.props.isVisible && (
            <div onClick={this.clickCallback}>
                <h3>This is a stateful component with children</h3>
                <div>It has been clicked {this.state.count} times!</div>
                <div>{this.props.text}</div>
                {this.props.children}
            </div>
        );
    }
}