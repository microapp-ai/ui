![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://ui.microapp.io/)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

# @microapp-io/ui

A UI component library built using React, TailwindCSS, and Shadcn components. This library provides reusable, styled components that can be easily integrated into your Microapp applications.

## Installation

To install the package in your project, you can use npm or yarn:

### npm

```bash
npm install @microapp-io/ui
```

### yarn

```bash
yarn add @microapp-io/ui
```

## Usage

After installing the package, you can start using the components in your React application.

```TypeScript
import React from 'react';
import { Button } from '@microapp-io/ui';
import "@microapp-io/ui/dist/style.css";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button>Click me!</Button>
    </div>
  );
}

export default App;
```

## Storybook

[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://ui.microapp.io/)

## How to create new components?

We are using [shadcn/ui](https://ui.shadcn.com/) for building our components. If you've never used shadcn/ui, please check their [docs](https://ui.shadcn.com/docs).

### Example of installing Alert component

```bash
npx shadcn@latest add alert
```

This will generate generate the component under `/components/ui`.

Export the created component in our `src/index.ts` file.

```typescript
import "./index.css";

export * from "@/components/ui/button";
export * from "@/components/ui/alert";
```

## License

This project is licensed under the MIT License.
