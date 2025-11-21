# URL Shortener (MERN Stack -- Backend Only)

A simple and efficient **URL Shortener Backend** built with **Node.js,
Express, MongoDB, and Mongoose**.\
This project generates short URLs using a unique ID generator and stores
them in a MongoDB database.

------------------------------------------------------------------------

## 🚀 Features

-   Shorten any long URL instantly\
-   Store URLs securely in MongoDB\
-   Redirect users from short URL → original URL\
-   Error handling and validation\
-   Clean and structured MVC architecture\
-   Runs on **PORT 3000**

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **Node.js**
-   **Express.js**
-   **MongoDB Atlas**
-   **Mongoose**
-   **ShortID / NanoID**
-   **EJS (Optional for UI)**

------------------------------------------------------------------------

## 📂 Project Structure

    URL-Shortener/
    │
    ├── Controller/
    │   └── url.js
    │
    ├── Model/
    │   └── Url.js
    │
    ├── View/
    │   └── index.ejs
    │
    ├── Server.js
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## ⚙️ Installation

### 1️⃣ Clone the repository

    git clone https://github.com/MFaizanali2/Url-Shortner-Project.git

### 2️⃣ Install dependencies

    npm install

### 3️⃣ Add your MongoDB URL

Inside `Server.js`:

``` js
mongoose.connect("your-mongodb-connection-string", {
  dbName: "Nodejs_Course"
});
```

### 4️⃣ Start the server

    npm start

Server will run on:

    http://localhost:3000

------------------------------------------------------------------------

## 🔗 API Endpoints

### ➤ **POST /shorten**

Shortens a long URL.

#### Request Body:

``` json
{
  "longUrl": "https://example.com"
}
```

#### Response:

``` json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

------------------------------------------------------------------------

### ➤ **GET /:shortId**

Redirects to the original long URL.

------------------------------------------------------------------------

## 🧪 Usage Example

    POST http://localhost:3000/shortCode

------------------------------------------------------------------------

## 📝 Notes

-   Make sure your MongoDB password is correctly set\
-   Ensure IP Access List in MongoDB Atlas is allowed\
-   Use correct EJS view folder name: **views/**

------------------------------------------------------------------------

## 👨‍💻 Author

**Muhammad Faizan Ali**\
MERN Stack Developer

------------------------------------------------------------------------

## ⭐ Support

If you like this project, give it a star ⭐ on GitHub!
