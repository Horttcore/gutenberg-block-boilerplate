# Gutenberg Block Boilerplate

A WordPress Gutenberg Block Boilerplate

## Features

* Block registration
* Styles
* Translation ready
* Complete build process

## Installation

`composer create-project horttcore/gutenberg-block-boilerplate my-awesome-block`

## Setup

* Search+Replace `gutenberg-block-boilerplate` with your project slug
* Search+Replace `GutenbergBlockBoilerplate` with your php namespace
* Search+Replace `Gutenberg Block Boilerplate` with your plugin name
* Run `yarn` or `npm install`

### Development

* Run `yarn dev` to build development code
* Run `yarn watch` to build development code with file watcher

### Production

* Run `yarn production` to build production ready code

## Ideas

* Replace scss with postcss
* Add a post-project-create-cmd to automatically do the setup
* Turning into a project plugin
* Add service container
* Add server side block registration