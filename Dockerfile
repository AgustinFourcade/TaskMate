###################
# BUILD FOR LOCAL DEVELOPMENT
###################
FROM ruby:3.3.1

# Install packages needed to build gems
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential git libvips pkg-config

# Rails app lives here
WORKDIR /app

# Install application gems
COPY Gemfile Gemfile.lock ./

RUN bundle check || bundle install

# Copy application code
COPY . .

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]

###################
# BUILD FOR PRODUCTION
###################
