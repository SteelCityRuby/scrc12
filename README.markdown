## Overview

This is the official website for [Steel City Ruby Conf](http://steelcityrubyconf.org). It's base on Octopress.

## Development QuickStart

### Clone and set up your environment

There is an .rvmrc file within the project that sets your environment to use Ruby 1.9.2 with gemset scrc. If you are not using [rvm](https://rvm.io/) (like if you're on Windows or something), then you'll at least need to install Bundler and run `bundle install`:

    $ git clone git@github.com:pghrb/scrc-website.git
    $ cd scrc-website
    $ bundle install

### Start the server

To preview the site locally:

    $ rake preview

When the webserver starts up, you should be able to see the site here:

http://localhost:4000

### Create a new blog post

To create a new blog post:

    $ rake new_post["title"]

This will create a new post in the `/source/_posts/` directory. Always edit the file in the `/source` directory, not the `/public` directory. When you're done writing your post (in [Markdown](http://daringfireball.net/projects/markdown/syntax)), commit both the `/source` and `/public` files to Git and submit a pull request.

### Add a new page:

    $ rake new_page[policies/index.html]

### Generate and preview:

    $ rake generate   # Generates posts and pages into the public directory
    $ rake watch      # Watches source/ and sass/ for changes and regenerates

### Contributing updates

[Fork the repository](http://help.github.com/fork-a-repo/).

Check out your fork locally:

    $ git clone git@github.com:USERNAME/scrc-website.git

Create a topic branch.

    $ git checkout -b my_update

Make changes, commit, and push them:

    $ git commit -am "Updating such and such for great victory"
    $ git push origin my_update

[Submit a pull request](http://help.github.com/send-pull-requests/).