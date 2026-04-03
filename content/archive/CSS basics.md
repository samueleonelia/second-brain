---
title: CSS basics
type: permanent
created: 2026-04-01
---

# CSS basics
* Inline styles -> Bad! -> not productive in case of change (you have to modify every element one by one)
* <Style> element -> not recommended -> you have to copy it in every page (and also modify every page in case of style changes)
* Stylesheet -> Good! -> But remember the <link> element
  * **Basic formula** -> selector  {style: value;}
* **background-color** is just for the color. **background** has more properties.
* Colors
  * Name of the color -> limited
  * **rgb** -> Mix of red, green and blue (from 0 to 255) to form any kind of color. Examples: 
    * rgb (255, 0, 0) = red
    * rgb (0, 0, 0) = black
    * rg b (255, 255, 255)
  * **Hex** -> Hex(adecimal) [base 16] colors. It’s a variation of the rgb system. First two digits indicate the red gradation, second two the green, and the last two the blue. Minimum is *00*, max is *ff*. Examples:
    * #000000 = black
    * #ffffff = white
    * #ff0000 = red
  * In *hex* colors when there are doubled digit, you can write just one. This is red: #ff0000. But this is also red:  # f00
* **CSS cascade** the latest selector wins
* More specific selector wins ID > Class > Element
  * *inline style* always wins, but do not use it
  * *!important* overcomes any specificity (be very careful with it)
* **em** -> in font-size it refers to the font-size of the parent element. In other element it refers to the font-size of the element itself. 
  * This is good to maintain proportion, even when some font-size is changed.
  * Careful with nested elements.
* **rem** is like *em*, but is based on the font-size of the root element (*html*)
* **Transistion**, the sequence is: property | duration | timing | delay. They are used often with Hover. 
  * Specify what property you want to transition. It’s better when you’ll change some code element.
* **Background** has a lot of possible options -> [background - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
  * The <bg-size> value may only be included immediately after <position>, separated with the ‘/‘ character, like this: “center/80%”.
* Google Fonts solves the “font problem” -> [Google Fonts](https://fonts.google.com/)
