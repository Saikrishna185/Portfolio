# ✨ Modern Cosmic Portfolio

A premium, fully responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**. This project features a unique "Cosmic Day/Night" theme engine that dynamically changes the background elements based on the selected mode.

## 🚀 Live Preview
*(Add your live URL here once deployed)*

---

## 🌟 Key Features

### 🌌 Dual-Mode Background System
- **Night Mode**: Features a deep cosmic starfield with pulsing stars and animated shooting meteors.
- **Day Mode**: Switches to a bright sky with floating clouds and playful paper planes.
- **Smooth Transitions**: Seamless cross-fade transitions when switching themes.

### 📱 Fully Responsive Design
- **Mobile-Optimized Navigation**: A dedicated mobile menu with background scroll lock for better focus.
- **Adaptive Layouts**: Carefully crafted components that look stunning on everything from ultra-wide monitors to mobile phones.

### 🎨 Premium Aesthetics
- **Glassmorphism**: UI elements use modern translucency and backdrop-blur effects.
- **Text Glow & Gradients**: Premium typography using custom CSS text gradients and shadows.
- **Micro-Animations**: Subtle hover effects and entry animations using Tailwind utilities.

---

## 🛠️ Technology Stack

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Keyframes

---

## ⚙️ Local Setup

Follow these steps to get the project running on your local machine:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── StarBackground/  # The dynamic background engine
│   ├── ThemeToggle/     # Accessible Day/Night switcher
│   └── ...              # Hero, About, Projects, etc.
├── hooks/              # Custom React hooks (e.g., scroll lock)
├── lib/                # Utility functions (cn helper)
├── pages/              # Main page layouts
└── index.css           # Global styles and custom Tailwind utilities
```

---

## 🔧 Customization

### Changing the Name & Content
Most text content can be updated directly in `src/components/HeroSection.jsx` and the respective section components.

### Modifying the Cosmic Background
To adjust the density of stars or meteors, navigate to `src/components/StarBackground.jsx` and modify the `initialStars` or `initialMeteors` state initializers.

### Custom Colors
Theme variables (Primary, Background, Accent) are defined in `src/index.css` under the `@layer base` section using CSS variables for easy global updates.

---

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📝 License
This project is [MIT](LICENSE) licensed.

Created with ❤️ by **Sai Krishna Sahu**
