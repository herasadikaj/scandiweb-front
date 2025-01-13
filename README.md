# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Product UI App
Overview
The Product UI App is a React-based application designed to manage a list of products. It allows users to view, add, and delete products. The app stores all data locally in the browser's local storage.

Features
Product List Page

Displays a list of products with their details including:
Name
SKU
Price
Extra Attribute (based on the product type)
Mass Delete button to delete selected products based on checked checkboxes.
Add button to navigate to the Add Product page.
Add Product Page

Form to add a new product with the following input fields:
Name
SKU
Price
Special Attribute (based on the product type)
Save button to save the new product to the product list and navigate back to the Product List page.
Cancel button to navigate back to the Product List page without making any changes.
Local Storage

All product data is stored in the browser's local storage to persist data across sessions.
