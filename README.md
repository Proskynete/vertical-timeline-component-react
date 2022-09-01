<div id="top">
  <h1>vertical-timeline-component-react
   <img src="https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png" width="25" height="25" />
 </h1>

 <p>A simple component to generate a responsive vertical timeline</p>
</div>

![Vertical Timeline Component React](<https://dsc.cloud/83db8c/Captura%20de%20Pantalla%202022-08-31%20a%20la(s)%2020.12.38.png> 'How to see vertical-timeline-component-react')

## Status

[![Coverage Status](https://coveralls.io/repos/github/Proskynete/vertical-timeline-component-react/badge.svg?branch=unit-tests)](https://coveralls.io/github/Proskynete/vertical-timeline-component-react?branch=unit-tests) [![Version](https://img.shields.io/npm/v/vertical-timeline-component-react.svg)](https://www.npmjs.com/package/vertical-timeline-component-react) [![CI](https://github.com/Proskynete/vertical-timeline-component-react/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/Proskynete/vertical-timeline-component-react/actions/workflows/ci.yml) [![GitHub issues](https://img.shields.io/github/issues/Proskynete/vertical-timeline-component-react)](https://github.com/Proskynete/vertical-timeline-component-react/issues) [![GitHub forks](https://img.shields.io/github/forks/Proskynete/vertical-timeline-component-react)](https://github.com/Proskynete/vertical-timeline-component-react/network) [![GitHub stars](https://img.shields.io/github/stars/Proskynete/vertical-timeline-component-react)](https://github.com/Proskynete/vertical-timeline-component-react/stargazers) [![bundlephobia](https://img.shields.io/bundlephobia/min/vertical-timeline-component-react)](https://bundlephobia.com/package/vertical-timeline-component-react) [![downloads](https://img.shields.io/npm/dm/vertical-timeline-component-react)](https://www.npmjs.com/package/vertical-timeline-component-react) [![GitHub license](https://img.shields.io/github/license/Proskynete/vertical-timeline-component-react)](https://github.com/Proskynete/vertical-timeline-component-react) [![Package Quality](https://packagequality.com/shield/vertical-timeline-component-react.svg)](https://packagequality.com/#?package=vertical-timeline-component-react) ![PRs welcome](https://img.shields.io/badge/PRs-welcome-green) [![CodeSandbox](https://img.shields.io/badge/-CodeSandbox-blue?style=flat&logo=CodeSandbox)](https://codesandbox.io/s/awesome-paper-16sgk?fontsize=14)

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
        <li><a href="#container">Container</a></li>
        <li><a href="#content">Content</a></li>
      </ul>
    </li>
    <li><a href="#how-to-use">How to use it</a></li>
    <li><a href="#contributors">Contributors</a></li>
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

- Childrens

| Number of children | Required                                             | Value Allowed               |
| ------------------ | ---------------------------------------------------- | --------------------------- |
| Many               | At least the first `Container` component is required | Only `Container` components |

- Props

| name       | Type    | Required | Values Allowed                                   | default values                                                                                                                                                        | Description                                                                  |
| ---------- | ------- | -------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| theme      | object  | false    | colors                                           | { yearColor: "#888888", lineColor: "#c5c5c5", dotColor: "#c5c5c5", borderDotColor: "#ffffff", titleColor: "#cccccc", subtitleColor: "#888888", textColor: "#cccccc" } | Set colors in all components                                                 |
| lang       | string  | false    | `en`, `es`, `de`, `tr` or `zh`                   | `en`                                                                                                                                                                  | Change the language `from` and `to` texts and change the format in the dates |
| dateFormat | string  | false    | `only-number`, `short`, `with-weekday` or `full` | `only-number`                                                                                                                                                         | Change the presentation format of dates                                      |
| collapse   | boolean | false    | `true` or `false`                                | `false`                                                                                                                                                               | Allow collapse the description of Content component                          |

`dateFormat`: The next table shows the different formats that can be used in the `dateFormat` prop and the result that will be displayed.

|                           | `only-number` | `short`          | `with-weekday`          | `full`                         |
| :-----------------------: | ------------- | ---------------- | ----------------------- | ------------------------------ |
|      English (`en`)       | `MM/D/YYYY`   | `MMM DD, YYYY`   | `ddd, MMM DD, YYYY`     | `dddd, MMMM DD, YYYY`          |
|      Spanish (`es`)       | `D/MM/YYYY`   | `DD MMM YYYY`    | `ddd, DD [de] MMM YYYY` | `dddd, DD [de] MMMM [de] YYYY` |
|       German (`de`)       | `D.MM.YYYY`   | `DD.MMM.YYYY`    | `ddd., DD. MMM. YYYY`   | `dddd, DD. MMMM YYYY`          |
|        Turk (`tr`)        | `DD.MM.YYYY`  | `DD MMM YYYY`    | `DD MMM YYYY ddd`       | `DD MMMM YYYY dddd`            |
| Simplified Chinese (`zh`) | `YYYY/MM/D`   | `YYYY年MM月DD日` | `YYYY年MMM月DD日`       | `YYYY年MM月DD日dddd`           |

<p align="right"><a href="#top">🔝</a></p>

<h3 id="container">Container</h3>

This component is the container of the content of each year. It is required to have at least one `Container` component as a child of the `Timeline` component. It can have as many `Container` components as you want.

- Props

| Name      | Type    | Required | Values Allowed                    | default values | Description                                                                      |
| --------- | ------- | -------- | --------------------------------- | -------------- | -------------------------------------------------------------------------------- |
| title     | string  | true     | any string                        | does not apply | The title of this block time                                                     |
| startDate | string  | true     | `YYYY/MM/DD` - `YYYY/MM` - `YYYY` | does not apply | The date of the start of the content or contents                                 |
| endDate   | string  | false    | `YYYY/MM/DD` - `YYYY/MM` - `YYYY` | does not apply | The date of the end of the content or contents                                   |
| today     | boolean | false    | `true` or `false`                 | current year   | The value is the current year, it is recommended to use it in the last Container |

<p align="right"><a href="#top">🔝</a></p>

<h3 id="content">Content</h3>

For each `Container` you need one or more `Content` component. This component will be the container of the one or more `Sections`.

- Props

| Name        | Type             | Required | Description                                                                        |
| ----------- | ---------------- | -------- | ---------------------------------------------------------------------------------- |
| title       | string           | true     | It's the title of one or many descriptions                                         |
| description | Array of strings | true     | You can write anything you want, but remember that it is consistent with the title |

<p align="right"><a href="#top">🔝</a></p>

<h2 id="how-to-use">How to use it</h2>

The following snippet will show you how to use the library:

**_Using class components:_**

```js
import { Timeline, Container, Content } from 'vertical-timeline-component-react';

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
  return (
   <Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse>
    <Container title="What is lorem Ipsum?" startDate="2020/12/02" today>
     <Content
      title="Lorem Ipsum"
      description={[
       "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
       'Is simply dummy text of the printing and typesetting industry.',
      ]}
     />
    </Container>
   </Timeline>
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
  <Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse>
    <Container title="What is lorem Ipsum?" startDate="2020/12/02" today>
     <Content
      title="Lorem Ipsum"
      description={[
       "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
       'Is simply dummy text of the printing and typesetting industry.',
      ]}
     />
    </Container>
   </Timeline>
 );
};
```

<p align="right"><a href="#top">🔝</a></p>

<h2 id="contributors">Contributors</h2>

<a href="https://github.com/Proskynete/vertical-timeline-component-react/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Proskynete/vertical-timeline-component-react"/>
</a>

<p align="right"><a href="#top">🔝</a></p>

<h2 id="license">License</h2>

Code and documentation copyright 2020–2022 the [Vertical Timeline Component React Authors](https://github.com/Proskynete/vertical-timeline-component-react/graphs/contributors) and [Me](https://github.com/Proskynete/Proskynete). Code released under the MIT [License](https://github.com/Proskynete/vertical-timeline-component-react/blob/master/LICENSE).

<p align="right"><a href="#top">🔝</a></p>
