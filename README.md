## TODO

- Try to configure the quill editor once for all instances.
- Get focusing to work with the editor.
- When uploaded make sure you can't boot from certain routes that won't work.
- Write a (better) piece on how the authentication works.
- Put navbar into own component and update username etc if it changes. Currently data stays on logout!

## Notes

### Google cloud

Deploying on the google cloud was far from straightforward, largely because the urls got messed up. I was using localhost for development but obviously this was not appropriate for production so the question was how to have both urls needed. The key is to have the proper url in the app.yaml file, which will then set it to deeplydata.appspot.com when you deploy. Otherwise it will be localhost:8080, which is good for development. I have not tested this yet.    

### Deployment

Originally I had the api as a separate node project but when I went to deploy I decided to add it to the ng2 project in the server folder. I then created a single package.json with the dependencies for all of them in there. Hopefully it is obvious which are which. I also added node and npm version names and moved the angular cli to dependencies instead of dev dependencies so that I could manage it from the google cloud.

I have used the google cloud platform with an id of deeplydata and a default url.

There is a debate about whether it is best to build the site and then add it to github or whether it is best to run the ng build --prod --aot on the server itself. Possibly that is the best move.

There is also an issue about whether the site can find the server if server.js is not in the main directory but stored in the server directory. But let's see. Maybe I will move it.

### Authentication and loading

This has been a particular pain. I am using Auth0. Essentially the process is this:

1. Any url beginning with deepldata.appspot.com will go to the node server and return the index.html which loads the app. So the starting point is always the same on loading.

2. The app component will then check whether the user is authenticated by checking for an id_token, a jwt, in web storage. If one is there, it will check for a userProfile. If there is a token but no profile, it will fetch one and then direct to the dashboard.

3. If there is not valid token it will redirect to the signin page. There the user can click to signin or signup using Auth0. Clicking the button will direct to Auth0's own signin page.

4. On successful login or signup Auth0 reload the app component which will fail to find a token because it has not been added yet. It will then load the callback component, which will run the script to load the token into local storage and get the profile out of it, and having done that will redirect to the dashboard.

5. Authenticated pages all have an auth guard which basically runs the code to check for the token and the profile.

### Focus

Adding focus was a challenge. It turned out the lifecycle hook AfterViewChecked was run every time I would want to check on focus, so I simply used this to set the focus using vanilla JS. The issue was that sometimes there was a a mismatch between the hook running and the new element being created. It was stuck on the old one, could not find the element and threw an error. As a result I needed to check each time that it could find the element before performing the action.

The other issue was with questions where there were several fields and we needed to prevent focus always returning to the first one. To do this we needed to check for where focus was, before then only refocussing if it wasn't somewhere it ought to be. The problem was that it was slow to get focus, so I needed to add a setTimout to give it time to work.

All feels a bit hacky.

### Alerts

For this I used an npm package called angular2-flash-messages. This is added to the app.module and added as a service to each page you want. The messages are added to app.component.html but triggered from any component to which they are added.

I have it a default bootstrap class of alert-success but then overrode the bootstrap classes in styles.css after putting it in a div to center it using bootstrap. Not super elegant but seems to work okay.

### Quill Editor

For this I used ngx-quill, which can be seen in the package.json. To customise the toolbar you need to use the settings as can be seen in the code.

### Droplet process

When a droplet is created it is a draft. In the creation view you can see what is necessary to complete for it to be assigned "complete". When all balls are turned green it will be automatically assigned the value "complete".

Later we may add another designation "premium" for a genuinely wonderful droplet with multiple questions and so forth.

### Droplet Editing

When a droplet is created it is immediately assigned "unverified". Once enough data has been added the author can submit it for review. At this point it gets the status "submitted". At this point it will show up in the review panel and someone with the editor or admin role can elect to become the reviewer. They will then be able to select it at which point it is "under review". If it is perfect the editor can verify it. More likely they will add some comments and send it back. If they do it will get the status "review complete". The author should then make changes and resubmit. When they do it will be "resubmitted". This can go back and forth but finally it will be "verified".

So in short it goes like this:

- unverified
- submitted
- under review
- review complete
- resubmitted (optional)
- verified

Only once a droplet is verified can it be made "public" and be accessible via the api for apps.
