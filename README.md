## README

# Apple Website Clone

This project is a practice exercise to create a website similar to Apple's official site using modern web technologies. The tutorial for this project was followed from [Adrian Hajdin's iPhone](https://github.com/adrianhajdin/iphone) GitHub repository.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Three.js**: A JavaScript library that enables the creation of 3D graphics in the browser.
- **React Three Fiber**: A React renderer for Three.js.
- **React Three Drei**: A collection of useful helpers for React Three Fiber.
- **GSAP (Greensock)**: A powerful animation library for building high-performance animations.
- **Vite**: A fast development build tool and dev server.
- **npm**: Node package manager used for managing project dependencies.
- **Tailwind CSS**: A utility-first CSS framework for quickly styling the application.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download Node.js [here](https://nodejs.org/).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/apple-website-clone.git
    cd apple-website-clone
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Project

To start the development server, run:
```bash
npm run dev
```
This will start the Vite development server and you should be able to see the application running at `http://localhost:3000`.

### Building the Project

To build the project for production, run:
```bash
npm run build
```
The built files will be in the `dist` directory.

## Project Structure

```plaintext
apple-website/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── styles/
│   ├── App.jsx
│   ├── index.jsx
│   └── ...
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

- **public/**: Contains static files like `index.html`.
- **src/**: Contains the source code of the application.
  - **assets/**: Contains images, icons, and other asset files.
  - **components/**: Contains React components.
  - **styles/**: Contains Tailwind CSS styles and custom styles.
  - **App.jsx**: Main application component.
  - **index.jsx**: Entry point of the React application.

## Contributing

Contributions are welcome! If you have any ideas or suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.