import {shallow, render, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import deepFreeze from 'deep-freeze';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.renderer = renderer;
// Make deepFreeze functions available in all test files without importing
global.deepFreeze = deepFreeze;




