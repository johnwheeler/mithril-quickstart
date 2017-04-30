import m from 'mithril';

const name = 'John';

const Hello = {
  view: function() {
    return <h1>Hello, {name}</h1>;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  m.mount(document.body, Hello);
});
