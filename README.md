# Project Sherlock

This is a project to help with business coaching call

## Installation Process

Clone this repo
```
git clone 
```

Once cloned repo is downloaded, then go to [chrome://extensions/]()

1![](https://screenshot.click/08-51-0cdip-rm59p.jpg)


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
