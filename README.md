# Project Sherlock

As the emphasis on business coaching increases, gurus need to be able to identify the type of merchant and their needs at a glance. Project Sherlock, through a Chrome Extension, can provide our gurus with a merchant identifier (i.e. dropshipper, maker, etc.), business coaching talking points and also links to relevant resources.

Whant to find out more? <a href="https://unicorn.shopify.io/projects/5911">Check out our Unicorn page here</a> for weekly updates!

Want to help? <a href="https://docs.google.com/document/d/1ooCyXIGvd4QA_cb6SAiQKnUyGkdNm51tZH5BYobJJ6c/edit#">Read through our feature roadmap</a> and see where we are at. 

Got questions? Reach out to @Phelan.Lewis or @Jordan.Wille on slack.

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
