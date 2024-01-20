
# GitHub Repositories Viewer

This project is a simple web application that allows users to enter a GitHub username and view the public repositories associated with that username. The application provides a clean interface to display repository information, including names, descriptions, and topics.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Usage](#usage)

## Features

- **Username Input**: Users can enter a GitHub username to fetch and display associated repositories.
- **Pagination**: Repositories are paginated, allowing users to navigate through multiple pages.
- **Loader**: A loading spinner is displayed while repositories are being fetched.
- **Topics Display**: Repository topics are displayed along with names and descriptions.
- **Responsive Design**: The application is designed to work well on various screen sizes.

## Folder Structure

```plaintext
github-repo-viewer/
│   server.js
│   package.json
└───public/
    │   index.html
    │   styles.css
    │   script.js
```

- `public/`: Contains static files such as HTML, CSS, and JavaScript.
- `server.js`: Node.js server file that handles API requests and serves static files.

## Getting Started

1. Clone this repository to your local machine.
2. Install the project dependencies using `npm install`.
3. Start the server with `npm start`.
4. Open your web browser and navigate to `http://localhost:3000`.

## Dependencies

- [Express](https://expressjs.com/): Web framework for Node.js.
- [Axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js.
- [CORS](https://www.npmjs.com/package/cors): Express middleware to enable Cross-Origin Resource Sharing.

## Usage

1. Enter a GitHub username in the input field.
2. Click the "Fetch Repositories" button to view the associated public repositories.
3. Use pagination buttons to navigate through multiple pages.
4. Topics, repository names, and descriptions are displayed for each repository.


