# Cat App


## Project Description
This project is a modern web application built with Nuxt 3, Pinia and Tailwind CSS. It includes features such as user session management, dynamic image fetching, and animation effects. The project has a user login page and a website where authenticated users will randomly rotate images of a cat.


## Features
**User Authentication:** Secure login and logout functionality with session management.

**Dynamic Image Fetching & Animations:** Fetch images with random transition effects.

**Pinia for State Management:** Global state management using Pinia.

**Nuxt  with SSR:** Server-side rendering for fast loading and caching.

**Responsive Design:** Fully responsive UI for a smooth experience on all devices.


## Screenshots
### Main Page:
<img width="1440" alt="Screenshot 2024-09-10 at 16 38 07" src="https://github.com/user-attachments/assets/bf27408e-de1b-44ef-99ec-90c579f3a6ec">


### Login Page:
<img width="1440" alt="Screenshot 2024-09-10 at 16 07 34" src="https://github.com/user-attachments/assets/ab3dc58a-b04c-444b-88b4-78ce4eb65480">


## API Endpoints

### Login Endpoint

**URL:** /api/login

**Method:** POST

**Description:** Authenticates the user and returns a token along with the user information.

### Image Search Endpoint

**URL:** /api/image/search

**Method:** GET

**Description:** Fetches random Cat images.

**Authentication Required:** Yes

**Proxy:** Request is proxy to external service **https://api.thecatapi.com/v1/images/search**


## Technologies and Libraries Used
![download](https://github.com/user-attachments/assets/9f3003bf-7f0c-4a1a-a404-093d37bcd72c)

**Nuxt.js:** A powerful Vue.js framework.

![images (1)](https://github.com/user-attachments/assets/3c90460b-491b-4a4a-a01a-b907b74567c9)

**Pinia:** State management.

![images](https://github.com/user-attachments/assets/79750dca-1114-41ba-99e6-91a95f7d003f)

**Nuxt UI:** A modern CSS framework.

![download (1)](https://github.com/user-attachments/assets/e1993db9-a5a0-4dcd-9f64-5a55b172bcef)

**Axios:** For HTTP requests.

![images](https://github.com/user-attachments/assets/495560ec-c8b0-48ee-a31c-f0ecaadc480c)

**JSON Web Tokens:** JWT is a compact, secure token for authenticating and transmitting data.


## Clone the Project

```bash

git clone https://github.com/talhatelli/cat-app.git
cd cat-app
```


## Install Dependencies
```bash
# npm
npm install

# yarn
yarn install
```


## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# yarn
yarn dev
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
