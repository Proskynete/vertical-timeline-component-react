# vertical-timeline-component-react

A simple component to generate a responsive vertical timeline
![Vertical Timeline Component React](https://i.imgur.com/JXdOHYV.png 'How to see vertical-timeline-component-react')

## Status

[![Coverage Status](https://coveralls.io/repos/github/Proskynete/vertical-timeline-component-react/badge.svg?branch=unit-tests)](https://coveralls.io/github/Proskynete/vertical-timeline-component-react?branch=unit-tests) [![Version](https://img.shields.io/npm/v/vertical-timeline-component-react.svg)](https://www.npmjs.com/package/vertical-timeline-component-react) [![Build Status](https://travis-ci.org/Proskynete/vertical-timeline-component-react.svg?branch=master)](https://travis-ci.org/Proskynete/vertical-timeline-component-react) [![Dependencies](https://david-dm.org/proskynete/vertical-timeline-component-react.svg)](https://david-dm.org/proskynete/vertical-timeline-component-react) [![devDependencies Status](https://david-dm.org/proskynete/vertical-timeline-component-react/dev-status.svg)](https://david-dm.org/proskynete/vertical-timeline-component-react?type=dev) [![peerDependencies Status](https://david-dm.org/proskynete/vertical-timeline-component-react/peer-status.svg)](https://david-dm.org/proskynete/vertical-timeline-component-react?type=peer)

## Getting started

To install as npm dependency

```sh
npm install --save vertical-timeline-component-react
```

Or if you preferred, you can use `yarn`

```sh
yarn add vertical-timeline-component-react
```

## API Documentation

### Timeline

This is the wrapper component that creates the vertical timeline.

### Content

Each event in the timeline will be represented by the `Content` component. There can be multiple repeating instances of this component inside `Timeline` wrapper.

### ContentYear

For each `Content` you need `ContentYear` since with this component you mark the events in the given year.

| Name        | Type             | Required | Values Allowed           | Description                                       |
| ----------- | ---------------- | -------- | ------------------------ | ------------------------------------------------- |
| startMonth  | string or number | false    | from 0 to 12             | The month of the start of the content or contents |
| monthType   | string           | false    | text or number (default) | Type of how to show the month                     |
| startDay    | string           | false    | from 1 to 31             | The day of the start of the content or contents   |
| startYear   | string           | true     | any year                 | The year of the start of the content or contents  |
| currentYear | boolean          | false    | false (default)          | When the content is still being made              |

### ContentBody

For each `Content` you need `ContentBody`, because with this component you describe the events that occurred in that year using `Description` component.

| Name     | Type   | Required | Description                                       |
| -------- | ------ | -------- | ------------------------------------------------- |
| Title    | String | True     | Show the title for the events                     |
| Children | Node   | True     | It is necessary to use the description component. |

### Description

With this component you describe the events one for one.

| Name     | Type   | Required | Description                                |
| -------- | ------ | -------- | ------------------------------------------ |
| Text     | String | True     | Describe the event                         |
| Optional | String | False    | You can this props for use a optional text |

## How to use it

The following snippet will show you how to use the library:

**_Using class components:_**

```js
import {
  Timeline,
  Content,
  ContentYear,
  ContentBody,
  Description
} from 'vertical-timeline-component-react';

class Main extends Component {
  render() {
    return (
      <Timeline>
        <Content>
          <ContentYear
            startMonth="12"
            monthType="text"
            startDay="24"
            startYear="2016"
            currentYear
          />
          <ContentBody title="Amazing Title">
            <Description
              text="I'm an amazing event"
              optional="I'm an amazing optional text"
            />
            <Description
              text="I'm an amazing event"
              optional="I'm another amazing optional text"
            />
            <Description text="I'm an amazing event" />
          </ContentBody>
        </Content>
        <Content>...</Content>
      </Timeline>
    );
  }
}
```

**_Using function components:_**

```js
import {
  Timeline,
  Content,
  ContentYear,
  ContentBody,
  Description
} from 'vertical-timeline-component-react';

const Main = () => (
  <Timeline>
    <Content>
      <ContentYear
        startMonth="12"
        monthType="text"
        startDay="24"
        startYear="2016"
        currentYear
      />
      <ContentBody title="Amazing Title">
        <Description
          text="I'm an amazing event"
          optional="I'm an amazing optional text"
        />
        <Description
          text="I'm an amazing event"
          optional="I'm another amazing optional text"
        />
        <Description text="I'm an amazing event" />
      </ContentBody>
    </Content>
    <Content>...</Content>
  </Timeline>
);
```

## License

MIT
