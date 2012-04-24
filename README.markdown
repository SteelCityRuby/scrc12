## Common actions

### Create a new blog post:

    $ rake new_post["title"]

This will create a new post in the `/source/_posts/` directory. Then just:

* Add the blog post content to that file
* Commit to Git (both `source` and the generated `public` files)
* Push to heroku:

    $ git push heroku master

### Add a new page:

    $ rake new_page[conference.html]

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

* Footer content
* The City page content
* Home page content
* The Blog content
* Responsive layout
