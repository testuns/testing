#!/usr/bin/env bash
env MONGO_URL=mongodb://localhost:27017/eppax_app METEOR_PROFILE=50 meteor run --port=5010 --settings config/development/settings.json