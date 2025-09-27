```
src/
├── app/
│   ├── layout.js              # Root layout with metadata
│   └── page.js                # Home page component
├── components/
│   ├── icons/                 # SVG Icon Components
│   │   ├── Home.jsx          # Home icon component
│   │   ├── Menu.jsx          # Menu/Hamburger icon
│   │   ├── User.jsx          # User icon
│   │   ├── Settings.jsx      # Settings icon
│   │   ├── Dashboard.jsx     # Dashboard icon
│   │   ├── Products.jsx      # Products icon
│   │   ├── Orders.jsx        # Orders icon
│   │   ├── Analytics.jsx     # Analytics icon
│   │   └── ChevronDown.jsx   # Dropdown arrow icon
│   ├── Header.jsx            # Header component with profile dropdown
│   ├── Sidebar.jsx           # Sidebar component with navigation
│   └── Layout.jsx            # Main layout component
└── labels/
    ├── index.js              # Export all label components
    ├── home.js               # Home page content
    ├── dashboard.js          # Dashboard page content
    ├── products.js           # Products page content
    ├── orders.js             # Orders page content
    └── settings.js           # Settings page content
```
```
                    ┌─────────────────┐
                    │   Root Layout   │
                    │   (app/layout)  │
                    └─────────┬───────┘
                              │
                    ┌─────────▼─────────┐
                    │   Main Layout     │
                    │  (Layout.jsx)     │
                    └─────────┬─────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
┌───────▼────────┐    ┌──────▼──────┐    ┌────────▼────────┐
│    Header      │    │   Sidebar   │    │   Main Content  │
│  (Header.jsx)  │    │ (Sidebar.jsx)│    │  (page content) │
└────────────────┘    └─────────────┘    └─────────────────┘
        │                     │                     │
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
                    ┌─────────▼─────────┐
                    │  Content Pages    │
                    │ (labels/*.js)     │
                    └───────────────────┘
```
```
Layout.jsx
├── useState (sidebarOpen)
├── useEffect (screen size detection)
├── Header component
│   ├── Profile dropdown
│   └── Hamburger menu
├── Sidebar component
│   ├── Navigation items
│   ├── Dropdown menus
│   └── Close button
└── Main content area
    ├── Motion animations
    └── Children components
```

```
Header.jsx
├── useState (profileOpen)
├── useRef (profileRef)
├── useEffect (click outside handler)
├── Hamburger button
├── Profile button
└── Profile dropdown
    ├── Profile link
    ├── Settings link
    └── Logout link
```

```
Sidebar.jsx
├── useState (openDropdowns)
├── usePathname (current route)
├── Menu items array
├── Main menu items
└── Dropdown menu items
    ├── Submenu items
    └── Animation transitions
```
