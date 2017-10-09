import { jsdom } from 'jsdom'
import { shallow, mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator
global.Element = global.window.Element
global.HTMLElement = global.window.HTMLElement
global.getComputedStyle = global.window.getComputedStyle

global.expect = require('expect')
global.shallow = shallow
global.mount = mount
global.React = require('react')
