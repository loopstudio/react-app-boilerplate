#### Table Of Contents

[Introduction](#introduction)

[Styleguides](#styleguide)

- [React Styleguide](#react-styleguide)

[How Can I Contribute?](#how-can-i-contribute)

- [Issue Tracker](#using-the-issue-tracker)
- [Reporting Bugs](#bug-reports)
- [Feature Requests](#feature-requests)
- [Pull Requests](#pull-requests)

[Maintainers](#maintainers)

- [Reviewing Changes](#reviewing-changes)

[Naming & Labelling](#naming-and-labelling)

- [Branch Naming Convention](#branch-naming-convention)
- [Issue and Pull Request Labels](#labeling-convention-for-pull-requests--issues)

## Introduction

### Welcome to LoopStudio's React App boilerplate!

First off, thank you for considering contributing to our React App Boilerplate. It's people like you that make this boilerplate such a great tool.

### Why is this important?

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open-source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

### What sort of contributions are we looking for?

LoopStudio's React App Boilerplate is an open-source project and we love to receive contributions from our community — you! There are many ways to contribute, from improving the documentation, submitting bug reports and feature requests or writing code which can be incorporated into the boilerplate itself.

## Styleguide

### React Style Guide

We use our custom ESLint file to lint the code, so please make sure you set up the necessary tools in your preferred text editor.
Pull Requests that do not adhere to our linting rules will be rejected.

## How can I contribute?

### Using the issue tracker

The issue tracker is the preferred channel for bug reports, features requests and submitting pull requests, but please respect the following restrictions:

- Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.

### Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the `master` branch in the repository.

3. **Isolate the problem** &mdash; ideally, create a reduced test case.

A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What OS experiences the
problem? What would you expect to be the outcome? All these details will help
people to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case, screenshots, videos, etc...
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).

### Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to _you_ to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.

### Pull requests

Good pull requests - patches, improvements, new features - are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code), otherwise, you risk spending a lot of
time working on something that the team might not want to merge
into the project.

#### For new Contributors

1. Make sure to update, or add to the tests when appropriate. Patches and
   features will not be accepted without tests. Run `npm test` to check that
   all tests pass after you've made changes. Look for a `Testing` section in
   the project’s README for more information.

2. If you added or changed a feature, make sure to document it accordingly in
   the `README.md` file.

3. Open a Pull Request using your branch with a clear title and description.

## Maintainers

### Reviewing changes

1. Check that a change is within the scope and philosophy of the component.
2. Check that a change has any necessary tests.
3. Check that a change has any necessary documentation.
4. If there is anything you don’t like, leave a comment below the respective
   lines and submit a "Request changes" review. Repeat until everything has
   been addressed.
5. If you are not sure about something, mention `@LoopStudio` or specific
   people for help in a comment.
6. Once everything looks good, add an "Approve" review. Don’t forget to say
   something nice 👏🐶💖✨

\*\* **We require at least 2 approvals to consider a Pull Request good to be merged** \*\*

## Naming and Labelling

### Branch naming convention

| Label name | Description                                      |
| ---------- | ------------------------------------------------ |
| `feature`  | Developing a new feature                         |
| `bug`      | Fixing a bug                                     |
| `chore`    | Maintenance work. I.E: dependencies update, etc. |

### Labeling convention for Pull Requests & Issues

This section lists the labels we use to help us track and manage issues and pull requests.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. For example, you might be interested in [open issues](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Abug+label%3Aneeds-reproduction) across `LoopStudio`'s repos and which are labeled as bugs, but still need to be reliably reproduced or perhaps [open pull requests](https://github.com/search?q=is%3Aopen+is%3Apr+repo%3ALoopStudio%2Freact-app-boilerplate+comments%3A0) in `LoopStudio/react-app-boilerplate` which haven't been reviewed yet. To help you find issues and pull requests, each label is listed with search links for finding open items with that label in `LoopStudio/react-app-boilerplate` only and also across all LoopStudio's repositories. We encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

The labels are loosely grouped by their purpose, but it's not required that every issue has a label from every group or that an issue can't have more than one label from the same group.

Please open an issue on our [style guides repo](https://github.com/LoopStudio/loop-studio-guides) if you have suggestions for new labels, and if you notice some labels are missing on some repositories, then please open an issue on that repository.

#### Type of Issue and Issue State

| Label name                | `LoopStudio/react-app-boilerplate` :mag_right:                            | `LoopStudio`‑org :mag_right:                                  | Description                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `enhancement`             | [search][search-react-app-boilerplate-repo-label-enhancement]             | [search][search-loopstudio-org-label-enhancement]             | Feature requests.                                                                                                                 |
| `bug`                     | [search][search-react-app-boilerplate-repo-label-bug]                     | [search][search-loopstudio-org-label-bug]                     | Confirmed bugs or reports that are very likely to be bugs.                                                                        |
| `question`                | [search][search-react-app-boilerplate-repo-label-question]                | [search][search-loopstudio-org-label-question]                | Questions more than bug reports or feature requests (e.g. how do I do X).                                                         |
| `feedback`                | [search][search-react-app-boilerplate-repo-label-feedback]                | [search][search-loopstudio-org-label-feedback]                | General feedback more than bug reports or feature requests.                                                                       |
| `help-wanted`             | [search][search-react-app-boilerplate-repo-label-help-wanted]             | [search][search-loopstudio-org-label-help-wanted]             | When help from the team in resolving these issues is needed.                                                                      |
| `beginner`                | [search][search-react-app-boilerplate-repo-label-beginner]                | [search][search-loopstudio-org-label-beginner]                | Less complex issues which would be good first issues to work on for users who want to contribute.                                 |
| `more-information-needed` | [search][search-react-app-boilerplate-repo-label-more-information-needed] | [search][search-loopstudio-org-label-more-information-needed] | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce).                        |
| `needs-reproduction`      | [search][search-react-app-boilerplate-repo-label-needs-reproduction]      | [search][search-loopstudio-org-label-needs-reproduction]      | Likely bugs, but haven't been reliably reproduced.                                                                                |
| `blocked`                 | [search][search-react-app-boilerplate-repo-label-blocked]                 | [search][search-loopstudio-org-label-blocked]                 | Issues blocked on other issues.                                                                                                   |
| `duplicate`               | [search][search-react-app-boilerplate-repo-label-duplicate]               | [search][search-loopstudio-org-label-duplicate]               | Issues which are duplicates of other issues, i.e. they have been reported before.                                                 |
| `wontfix`                 | [search][search-react-app-boilerplate-repo-label-wontfix]                 | [search][search-loopstudio-org-label-wontfix]                 | LoopStudio team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| `invalid`                 | [search][search-react-app-boilerplate-repo-label-invalid]                 | [search][search-loopstudio-org-label-invalid]                 | Issues which aren't valid (e.g. user errors).                                                                                     |
| `package-idea`            | [search][search-react-app-boilerplate-repo-label-package-idea]            | [search][search-loopstudio-org-label-package-idea]            | Feature request which might be good candidates for a library.                                                                     |
| `wrong-repo`              | [search][search-react-app-boilerplate-repo-label-wrong-repo]              | [search][search-loopstudio-org-label-wrong-repo]              | Issues reported on the wrong repository.                                                                                          |

#### Topic Categories

| Label name         | `LoopStudio/react-app-boilerplate` :mag_right:                     | `LoopStudio`‑org :mag_right:                           | Description                                                                                                |
| ------------------ | ------------------------------------------------------------------ | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `documentation`    | [search][search-react-app-boilerplate-repo-label-documentation]    | [search][search-loopstudio-org-label-documentation]    | Related to any type of documentation.                                                                      |
| `performance`      | [search][search-react-app-boilerplate-repo-label-performance]      | [search][search-loopstudio-org-label-performance]      | Related to performance.                                                                                    |
| `security`         | [search][search-react-app-boilerplate-repo-label-security]         | [search][search-loopstudio-org-label-security]         | Related to security.                                                                                       |
| `ui`               | [search][search-react-app-boilerplate-repo-label-ui]               | [search][search-loopstudio-org-label-ui]               | Related to visual design.                                                                                  |
| `api`              | [search][search-react-app-boilerplate-repo-label-api]              | [search][search-loopstudio-org-label-api]              | Related to the boilerplate's APIs service.                                                                 |
| `crash`            | [search][search-react-app-boilerplate-repo-label-crash]            | [search][search-loopstudio-org-label-crash]            | Reports of the boilerplate completely crashing.                                                            |
| `git`              | [search][search-react-app-boilerplate-repo-label-git]              | [search][search-loopstudio-org-label-git]              | Related to Git functionality (e.g. problems with gitignore files or with showing the correct file status). |
| `build-error`      | [search][search-react-app-boilerplate-repo-label-build-error]      | [search][search-loopstudio-org-label-build-error]      | Related to problems with building the boilerplate from source                                              |
| `deprecation-help` | [search][search-react-app-boilerplate-repo-label-deprecation-help] | [search][search-loopstudio-org-label-deprecation-help] | Issues related to deprecation of APIs.                                                                     |

#### Pull Request Labels

| Label name                  | `LoopStudio/react-app-boilerplate` :mag_right:                              | `LoopStudio`‑org :mag_right:                                    | Description                                                                              |
| --------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `work-in-progress`          | [search][search-react-app-boilerplate-repo-label-work-in-progress]          | [search][search-loopstudio-org-label-work-in-progress]          | Pull requests which are still being worked on, more changes will follow.                 |
| `depends-on-another-branch` | [search][search-react-app-boilerplate-repo-label-depends-on-another-branch] | [search][search-loopstudio-org-label-depends-on-another-branch] | Pull requests which depends on another branch to be merged.                              |
| `needs-review`              | [search][search-react-app-boilerplate-repo-label-needs-review]              | [search][search-loopstudio-org-label-needs-review]              | Pull requests which need code review and approval from maintainers.                      |
| `under-review`              | [search][search-react-app-boilerplate-repo-label-under-review]              | [search][search-loopstudio-org-label-under-review]              | Pull requests being reviewed by maintainers.                                             |
| `requires-changes`          | [search][search-react-app-boilerplate-repo-label-requires-changes]          | [search][search-loopstudio-org-label-requires-changes]          | Pull requests which need to be updated based on review comments and then reviewed again. |
| `needs-testing`             | [search][search-react-app-boilerplate-repo-label-needs-testing]             | [search][search-loopstudio-org-label-needs-testing]             | Pull requests which need manual testing.                                                 |

## Community

We gather together once a month to discuss industry trends, best practices, and, of course, this project, in what we decided to call **Loop's React Tech Council**.

[search-react-app-boilerplate-repo-label-enhancement]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Aenhancement
[search-loopstudio-org-label-enhancement]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Aenhancement
[search-react-app-boilerplate-repo-label-bug]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Abug
[search-loopstudio-org-label-bug]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Abug
[search-react-app-boilerplate-repo-label-question]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Aquestion
[search-loopstudio-org-label-question]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Aquestion
[search-react-app-boilerplate-repo-label-feedback]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Afeedback
[search-loopstudio-org-label-feedback]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Afeedback
[search-react-app-boilerplate-repo-label-help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Ahelp-wanted
[search-loopstudio-org-label-help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Ahelp-wanted
[search-react-app-boilerplate-repo-label-beginner]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Abeginner
[search-loopstudio-org-label-beginner]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Abeginner
[search-react-app-boilerplate-repo-label-more-information-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3LoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Amore-information-needed
[search-loopstudio-org-label-more-information-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Amore-information-needed
[search-react-app-boilerplate-repo-label-needs-reproduction]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Aneeds-reproduction
[search-loopstudio-org-label-needs-reproduction]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Aneeds-reproduction
[search-react-app-boilerplate-repo-label-documentation]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Adocumentation
[search-loopstudio-org-label-documentation]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Adocumentation
[search-react-app-boilerplate-repo-label-performance]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Aperformance
[search-loopstudio-org-label-performance]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Aperformance
[search-react-app-boilerplate-repo-label-security]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Asecurity
[search-loopstudio-org-label-security]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Asecurity
[search-react-app-boilerplate-repo-label-ui]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Aui
[search-loopstudio-org-label-ui]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Aui
[search-react-app-boilerplate-repo-label-api]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Aapi
[search-loopstudio-org-label-api]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Aapi
[search-react-app-boilerplate-repo-label-crash]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Acrash
[search-loopstudio-org-label-crash]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Acrash
[search-react-app-boilerplate-repo-label-git]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Agit
[search-loopstudio-org-label-git]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Agit
[search-react-app-boilerplate-repo-label-blocked]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Ablocked
[search-loopstudio-org-label-blocked]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Ablocked
[search-react-app-boilerplate-repo-label-duplicate]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Aduplicate
[search-loopstudio-org-label-duplicate]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Aduplicate
[search-react-app-boilerplate-repo-label-wontfix]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Awontfix
[search-loopstudio-org-label-wontfix]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Awontfix
[search-react-app-boilerplate-repo-label-invalid]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Ainvalid
[search-loopstudio-org-label-invalid]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Ainvalid
[search-react-app-boilerplate-repo-label-wrong-repo]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Awrong-repo
[search-react-app-boilerplate-repo-label-package-idea]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Apackage-idea
[search-loopstudio-org-label-package-idea]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Apackage-idea
[search-loopstudio-org-label-wrong-repo]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Awrong-repo
[search-react-app-boilerplate-repo-label-build-error]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Abuild-error
[search-loopstudio-org-label-build-error]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Abuild-error
[search-react-app-boilerplate-repo-label-deprecation-help]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Adeprecation-help
[search-loopstudio-org-label-deprecation-help]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aloopstudio+label%3Adeprecation-help
[search-react-app-boilerplate-repo-label-work-in-progress]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Awork-in-progress
[search-loopstudio-org-label-work-in-progress]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Aloopstudio+label%3Awork-in-progress
[search-react-app-boilerplate-repo-label-depends-on-another-branch]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Adepends-on-another-branch
[search-loopstudio-org-label-depends-on-another-branch]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Aloopstudio+label%3Adepends-on-another-branch
[search-react-app-boilerplate-repo-label-needs-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Aneeds-review
[search-loopstudio-org-label-needs-review]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Aloopstudio+label%3Aneeds-review
[search-react-app-boilerplate-repo-label-under-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Aunder-review
[search-loopstudio-org-label-under-review]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Aloopstudio+label%3Aunder-review
[search-react-app-boilerplate-repo-label-requires-changes]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Arequires-changes
[search-loopstudio-org-label-requires-changes]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Aloopstudio+label%3Arequires-changes
[search-react-app-boilerplate-repo-label-needs-testing]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3ALoopStudio%2Freact%2Dapp%2Dboilerplate+label%3Aneeds-testing
[search-loopstudio-org-label-needs-testing]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Aloopstudio+label%3Aneeds-testing
[beginner]: https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Abeginner+label%3Ahelp-wanted+user%3Aloopstudio+sort%3Acomments-desc
[help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted+user%3Aloopstudio+sort%3Acomments-desc+-label%3Abeginner
