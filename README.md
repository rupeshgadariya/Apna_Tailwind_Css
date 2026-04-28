# Apna Tailwind CSS

A lightweight, custom CSS framework that works like Tailwind CSS. This framework applies styling by adding utility classes to the `class` attributes of HTML elements.

## Installation

### CDN Link

Add the script tag below to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/rupeshgadariya/Apna_Tailwind_Css@main/apnaCss.js"></script>
```

Add the `chai` class to your elements:

```html
<h1 class="chai text-red m-10">Hello World</h1>
```

---

## Supported Utility Classes

### Text Color
```
text-<color>
```
**Example:** `text-red`, `text-blue`, `text-green`

---

### Background Color
```
bg-<color>
```
**Example:** `bg-red`, `bg-blue`, `bg-lightgray`

---

### Padding

#### All Sides
```
p-<value>
```
**Example:** `p-10`, `p-20`

#### Individual Sides
- `pt-<value>` - Padding Top
- `pb-<value>` - Padding Bottom
- `pl-<value>` - Padding Left
- `pr-<value>` - Padding Right

**Example:** `pt-5 pb-10 pl-15 pr-20`

---

### Margin

#### All Sides
```
m-<value>
```
**Example:** `m-10`, `m-20`

#### Individual Sides
- `mt-<value>` - Margin Top
- `mb-<value>` - Margin Bottom
- `ml-<value>` - Margin Left
- `mr-<value>` - Margin Right

**Example:** `mt-5 mb-10 ml-15 mr-20`

---

### Width & Height

#### Standard
- `w-<value>` - Width
- `h-<value>` - Height

#### Min/Max
- `min-w-<value>` - Minimum Width
- `max-w-<value>` - Maximum Width
- `min-h-<value>` - Minimum Height
- `max-h-<value>` - Maximum Height

**Example:** `w-100 h-50 min-w-200 max-h-300`

---

### Border

#### Border Width
```
border-<value>
```
**Example:** `border-1`, `border-2`, `border-3`

#### Border Color
```
border-color-<color>
```
**Example:** `border-color-red`, `border-color-blue`

#### Border Radius
```
rounded-<value>
```
**Example:** `rounded-5`, `rounded-10`, `rounded-50%`

---

### Display Properties

```
flex        - display: flex
grid        - display: grid
block       - display: block
inline      - display: inline
inline-block - display: inline-block
hidden      - display: none
```

---

### Positioning

```
absolute    - position: absolute
relative    - position: relative
fixed       - position: fixed
sticky      - position: sticky
```

---

### Position Properties

- `top-<value>` - Top position
- `bottom-<value>` - Bottom position
- `left-<value>` - Left position
- `right-<value>` - Right position

**Example:** `top-10 left-20 right-5 bottom-15`

---

### Z-Index & Opacity

- `z-<value>` - Z-index
- `opacity-<value>` - Opacity (0-1)

**Example:** `z-10 opacity-0.5`

---

### Font Properties

#### Font Size
```
text-sm       - 0.875rem
text-base     - 1rem
text-lg       - 1.125rem
text-xl       - 1.25rem
text-2xl      - 1.5rem
```

#### Font Weight
```
font-bold         - bold
font-normal       - normal
font-light        - 300
font-weight-<val> - Custom weight
```

#### Font Style
```
italic      - font-style: italic
not-italic  - font-style: normal
```

---

### Text Alignment

```
text-center   - text-align: center
text-left     - text-align: left
text-right    - text-align: right
text-justify  - text-align: justify
```

---

### Text Decoration

```
underline      - text-decoration: underline
line-through   - text-decoration: line-through
no-underline   - text-decoration: none
```

---

### Text Transform

```
uppercase   - text-transform: uppercase
lowercase   - text-transform: lowercase
capitalize  - text-transform: capitalize
```

---

### Flex Properties

#### Direction
```
flex-row     - flexDirection: row
flex-col     - flexDirection: column
```

#### Wrapping
```
flex-wrap    - flexWrap: wrap
flex-nowrap  - flexWrap: nowrap
```

#### Justify Content
```
justify-center   - justify-content: center
justify-between  - justify-content: space-between
justify-start    - justify-content: flex-start
justify-end      - justify-content: flex-end
```

#### Align Items
```
items-center   - align-items: center
items-start    - align-items: flex-start
items-end      - align-items: flex-end
items-stretch  - align-items: stretch
```

#### Gap
```
gap-<value>  - gap between flex items
```

**Example:** `flex flex-row justify-center items-center gap-10`

---

### Overflow

```
overflow-auto    - overflow: auto
overflow-hidden  - overflow: hidden
overflow-visible - overflow: visible
overflow-scroll  - overflow: scroll
overflow-x-auto  - overflowX: auto
overflow-y-auto  - overflowY: auto
```

---

### Cursor

```
cursor-pointer      - cursor: pointer
cursor-default      - cursor: default
cursor-not-allowed  - cursor: not-allowed
```

---

### Shadow

```
shadow-sm  - 0 1px 2px 0 rgba(0, 0, 0, 0.05)
shadow-md  - 0 4px 6px -1px rgba(0, 0, 0, 0.1)
shadow-lg  - 0 10px 15px -3px rgba(0, 0, 0, 0.1)
```

---

### Transform

#### Rotate
```
rotate-<degrees>  - rotate(<degrees>deg)
```
**Example:** `rotate-45`, `rotate-90deg`

#### Scale
```
scale-<value>  - scale(<value>)
```
**Example:** `scale-1.5`, `scale-2`

---

### Transition

#### Transition
```
transition  - transition: all 0.3s ease
```

#### Duration
```
duration-<milliseconds>  - transitionDuration
```
**Example:** `transition duration-300`

---

### Float & Clear

```
float-left   - float: left
float-right  - float: right
float-none   - float: none
clear-both   - clear: both
```

---

## Usage Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apna CSS Demo</title>
</head>
<body>
    <div class="chai flex justify-center items-center p-20 bg-lightblue">
        <h1 class="chai text-2xl text-center text-darkblue font-bold m-10">
            Welcome to Apna CSS
        </h1>
    </div>

    <div class="chai p-20 m-10 border-2 border-color-gray rounded-10">
        <p class="chai text-lg text-gray">
            This is a lightweight CSS framework.
        </p>
    </div>

    <button class="chai p-10 m-5 bg-blue text-white rounded-5 cursor-pointer">
        Click Me
    </button>

    <script src="https://cdn.jsdelivr.net/gh/rupeshgadariya/Apna_Tailwind_Css@main/apnaCss.js"></script>
</body>
</html>
```

---

## How It Works

This script operates in the following steps:

1. Selects all elements that have the `chai` class
2. Parses all their classes
3. Matches each class and applies corresponding CSS properties
4. Combines complex transforms (like rotate + scale)

---

## Features

✅ No CSS file needed - Pure JavaScript implementation  
✅ CDN based - No installation required  
✅ Lightweight and Fast  
✅ Tailwind CSS style syntax  
✅ Easy to use and customize  
✅ Supports responsive utility classes  

---

## Browser Support

Supports all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

---

## License

This project is open source.

---

## Author

**Rupesh Gadariya**

---

## GitHub Repository

https://github.com/rupeshgadariya/Apna_Tailwind_Css

---

## Notes

- Always add the `chai` class to elements
- You can assign color values directly (e.g., `text-red`, `bg-#ff0000`)
- Values can be in pixels or custom units
- Multiple classes can be used together

Happy Styling! 🎨
