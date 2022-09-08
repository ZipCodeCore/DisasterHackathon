#!/bin/bash
rm -r /usr/share/nginx/html
cp -r ./emergency-site/dist /usr/share/nginx/html
service nginx restart
