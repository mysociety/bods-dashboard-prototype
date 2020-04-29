# BODS dashboard prototype

## How to run this site locally

    git clone --recursive git@github.com:mysociety/bods-dashboard-prototype.git
    cd bods-dashboard-prototype
    bundle install
    bundle exec jekyll serve --baseurl ''

The site will be accessible at <http://localhost:4000> by default.

If `bundle exec jekyll serve --baseurl ''` is a bit long, you can do `make run` instead.

## How this repo was initially set up

Mostly following the instructions at <https://github.com/mysociety/playbook>, except without the GOV.UK submodule, and with <https://github.com/twbs/bootstrap> as a submodule instead.
