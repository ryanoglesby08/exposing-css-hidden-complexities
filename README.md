# Exposing CSS Hidden Complexities

Accompanying blog post outlining the development of this repo: <http://ryanogles.by/css/javascript/react/2017/11/17/exposing-css-hidden-complexities-with-react.html>

## Motivation

This repo is an exploration of shifting complexity out of CSS and into JavaScript, using React as the core view library.

I use a "simple" button as the example and focus on 3 common CSS complexity hot-spots:

1. Pseudo-classes (specifically `:hover`)
2. Media queries
3. Animations (specifically `transition`)


## The inner workings

* `jest` for testing
* [`react-styleguidist`](https://react-styleguidist.js.org) for a live component showcase/playground   

"src/components" contains the explorations. Each component builds on the previous ones. By the time I get to `AnimatedButton`, the CSS properties are nothing more than a simple description of the static styles of the component.

0. `CssButton` is the plain CSS implementation. Just a React component and a style sheet.
1. `HoverButton` moves the hover pseudo-class into JavaScript using the `onMouseEnter` and `onMouseLeave` events paired 
with React's built-in state management, `setState`.
2. `ResponsiveButton` moves the media query into JavaScript using the [react-media](https://github.com/reacttraining/react-media) package, which uses the [matchMedia DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) under the hood.
3. `AnimatedButton` moves the transition animation into JavaScript using the [react-transition-group](https://reactcommunity.org/react-transition-group/) package, which lets you describe a transition from one component state to another _over time_ with a simple declarative API.


## Getting Started

```bash
yarn install

# Run tests
yarn test

# Run the live showcase/playground in dev server mode
yarn styleguide

open localhost:6060
```
