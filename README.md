# noteTaker

## READ ME 
* NoteTaker
* Version: 1.0.0 
* Web Design By Tripp Parham 
* Published: Saturday, February 1st, 2020

## Description
With busy daily schedules, it's easy to forget things that need to be done. Many apps make note taking complicated. With the Note Taker app, busy individuals can keep all of their notes in an easy to access database. Create, edit, and save notes with the click of a button. It uses an express backend to save and retrieve note data from a JSON file.

## Screenshoots

![Note Taker Image](./public/assets/img/noteTaker.png)


![Note Taker Image](./public/assets/img/noteTaker2.png)


## Configuration instructions
* No congiguration necessary.  Use on a web browser like Google Chrome.
* Goto the following link to see it work:
https://tripps-note-taker.herokuapp.com

### Code located in Github at:
https://github.com/wilpar4813/noteTaker


## Operating instructions

* From the homepage, select Get Started.
* Current notes, if any are posted, will appear in the left column.
* To post note, use the right column to enter a note title and note test.
* Click the save icon to save a note to the localhost json file.
* To delete a note, click the delete button next to the nore to be deleted.
* An note title and text are required for a note to be saved.


## List of files included in the following structure
* README.md (Read file for information on site development) 
* FORME.md  (Development use only)
* app.js  
* package.json
* package-lock.json 
* app.js
* db folder
    * notes.json
* public folder
    * assets folder
        * css folder
             * styles.css
        * js folder
            * index.js
    * index.html
    * notes.html
* routes folder
    *  apiRoutes.js
    *  htmlRoutes.js


## Copyright and licensing information
* Copyright 2020

## Contact information for the distributor or programmer

* Site Developer: Tripp Parham 
* Email: tripp.parham@me.com 

## Known bugs[0]

## Troubleshooting[6]
* Home page and notes page both load correctly,
* The links between the two pages work.
* A new note is correctly entered, saved, and added to the notes.json file.
* Clicking on each individual note correctly provides the corresponding note.
* Clicking on the delete button corectly deletes the corresponding note.
* Note is coorrectly not saved if either note title or note text is missing.

## Credits and acknowledgments

Special thanks to the Instructors and Staff at the UNC Coding Bootcamp. They are an awesome team.:-) I recommnend Trilogy to anyone that wants to learn Javascript Web Development. They have a fine tuned program and lots of great resources.

## Site Updates

* Verion 1.0.0 Released February 1st, 2020
