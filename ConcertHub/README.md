# ConcertHub

<img width="1920" height="920" alt="image" src="https://github.com/user-attachments/assets/6b7c55f1-cdef-4b7d-87b5-b4ee3995865b" />

ConcertHub is a web application designed to help users discover concerts powered by the Ticketmaster API. Users can easily search for events accross Europe, manage their personal list of favorite concerts, and keep track of the events they have attended with custom notes.

## Tech stack
- Vue 3 Composition API
- Vue Router
- Pinia
- GSAP
- TypeScript
- Bootstrap
- Express.js
- Axios
- HTML
- CSS

## Key features
- Geolocated Search: Automatically displays the top 10 upcoming concerts within a 500km radius of the user's location.
- Favorites & History: Seamlessly add concerts to a "Favorites" list or an "Attended" log.
- Personalized Tracking: Edit descriptions and event names for attended concerts to keep personal records.
- Interactive UI: Fluid, smooth animations powered by GSAP for a polished user experience.
- Responsive Design: Fully optimized for both desktop and mobile devices.

## Getting started
- Create the app in the Ticketmaster to get the API key. Link where you can create the app: https://developer.ticketmaster.com/
- Clone this repository
- Make sure to create .env file in the ConcertHubServer folder where you will save the API key used for all of the requests to the Ticketmaster
```sh
APIKey = your_API_key
```
- Install packages in both folders
```sh
npm install
```
- Run the app in the ConcertHubServer folder
```sh
node app.js
```
- Run the app in the ConcertHub folder
```sh
npm run dev
```

## Lessons learned & Challenges
Working on this project was a fantastic learning experience, as it was my first time implementing Express.js backend, as well as integration TypeScript and Pinia into a full-stack application.
Throughout the process, I gained a solid understanding of how these technologies work together and how to effectively apply them in future projects.

Here are the key technical challenges I successfully navigated:
- Backend & API Integration: I built a custom Express.js server to handle API requests. The core challenge was implementing a secure workflow for user location: I captured the user's longitude and latitude coordinates on the frontend, passed them to my backend, and performed the server-side request to the Ticketmaster API. This approach ensured that my API keys remained secure and were never exposed on the client side.
- State management: This project served as my introduction to Pinia and TypeScript in a real-world scenario. I learned how to structure application state efficiently, leading to cleaner, more maintainable and type-safe code.
- Advanced animations: One of the most interesting challenges was managing smooth UI transitions when elements were dynamically updated. I resolved issues with element overlapping and rendering by leveraging Vue's built-in Transition and TransitionGroup components
  - By utilizing GSAP's done() callback function, I was able to properly synchronize Vue's component lifecycle with my animations.
  - This taught me how to manage DOM elements in a declarative way, avoiding race conditions and ensuring a professional, fluid user experience.
 
## Future roadmap
What I love about the apps is that they are never fully finished. Each app can be updated and improved indefinitely.
While I have completed the core functionality, I am excited to continue building upon this foundation:
- Adding a secure authentication system to allow for user-specific features
- Expanding the feature set with advanced filtering and more comprehensive data management
- Further enhancing the UX/UI design by fine-tuning animations to create a more immersive and responsive interface
 
## Feedback
This project is implemented as a part of my portfolio. Even though primarily it is developed for the educational purposes, I would love to hear other opinions.
If you have any suggestions, spot a bug, or have an advice on how to optimize the code, I would love to hear your thoughts. Whether it is a critique or a feature request, every bit of feedback is welcome and invaluable in helping me refine my skills and become a better developer.
