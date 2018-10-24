# Project Sherlock

As the emphasis on business coaching increases, gurus need to be able to identify the type of merchant and their needs at a glance. Project Sherlock, through a Chrome Extension, can provide our gurus with a merchant identifier (i.e. dropshipper, maker, etc.), business coaching talking points and also links to relevant resources.

Want to find out more? Head to our <a href="https://unicorn.shopify.io/projects/5911">Unicorn page to get the most recent updates</a>. 

Here to help? <a href="https://docs.google.com/document/d/1ooCyXIGvd4QA_cb6SAiQKnUyGkdNm51tZH5BYobJJ6c/edit#">Check out our feature roadmap</a> for a clear overview of the features we are building presently and where to find the referenced variables.

## Installation Process

#### Clone this repo
```
git clone
```

#### Once cloned repo is downloaded, then go to [chrome://extensions/]()
1![](https://screenshot.click/08-19-ka49v-jsrlh.jpg)


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
