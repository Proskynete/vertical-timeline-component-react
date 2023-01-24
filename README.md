<div id="top">
  <h1>vertical-timeline-component-react
   <img src="https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png" width="25" height="25" />
 </h1>

 <p>A simple component to generate a responsive vertical timeline</p>
</div>

![Vertical Timeline Component React](https://dsc.cloud/83db8c/vertical-timeline-component-react.png 'How to see vertical-timeline-component-react')

## Status

[![Coveralls Status](https://img.shields.io/coverallsCoverage/github/Proskynete/vertical-timeline-component-react?logo=Coveralls)](https://coveralls.io/github/Proskynete/vertical-timeline-component-react?branch=master) [![CI](https://img.shields.io/github/actions/workflow/status/Proskynete/vertical-timeline-component-react/ci.yml?logo=GithubActions&logoColor=fff)](https://github.com/Proskynete/vertical-timeline-component-react/actions/workflows/ci.yml) [![npm version](https://img.shields.io/npm/v/vertical-timeline-component-react?logo=Npm&logoColor=fff)](https://www.npmjs.com/package/vertical-timeline-component-react) [![bundlephobia](https://img.shields.io/bundlephobia/min/vertical-timeline-component-react)](https://bundlephobia.com/package/vertical-timeline-component-react) [![downloads](https://img.shields.io/npm/dm/vertical-timeline-component-react)](https://www.npmjs.com/package/vertical-timeline-component-react) [![GitHub license](https://img.shields.io/github/license/Proskynete/vertical-timeline-component-react?logo=Github)](https://github.com/Proskynete/vertical-timeline-component-react)
[![GitHub issues](https://img.shields.io/github/issues/Proskynete/vertical-timeline-component-react)](https://github.com/Proskynete/vertical-timeline-component-react/issues) [![GitHub forks](https://img.shields.io/github/forks/Proskynete/vertical-timeline-component-react)](https://github.com/Proskynete/vertical-timeline-component-react/network) [![GitHub stars](https://img.shields.io/github/stars/Proskynete/vertical-timeline-component-react)](https://github.com/Proskynete/vertical-timeline-component-react/stargazers) [![Package Quality](https://packagequality.com/shield/vertical-timeline-component-react.svg)](https://packagequality.com/#?package=vertical-timeline-component-react) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-green)](#CONTRIBUTING.md) [![CodeSandbox](https://img.shields.io/badge/-CodeSandbox-blue?style=flat&logo=CodeSandbox)](https://codesandbox.io/s/awesome-paper-16sgk?fontsize=14)

<br />
<br />

<details>
  <summary>Table of contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting started</a>
    </li>
    <li>
      <a href="#api-documentation">API Documentation</a>
      <ul>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#event">Event</a></li>
      </ul>
    </li>
    <li><a href="#how-to-use">How to use it</a></li>
  </ol>
</details>

<h2 id="getting-started">Getting started</h2>
To install as npm dependency

```sh
npm install --save vertical-timeline-component-react@latest
```

<p align="right"><a href="#top">🔝</a></p>

<h2 id="api-documentation">API Documentation</h2>

<h3 id="timeline">Timeline</h3>

This is the wrapper component that creates the vertical timeline.

- Children

| Number of children | Required                                          | Value Allowed            |
| ------------------ | ------------------------------------------------- | ------------------------ |
| Many               | At least the first `Events` component is required | Only `Events` components |

- Props

| name       | Type    | Required | Values Allowed                                   | default values                                                                                                                                                                                      | Description                                                                  |
| ---------- | ------- | -------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| theme      | `object`  | `false`    | `colors`                                           | { borderDotColor: '#ffffff', descriptionColor: '#cccccc', dotColor: '#c5c5c5', eventColor: '#cccccc', lineColor: '#c5c5c5', subtitleColor: '#c5c5c5', titleColor: '#cccccc', yearColor: '#888888' } | Set colors in all components                                                 |
| lang       | `string`  | `false`    | `en`, `es`, `de`, `tr` or `zh`                   | `en`                                                                                                                                                                                                | Change the language `from` and `to` texts and change the format in the dates |
| dateFormat | `string`  | `false`    | `only-number`, `short`, `with-weekday` or `full` | `only-number`                                                                                                                                                                                       | Change the presentation format of dates                                      |
| collapse   | `boolean` | `false`    | `true` or `false`                                | `false`                                                                                                                                                                                             | Allow collapsing description of all Content components                       |
| withoutDay | `boolean` | `false`    | `true` or `false`                                | `false`                                                                                                                                                                                             | Will hide the day of the dates of all Content components                     |

`dateFormat`: The next table shows the different formats that can be used in the `dateFormat` prop and the result that will be displayed.

|                           | `only-number` | `short`          | `with-weekday`          | `full`                         |
| :-----------------------: | ------------- | ---------------- | ----------------------- | ------------------------------ |
|      English (`en`)       | `MM/D/YYYY`   | `MMM DD, YYYY`   | `ddd, MMM DD, YYYY`     | `dddd, MMMM DD, YYYY`          |
|      Spanish (`es`)       | `D/MM/YYYY`   | `DD MMM YYYY`    | `ddd, DD [de] MMM YYYY` | `dddd, DD [de] MMMM [de] YYYY` |
|       German (`de`)       | `D.MM.YYYY`   | `DD.MMM.YYYY`    | `ddd., DD. MMM. YYYY`   | `dddd, DD. MMMM YYYY`          |
|        Turk (`tr`)        | `DD.MM.YYYY`  | `DD MMM YYYY`    | `DD MMM YYYY ddd`       | `DD MMMM YYYY dddd`            |
| Simplified Chinese (`zh`) | `YYYY/MM/D`   | `YYYY年MM月DD日` | `YYYY年MMM月DD日`       | `YYYY年MM月DD日dddd`           |

<p align="right"><a href="#top">🔝</a></p>

<h3 id="events">Events</h3>

This component is the container of the content of each year. It is required to have at least one `Events` component as a child of the `Timeline` component. It can have as many `Events` components as you want.

- Children

| Number of children | Required                                         | Value Allowed           |
| ------------------ | ------------------------------------------------ | ----------------------- |
| Many               | At least the first `Event` component is required | Only `Event` components |

- Props

| Name          | Type    | Required | Values Allowed                    | default values | Description                                                                      |
| ------------- | ------- | -------- | --------------------------------- | -------------- | -------------------------------------------------------------------------------- |
| title         | `string`, `JSX.Element`  | `true`     | any string, or some component                       | does not apply | The title of this block time                                                     |
| startDate     | `string`  | `true`     | `YYYY/MM/DD` - `YYYY/MM` - `YYYY` | does not apply | The date of the start of the content or contents                                 |
| endDate       | `string`  | `false`    | `YYYY/MM/DD` - `YYYY/MM` - `YYYY` | does not apply | The date of the end of the content or contents                                   |
| active        | `boolean` | `false`    | `true` or `false`                 | `false`   | The value is the current year, it is recommended to use it in the last Container |
| withoutDay    | `boolean` | `false`    | `true` or `false`                 | `false`        | Will hide the day of the dates for this component only                           |
| defaultClosed | `boolean` | `false`    | `true` or `false`                 | `false`        | Will collapse the content of this component only                                 |

<p align="right"><a href="#top">🔝</a></p>

<h3 id="event">Event</h3>

For each `Events` you need one or more `Event` component.

- Props

| Name        | Type             | Required | Description                                                                        |
| ----------- | ---------------- | -------- | ---------------------------------------------------------------------------------- |
| title       | `string`           | `false`    | It's the title of one or many descriptions                                         |
| description | `array` of `strings` | `true`     | You can write anything you want, but remember that it is consistent with the title |

> If the title is not defined (or empty), the description will always be displayed even when the defaultClosed prop is in the Events component

<p align="right"><a href="#top">🔝</a></p>

<h2 id="how-to-use">How to use it</h2>

The following snippet will show you how to use the library:

**_Using class components:_**

```js
import { Timeline, Events, Event } from 'vertical-timeline-component-react';

const customTheme = {
 borderDotColor: '#ffffff',
 descriptionColor: '#262626',
 dotColor: '#d0cdc4',
 eventColor: '#965500',
 lineColor: '#d0cdc4',
 subtitleColor: '#7c7c7c',
 titleColor: '#405b73',
 yearColor: '#405b73',
};

class Main extends Component {
 render() {
  return (
   <Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse withoutDay>
    <Events
     title={<a href="#">What is lorem Ipsum?</div>}
     subtitle="It's a fake text"
     startDate="2020/12/02"
     defaultClosed
     active
    >
     <Event
      title="Lorem Ipsum"
      description={[
       "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
       'Is simply dummy text of the printing and typesetting industry.',
      ]}
     />
    </Events>
   </Timeline>
  );
 }
}
```

**_Using function components:_**

```js
import { Timeline, Events, Event } from 'vertical-timeline-component-react';

const Main = () => {
 const customTheme = {
  borderDotColor: '#ffffff',
  descriptionColor: '#262626',
  dotColor: '#d0cdc4',
  eventColor: '#965500',
  lineColor: '#d0cdc4',
  subtitleColor: '#7c7c7c',
  titleColor: '#405b73',
  yearColor: '#405b73',
 };

 return (
  <Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse withoutDay>
   <Events
    title="What is lorem Ipsum?"
    subtitle="It's a fake text"
    startDate="2020/12/02"
    active
    defaultClosed
   >
    <Event
     title="Lorem Ipsum"
     description={[
      "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      'Is simply dummy text of the printing and typesetting industry.',
     ]}
    />
   </Events>
  </Timeline>
 );
};
```

<p align="right"><a href="#top">🔝</a></p>

<h2 id="license">License</h2>

Code and documentation copyright 2020–2022 the [Vertical Timeline Component React Authors](https://github.com/Proskynete/vertical-timeline-component-react/graphs/contributors) and [Me](https://github.com/Proskynete/Proskynete). Code released under the MIT [License](https://github.com/Proskynete/vertical-timeline-component-react/blob/master/LICENSE).

<p align="right"><a href="#top">🔝</a></p>
