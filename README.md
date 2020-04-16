# mandatory-js-3

In this lab you're gonna build a single-page application (SPA). There should only exist a single html file in the project. You're gonna build
an application for viewing images of dogs. You'll be making requests to the Dog API (https://dog.ceo/dog-api/documentation/). On the
front page of the application, a table or list of some kind should list all the different breeds of dogs that can be viewed (see "List all
breeds" in the documentation). Each breed should link to a new "page" where you'll list three random images of dogs using the "by
breed" endpoint (see documentation for information). Each new page should have a proper navigation route, meaning after entering a
breed page, a refresh of the site should navigate you to the same place. (Tips is to use the hash "#" property of window.location). Each
breed site should have a list of all sub-breeds that exists (if any) for the breed. These should work similary to the breeds, linking to a
seperate sub-breed site where both a list of images should be shown. Each breed and sub-breed site should also render the name of
the breed we're looking at. On each site (index, breed, sub-breed), there should also exist three random images, and a button that
refreshes these images. When under breed or sub-breed site, the random images should be of the breed or sub-breed.<br/><br/>

To get the grade G the following needs to be implemented<br/><br/>

<ul>
<li>An index page which shows three random images of a dog of any breed, with a refresh button for the images. On the site there
should also be a list of any kind that shows all the different breeds and each breed should link to a new sub-page.
</li>
<li>A breed page which shows three random images of a dog of the given breed, with a refresh button for the images. On the site
there should also be a list of any kind that shows all the different sub-breeds (if any) and each sub-breed should link to a new subpage. There also needs to be a text rendered on the site that identifies the breed we're looking at.
</li>
<li>A sub-breed page which shows three random images of a dog of the given sub-breed with a refresh button for the images. There
also needs to be a text rendered on the site that identifies the sub-breed that we're looking at.</li>
<li>Each page except the index page should have some kind of URL identifier that makes it possible for the correct breed or sub-breed
to be shown. For example, if I try to navigate to http://mysite.com#breed-hound, the breed-page of the breed hound should be
shown directly.</li>
<li>There can only exist a single HTML file in the project that is directly rendered by the browser.</li>
</ul>
