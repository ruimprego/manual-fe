# manual-fe

## Commits

### create react project

I've decided to create the app from scratch, instead of using boilerplate code such as create-react-app, simply because this is a small application and this gives me better control of what dependencies the project has.
Additionally, I've added React as a dependency because, well... This is a React application 😀 and ReactDOM to manage the DOM elements of the page

### import font and create global style

I had to add a file-loader to webpack, so it could import the font-file that we needed for this project. I looked but couldn't find it as a webfont, so I downloaded the free version, which states on it's licence that it can be used freely except for commercial usage.
Typically in react, I like the flexibility that styled-components provide, therefore, for this exercise, I decided to use it, even though I'm familiar with other CSS pre-processors. I've also added a file to set the global styles of the application, as well as a theme file where all the colors of the application will reside.

### landing page

There are a couple of things that I'd like to note here:
- I've decided to move most of the data to .js files to make the rest of the application a little more organized. Personally, I don't really like to have any dummy data on my components.
- I created a sections dir under pages. This sections dir holds the "header" (for a lack of a better name), main and footer. The footer could be used differently so we didn't have to import it on every page, as I don't expect to have a router implemented, I think that this is enough to fulfill the need. This breakdown also allows for a better organization and smaller files.