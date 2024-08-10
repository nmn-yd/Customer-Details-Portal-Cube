# Customer Details Portal

This is a single-page application (SPA) developed using React and TypeScript that serves as a customer details portal. The application allows users to view a list of customers and see detailed information about each customer, including a dynamic photo grid.

## Table of Contents

- [Features](#features)
- [React Virtualization](#react-virtualization)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)

## Features

- **Customer List**: Displays a list of customers on the left side of the portal, capable of handling up to 1000 entries, create the dummy enteries using faker.js.
- **Customer Cards**: Each card shows the customer's name and title.
- **Customer Details**: When a customer card is clicked, detailed information is displayed on the right side, including:
  - Customer name
  - Customer title
  - Customer address
  - A 3x3 grid of 9 photos
- **Dynamic Photo Grid**: The photos in the grid change every 10 seconds, fetched from a pexels API.
- **Highlight Selected Card**: The selected customer card is highlighted for better visibility.
- **Optimized Performance**: The application follows best practices for component re-rendering, state management, and hooks in React and TypeScript.

## React Virtualization
To enhance performance and user experience, this application implements React Virtualization. This technique allows the application to render only the DOM nodes that are currently visible in the viewport, significantly improving the rendering efficiency when dealing with large lists of customers.


## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **CSS**: For styling the application.
- **Pexels API**: Used to fetch photos for the photo grid.
- **React Virtualization**: A technique to efficiently render large lists by only displaying the items currently in the viewport.
- **Faker.js**: Used to create dummy data for customers.

## Screenshots
![Screenshot 2024-08-10 230338](https://github.com/user-attachments/assets/2e81943f-2d6e-4808-9bc0-b5911e07ba00)
![Screenshot 2024-08-10 230328](https://github.com/user-attachments/assets/d8c3fbc1-b385-4dc1-b7f9-906163a1e3dd)
![Screenshot 2024-08-10 230316](https://github.com/user-attachments/assets/8af825a2-0a15-4984-8bcf-828e1b980dbc)


