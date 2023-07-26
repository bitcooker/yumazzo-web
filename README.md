# YUMAZZO
A front end engineering challenge designed to test the ability to cook great products based on tasty design specifications.


![image](https://github.com/bitcooker/yumazzo-web/assets/128102810/fa2b412a-50f7-40ec-bd1e-f05f2533615c)


### Live Demo
- [yumazzo-web.vercel.app](https://yumazzo-web.vercel.app/)

### Google Chrome Extension
- [Google Chrome Extension](https://github.com/bitcooker/yumazzo-web/files/12175462/yumazzo-extension.zip)

![image](https://github.com/bitcooker/yumazzo-web/assets/128102810/7b65c951-d3f7-44f3-b274-c1cb06a9d794)


## Challenge Summary
The goal of the Yumazoo challenge is to create a seamless user experience for accessing and managing recipes. 
There is a Figma file that contains the design and layout specifications for the front-end.

The application output should be a Google Chrome Extension, and should utilize the provided Figma file as a reference to ensure a consistent and visually appealing interface. The design elements, including colors, typography, and spacing, should be implemented according to the specifications in the Figma file. The task is to translate the design into HTML, CSS, and JavaScript code.

One of the key requirements is to implement a search bar that allows users to search for existing recipes based on their names. The search functionality should send a request to the appropriate backend endpoint and display the search results dynamically on the front-end interface. The search bar should provide real-time suggestions as the user types, enhancing the usability of the application.

In addition to the search functionality, all other API endpoints should be integrated into the front-end application. This includes retrieving a list of recipes, retrieving a specific recipe by ID, and adding a new recipe to the server. The front-end should handle HTTP requests and responses appropriately, displaying any error messages returned by the backend API in a user-friendly manner.

Overall, the front-end implementation should provide a responsive and intuitive user interface that seamlessly integrates with our backend API. The Figma file serves as a visual guide for the design, and the developer should ensure that all endpoints are properly integrated and that the search bar functionality allows users to search for existing recipes by name.

### Resources
- [Figma Design](https://www.figma.com/file/jSGFmQ6NFxMtTA7GimBaXz/Yumazzo?type=design&node-id=203-5867&mode=design&t=a1zevJqL1WQj80H0-0)
- [API Endpoints](https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/endpoints#)



## Technologies
- React/Next.js
- TypeScript
- Tailwind CSS
- Other packages : lodash, react-select-country-list, react-country-flag, axios, clsx, react-detect-click-outside, react-svg-spinners, zustand, tailwind-scrollbar
- Google Chrome Extension


## How To Run
### Google Chrome Extension
- Download here: [yumazzo](https://github.com/bitcooker/yumazzo-web/files/12175462/yumazzo-extension.zip)
- Unzip the downloaded file.
- Head over to `chrome://extensions` in a new Chrome browser window.
- Enable `Developer Mode`, and click on the `Load Unpacked` button.
- Select the extension directory & Enjoy!

### Web
- Clone the project
- Install dependencies

```bash
npm install
# or
yarn install
```

- Fill `.env` variables
  
```bash
NEXT_PUBLIC_API_ENDPOINT = 
```

- Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
- Build extension:

```bash
npm run build:extension
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

