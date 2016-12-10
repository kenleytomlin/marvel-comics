FROM ruby:2.3.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev
RUN mkdir /usr/app
WORKDIR /usr/app
ADD Gemfile /usr/app
ADD Gemfile.lock /usr/app
RUN bundle install
ADD . /usr/app

