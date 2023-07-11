import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import { Dropdown } from "../Dropdown"

configure({adapter: new Adapter()});
describe('Dropdown', () => {
    test('should render', () => {
        const wrapper = shallow(<Dropdown position={{
            x: 0,
            y: 0,
            h: 0
        }}/>)
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
    })

    test('should render (snapshot)', () => {
        const wrapper = shallow(<Dropdown position={{
            x: 0,
            y: 0,
            h: 0
        }}/>)

        expect(wrapper).toMatchSnapshot()
    })
})