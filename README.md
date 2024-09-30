
# Middleware Microservices Project

This project implements a microservice architecture as part of a middleware course assignment. Each microservice is responsible for a specific functionality within a simulated telecom service provider system. The services communicate through a dedicated API gateway, ensuring modular and scalable service integration.

## Project Structure

- **api-gateway**: Handles routing requests to the appropriate microservice.
- **authentication-service**: Manages user authentication and authorization using JWT.
- **billing-service**: Manages billing-related operations, including service usage and invoicing.
- **frontend**: The frontend service for user interaction, providing interfaces for different functionalities.
- **data-top-up-service**: Allows users to top up data services.
- **naming-server**: Manages the registration and discovery of microservices.
- **ringtone-personalization-service**: Provides users with the ability to personalize ringtones.
- **service-activation-service**: Handles the activation of services such as data plans or call packages.
- **spring-cloud-config-server**: Centralized configuration management for all microservices.

## Microservices Overview

1. **BillingService.jsx**: Displays billing information for the users.
2. **DataTopUp.jsx**: Provides the interface to top-up data services.
3. **Home.jsx**: The main page of the client app, offering navigation to various services.
4. **Login.jsx**: User authentication form.
5. **Register.jsx**: User registration form.
6. **RingTonePersonalization.jsx**: Interface for customizing ringtones.
7. **ServiceActivation.jsx**: Interface for activating new services.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/nemesis-9/middleware-microservices-project.git
   ```

2. Set up the microservices by running each service in its respective folder:
   ```bash
   cd <service-folder>
   mvn spring-boot:run   # For Java services
   npm start             # For Node.js services
   ```

3. The API Gateway handles routing, and the frontend service communicates with the backend services through the gateway.

4. Access the frontend via:
   ```bash
   http://localhost:3000
   ```

## Technologies Used

- **Frontend**: React
- **Backend**: Spring Boot
- **Database**: MongoDB
- **API Gateway**: Spring Cloud Gateway
- **Service Discovery**: Eureka Naming Server
- **Configuration Management**: Spring Cloud Config Server

## Setup Instructions

1. Ensure you have the required services installed:
   - **Node.js**
   - **MongoDB**
   - **Java (JDK)**
   - **Maven**

2. Configure the database credentials in the respective `application.properties` files.

3. Start all services and access the system through the API gateway.

## License

This project is licensed under the MIT License.

## Group Members

- 21002274 - Y.M.P.K. Yapa
- 21000192 - R.A.S.D. Bandara
- 21001936 - H.P.M. Thenuka
- 21001332 - K.R.S. Perera
- 21001448 - T.S. Preena
- 21002258 - W.K.S. Welikumbura
- 21001197 - H.D.A. Mendis
