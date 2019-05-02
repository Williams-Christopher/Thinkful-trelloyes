import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List Component Tests', () => {
    const testProps = {
        header: 'Test List',
        cards: [{key: 12345, title: 'Test card', content: 'Test content'}],
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List header={testProps.header} cards={testProps.cards}/>, div);
        ReactDOM.unmountComponentAtNode(div);
        });

    it('Renders the UI as expected', () => {
        const tree = renderer.create(<List header={testProps.header} cards={testProps.cards} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});