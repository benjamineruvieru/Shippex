# Shippex React Native App

Shippex is a React Native application which allows drivers to manage their shipment status.

## Installation

To run the Shippex app locally on your machine, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/benjamineruvieru/Shippex.git
```

2. Navigate to the project directory:

```
cd Shippex
```

3. Install dependencies using npm or yarn:

```
npm install
```

or

```
yarn install
```

4. Start the development server:

```
npm start
```

or

```
yarn start
```

5. Start the application:

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see the app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

You can also run it directly from within Android Studio and Xcode respectively.

## Technologies Used

- React Native
- React Navigation
- Axios (for HTTP requests)
- MMKV (for local storage)

Certainly, here's the added section to the README addressing the issue with the backend API:

---

## Important Note

Due to limitations with the backend API provided for the project, the Shippex app does not fully use the data from the shipment list API. The backend API is requiring a body to be passed in a GET request, which is a bad design and not supported by Axios and most HTTP request libraries. Ideally, the endpoint should been a POST request or require the data to be passed as query params.

To overcome the limitations posed by the backend API, I utilized dummy data instead of relying on the data from the API.

As a consequence of this workaround, certain features, such as the search functionality, have cannot been implemented in the current version of the app. Due to the reliance on dummy data and the inability to access real-time information from the API, implementing search functionality was deemed impractical at this stage.

Thank you for your understanding.

---

## License

This project is licensed under the [MIT License](LICENSE).
