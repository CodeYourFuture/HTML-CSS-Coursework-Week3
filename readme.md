# Cakes Co

The aim of this exercise is to create a **responsive webpage** showcasing your cake business.

Two wireframes are provided down below (scroll to the bottom).


## Task

 - **Fork and clone** this repo.
   - To fork, hit the 'fork' button in the top right corner of this page on Github. 
  Now you should be on your own Github repository - you'll know this because your name should now be in the repo name at the top of the Github page. 
   - To clone, click the green button that says 'Code' on that page.
  Now the code is on your own machine (this happened when you cloned), AND it's linked to your own Cakes repository on Github (which was created when you forked).

 - Before you start coding, **create a new branch** following this format `your-class-name/your-name`, for example: `london-class-7/adam-smith`. Your branch name should be all lowercase, with no spaces. 

When you're ready to start coding:

### Start with mobile
- Write the HTML following the mobile design
- Then write your CSS for everything to look great on mobile
- Remember to link your CSS file to your HTML file inside the `<head>` in `index.html`
- You don't need to use any media queries yet, because we're following a [Mobile First](https://www.invisionapp.com/inside-design/mobile-first-design/) approach!

### Then adapt the page for larger screens
- Now add media queries to your CSS, and change the layout and sizing of elements so they make better use of a wider screen (see the desktop wireframe design below).
- To follow Mobile First principles, we will only be using `min-width` in our media queries (no max-width!)
- You should **use 2 different breakpoints**, meaning you should have **3** different variants of your layout. Here's an example.  
  

  If we have the following **2 breakpoints**:  
  > - breakpoint 1 --> 540px  
  > - breakpoint 2 --> 900px  

  Then our CSS code will be split into **3**:  
  > 1. **"default"**: default styles, should implement the mobile design (no media query used for these). These styles will apply to all screen sizes by default.  
  > 2. **"medium"**: Our first media query `@media (min-width: 540px) {...}` **will overwrite our default styles** for screens at least 540px wide. Screens *below* 540px will apply the styles from the "default".  
  > 3. **"large"**: Our second media query `@media (min-width: 900px) {...}` **will overwrite our default AND medium styles** for screens at least 900px wide (no upper limit).  

### Define your own style
  - Choose 1-2 fonts to use (lots of [free fonts here](https://fonts.google.com/))
  - Choose 2-3 colours that you think go together well, and try to limit yourself to those in your CSS ([look here](https://coolors.co/palettes/trending) for inspiration)
  - Select some nice cake pictures to replace the placeholders in the wireframes (good [photo source here](https://unsplash.com/images/food/cake)).
  - Get creative! Can you add some cool hover effects to buttons and [images](https://www.wix.com/website-template/view/html/1911?siteId=c1c72d26-c040-41f2-80ce-0b0f8aef01b4&metaSiteId=5d77fab8-f068-4228-8b61-4181af054ca6&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates&tpClick=view_button)?

### Also
- It's up to you to find a solution for any elements that are visible in desktop and not on mobile - and vice versa.


## Remember
 - **Commit and push your code often** so you get into the habit and you avoid losing any code that you write if your machine crashes for example. 
 - Once you're ready to submit your homework for review, do a final push and **create a Pull Request**. If you're unsure how to do this, [have a look here](https://syllabus.codeyourfuture.io/git/cheatsheet/#i-want-to-send-my-code-to-volunteers-pushing).  
  Your PR should be named following this format: `Class name - Your name`, for example: `London class 7 - Adam Smith`.


## Deployment (optional)

[Deploy your work to Netlify!](https://syllabus.codeyourfuture.io/workshops/deployment/workshop/instructions/)
Remember to follow this naming convention when creating your custom URL in Netlify: `https://cyf-[your-Github-username]-cakes.netlify.app/`


## Wireframes

Build the mobile wireframe first, then adapt it for larger screens.  

*Mobile wireframe:*  
![alt text](./design/cakes%20wireframe%20-%20mobile.png "Cakes Co mobile design")

*Desktop wireframe:*  
![alt text](./design/cakes%20wireframe%20-%20desktop.png "Cakes Co desktop design")

