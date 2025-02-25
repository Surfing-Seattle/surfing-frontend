# Kimchi Token Brand Guide

## Logo
- **Primary Logo** - `/public/kimchi-logo-1-no-bg.png`
  - Transparent background
  - Should maintain its aspect ratio when scaling
  - Recommended minimum size: 120px width
  - Animation: Subtle floating animation on hover (opacity 80% to 100%)

## Brand Colors

### Primary Colors
- **Kimchi Red** - `#FF4136`
  - Used for primary accents and important CTAs
  - Often used in gradients
  - Represents the spiciness and energy of Kimchi

- **Kimchi Orange** - `#FF851B`
  - Used as a transitional color in gradients
  - Represents fermentation and transformation

- **Kimchi Yellow** - `#FFDC00`
  - Used as the final color in gradients
  - Represents vibrancy and optimism

### Gradients
The signature gradient combines all three brand colors:
```css
background-gradient: linear-gradient(to right, #FF4136, #FF851B, #FFDC00)
```
Used for:
- Primary buttons
- Decorative elements
- Section dividers

### Background Colors
- **Primary Background** - `#141414` (Dark charcoal)
- **Secondary Background** - `#1a1a1a` (Slightly lighter charcoal)
- **Overlay Background** - `rgba(26, 26, 26, 0.8)` with `backdrop-blur-sm`

## Typography

### Fonts
1. **Merriweather**
   - Primary use: Large headlines in the events section
   - Weights: 300 (Light), 400 (Regular), 700 (Bold)
   - Example: "2025 KIMCHI EVENTS"

2. **Montserrat**
   - Primary use: Navigation, small headlines, and UI elements
   - Used for time details and secondary information
   - Example: Event times "6 PM MST"

3. **Noto Sans KR**
   - Used for Korean text elements
   - Weight: 400 (Regular)

### Text Styles

#### Headlines
- **Main Headlines**
  ```css
  font-family: var(--font-merriweather);
  font-size: text-7xl md:text-8xl;
  font-weight: bold;
  tracking-wider;
  ```

- **Section Headlines**
  ```css
  font-family: var(--font-display);
  font-size: text-4xl sm:text-5xl;
  lowercase;
  ```

#### Body Text
- **Regular Text**
  ```css
  font-family: var(--font-body);
  text-sm;
  ```

- **Event Details**
  ```css
  font-family: var(--font-montserrat);
  text-sm;
  tracking-[0.3em];
  uppercase;
  ```

## Layout

### Spacing
- Standard section padding: `py-32`
- Content container max-width: `max-w-6xl`
- Standard gap between elements: `space-y-8`

### Effects
1. **Image Effects**
   - Grayscale filter on background images
   - Gradient overlays for text legibility

2. **Hover States**
   - Buttons: Opacity transition (80%)
   - Duration: 300ms

3. **Backdrop Blur**
   - Used on overlay panels: `backdrop-blur-sm`

### Special Elements
1. **Buttons**
   ```css
   background: gradient(to right, kimchi-red, kimchi-orange, kimchi-yellow);
   hover:opacity-80;
   transition-opacity duration-300;
   ```

2. **Dividers**
   ```css
   height: 1px;
   background: gradient(to right, kimchi-red, kimchi-orange, kimchi-yellow);
   rounded-full;
   ```

## Animation

### Transitions
- Standard duration: 300ms
- Hover opacity: 0.8
- Scale transitions: 1.05

### Custom Cursors
- Default: `chopstick-cursor-open-64.png`
- Click state: `chopstick-cursor-click-64.png`

## Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Typography Scaling
- Headlines: `text-4xl` to `text-8xl`
- Body: Maintains `text-sm` across breakpoints
- Tracking adjusts for readability

## Best Practices

1. **Color Usage**
   - Use the gradient for primary CTAs and important dividers
   - Maintain contrast with dark backgrounds
   - Use opacity for secondary elements (60% white)

2. **Typography**
   - Maintain hierarchy with font sizes and weights
   - Use appropriate font families for their designated purposes
   - Ensure readability with proper tracking and line height

3. **Layout**
   - Maintain consistent spacing
   - Use backdrop blur for overlay elements
   - Implement responsive design patterns

4. **Accessibility**
   - Maintain text contrast ratios
   - Provide appropriate alt text for images
   - Ensure interactive elements are properly sized
