magellan-pair-prog
==================

Express, Jade, JSON


<h2>Objective</h2>

Create a site that takes the user on a virtual tour of Magellan's voyage circumnavigating the globe. Each page is a separate stop on the voyage.

Requirements
Part I

The user should start on the home page at Seville, where Magellan departed Spain in 1519.
Create a separate page for each of the following locations from Magellan's expedition:
Seville
Canary Islands
Cape Verde
Strait of Magellan
Guam
Philippines
At each location (except the last), a next button should lead the user to a new page with information about that stop on Magellan's voyage.

<h2>Bonus</h2>

1) Add a route to handle an unknown destination. For example, if the user requests a page for "India", the user should see a simple page that informs the user that Magellan did not travel to India. (See Application Routing in the Express documentation for a description of different types of dynamic routes.)

2) Add a /next route which will serve up a JSON response that tells the user what location comes after a given location.
The route should take a query string of the current location e.g. /next/seville
The response should tell the user about the next location after Seville.
