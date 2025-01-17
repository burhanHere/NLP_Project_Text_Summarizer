# Text Summarizer Application

## Project Overview
The **Text Summarizer Application** is a project developed as part of the *Natural Language Processing* course. It integrates advanced NLP techniques to deliver a functional application capable of summarizing user-provided text effectively.

## Technology Stack
- **Backend:** Hugging Face BART (facebook/bart-large-cnn)
- **Frontend:** Angular

---

## Objective
The primary goal of this project was to explore NLP model training and integrate the Hugging Face BART model into a user-friendly Angular-based application.

---

## Description
1. **NLP Integration:** Utilized the pre-trained `facebook/bart-large-cnn` model from Hugging Face, fine-tuned on CNN/Daily Mail data, specifically designed for summarization tasks.
2. **API Communication:** Integrated the Hugging Face API with the Angular application to seamlessly process user inputs and provide accurate summaries.
3. **Frontend Development:** Designed an Angular interface to allow users to input text, submit it for summarization, and view the results in real-time.

---

## Features
- Easy-to-use web interface for text summarization.
- Leverages state-of-the-art NLP technology for precise summaries.
- Asynchronous communication between frontend and backend for efficient processing.

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v16 or higher)
- **Angular CLI** (v15 or higher)
- **npm** (v8 or higher)

### Steps
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/burhanHere/NLP_Project_Text_Summarizer.git
   cd text-summarizer-application
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the Hugging Face API Key:
   - Obtain an API key from the Hugging Face website.
   - Update the API key in the Angular project (e.g., in the `environment.ts` file).

4. Run the development server:
   ```bash
   ng serve
   ```
   Access the application at `http://localhost:4200`.

---

## Outcomes
- Hands-on experience with NLP models, specifically the BART summarization model.
- Gained expertise in integrating third-party APIs with frontend frameworks.
- Successfully developed a functional and responsive text summarizer application.

---

## Contribution
Feel free to contribute to this project. To do so:
- Fork the repository.
- Create a feature branch: `git checkout -b feature-name`.
- Commit your changes: `git commit -m 'Add new feature'`.
- Push to the branch: `git push origin feature-name`.
- Open a pull request.

---

## Contact
For queries or feedback, please contact:
- **Email:** [burhanburewala@gmail.com]

