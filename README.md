# vertical-timeline-component-react

A simple component to generate a responsive vertical timeline
![Vertical Timeline Component React](https://i.imgur.com/KBqLIlK.png 'How to see vertical-timeline-component-react')

## Status

[![Coverage Status](https://coveralls.io/repos/github/Proskynete/vertical-timeline-component-react/badge.svg?branch=unit-tests)](https://coveralls.io/github/Proskynete/vertical-timeline-component-react?branch=unit-tests) [![Version](https://img.shields.io/npm/v/vertical-timeline-component-react.svg)](https://www.npmjs.com/package/vertical-timeline-component-react) [![Build Status](https://travis-ci.org/Proskynete/vertical-timeline-component-react.svg?branch=master)](https://travis-ci.org/Proskynete/vertical-timeline-component-react) [![Dependencies](https://david-dm.org/proskynete/vertical-timeline-component-react.svg)](https://david-dm.org/proskynete/vertical-timeline-component-react) [![devDependencies Status](https://david-dm.org/proskynete/vertical-timeline-component-react/dev-status.svg)](https://david-dm.org/proskynete/vertical-timeline-component-react?type=dev) [![peerDependencies Status](https://david-dm.org/proskynete/vertical-timeline-component-react/peer-status.svg)](https://david-dm.org/proskynete/vertical-timeline-component-react?type=peer)

## Getting started

To install as npm dependency

```sh
npm install --save vertical-timeline-component-react
```

## API Documentation

### Timeline

This is the wrapper component that creates the vertical timeline.

- Childrens

| Number of children | Required                                             | Value Allowed               |
| ------------------ | ---------------------------------------------------- | --------------------------- |
| Many               | At least the first `Container` component is required | Only `Container` components |

- Props

| name       | Type   | Required | Values Allowed     | default values                                                                                                                                                        | Description                                                                  |
| ---------- | ------ | -------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| theme      | object | false    | colors             | { yearColor: "#888888", lineColor: "#c5c5c5", dotColor: "#c5c5c5", borderDotColor: "#ffffff", titleColor: "#cccccc", subtitleColor: "#888888", textColor: "#cccccc" } | Set colors in all components                                                 |
| lang       | node   | false    | `en`, `es` or `de` | `en`                                                                                                                                                                  | Change the language `from` and `to` texts and change the format in the dates |
| dateFormat | string | false    | `L`, `l` or `ll`   | `L`                                                                                                                                                                   | Change the presentation format of dates                                      |

`dateFormat`: Receive only one of three options. (The options are same the [moment.js](https://momentjs.com/) using).

- The option `L` will return a date like `MM/DD/YYYY` (in English), `DD/MM/YYYY` (in Spanish) `DD.MM.YYYY` (in German).
- The option `l` will return a date like `M/D/YYYY` (in English), `D/M/YYYY` (in Spanish) `D.M.YYYY` (in German).
- The option `ll` will return a date like `MMM DD, YYYY` (in English), `DD de MMM, YYYY` (in Spanish) `DD. MMM YYYY` (in German).

### Container

Each event in the timeline will be represented by the `Content` component. This component receive only two children's, the first is `YearContent` and the second is `BodyContent`. There can be multiple repeating instances of this component inside `Timeline` wrapper.

- Childrens

| Number of children | Required | Value Allowed                   |
| ------------------ | -------- | ------------------------------- |
| 2                  | true     | `YearContent` and `BodyContent` |

### YearContent

For each `Container` you need `YearContent` (like firts children) since with this component you mark the events in the given year.

- Props

| Name        | Type    | Required | Values Allowed                    | default values | Description                                                                      |
| ----------- | ------- | -------- | --------------------------------- | -------------- | -------------------------------------------------------------------------------- |
| startDate   | string  | true     | `YYYY/MM/DD` - `YYYY/MM` - `YYYY` | does not apply | The date of the start of the content or contents                                 |
| endDate     | string  | false    | `YYYY/MM/DD` - `YYYY/MM` - `YYYY` | does not apply | The date of the end of the content or contents                                   |
| currentYear | boolean | false    | `true` or `false`                 | current year   | The value is the current year, it is recommended to use it in the last Container |

### BodyContent

For each `Container` you need `ContentBody` (like second children). This component will be the container of the one or more `Sections`.

- Childrens

| Number of children | Required                                           | Value Allowed             |
| ------------------ | -------------------------------------------------- | ------------------------- |
| Many               | At least the first `Section` component is required | Only `Section` components |

### Section

This component is the container for one or more `Description`.

- Childrens

| Number of children | Required                                               | Value Allowed                 |
| ------------------ | ------------------------------------------------------ | ----------------------------- |
| Many               | At least the first `Description` component is required | Only `Description` components |

- Props

| Name  | Type   | Required | Description                   |
| ----- | ------ | -------- | ----------------------------- |
| title | string | true     | It's the title of any section |

### Description

This component can be the text of the description or a subtitle

- Props

| Name    | Type   | Required | Values Allowed              | default values | Description                           |
| ------- | ------ | -------- | --------------------------- | -------------- | ------------------------------------- |
| variant | string | false    | `subtitle` or `description` | `description`  | Transform the format of the text      |
| text    | string | true     | Any text                    | does not apply | Show the description of the `Section` |

## How to use it

The following snippet will show you how to use the library:

**_Using class components:_**

```js
import {
 Timeline,
 Container,
 YearContent,
 BodyContent,
 Section,
 Description,
} from 'vertical-timeline-component-react';

const customTheme = {
 yearColor: '#405b73',
 lineColor: '#d0cdc4',
 dotColor: '#262626',
 borderDotColor: '#d0cdc4',
 titleColor: '#405b73',
 subtitleColor: '#bf9765',
 textColor: '#262626',
};

class Main extends Component {
 render() {
  return(
   <Timeline theme={customTheme} dateFormat='ll'>
    <Container>
     <YearContent startDate='2020/07/01' currentYear />
     <BodyContent>
      <Section title='Title'>
       <Description variant='subtitle' text='Subtitle' />
       <Description text='Description' />
       <Description text='Another description' />
      </Section>

      <Section title='Another title'>
       <Description text='Description' />
       <Description text='Another description' />
      </Section>
     </BodyContent>
    </Container>
   </Timeline>,
  );
 }
}
```

**_Using function components:_**

```js
import {
 Timeline,
 Container,
 YearContent,
 BodyContent,
 Section,
 Description,
} from 'vertical-timeline-component-react';

const Main = () => {
 const customTheme = {
  yearColor: '#405b73',
  lineColor: '#d0cdc4',
  dotColor: '#262626',
  borderDotColor: '#d0cdc4',
  titleColor: '#405b73',
  subtitleColor: '#bf9765',
  textColor: '#262626',
 };

 return (
  <Timeline theme={customTheme} dateFormat='ll'>
   <Container>
    <YearContent startDate='2020/07/01' currentYear />
    <BodyContent>
     <Section title='Title'>
      <Description variant='subtitle' text='Subtitle' />
      <Description text='Description' />
      <Description text='Another description' />
     </Section>

     <Section title='Another title'>
      <Description text='Description' />
      <Description text='Another description' />
     </Section>
    </BodyContent>
   </Container>
  </Timeline>
 );
};
```

## License

MIT
