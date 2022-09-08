#!/bin/bash
rm -rf /usr/share/nginx/html
cp -r ./emergency-site/dist /usr/share/nginx/html
service nginx restart
