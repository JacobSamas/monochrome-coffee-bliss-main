# Monochrome Coffee

A modern, responsive coffee shop website built with React, TypeScript, and Tailwind CSS. This project features a beautiful, minimalist design with dark mode support and smooth animations.

## 🚀 Features

- 🎨 Modern, minimalist design
- 🌓 Dark/Light mode support using next-themes
- 📱 Fully responsive layout
- ⚡ Smooth scrolling and animations
- 🎯 Interactive menu with category filtering
- 📍 Location finder with store information
- 📱 Mobile-friendly navigation
- 🎨 Beautiful hero section with parallax effect
- 🛠️ Built with shadcn/ui components

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Radix UI primitives
- Lucide Icons
- React Router
- React Query
- Zod for validation
- React Hook Form

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/monochrome-coffee.git
cd monochrome-coffee
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎨 Project Structure

```
monochrome-coffee/
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Menu.tsx
│   │   ├── Location.tsx
│   │   ├── Footer.tsx
│   │   └── Button.tsx
│   ├── lib/            # Utility functions and data
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── components.json     # shadcn/ui configuration
├── tailwind.config.ts  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎯 Features in Detail

### Navigation
- Responsive navbar with scroll-based color change
- Mobile-friendly menu with animations
- Smooth scrolling to sections
- Dark mode toggle

### Menu
- Interactive menu with category filtering
- Beautiful card layout for menu items
- Responsive grid system
- Image support for menu items

### Locations
- Store information with detailed hours
- Contact details with icons
- Beautiful location cards with images
- Responsive layout

### Design
- Clean, minimalist aesthetic
- Consistent color scheme
- Smooth transitions and animations
- Dark mode support with system preference detection

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run build:dev` - Build for development

### Adding New Features

1. Create new components in `src/components/`
2. Add new routes in `src/App.tsx`
3. Update data in `src/lib/`
4. Add new images to `public/images/`
5. Use shadcn/ui components from `src/components/ui/`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Radix UI](https://www.radix-ui.com/) for the primitive components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) for the beautiful icons
- [Vite](https://vitejs.dev/) for the fast build tool
- [React](https://reactjs.org/) for the amazing UI library

## 📞 Contact

For any questions or suggestions, please open an issue or contact us at:
- Email: info@monochromecoffee.com
- Website: https://monochromecoffee.com 
