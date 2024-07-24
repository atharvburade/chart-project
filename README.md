# Angular Charts SPA

This is a Single Page Application (SPA) built using the latest version of Angular. The application displays a list of charts, allows users to filter these charts by date range, and manage (add, edit, delete) charts through a settings interface. This project leverages several modern web development libraries and frameworks.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
4. [Features](#features)
5. [Running the Application](#running-the-application)
6. [Building the Application](#building-the-application)
7. [Further Reading](#further-reading)

## Technologies Used

### Angular

- **Version**: 18
- **Framework**: Angular is a platform for building mobile and desktop web applications. It is a complete rewrite from the same team that built AngularJS.

### RxJS

- **Library**: Reactive Extensions for JavaScript (RxJS) is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.

### NgBootstrap

- **Library**: Angular widgets built from the ground up using Bootstrap 5 CSS. It contains high-quality components based on Bootstrap's markup and CSS.

### Highcharts

- **Library**: Highcharts is a JavaScript charting library that makes it easy to add interactive charts to your web and mobile projects.

### NgRx

- **Library**: NgRx is a framework for building reactive applications in Angular. NgRx provides libraries for managing global and local state, isolation of side effects, and more.

### TypeScript

- **Language**: TypeScript is a superset of JavaScript that compiles to clean JavaScript output. It provides optional static typing, classes, and interfaces.

## Project Structure

The project follows the standard Angular project structure with some additional organization for NgRx state management.

```plaintext
src/
├── app/
│   ├── actions/
│   │   └── chart.actions.ts
│   ├── effects/
│   │   └── chart.effects.ts
│   ├── reducers/
│   │   └── chart.reducer.ts
│   ├── components/
│   │   ├── view-mode/
│   │   │   └── view-mode.component.ts
│   │   └── settings/
│   │       ├── settings.component.ts
│   │       └── chart-modal/
│   │           ├── chart-modal.component.ts
│   │           └── chart-modal.component.html
│   ├── services/
│   │   └── chart.service.ts
│   ├── models/
│   │   └── chart.model.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app-routing.module.ts
│   └── store.module.ts
├── assets/
├── environments/
│   ├── environment.prod.ts
│   └── environment.ts
├── styles.css
└── index.html

### Components
View mode
![image](https://github.com/user-attachments/assets/3568a7b5-7b84-4ad1-a473-e05d3abab8e5)

Settings
![image](https://github.com/user-attachments/assets/87dad94f-3150-4579-9264-255bf090071b)

Modal
![image](https://github.com/user-attachments/assets/e7ae1890-918a-4611-977d-65ae9945a93b)



