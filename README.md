# AlwaysNote(Evernote clone)
## Week 15 Solo Project
### Brief explanation of what the app is and does
 A powerful tool to help creative people capture and arrange their ideas. This app brilliantly keeps all your important notes in place.
### Link to live site
https://alwaysnote-react.herokuapp.com/
### 
 Starting off the week with trying to see what website to clone and ending the week with a functional website was very difficult. This being the first solo project, it was very different from having groupmates to discuss every feature with you. Time management became a huge problem during the middle of the week. There were too many things to tackle and debug that it may take a few hours or more to implement one feature. Although it was a long and stressful process but being able to see the app come together makes everything worth it. I used materialui to create lists and listItem. This project gave me a deeper undetstanding of how react/redux functions.
 It took me some extra time learning how to use materialUi but it was very similiar to what we had done in class with any button. There are many more features that come with this extension which will require more time to dig into.
 <ListItem
           button
           key={index}
           value={note && note.title && note.content ? note.title + "||" + note.content:""}
           onClick={(e) =>{
             props.onClick(e,note)
           }
         }
         >
           <ListItemText primary={note && note.title && note.content ? <div>{note.title}<br/>{note.content}</div>: ""}
           />

 </ListItem>
 
 
