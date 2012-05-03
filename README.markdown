## Common actions

### Create a new blog post:

    $ rake new_post["title"]

This will create a new post in the `/source/_posts/` directory. Then just:

* Add the blog post content to that file
* Commit to Git (both `source` and the generated `public` files)
* Push to heroku:

    $ git push heroku master

### Add a new page:

    $ rake new_page[policies/index.html]

### Generate and preview:

    $ rake generate   # Generates posts and pages into the public directory
    $ rake watch      # Watches source/ and sass/ for changes and regenerates
    $ rake preview    # Watches, and mounts a webserver at http://localhost:4000

## Mini-focus

x * Body background
x * Footer
x * Main background
x * Header link font
x * Header link active
x * Logo in place of "Home" link
x * Page titles
x * Footer content
x * The City page content
x * Home page

* The Blog styling
  x * Permalink
  x * Blog archives
  x * Tweet
  x * Posted by
  x * Highlight nav link on permalink page
  x * Blog styling
* The Conference page
* The Sponsors page
* Anti-harassment page
* Responsive layout