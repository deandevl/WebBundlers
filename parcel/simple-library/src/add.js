/**
 * Created by Rick on 2021-11-15.
 */
export function add(a,b) {
  const element = document.createElement('h1');
  element.innerText = `The answer is ${a + b}`;
  return element;
}