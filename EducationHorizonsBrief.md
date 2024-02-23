# The Brief

The site we are building today is the first part of a fictional news aggregation website where a user could:

- Search against one or more news sites / services for terms they are interested in
- Get a collated list of results
- Click through to read further the articles of interest.
- Pin or bookmark articles to read later or follow up.

For today we'll focus on a single source, the Guardian’s content API - https://open-platform.theguardian.com/ but the final solution would aggregate multiple sites.

We may or may not build all of this and that's totally fine.

## Specifics

The app would present a text field for the user to type their search terms. As the user types it would take that input and use it to perform a search against a backend API.

The response of that API call would be used to display a list of results, grouped by the section of the news sources that the items are found in.

The user would have the ability to pin results. Pinned results would appear below search results and would not change as search results change.

## Frontend Challenge

- The application should be built in ReactJS.
- Selection of a framework and component library is up to you -- should you choose to use one.
- As the user types, search requests are sent to a backend API.
- Upon receiving a response it should show news items clustered by the sections of the news site in which the article appears.
- In each cluster will be all items in that section of the news site.
- Each item should show:
  - The title
  - A link to the article
  - The publication date (formatted as DD/MM/YYYY).
  - A button or checkbox that allows it to be pinned.
- Pinned items should appear below the search results, and stay on screen as search results change.
