1.  Explain the differences between `client-side routing` and `server-side routing`.

Server side routing causes the entire page to refresh. when the GET request is made the old page is discarded completely. This also results in unnecessary data being requested. On the other hand in client side routing, the route is handled internally and only the transitions between different components on the page is faster. This has the downside of a longer load time on the intitial request, but it makes for a smoother experience while on the application.

2.  What does HTTP stand for?

Hypertext Transfer Protocol:

HTTP is a set of rules that govern the way web clients communicate with web servers.

3.  What does CRUD stand for? &
4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create

-POST request (submitting data often resulting in state change or side effects)

Read

-GET request (only retrieves data)

Update

-PUT request (changes current representations to a requested payload)

Delete

-DELETE request (deletes an entity)

5.  Mention three tools we can use to make AJAX requests

-fetch
-axios
-jQuery
