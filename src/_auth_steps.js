/* 

1. create-react-app
2. Create firebase app with the same name and register it.
3. Go to firebase app > project > build > authentication > enable the sign in method.
4. npm-install-firebase
5. Then setup the configuration in firebase.init.js
6. In firebase.init.js, import {getAuth} from 'firebase/auth'; & set const auth = getAuth(app) & export default auth;
7. Create LogIn and SignUp component and setup the routes.
8. npm install --save react-firebase-hooks 
9. Attache event handler to get email, password and confirm password from the input field in signUp component.
10. Use useCreateUserWithEmailAndPassword hooks from react-firebase-hooks to implement signUp in SignUp component.
11. Get user using useAuthState() from react-firebase-hooks to access user in different component.
12. User useSignInWithEmailAndPassword hooks from react-firebase-hooks to implement signIn in SignIn component.
13. Create RequireAuth component to implement private routes and receive children prop and use condition to authorize user in a specific route. 
14. Wrap the children route (which you need to protect as a private route) with the RequireAuth route in App.js
component.
15. Toggle between logIn Link and logOut button in header component as user is logged in or logged out. 
 */


/* 
// Steps to deploy the react firebase project using firebase:

1. npm install -g firebase-tools : (one time for my computer)
2. firebase login : (one time for my computer)
3. firebase init : (one time for every project)
4. npm run build : (every time after modifying the project)
5. firebase deploy : (every time after modifying the project)

*/