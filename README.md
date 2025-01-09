# FoodExplorer - Restaurant Management System

FoodExplorer is a full-stack web application for discovering and managing restaurants. It features a Spring Boot backend and a React frontend with a modern, responsive design.

## Features

- 🍽️ Restaurant Management (Create, Read, Filter, Delete)
- 🔍 Advanced Search and Filtering
  - Filter by cuisine type
  - Filter by rating
  - Distance-based search
- 📱 Responsive Design
- ⭐ Rating System
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

### Backend
- Java 21
- Spring Boot 3.2.1
- Spring Data JPA
- PostgreSQL
- MapStruct
- Lombok
- Swagger/OpenAPI

### Frontend
- React with TypeScript
- Tailwind CSS
- Lucide React (Icons)

## Project Structure

```
FoodExplorer/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── foodExplorer/
│   │   │   │           └── demo/
│   │   │   │               ├── controller/
│   │   │   │               ├── dto/
│   │   │   │               ├── mapper/
│   │   │   │               ├── model/
│   │   │   │               ├── repository/
│   │   │   │               └── service/
│   │   │   └── resources/
│   │   └── test/
│   └── pom.xml
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── layout/
    │   │   └── restaurants/
    │   ├── services/
    │   ├── types/
    │   └── App.tsx
    ├── package.json
    └── tailwind.config.js
```

## Getting Started

### Prerequisites
- Java 21
- Node.js and npm
- PostgreSQL
- Maven

### Backend Setup
1. Clone the repository
   ```bash
   git clone https://github.com/mohammeddl/FoodExplorer.git
   cd FoodExplorer/backend
   ```

2. Configure PostgreSQL
   - Create a database named 'foodexplorer'
   - Update `application.properties` with your database credentials

3. Run the backend
   ```bash
   mvn spring-boot:run
   ```

The backend will start on `http://localhost:3030`

### Frontend Setup
1. Navigate to frontend directory
   ```bash
   cd ../frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

The frontend will start on `http://localhost:5173`

## API Documentation

Access the Swagger UI documentation at:
```
http://localhost:3030/swagger-ui.html
```

## Key API Endpoints

### Restaurants
- `GET /api/restaurants/search` - Search restaurants with filters
- `POST /api/restaurants` - Create a new restaurant
- `GET /api/restaurants/{id}` - Get restaurant by ID
- `DELETE /api/restaurants/{id}` - Delete restaurant

## Environment Variables

### Backend (application.properties)
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/foodexplorer
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.