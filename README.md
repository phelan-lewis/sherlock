# sherlock

This is a project to help with business coaching call

### Example of how to generate safe jquery HTML elements
```
Normal div
$('<div/>')

With class/id/style/whatever
$('<div/>', {
  class: 'someClass',
  id: 'someId',
  someattribute: 'somevalue'
})

With text
$('<div/>', {
  class: 'someClass',
  id: 'someId',
  someattribute: 'somevalue'
}).text(yourVariable);

with child
$('<div/>', {
  class: 'someClass',
  id: 'someId',
  someattribute: 'somevalue'
}).text(yourVariable).append($('<p/>').text('Hello!'));
```
