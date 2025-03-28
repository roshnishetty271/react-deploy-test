**Create a simple React App and deploy using Github**

>npx create-react-app my-react-project --template typescript

>cd my-react-project

Inside "my-react-project" replace App.tsx and App.css with your code

>npm start

The server will start in the development server -> Local: http://localhost:3000

**Deployment:**

Make changes in package.json file

  Add "homepage": "https://USERNAME.github.io/REPONAME",
  
 Add under "scripts":
 
 "predeploy": "npm run build",
 
 "deploy": "gh-pages -d build"


>cd my-react-project

>npm install gh-pages --save-dev

>npm run build

![image](https://github.com/user-attachments/assets/e6cfd1d2-c40b-4146-af5c-6d76c538cf6b)


>npm run deploy

![image](https://github.com/user-attachments/assets/a80a51d3-719f-4879-8ef9-24e8f3b7f86a)



You have successfully deployed your project :)
>
>
>
**Check your live link in the "Deployments" section of your repo:**


![image](https://github.com/user-attachments/assets/0535a80f-68ae-43c8-8c44-2f61da75fb4f)

