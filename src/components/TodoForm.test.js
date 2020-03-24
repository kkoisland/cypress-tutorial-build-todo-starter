import React from 'react';
import TodoForm from './TodoForm';
import renderer from 'react-test-renderer';

test('Match to snapshot', () => {
    const currentTodo = "Orange"

    const component = renderer.create(
        <TodoForm currentTodo = {currentTodo} />
    )

    var tree = component.toJSON()

    expect(tree).toMatchSnapshot()

})