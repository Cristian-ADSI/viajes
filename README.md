# Getting Started with Clone the  App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What do you need?
   you need install a stable Node js  and NPM version, you cand download both from here
   https://nodejs.org/es/
   download the LTS version

## How to get this project?
   01. you can clone this project from your windows console, git Bash or from the console of your code editor with the following command
   
       git clone https://github.com/Cristian-ADSI/viajes.git
      
   02. In the project directory, you must install all dependencies and packages of the project, run the next comand:
   
       npm install

### How to run the proyect?
    You can run runs the app in the development mode with the flow comand:
    
    npm start
    
    Its open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# App in production
This aplication are deployed for production in the next URL:

https://cristianotero.com.co/travel/

By default  you need to pass a list of parameters for search. If you don't, it will load a page with an error message.
![image](https://user-images.githubusercontent.com/61100797/192101328-5a864a97-9bd3-444d-9ce7-d4dbde674e0d.png)

The list of parameters required are the folowings:

destinationId = (number)
pageNumber = (number)
pageSize = (number)
checkIn = (yyyy-mm-dd)
&checkOut= (yyyy-mm-dd)
&adults1= (number)

a template of this paramaters in the URL are the folowing:

?destinationId=1506246&pageNumber=1&pageSize=2&checkIn=2022-11-11&checkOut=2022-12-11&adults1=2

you need concatenate tis template parameters with the  root URL like this:

https://cristianotero.com.co/travel/?destinationId=1506246&pageNumber=1&pageSize=2&checkIn=2022-11-11&checkOut=2022-12-11&adults1=2

And you will have the folowing result:

![image](https://user-images.githubusercontent.com/61100797/192101630-cad8c73a-a4d1-477a-8759-df2959ddfd36.png)


I had some issues handeling the router because there are a 6.4 new version of React Router Dom and im reading the DOCS yet
you can check mor about it here:

https://reactrouter.com/en/main

If you want more information about of the API of this proyect go to the nex URL for oficial information

https://rapidapi.com/apidojo/api/hotels4



