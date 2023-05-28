# Otakuxpress
Otakuxpress is a clone of youtube, with the primary focus of Anime. This site was inspired by many of my close friends loving the interface of Youtube, but also love the 
content of Cruncyroll!

Check out [Otakuxpress](https://otakuxpress.onrender.com/)

## Index
[MVP Feature List](https://github.com/DomenikMoody/CapstoneProject/wiki/Features) | [Database Schema](https://github.com/DomenikMoody/CapstoneProject/wiki/Database-Schema) | [User Stories](https://github.com/DomenikMoody/CapstoneProject/wiki/User-Stories) | [Wire Frames](https://github.com/DomenikMoody/CapstoneProject/wiki/WireFrame) |

***

## Technologies Used
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /><img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" /><img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=whit" /><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />

## Splash Page and All Videos
![SplashPage](https://github.com/DomenikMoody/CapstoneProject/assets/120535217/d39bad03-c7fa-4efa-88d6-7647021ba924)

## All Playlist
![Allplaylist](https://github.com/DomenikMoody/CapstoneProject/assets/120535217/bafb3565-48b4-4987-ac54-0a0853a88b43)

## Video Page with comments and Likes
![3rd screenshot for readme](https://github.com/DomenikMoody/CapstoneProject/assets/120535217/450567b4-d5a2-41d7-83bf-52cef44e59de)

## Getting started
1. Clone this repository:
   
   https://github.com/DomenikMoody/CapstoneProject
   `
2. Open a terminal to Move to the OtakuXpress directory then

   * pip install -r requirements.txt

3. Open another (without closeing the previous one terminal to Move to the OtakuXpress directory then, move to the react-app directory:

    * npm install

4. Go back to the first terminal and Set up your database with information the following to create your database, migrate, and seed:

    * pipenv shell
    
    * flask db migrate
    
    * flask db upgrade
    
    * flask seed all
  
 5. In that same terminal start the backend with:

    * flask run

 6. Go to the second terminal you created and start your front end with:
 
    * npm start
    
 7. Now you can use the Demo User or Create an account

## Amazon Web Services S3
* For setting up your AWS refer to this [guide](https://github.com/jdrichardsappacad/aws-s3-pern-demo)

`***

# Features 

## Videos
* Users can create a Video (require log-in)
* Users can read/view other Video
* Users can update their Video
* Users can delete their Video

## Comments
* Users can create Comment on Videos (require log-in)
* users can read/view all of the Comments on a video (require log-in)
* Users can delete/update their Comment(s) on a Video (require log-in)

## Playlist
* Read all of their Playlist  
* Create a playlist (require log-in)
* Update their playlist (require log-in)
* Delete their playlist (require log-in)

## Likes
* User Can Create a like on a video (require log-in)
* User Can Remove they like on a video (require log-in)

## Search
* User can Keyword or Phrase search and find a video 

## AWS
Logged-in Users can
* Upload multiple images of their spot to AWS S3



