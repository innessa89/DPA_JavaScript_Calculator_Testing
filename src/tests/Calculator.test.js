import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
    container.find('#clear').simulate('click');
  });

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it('should add 1 to 4 and get 5', () => {
    const addition=container.find('#operator_add');
    const button4=container.find('#number4');
    const button1=container.find('#number1');
    const runningTotal=container.find('#running-total');
    const equal=container.find('#operator-equals');
    button1.simulate('click');
    addition.simulate('click');
    button4.simulate('click');
    equal.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  });

  it('should subtract 4 from 7 and get 3', () => {
    const subtract=container.find('#operator-subtract');
    const button4=container.find('#number4');
    const button7=container.find('#number7');
    const runningTotal=container.find('#running-total');
    const equal=container.find('#operator-equals');
    button7.simulate('click');
    subtract.simulate('click');
    button4.simulate('click');
    equal.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should multiply 3 by 5 and get 15', () => {
    const multiply=container.find('#operator-multiply');
    const button3=container.find('#number3');
    const button5=container.find('#number5');
    const runningTotal=container.find('#running-total');
    const equal=container.find('#operator-equals');
    button3.simulate('click');
    multiply.simulate('click');
    button5.simulate('click');
    equal.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  });

  it('should divide 21 by 7 and get 3', () => {
    const divide=container.find('#operator-divide');
    const button2=container.find('#number2');
    const button1=container.find('#number1');
    const button7=container.find('#number7');
    const runningTotal=container.find('#running-total');
    const equal=container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    divide.simulate('click');
    button7.simulate('click');
    equal.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () => {
    const button2=container.find('#number2');
    const button1=container.find('#number1');
    const button7=container.find('#number7');
    const runningTotal=container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    expect(runningTotal.text()).toEqual('217');
  })

  it('should chain multiple operations together 8+', () => {
    const button8=container.find('#number8');
    const addition=container.find('#operator_add');
    const runningTotal=container.find('#running-total');
    button8.simulate('click');
    addition.simulate('click');
    expect(runningTotal.text()).toEqual('8');

  })

  it('should chain multiple operations together 8++', () => {
    const button8=container.find('#number8');
    const addition=container.find('#operator_add');
    const runningTotal=container.find('#running-total');
    button8.simulate('click');
    addition.simulate('click');
    addition.simulate('click');
    expect(runningTotal.text()).toEqual('16');
  })

  it('should clear the running total without affecting the calculation', () => {
    const button8=container.find('#number8');
    const equal=container.find('#operator-equals');
    const runningTotal=container.find('#running-total');
    const previousTotal=container.find('#previous-total');
    button8.simulate('click');
    equal.simulate('click');
    equal.simulate('click');
    container.find('#clear').simulate('click');
    expect(runningTotal.text()).toEqual('0');
    expect(previousTotal.text()).toEqual('0');
  })  
})

