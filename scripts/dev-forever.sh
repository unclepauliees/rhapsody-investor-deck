#!/usr/bin/env bash
# Keeps `npm run dev` running no matter what kills it (mem-guardian,
# cache-guardian's brew cleanup, or anything else on this machine). The
# moment the process exits for any reason, it's relaunched immediately.
cd "$(dirname "$0")/.."
while true; do
  echo "[dev-forever] starting npm run dev — $(date '+%Y-%m-%d %H:%M:%S')"
  npm run dev
  echo "[dev-forever] dev server exited (code $?) — restarting in 1s — $(date '+%Y-%m-%d %H:%M:%S')"
  sleep 1
done
