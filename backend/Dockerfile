FROM maven:3.8-openjdk-8 AS build
WORKDIR /app
COPY getactive/pom.xml .
RUN mvn dependency:go-offline
COPY getactive/src ./src
RUN mvn clean package -DskipTests

FROM openjdk:8-jre-slim
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]