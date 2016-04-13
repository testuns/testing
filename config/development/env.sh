#!/usr/bin/env bash
env MONGO_URL=mongodb://localhost:27017/website METEOR_PROFILE=50 meteor run --port=5010 --settings config/development/settings.json