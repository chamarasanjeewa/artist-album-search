# Artists finter

Primary poc to work with radio.fm api to search and find details of an artist. Currently supporting searching an artist and find albums related to that artist as in following steps

1. Type artist name on main search bar and press search
2. Click on an artist record based on search results, it will navigate to albums view
3. Click on an album to navigate to album details view

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.

### hosting

For the demo purposes this is hosted in firebase.
[hosting-url](https://artist-album-finder.web.app/search)

### used packages

Development is done based on following components, since the assignment has not specified any restrictions used antd for improved ux

- antd
- react-router
- styled components
- redux, redux-tookit queries

### additional improvements

- Added linter
- Added pre-commit hook to detect errors on staging files
- Added prettier for formatting and configured with linter
- Added firebase hosting
- COnfigured github actions (not completed)

### notes/ improvements

- UI looks dull for now, need to improve with proper designs
- Needs improvements like introducting linters and git hooks
- Some warnings on antd, ignored in this case
- When using third party components its always a good practise to write a wrapper
- Pagination must be introduced, currently top albums are selected
