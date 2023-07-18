FROM php:fpm



# Install system dependencies and PostgreSQL client
RUN apt-get update \
    && apt-get install -y libpq-dev

# Install Xdebug from PECL
RUN pecl install xdebug\
    && docker-php-ext-enable xdebug

# Install PHP extensions using docker-php-ext-install (only if needed)
RUN docker-php-ext-install pdo pdo_pgsql

# Optionally, set the timezone
RUN echo "date.timezone=UTC" > /usr/local/etc/php/conf.d/timezone.ini
