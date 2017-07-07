# TODO

- Try to configure the quill editor once for all instances.
- Get focusing to work with the editor.
- When uploaded make sure you can't boot from certain routes that won't work.
- Write a (better) piece on how the authentication works.
- Put navbar into own component and update username etc if it changes. Currently data stays on logout!



## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Notes

### Deployment

Originally I had the api as a separate node project but when I went to deploy I decided to add it to the ng2 project in the server folder. I then created a single package.json with the dependencies for all of them in there. Hopefully it is obvious which are which. I also added node and npm version names and moved the angular cli to dependencies instead of dev dependencies so that I could manage it from the google cloud.

I have used the google cloud platform with an id of deeplydata and a default url.

There is a debate about whether it is best to build the site and then add it to github or whether it is best to run the ng build --prod --aot on the server itself. Possibly that is the best move.

There is also an issue about whether the site can find the server if server.js is not in the main directory but stored in the server directory. But let's see. Maybe I will move it.

### Authentication

I am using Auth0 for authentication. Basically you simply sign up for an account and then npm install and have a link to log in or sign up. This takes you away to their own login page which allows you to log in or sign up. When it returns you successfully it gives you some jwt's for accessing the api you have also set up. The jwt's are set up to send the token with all requests and can be decripted on the server using the secret you get from the auth0 site. Massive pain in the arse with poor documentation.

### Focus

Adding focus was a challenge. It turned out the lifecycle hook AfterViewChecked was run everytime I would want to check on focus, so I simply used this to set the focus using vanilla js. The issue was that sometimes there was a a mismatch between the hook running and the new element being created. It was stuck on the old one, could not find the element and threw an error. As a result I needed to check each time that it could find the element before performing the action.

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
