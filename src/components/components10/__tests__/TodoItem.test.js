import React from 'react';
import TodoItem from '../TodoItem';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import sinon from 'sinon';

describe('<TodoItem />', function() {
  it('should have className = `item` ', function() {
    const wrapper = shallow(<TodoItem />);
    expect(wrapper.find('div').hasClass('item')).toBe(true);
  });
  it('should render with a checkbox input', function() {
    const wrapper = shallow(<TodoItem />);
    expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
  });
  it('should render with a p', function() {
    const wrapper = shallow(<TodoItem />);
    expect(wrapper.find('p')).toHaveLength(1);
  });
  it('should fill p with props.text', function() {
    const props = { text: 'Oh yeah' };
    const wrapper = shallow(<TodoItem text={props.text} />);
    expect(wrapper.find('p').text()).toEqual('Oh yeah');
  });
  it('should have div.className = `checked` if props.checked == true', function() {
    const wrapper = shallow(<TodoItem checked={true} />);
    expect(wrapper.find('div').hasClass('checked')).toBe(true);
  });
  it('should not have div.className = `checked` if props.checked == false', function() {
    const wrapper = shallow(<TodoItem checked={false} />);
    expect(wrapper.find('div').hasClass('checked')).toBe(false);
  });
  it('should call props.onCheck when input is checked', function() {
    const cb = jest.fn();
    const wrapper = shallow(<TodoItem onCheck={cb} />);
    wrapper.find('input').simulate('click');
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
