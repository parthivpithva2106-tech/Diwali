# ✨ Diwali & Gujarati New Year Interactive Greeting ✨
### Festive Greeting Experience by Parthiv Pithva

An interactive, responsive Indian festival greeting website crafted with React, Vite, Tailwind CSS, GSAP, Canvas API, and Web Audio API.

---

## 🌟 Highlights & Features

1. **Magical Diwali Welcome (Page 1)**:
   - Traditional Indian Diya with realistic multi-layered flickering flame and golden glow.
   - Ornate rotating 12-fold sacred mandala Rangoli.
   - Traditional Indian Toran (mango leaves & marigold garlands) gently swaying at the top.
   - **Interactive Rocket & Anar Fireworks**:
     - Tap in the sky to launch a **Rocket firework** from the ground with a glowing spark tail that explodes into colorful starbursts.
     - Tap near the ground to ignite an authentic Indian **Anar (Kothi / Flower Fountain)** shooting a shower of golden, saffron, and pink sparks!
   - Tapping the Diya intensifies its radiant flame and plays an auspicious temple bell chime.
   - Clean, elegant visual hierarchy with zero unnecessary clutter.
   - Gujarati and English poetic Diwali wishes.
   - Celebratory CTA: *"ચાલો, દિવાળીની ઉજવણી કરીએ ✨"*

2. **Direct Flow to Nutan Varshabhinandan Surprise (Page 2)**:
   - Direct, seamless transition from Welcome to the Gujarati New Year page.
   - Fresh festive look with royal saffron, marigold, magenta, and warm ivory gradients.
   - Sacred Indian motifs: Auspicious *Kalash* with coconut and mango leaves, *Shubh* (શુભ), *Labh* (લાભ), and *Swastik* (卐).
   - Main Gujarati heading: *"નૂતન વર્ષાભિનંદન! 🎉"*
   - Full Gujarati poetry displayed **ABOVE** English translation with zero clipping using **Noto Sans Gujarati**.
   - Signature from **Parthiv Pithva**:
     > **With Love ❤️**  
     > **— Parthiv Pithva**
   - Clean, distraction-free interface without share/copy clutter.
   - **Restart Celebration Button (🔄)**: Relive the celebration anytime.

3. **Gujarati Typography (Noto Sans Gujarati)**:
   - Fully loaded with weights 400 to 900 from Google Fonts.
   - Generous line-height (1.85+) and container padding to guarantee upper and lower Gujarati matras (માત્રા, અનુસ્વાર, દીર્ઘ-હ્રસ્વ) are never clipped.
   - Responsive typography with `clamp()` for mobile, tablet, and desktop screens.

4. **100% Reliable Web Audio API Synth**:
   - Rocket launch whoosh & ascent sound.
   - Anar fountain continuous fizzing hiss & crackles.
   - Firework explosion thud & sparkling burst sound.
   - Temple bell harmonics (*Ghanta / Chimes*) on diya interactions.
   - Ambient festive Indian melody with Tanpura drones and Raag Bhupali/Yaman scale notes.
   - Responsive music toggle with animated audio visualizer wave bars and sound FX mute toggle.

5. **Aesthetics & Performance**:
   - Strictly **NO dark or black backgrounds** — vibrant saffron, bright orange, marigold yellow, emerald green, and warm cream.
   - Fully responsive on all mobile phones, tablets, and desktop displays.
   - Zero broken assets or external file dependencies.

---

## 📁 Complete Folder Structure

```text
parthiv/
├── .gitignore
├── index.html
├── netlify.toml
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
├── dist/                      # Production build output ready for Netlify
│   ├── assets/
│   │   ├── index-*.css
│   │   └── index-*.js
│   └── index.html
└── src/
    ├── App.jsx                # Main orchestrator & page transitions (Direct 1 -> 2 flow)
    ├── index.css              # Custom typography, Noto Sans Gujarati, & festive styles
    ├── main.jsx               # React entry point
    ├── components/
    │   ├── Diya.jsx           # Realistic terracotta diya with layered flame
    │   ├── FireworksCanvas.jsx# Canvas API interactive Rocket & Anar fireworks
    │   ├── FloatingFlowers.jsx# Floating marigold & rose petals
    │   ├── LoadingScreen.jsx  # Auspicious preloader
    │   ├── Navbar.jsx         # Audio toggle with visualizer, mute, restart
    │   ├── Page1Welcome.jsx   # Clean Magical Diwali Welcome experience
    │   ├── Page3NewYear.jsx   # Nutan Varshabhinandan & Parthiv Pithva wishes
    │   ├── Rangoli.jsx        # Intricate sacred geometry SVG Rangoli
    │   └── Toran.jsx          # Traditional mango leaves & marigold toran
    └── utils/
        └── sound.js           # Web Audio API festival audio synthesizer
```

---

## 🚀 How to Run in VS Code

### Step 1: Open the Project in VS Code
1. Launch **Visual Studio Code**.
2. Click **File** > **Open Folder...** (or press `Ctrl + K, Ctrl + O`).
3. Select the folder: `c:\Users\dbpit\OneDrive\Desktop\parthiv`.

### Step 2: Open Terminal in VS Code
1. Press `` Ctrl + ` `` (backtick) or select **Terminal** > **New Terminal** from the top menu.

### Step 3: Start Local Development Server
```bash
npm run dev
```
1. Open the local URL in your browser:
   ```text
   http://localhost:3000/
   ```

---

## 🌐 How to Deploy on Netlify

### Method 1: Netlify Drag & Drop (Instant - Under 60 Seconds)
1. In your terminal, run:
   ```bash
   npm run build
   ```
2. Open your browser and go to [app.netlify.com](https://app.netlify.com/).
3. In the Netlify dashboard, go to the **Sites** tab.
4. Drag and drop the `dist` folder located at `c:\Users\dbpit\OneDrive\Desktop\parthiv\dist` directly into the Netlify drag-and-drop zone.
5. Your site is deployed instantly!
