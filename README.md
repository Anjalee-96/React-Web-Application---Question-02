Question 02 - React-based Web Application
• The task was to create web application to show the New York Times best-selling books
list.
• For that, I have used the given API according to the given instructions.
• By using the web application which has been developed, the user can view the top sold
book list.
• The web application is consisted with a nav bar with the title of the web application.
• First, the web application loading the data and view the top sold book list and book list is
displayed by using a card view.
• Each one is displayed the details of the book such as book title, author, contributor,
publisher and a description about the particular book.
• There are two buttons with every card. One is to purchase the books from Amazon and it
has linked to the Amazon website and other button is to view the book details.
• But I have displayed all the important book details in the first page.
To Run the Web Application
• Clone the project.
• Use “npm install” to install the all required dependencies.
• Use “npm start” to start the local server
• This web application uses “create-react-app”.
• The standard React's port 3000 is used to run this project.
• In the scripts section of package.json, you can configure the port.
• It is ideal for using API keys and other sensitive stuff because .env file can be ignored by
the Git.
• For more info, refer the DOTENV and React documentation.
• Also, please delete the configuration variable from the package.json script segmentdotenv never overrides variables if they are already configured.
• The book API has used from the https://developer.nytimes.com/. 
General functionality:
• Load the home page.
• Display the top sold book list.
• Display book details.
• Purchase from Amazon. 




<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
