



# AI Image Generator

This project is a simple web application that allows users to generate images using the power of Artificial Intelligence. It leverages the OpenAI API (DALL-E model) to create unique images based on user-provided text prompts.

## Features

* **Text-to-Image Generation:** Users can enter any text description, and the AI will generate a corresponding image.
* **Simple and Intuitive Interface:** The user interface is designed to be easy to understand and use.
* **Image Display:** Generated images are displayed directly in the application.

## Technologies Used

* **Frontend:** HTML, CSS, JavaScript, potentially a JavaScript framework/library (e.g., React, Vue.js - *replace with your actual frontend technology if applicable*)
* **Backend:** Node.js, Express.js
* **AI API:** OpenAI API (DALL-E)
* **Environment Variables:** dotenv (for managing API keys)

## Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd AI-Image-Generator
    ```

2.  **Navigate to the server directory:**

    ```bash
    cd server
    ```

3.  **Install server-side dependencies:**

    ```bash
    npm install
    ```

4.  **Create a `.env` file in the `server` directory:**

    ```
    OPENAI_API_KEY=YOUR_OPENAI_API_KEY
    ```

    * Replace `YOUR_OPENAI_API_KEY` with your actual OpenAI API key. You can obtain one from the [OpenAI platform](https://platform.openai.com/).

5.  **Start the backend server:**

    ```bash
    npm start
    ```

    This will typically run your server on `http://localhost:8080` (or a different port if configured).

6.  **Navigate to the frontend directory:**

    ```bash
    cd ../client  # Or the appropriate frontend directory name
    ```

7.  **Install frontend dependencies (if applicable):**

    ```bash
    npm install  # Or yarn install, etc.
    ```

8.  **Start the frontend application:**

    ```bash
    npm start  # Or yarn start, npm run dev, etc. - depending on your frontend setup
    ```

    This will usually open the application in your web browser (e.g., on `http://localhost:3000` or a similar port).

## Usage

1.  Open the application in your web browser.
2.  You should see a text input field where you can enter your image description (prompt).
3.  Type in your desired prompt (e.g., "A futuristic cityscape at sunset").
4.  Click the "Generate" button (or similar).
5.  The application will send your prompt to the backend server.
6.  The backend server will use the OpenAI API to generate an image based on your prompt.
7.  The generated image will be displayed on the page.

## API Endpoints

* **`POST /api/generateImage` (Backend):** Accepts a JSON body with a `prompt` field and returns a JSON response containing the generated image data (e.g., as a base64 string or a URL).

## Environment Variables

* `OPENAI_API_KEY`: Your secret API key for accessing the OpenAI API. **Keep this secure and do not share it publicly.**

## Contributing

Contributions to this project are welcome. If you have any ideas for improvements or bug fixes, please feel free to:

1.  Fork the repository.
2.  Create a new branch for your changes.
3.  Make your changes and commit them.
4.  Push your branch to your fork.
5.  Submit a pull request.



## Acknowledgements

* [OpenAI](https://openai.com/) for providing the powerful DALL-E API.
* [Mention any other libraries or resources you used.]

#
