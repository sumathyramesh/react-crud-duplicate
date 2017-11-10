# CRUD with React

## Objectives

- Use React to build a basic but authentic application

## Background

This repository contains a React app, which renders a read-only list of people. Your mission is to change this app from read-only to full CRUD.

## TODO

1. Add clickable links to the Person `li`s
1. Create an `PersonEdit` component, and switch to this view when a Person is clicked
1. Display the select Person's first and last name using text boxes in `PersonEdit`
1. Make the text boxes editable using state
1. After text has been edited, add buttons for `Save` and `Cancel`
1. Make the `Cancel` button return to the `PersonList` view (without chaning the Person)
1. Make the `Save` button update the Person, and also return to the `PersonList` view
1. Add a `New` button to `PersonList`, which shows a component where users can be added
1. After entering first and last name into the "add" component, and clicking "save", return to the `PersonList`
1. If a Person has been added, they should be visible in the `PersonList`
1. Add a `Delete` button to `PersonEdit`. Clicking it should remove the user and return to `PersonList`

## Build and run

```
fork
git clone
cd react-crud
npm install -g yarn
yarn install
yarn start
```

## Notes

- TDD is not required for this exercise (TDD for React will be introduced shortly)
 