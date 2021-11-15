/**
 * Created by Rick on 2021-11-14.
 */
'use strict';
export default (text = 'Hello, Webpack!') => {
  const element = document.createElement('h1');
  element.innerText = text;
  return element;
};