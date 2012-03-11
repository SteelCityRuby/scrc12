## Overview

This is the official website for Steel City Ruby Conf (http://steelcityrubyconf.org). It's a simple static, Rack-based website.

## Development quick start

Set up your environment using rvm (highly recommended):

    $ cd scrc-website
    $ rvm use --create 1.9.2@scrc
    $ gem install bundler
    $ bundle install

Start the rack server:

    $ rackup -p 9292 config.ru

And you should be able to access the site at:

[http://localhost:9292/](http://localhost:9292/)

### Contributing updates

Fork the repository:

http://help.github.com/fork-a-repo/

Check out your fork locally:

    $ git clone git@github.com:USERNAME/scrc-website.git

Create a topic branch.

    $ git checkout -b my_update

Make changes, commit them:

    $ git commit -am "Updating such and such for great victory"

Submit a pull request:

http://help.github.com/send-pull-requests/
