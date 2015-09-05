# MeteorMyTodos
A startup exercise with Meteor, building a simple todo app.

## Features

* intro app to MeteorJS
* CRUD functionality
* user accounts
* security measures
* access control

## Notes
* to create a new meteor project:
  ```
  meteor create <project_path/project_name>
  ```
* to start the server:
  ```
  meteor
  ```
* to install bootstrap:
  ```
  meteor add twbs:bootstrap
  ```
* for user accounts feature:
  ```
  meteor add accounts-ui accounts-password
  ```
* remove insecure package:
  ```
  meteor remove insecure
  ```
* for access control:
  ```
  meteor remove autopublish
  ```
* to deploy on meteor:
  ```
  meteor deploy <app_name>.meteor.com
  ```
  
## Test
[myTodos Deployment](http://betapoctodos.meteor.com/)

## Screenshot
![alt text][screenshot]
[screenshot]:screencapture-localhost-3000-1441482712870.png
