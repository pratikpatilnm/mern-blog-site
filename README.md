# mern-blog-site
Creating a blog website using MERN. 


Steps:

installation steps:

1.  Create a repository

    create a github repository.
    Clone the repository.

2. install nodejs and react-addons
    install create-vite@latest
    
    cd repository.
    npm create vite@latest -y
        ✔ Project name: … client
        ✔ Select a framework: › React
        ✔ Select a variant: › JavaScript + SWC

npm i

3.  Install tailwind CSS
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    paste in src/index.css
        src/index.css
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
    delete src/app.css
    delete src/assets/react.svg
    edit index.html
        delete <link rel="icon" type="image/svg+xml" href="/vite.svg" /> ... line 4
        change title
    install vs code extensions
        Tailwind CSS IntelliSense
        Github copilot
        ES7 React/Redux/GraphQL/React-Native snippets
        Multiple cursor case preserve

    edit app.jsx
        paste 
            export default function App() {
              return (
                <h1 className="text-3xl font-bold underline">
                  Hello world!
                </h1>
              )
            }
    
    npm run dev

Create Pages:
    cd /src
    create files:
        About.jsx
        Projects.jsx
        Dashboard.jsx
        Home.jsx
        Signin.jsx
        Signup.jsx

    install packages:
        npm i react-router-dom
        