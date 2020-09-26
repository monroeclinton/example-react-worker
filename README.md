# example-react-worker

This is an example React project intended to learn the basics of [Cloudflare Workers](https://workers.cloudflare.com/). This project compiles Rust into WebAssembly and deploys it on Cloudflare workers. The end result is a React app running on Cloudflare workers that requests the Rust backend to multiply numbers together.

## How to run

Clone this repo and cd into it.

Install [Wrangler](https://github.com/cloudflare/wrangler) and login to Cloudflare with `wrangler login`.

After you install Wrangler you need to initialize your site:

```
wrangler init --site
```

Change the information in `wrangler.toml` with your credentials.

You will need to create other part of this project, [example-rust-worker](https://github.com/monroeclinton/example-rust-worker). After you create the Rust worker, put the worker URL in `src/constants.js`.

Next install the dependencies and build the React project with:

```
npm install
npm run build
```

Then you can publish the worker on Cloudflare with:

```
wrangler publish
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## License

example-react-worker is [MIT licensed](./LICENSE).
