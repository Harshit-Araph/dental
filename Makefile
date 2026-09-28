.PHONY: help build run stop dev logs clean restart status

# Default target
help:
	@echo "Lumino Dental Website - Docker Commands"
	@echo ""
	@echo "Usage:"
	@echo "  make build     - Build the Docker image"
	@echo "  make run       - Start the website (production)"
	@echo "  make stop      - Stop the website"
	@echo "  make dev       - Start development server with hot reload"
	@echo "  make logs      - View container logs"
	@echo "  make clean     - Remove containers and images"
	@echo "  make restart   - Restart the website"
	@echo "  make status    - Check container status"
	@echo ""

# Build the Docker image
build:
	@echo "🔨 Building Docker image..."
	docker compose build
	@echo "✅ Build complete!"

# Run production website
run:
	@echo "🚀 Starting Lumino Dental website..."
	docker compose up -d
	@echo "✅ Website is running at http://localhost"

# Stop the website
stop:
	@echo "🛑 Stopping website..."
	docker compose down
	@echo "✅ Website stopped"

# Start development server with hot reload
dev:
	@echo "👨‍💻 Starting development server with hot reload..."
	docker compose --profile dev up
	@echo "✅ Dev server running at http://localhost:5173"

# View logs
logs:
	docker compose logs -f

# Clean up everything
clean:
	@echo "🧹 Cleaning up..."
	docker compose down --rmi all --volumes --remove-orphans
	@echo "✅ Cleanup complete!"

# Restart the website
restart: stop run

# Check container status
status:
	docker compose ps
