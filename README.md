# 🦷 Lumino The Dentists - Website

A modern, responsive dental practice website built with React, TypeScript, Vite, and Tailwind CSS.

![Website Preview](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-blue) ![Docker](https://img.shields.io/badge/Docker-Ready-blue)

## 🚀 Quick Start with Docker (Recommended)

The easiest way to run this website is with Docker. No need to install Node.js or any dependencies!

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed on your machine
- [Docker Compose](https://docs.docker.com/compose/install/) (included with Docker Desktop)

### One-Command Deployment

```bash
# Clone the repository
git clone <your-repo-url>
cd lumino-dental-website

# Start the website
docker compose up -d
```

That's it! Open your browser and visit **http://localhost**

### Docker Commands

```bash
# Start the website
docker compose up -d

# Stop the website
docker compose down

# View logs
docker compose logs -f

# Rebuild after changes
docker compose up -d --build

# Remove everything (including images)
docker compose down --rmi all
```

### Using Make (Optional - Even Easier!)

If you have `make` installed, you can use these shortcuts:

```bash
make help      # Show all available commands
make build     # Build the Docker image
make run       # Start the website
make stop      # Stop the website
make dev       # Start development server with hot reload
make logs      # View logs
make clean     # Remove everything
make restart   # Restart the website
make status    # Check container status
```

### Development with Docker (Hot Reload)

For local development with hot reload:

```bash
# Start development server with hot reload
docker compose --profile dev up

# Access at http://localhost:5173
```

Any changes to `src/` will automatically reload in the browser!

### Using Docker Directly (without Compose)

```bash
# Build the Docker image
docker build -t lumino-dental .

# Run the container
docker run -d -p 80:80 --name lumino-website lumino-dental

# Stop the container
docker stop lumino-website

# Remove the container
docker rm lumino-website
```

## 🛠️ Development Setup (Without Docker)

If you want to develop locally:

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── PracticeFinder.tsx  # Practice search
│   │   ├── DentalPlan.tsx      # Pricing & plan details
│   │   ├── WhyChooseUs.tsx     # Features & stats
│   │   ├── Testimonials.tsx    # Patient reviews carousel
│   │   ├── NewsArticles.tsx    # Blog section
│   │   └── Footer.tsx          # Footer with links
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── Dockerfile                  # Docker build config
├── docker-compose.yml          # Docker Compose config
├── nginx.conf                  # Nginx server config
├── .dockerignore               # Docker ignore file
└── package.json                # Dependencies
```

## 🌐 Deployment Options

### Option 1: Docker (Recommended)
See [Quick Start](#-quick-start-with-docker-recommended) above.

### Option 2: Cloud Platforms
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **AWS/GCP/Azure**: Use the Docker image with container services

### Option 3: Traditional Hosting
```bash
# Build the project
npm run build

# Upload the 'dist' folder to your web server
# Configure your server to serve index.html for all routes (SPA)
```

## 🔧 Configuration

### Change Port
In `docker-compose.yml`, modify the ports:
```yaml
ports:
  - "3000:80"  # Access at http://localhost:3000
```

### Environment Variables
Create a `.env` file in the root:
```
VITE_API_URL=https://api.example.com
```

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern UI with Tailwind CSS
- ✅ Interactive practice finder with search
- ✅ Patient testimonials carousel
- ✅ Filterable blog/news section
- ✅ Smooth scroll navigation
- ✅ SEO-friendly structure
- ✅ Accessible (WCAG compliant)
- ✅ Production-optimized Docker setup

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Troubleshooting

### Port 80 already in use
Change the port in `docker-compose.yml`:
```yaml
ports:
  - "8080:80"
```

### Docker build fails
```bash
# Clear Docker cache and rebuild
docker compose build --no-cache
```

### Website not loading
```bash
# Check if container is running
docker compose ps

# View logs for errors
docker compose logs
```

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

Made with ❤️ for better dental care accessibility
