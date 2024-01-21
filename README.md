# Portfolio

> My portfolio website, built with React, Next.js &amp; Wordpress

## Overview

* This project is created as showcase of my portfolio with frontend using React/Next.js version of [Milky Way portfolio template](https://github.com/ttomczak3/Milky-Way) (with many changes suiting my needs and major code improvements), and backend powered by WordPress.
* The integration of [Next.js](https://nextjs.org/) as frontend and [Wordpress](https://wordpress.org/) for backend is achieved using [HeadstartWP](https://github.com/10up/headstartwp), which provides Headless CMS for WordPress.

## Getting Started

To initiate the development server, adhere to these steps:

1. Clone this repository to your local environment.
2. Navigate to the project directory in command line: `cd portfolio`.
3. Install the requisite project dependencies using one of the following commands:
   * `npm install`
   * `yarn install`
   * `pnpm install`
4. Commence the development server using one of the following commands:
   * `npm run dev`
   * `yarn dev`
   * `pnpm dev`
5. Add `.env`  (or `.env.local`) file with below details

    ```
        NEXT_PUBLIC_HEADLESS_WP_URL=https://my-wordpress.test # or localhost WP url or live WP url
        HOST_URL=http://localhost:3000
        # NODE_TLS_REJECT_UNAUTHORIZED=0
        # ENABLE_REQUEST_DEBUG=true
        # ENABLE_REDIRECT_DEBUG=true
        # ENABLE_DEV_MODE=true
    ```

    If you're developing locally and your WordPress instance uses https but does not have a valid cert, uncomment NODE_TLS_REJECT_UNAUTHORIZED=0 to your env variables.
    Uncomment the other lines for local development, [more details](https://headstartwp.10up.com/docs/learn/getting-started/setting-up-manually/).
6. Install and active following wordpress plugin in your wordpress installation:
    * [SG Typing Text Block](https://github.com/stephin-gasper/sg-typing-text-block): Used for showing typewriter effect to text( or multiple texts, each one replacing another )
    * [Works Custom Post Type](https://github.com/stephin-gasper/works-cpt): For registering custom post type called works in your wordpress dashboard, which can be used showing your portfolios when visting `/works` (for list of works) or `/work/<single-work-slug>` (for individual)
    * [MetaBox](https://wordpress.org/plugins/meta-box/): Optional dependency of Works CPT which is used to display additional information for your work like website URL, tech stack, platform, github url, domain, featured image url( optional field, useful when hosting images separately)
    * [MB Rest API](https://wordpress.org/plugins/mb-rest-api/): Required if your are activating MetaBox plugin, used for fetching MetaBox fields via the WordPress REST API.
    * [Simple Custom Post Order](https://wordpress.org/plugins/simple-custom-post-order/): Optional plugin if you want drag-drop functionality for rearranging CPT or any post type or categories order.

7. Access the project by opening your preferred browser and visiting <http://localhost:3000>.

Begin your journey by editing files within the `pages` directory. Each modification triggers automatic updates to the corresponding page.

Explore the creation of API routes: Although no `hello.js` file exists, you can craft your API within the `pages/api` directory.

### Additional information

* For setting local wordpress enviroment which is docker based, you can use [wp-local-docker-v2](https://github.com/10up/wp-local-docker-v2). This can be used as an alternative for setting up multiple local wordpress instances if you don't have one already.
* For showing skills section in homepage using WordPress according to how it is shown in demo website, follow below steps:
    1. Add Group block from your Gutenberg editor
    2. Inside advanced section in settings sidebar, select `section` from **'HTML Element'** and add `skills-container` to **'ADDITIONAL CSS CLASS(ES)'** field
    3. Add individual Image block inside parent Group block.

## Deployment

* Build the Next.js project using one of the following commands:
  * `npm run build`
  * `yarn build`
  * `pnpm build`
* Deploy the built project using your preferred hosting service (e.g., Vercel, Netlify, etc.).
* Configure below environment variables when deploying the project ( if you are using .env file then remove all local development values and variables )

    ```
        NEXT_PUBLIC_HEADLESS_WP_URL=<your_live_wp_url>
        HOST_URL=<your_live_nextjs_url>
    ```

## Tech Stack

* [Next.js](https://nextjs.org/)
* [React](https://github.com/facebook/react)
* [Linaria](https://github.com/callstack/linaria): For adding support of CSS in JS, with zero runtime.
* [HeadstartWP](https://github.com/10up/headstartwp): For providing headless CMS for WordPress
* [ESlint](https://github.com/eslint/eslint): Using **@10up/eslint-config** as style guide
* [Husky](https://typicode.github.io/husky/): For supporting client side Git Hooks
* [Lint-staged](https://github.com/lint-staged/lint-staged): For linting staged files during commit
* [Commitlint](https://commitlint.js.org): For enforcing [conventional commit](https://www.conventionalcommits.org) messages during commit
* [Pnpm](https://pnpm.io/): For package management

## Explore the Project

* [GitHub Repository](https://github.com/stephin-gasper/portfolio/)
* [Live Demo](https://stephin-gasper.vercel.app/)

## Contributing

While this repository is not a template, feel free to use it as a starting point for your own portfolio site. You can modify and customize the code to suit your needs. If you'd like to contribute to the project or report any issues, feel free to submit a pull request or open an issue in the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
