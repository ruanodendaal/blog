#!/usr/bin/env bash
set -e

# Install Bundler if it's not already available
if ! command -v bundle >/dev/null 2>&1; then
  gem install bundler
fi

# Configure Bundler to install gems locally
bundle config set --local path 'vendor/bundle'

# Install project dependencies
bundle install

