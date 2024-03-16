# Seattle Home Price Prediction

Welcome to the Seattle Home Price Prediction project! This project utilizes machine learning to predict the sale prices of homes in Seattle, Washington, based on zip codes. The model was trained using data collected from Kaggle's [House Price Prediction Seattle dataset](https://www.kaggle.com/datasets/samuelcortinhas/house-price-prediction-seattle/code) and employs a Gradient Boosting Regressor algorithm.

## Overview

This repository contains:

- A machine learning model trained to predict home prices based on various features including square footage, lot size, and number of bedrooms.
- A Python Flask server that serves HTTP requests using the trained model.
- A web application built using HTML, CSS, and JavaScript, allowing users to input home specifications and receive predicted prices interactively.
- Configuration files for hosting the application on an Amazon EC2 instance using Nginx as a reverse proxy.

## Usage

To use the application, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the Flask server:
   ```bash
   python app.py
   ```
4. Access the web application by navigating to `http://localhost:5000` in your web browser.

## Deployment

To deploy the application on a server:

1. Set up an Amazon EC2 instance with Ubuntu.
2. Install Nginx on the server for reverse proxying.
3. Copy the project files to the server.
4. Install the required Python packages.
5. Configure Nginx to forward requests to the Flask server.
6. Run the Flask server in production mode.
7. Access the application through the server's IP address or domain name.

## Contributing

Contributions to this project are welcome! Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Kaggle for providing the dataset used for training the machine learning model.
- Flask and Python for facilitating the development of the server-side application.
- HTML, CSS, and JavaScript for enabling the creation of the interactive web interface.
- Amazon Web Services for hosting the application infrastructure.
- Nginx for serving as the reverse proxy for the application.
  
Thank you for your interest in the Seattle Home Price Prediction project! If you have any questions or feedback, feel free to reach out.
