# verify



## Getting started

```
cd existing_repo
git remote add origin https://gitlab.com/atri1/verify.git
git branch -M master
git push -uf origin master
```

## Main Elements

- Frontend (client)
- Backend (server)
- Database (MySql)
- VM (Digital Ocean)

## FrontEnd

The frontend is build using react

### <u> Requirements </u>

- `npm >= 6.5`
- `node >= 10.12.0`
- `Git`

### <u> Packages </u>

Pakage name                              | Reference
-------------------------------------------|-----------------------------|

React-modal | [![React-modal](https://img.shields.io/static/v1?label=React-modal&message=v3.15.1&color=blue)](https://www.npmjs.com/package/react-modal)

React-to-pdf | [![React-to-pdf](https://img.shields.io/static/v1?label=React-to-pdf&message=v0.0.14&color=blue)](https://www.npmjs.com/package/react-to-pdf)


### <u> Usage </u>

Clone this repo in your local machine using the command
Install all the dependencies of this project present in the pakage.json 
Just run this command in your terminal inside view dir :
#### `npm install`

In the project directory, you can run:
#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### <u> Current folder structure </u>

```
client/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
    GeneralCert/
        GenCert.css
        Certificate.js
    Intern/
        Cert.css
        InternCert.js
    verify.css
    Verify.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
- App.js
    * It contains the routing of the website
 
<br />

- Verify.js
    * It contain the API call to check if the userid is present in the DB
    * As per the reponce recieved from server it render the certificate or an Error Msg.
    * Certificate is displayed in a Modal View
    * It contains the download certificate in PDF format option

<br />

- Intern or GeneralCert
    * Each certificate has its own folder the contains the js and css file
    * According to the responce js file of either folder is called and required props are passed

<br />

- Assets 
    * It cotains the images (qr, logo, BackgroundImg) used in the certificate

URL for admin 
- https://certsverify.thirdeyedata.io/

## Backend

The backend is written in django

### <u> Setup </u>
* Create a virtual Env for the project in the root dir using command ` py -3 -m venv venv `
* Activate the virtual Env using command ` venv\Scripts\activate `
* Install all the required dependencies using ` pip install -r req.txt `
* Run the project ` python manage.py runserver `

### <u> Current folder structure </u>
```
server/
    cert/
       _pycache_/
       migrations/
       _init_.py
       admin.py
       apps.py
       login.py
       models.py
       tests.py
       urls.py
       views.py 
    static/
    web_certificate/
    req.txt

```
- models.py
    * specifies the DB structures

- urls.py 
    * specifies the target urls for Rest APIs

- login.py
    * All the main function of the backend are written inside `server/cert/login.py`


## Database

The DB is in MySQL

The connection strings are present in ``` server/web_certificate/settings.py ```

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'test',
        'USER': 'TE-DB-DEMO',
        'PASSWORD': 'cA)(3SgB^J4n',
        'HOST': '68.183.74.45',
        'PORT': '3306',
        'OPTIONS': {
            'charset': 'utf8mb4'  # this is to save special logo/characters in DB
        }
    }
}
```
### <u> DB Tables </u>

- certs_login_info
    * Contains the info for login cred

- certs_participants
    * Contains the list of all participants


## Server

Hosted on Digital Ocean

IP : 68.183.74.45 \
Password : VPv?qp7!aq:E

* login using `ssh root@IP` and then password
    

