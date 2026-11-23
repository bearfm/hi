source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#

gem "jekyll", "~> 4.4"

# If you have any plugins, put them here!
gem 'wdm', '>= 0.1.0' if Gem.win_platform?

# 强制用 sassc，绕开 sass-embedded 的 google-protobuf 编译问题
gem "jekyll-sass-converter", "~> 2.2"
gem "sassc", "~> 2.4"

group :jekyll_plugins do
    gem 'jekyll-feed'
    gem 'jekyll-sitemap'
    gem 'jekyll-paginate'
    gem 'jekyll-seo-tag'
    gem 'jekyll-archives'
    gem 'kramdown'
    gem 'rouge'
end