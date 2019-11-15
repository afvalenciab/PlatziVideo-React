import React from 'react';
import { create } from 'react-test-renderer';
import { shallow, configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../Footer';

configure({ adapter: new Adapter() });

describe('Footer testing', () => {
  test('Match Snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });

  test('Footer has class .footer', () => {
    const footer = shallow(<Footer />);
    const footerElm = footer.find('footer');
    expect(footerElm.hasClass('footer')).toBe(true);
  });

  test('footer has 3 anchor tags', () => {
    const footer = render(<Footer />);
    expect(footer.find('a')).toHaveLength(3);
  });

});
