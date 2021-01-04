FROM fluent/fluentd:v1.11-1

# add mongo plugin
USER root

# RUN apk add --no-cache --update --virtual .build-deps \
#         sudo build-base ruby-dev \
#     && gem install fluent-plugin-mongo \
#     && sudo gem sources --clear-all \
#     && apk del .build-deps \
#     && rm -rf /tmp/* /var/tmp/* /usr/lib/ruby/gems/*/cache/*.gem

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories \
    && apk add --no-cache bash make gcc libc-dev ruby-dev \
    && gem install fluent-plugin-mongo \
    && gem install fluent-plugin-grok-parser \
    && apk del make gcc libc-dev ruby-dev \
    && gem sources --clear-all \
    && rm -rf /var/cache/apk/* \
    && rm -rf /tmp/* /var/tmp/* /usr/lib/ruby/gems/*/cache/*.gem

USER fluent
