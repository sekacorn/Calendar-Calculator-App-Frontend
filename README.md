# CalendarApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.
# Calendar App Frontend

This is the frontend part of the Calendar App, built with Angular and styled using Bootstrap. It interacts with the backend RESTful services to perform various calendar-related operations such as adding dates, subtracting dates, finding the day of the week, printing a month's calendar, and counting the number of days/weeks/months/years between two dates.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [Angular CLI](https://angular.io/cli) (v10 or higher)

## Getting Started

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/calendar-app-frontend.git
    cd calendar-app-frontend
    ```

2. **Install the dependencies:**

    ```sh
    npm install
    ```

3. **Add Bootstrap:**

    ```sh
    npm install bootstrap
    ```

### Configuration

Make sure the backend Spring Boot application is running and accessible at `http://localhost:8080`.

### Modify `angular.json`

Add the Bootstrap CSS file to the `styles` array in `angular.json`:

```json
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```
Running the Application
Start the Angular development server:

```
ng serve

```
**Open your browser and navigate to:**

```
http://localhost:4200

```


Here is the complete README content in plain text format:


# Calendar App Frontend

This is the frontend part of the Calendar App, built with Angular and styled using Bootstrap. It interacts with the backend RESTful services to perform various calendar-related operations such as adding dates, subtracting dates, finding the day of the week, printing a month's calendar, and counting the number of days/weeks/months/years between two dates.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [Angular CLI](https://angular.io/cli) (v10 or higher)

## Getting Started

### Installation

1. **Clone the repository:**

    ```sh
    git clone 
    cd calendar-app-frontend
    ```

2. **Install the dependencies:**

    ```sh
    npm install
    ```

3. **Add Bootstrap:**

    ```sh
    npm install bootstrap
    ```

### Configuration

Make sure the backend Spring Boot application is running and accessible at `http://localhost:8080`.

### Modify `angular.json`

Add the Bootstrap CSS file to the `styles` array in `angular.json`:

```
json
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```
## Running the Application
Start the Angular development server:


```
ng serve
````
Open your browser and navigate to:


http://localhost:4200
## Project Structu
src/app: Contains the Angular components, services, and main app module.
src/styles.css: Contains global styles.
Components
AddDatesComponent: Allows users to add two dates.
SubtractDatesComponent: Allows users to subtract one date from another.
DayOfWeekComponent: Finds the day of the week for a given date.
PrintMonthComponent: Prints a calendar for the given month.
CountBetweenComponent: Counts the number of days/weeks/months/years between two dates.
Services
CalendarService: Contains methods to call the backend RESTful services.

**Usage**
Adding Dates
Navigate to the "Add Dates" page, select two dates, and click the "Add" button. The result will be displayed on the screen.

Subtracting Dates
Navigate to the "Subtract Dates" page, select two dates, and click the "Subtract" button. The result will be displayed on the screen.

Finding Day of the Week
Navigate to the "Day of Week" page, select a date, and click the "Get Day of Week" button. The day of the week will be displayed on the screen.

Printing a Month
Navigate to the "Print Month" page, select a date, and click the "Print Month" button. The month's calendar will be displayed on the screen.

Counting Between Dates
Navigate to the "
