# Seattle Home Price Prediction

This project utilizes machine learning to predict the sale prices of homes in Seattle, Washington, based on zip codes. The model was trained using data collected from Kaggle's [House Price Prediction Seattle dataset](https://www.kaggle.com/datasets/samuelcortinhas/house-price-prediction-seattle/code) and employs a Gradient Boosting Regressor algorithm. A Python Flask server that serves HTTP requests using the trained model was built as well as a web application to allow for user interaction to receive predicted prices. The web app was deployed to EC2 instance on AWS cloud and uses Nginx as reverse proxy.

![image](https://github.com/MedCoder001/Seattle_Home_Prices_Prediction/assets/106004456/3baa2055-9d5a-4ea1-a579-a4d824e234cd)


## Overview

This repository contains:

- A machine learning model trained to predict home prices based on various features including square footage, lot size, and number of bedrooms.
- A Python Flask server that serves HTTP requests using the trained model.
- A web application built using HTML, CSS, and JavaScript, allowing users to input home specifications and receive predicted prices interactively.
- Configuration files for hosting the application on an Amazon EC2 instance using Nginx as a reverse proxy.

## Usage

Access to the web application by navigating to `http://ec2-54-91-221-39.compute-1.amazonaws.com/` in your web browser.

## Deployment

To deploy the application on a server:

1. Set up an Amazon EC2 instance with Ubuntu.
2. Install Nginx on the server for reverse proxying.
3. Copy the project files to the server.
4. Install the required Python packages.
5. Configure Nginx to forward requests to the Flask server.
6. Run the Flask server in production mode.
7. Access the application through the server's IP address or domain name.


