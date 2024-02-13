Create DB: open MySQLWorkbench and click on the connection; click the icon to create a new schema. Name and create the database.  



Make an sql folder to hold seed data and connection file.  Create connections.js file and set up connection.  Create .env and .gitignore files.

Predicted data needs for "phase 1" of project:
    Users table:
        id
        username
        password
        signup date
    pet info table:
        id
        user id (foreign key)
        pet name
        animal type
        breed
    health table:
        pet id (foreign key)
        weight
        diet
        vet
    meds table
        pet id (fk)
        med name
        reason for med
        frequency given
    supplements
        pet id (fk)
        type of supplement
        frequency
    vaccinations
        pet id (fk)
        vaccine
        date given
        date due
    injury/illness/intervention
        pet id (fk)
        issue
        vet visit date
        treatment
        notes

Phase 2 (creating a habit with streaks) data needs:
    Activity table:
        pet id (fk)
        type of activity
        duration
        timestamp
        streak
    Motivation message table
        pet id (fk)
        streak (fk)
        message
        timestamp

Phase 3 (Training aids) data needs:
    Goal table:
        goal id
        goal or challenge name
        prerequisite
        level
    Instructional table:
        goal id
        goal or challenge name
        picture or video of "what it looks like"
        instructional video
        pdf instructions
    
Phase 4 (Gamify)
(I don't really know how this will work)
    Challenges:
        user id
        goal
        challenge accepted

    Rewards:
        user id
        pet id
        streak achieved
        activity time
        goal met


Phase 5 data needs:
(I don't really know how this will work)
    Add pet profile pic to pet info table
    Friends table:
        user id (fk)
        friend user id (fk)
    Friend messages:
        user id (fk)
        friend user id (fk)
        message suggestion
        message

