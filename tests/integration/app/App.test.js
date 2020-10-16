import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../../src/app/components/App';

describe("App component", () => {
  test('renders App component', () => {
    render(<App />);
    const linkElement = screen.getByText('Learn React');
    const expected = expect(linkElement);
    // console.log(getMethods(expected));
    expected.not.toBeNull();
    // const linkElement = getByText(component, 'Learn React');
    // expect(linkElement).toBeTruthy();
  });
});

// function getMethods(obj)
// {
//     var res = [];
//     for(var m in obj) {
//         if(typeof obj[m] == "function") {
//             res.push(m)
//         }
//     }
//     return res;
// }