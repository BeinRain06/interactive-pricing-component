# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview
the interactive pricing component goal is to match a **Bill amount** for a specific period to the **range pageviews** on the need.

The interactive pricing component is one of the most common part of websites, blogs, channels, when goes on submitting to a sevice.

This interactive pricing component allows unlimited access to a platform for five range of data pageviews proposal, monthly or yearly.
10k pageviews, 50k pageviews, 100k pageviews, 500k pageviews, 1 M pageviews.
Every selection displayed the bill you are going to pay in a month, or if switching on the toggle button, your bill in a year. Yearly subscription is subject to a discount of 25% for the real Bill. 

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

*Desktop*

![./Desktop_Screenshot.png]


*Mobile*

![./Mobile_Screenshot.png]



### Links

- Solution URL: [https://github.com/BeinRain06/interactive-pricing-component.git](https://your-solution-url.com)
- Live Site URL: [https://beinrain06.github.io/interactive-pricing-component/](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- Javascript

### What I learned

*input:range Design*

I learned to style `input:range` button , its appearance, background , slider thumb, with box-shadow, all these basis properties to delight users when playing with. 
we could see under the cap of these properties:

```css
#rate_views{
  -webkit-appearance: none;
  outline: none;
  border: none;
  background: var(--range-bg);
  color: var(--range-color);
  width: 80%;
  height: 7px;
  border-radius: 24px;
  
}

#rate_views::-webkit-slider-thumb{
  position: relative;
  top: 0;
  left: 0;
  -webkit-appearance: none;
  outline: none;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--range-color);
  cursor: pointer;
  box-shadow: 2px 3px 14px 0 var(--range-color);
}

#rate_views::-webkit-slider-thumb::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 26px;
  height: 26px;
  background: url('../images/icon-slider.svg') no-repeat center center/cover ;
  background-repeat: no-repeat;
  background-position: center/cover;
}
```

*checkbox toggle switch design*

Further more i learned about **checkbox toggle switch** , one amazing way to design responsive `input:checkbox`, to choose between selection acting like boolean 'true' or 'false', 'checked' or 'unchecked'.
you can see over this snippets of code: 

```css
.my_radio{
  width: var(--width);
  height: var(--height);
}
#switch_radio{
  position: absolute;
  display: none;
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
}

#toggle_wrapper{
  position: relative;
  left: 0.3em;
  width: var(--width);
  height: var(--height);
  background: var(--range-month-color);
  border-radius: var(--border-radius);
  transition: background 200ms ease-in;
}

#toggle_wrapper::before{
  content: '';
  position: absolute;
  width: var(--height-btn);
  height: var(--height-btn);
  background: #fff;
  border-radius: var(--border-radius);
  transform: translateX(-18px);
  transition: transform 400ms ease-in;
}

#switch_radio:checked + #toggle_wrapper::before{
  transform: translateX(0);
}
#switch_radio:checked ~ #toggle_wrapper{
  background: var(--range-color);
}
```

*Javascript*

I also learned about the power of data object and utilities of array function when coming through many range of content you want to display

```js
let keepBill ={
    billAmountMonth: 16,
    billAmountYear: 0,
    billIndex: 0
};

const arrayViews= ['10k','50k', '100k', '500k', '1M'];
}
```
Going on, i also notice how great will be the responsiveness of your app when setting good *statements conditions*. We could see through the overall function made in our scripts.js over *if* and *else if* statements. 


### Continued development

App about calcultation ring true for me, i want to perform many others these of calculator , and deal with the implementation of the math function behind.


### Useful resources

- [w3schools](https://www.example.com) - helps me with javascript array building, and  how to index each element of an array.
- [https://m.youtube.com/watch?v=wQVkA6cOBil] - This video help me achieve *checkbox toggle switch button* .
- [https://m.youtube.com/watch?v=VFEMhFbg3EA] - This video provides me  with elements to *build custom input:range*.



## Author

- Website - [Ngouend Raoul Gerard](https://www.your-site.com)

- Frontend Mentor - [@BeinRain06](https://www.frontendmentor.io/profile/yourusername)

- Twitter - [ https://www.twitter.com/@nest_Ngoueni](https://www.twitter.com/yourusername)

- LinkedIn - [https://www.linkedin.com/ngouend-gerard-5a0584244](https://www.twitter.com/yourusername)

