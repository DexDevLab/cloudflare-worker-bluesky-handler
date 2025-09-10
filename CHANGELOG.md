<h1 align="center">Changelog</h1>

### v2.0.1-250910

- Removed 'wrangler.toml.example'
- Updated README

### v2.0.0-250910

- Updated README
- Changed 'dids.ts' function in a separated fetch function
- Created fetch function to get DIDs depending if it is local or via File Host
- Created separated 'dids.json' file for easier customizations
- Changed handle parsing logic
- Removed 'utils' folder
- Removed production env variables and set variables as global
- Created KV Bindings for retrieving env variables at Worker runtime

### v1.0.1-250909

- Updated README

### v1.0.0-250909

- Public Release

### v0.0.7-250909

- Updated Routes at wrangler.toml
- Added README
- Updated dids.ts.example
- Updated wrangler.toml.example

### v0.0.6-250908

- Updated Routes at wrangler.toml

### v0.0.5-250908

- Added YARN_ENABLE_IMMUTABLE_INSTALLS env variable for CloudFlare Compatibility
- Added test route for worker in runtime

### v0.0.4-250908

- Dependency update
- Removed yarn.lock from gitignore

### v0.0.3-250908

- Added YARN_VERSION wrangler.toml variable for CloudFlare Compatibility

### v0.0.2-250908

- Added Changelog
- Added yarn.lock to gitignore

### v0.0.1-250908

- Initial Commit
