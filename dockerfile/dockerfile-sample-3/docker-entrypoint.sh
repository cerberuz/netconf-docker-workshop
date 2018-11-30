#!/bin/sh
set -e

cat /etc/hosts
echo "Ok listo, ahora hagamos ping'"

exec "$@"