# Changelog

Notable changes to this project will be documented in this file.

The latest version of this document is always available in [releases][releases-url].

## [unreleased]

## [2.2.3] - 2019-01-02

-   Fixed metrics instrumentation of fallback requests

## [2.2.2] - 2018-12-20

-   Fixed metrics label for podlet name
-   Replaced @podium/metrics with @metrics/client

## [2.2.1] - 2018-09-13

-   The name argument on .register() now follow the same naming rules as name in @podium/podlet and the manifest - #82
-   Updated dependencies - #83

## [2.2.0] - 2018-07-17

-   Introduces a kill switch to prevent a recursive loop in the process of re-fetching manifest, fallback and content in the process of a version update of a podlet - #77

## [2.1.0] - 2018-07-10

-   Updated @podium/schema to version 2.1.1 - #75
-   Added .refresh() method for loading / refreshing manifest and fallbacks without touching the content - #76

[unreleased]: https://github.com/podium-lib/client/compare/v2.2.3...HEAD
[2.2.3]: https://github.com/podium-lib/client/compare/v2.2.2...v2.2.3
[2.2.2]: https://github.com/podium-lib/client/compare/v2.2.1...v2.2.2
[2.2.1]: https://github.com/podium-lib/client/compare/v2.2.0...v2.2.1
[2.2.0]: https://github.com/podium-lib/client/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/podium-lib/client/compare/v2.0.0...v2.1.0
[releases-url]: https://github.com/podium-lib/client/blob/master/CHANGELOG.md
