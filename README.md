# Quiz Syste Web App (Think Learners.com) :

### Deployed Link :

#### --Frontend : https://tinylearners.vercel.app/

### Video Recording & Screenshots Of Website Overview : Googledrive Link : https://drive.google.com/drive/folders/1IsbiAkapM9ns8OUfwXpm8PB3kEPMVOi4?usp=sharing

##### Technologies Used : MERN(MongoDb,Express,React.js,Node.js),Bootstrap,Material UI

#### Dev Tools : VS Code,Github,Vercel,Render

#### Web App Development Approach :

##### Frontend :
--The frontend UI is built on React.js using Javascript as programming languagage.

--In react for routing, used package RouterDom,for notifications "React Toastify" has been used.

--Frontend app has been deployed in Vercel Hositng Website.

###Steps To Take Quiz Test And Explanation of Different features :
--First Landing Page will be displayed with the options to SignIn/SingUP

--User can create an account using SignUp and Login to his account.User account details will be store in Backend in MongoDB database.

--After Login,Navigate to Courses Tab by clicking on the icon in the Navbar and Select the course you need to Learn.

--Then it will be navigated to Lessons Page in that Course,select the Take Practice Test option of Lesson card.

--Practice Test page will be opened,There are six types of questions with validations of answer.You can only go to next question after successfull completion of Answer to it by clicking
  on Check button to validate.

--Then For every successfull or wrong answer Alert sounds will also be played.User can click on Flag button on the right side to save that question for later review.It will be added to 
  Flagmenu button on the left side of the screen.You can easily navigate to that question by selecting the question from that menu Flag button.

--If you move to any other page without completing the Practice Quiz Test it will be Resumed and added to Learning Lab Page.You can contiue the test from that question by clicking on the continue 
   button from "Learning Lab" page.

--Finally user can Logout from his account by clicking on the menu button in the Top - Right corner of the page.

##### Backend :
--User Signup and Login system has been implemented,by this user can create an account and login with it, jwt token authentication is used to verify user at every API call.

--And to store the User details Mongodb has been used as NoSQL Database.

--The Backend is Built on Express framework with Node.js runtime.

### Steps Required To Run Applications :

#### Frontend -React :

--"npx create-react-app ."
  For creating react app "node-modules".

--"npm install"
   For install all the depencies and packages in the "node-modules" folder.

--"npm start"
   Runs the app in the development mode.
   Open http://localhost:3000 to view it in your browser.

--"npm run build"
   Builds the app for production to the build folder. 
   It correctly bundles React in production mode and optimizes the build for the best performance.

Thank You 
