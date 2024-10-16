# Oil Gas Dashboard

This is a dashboard that displays data from sensors, simulating a Gas and Oil industry, that comes from an API.

The Back-end has a exclusive Repository which you can find at:

- [Back-end Repository](https://github.com/gvalluis-dev/oil-gas-api) 

## Characteristics

- C# .NET is the chosen stack for the Back-end
- React (TypeScript) + VITE is the chosen stack for the Front-end
- Entity Framework is the ORM (Object-Relational Mapper)
- Swagger + Swashbuckle was used in the Back-end for Documentation

## Used Technologies
- React
- Vite
- Axios (for HTTP requisitions)
- Material UI (For graphics)

## Steps to run the Dashboard (Front-End)

 
- git clone https://github.com/gvalluis-dev/oil-gas-dashboard.git
- cd oil-gas-dashboard
- Run "npm install"
- Run "npm run dev"



## Steps to run the API (Back-End)

- Clone the [Back-end Repository](https://github.com/gvalluis-dev/oil-gas-api) 
- Start it using Visual Studio (recommended)
- It will open the [Swagger Page](https://localhost:7279/swagger/index.html) , which displays the explanation of what everything does 
- Check if the API localhost code is the correct (7279)
- Once both, front and back, are running, you should be able to see the Dashboard with real data

## Front-End Structure Organization

/src
  /components  # Reusable Components
  /pages       # Main pages
  /services    # API communication actions
  App.jsx      # Application Root Component 

  ## Vite Configuration

This project uses [Vite](https://vitejs.dev/) as a build and development tool.

### Available Scripts

- `npm run dev`: Starts the development server with Vite.
- `npm run build`: Builds the application for production.
- `npm run preview`: Runs a preview of the production version.

Make sure that Vite is properly configured in the `vite.config.js` file to handle routes and communication with the backend API.
