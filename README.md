# 💱 Currency Converter Web App

A simple and responsive web application that allows users to convert between different currencies using real-time exchange rates from a free API.

---

## 🌐 Live Preview

> Not deployed yet. You can run it locally by opening `index.html` in your browser.

---

## 📁 Project Structure

```
CurrencyConverter/
├── index.html       # Main HTML file
├── style.css        # Styling for the application
├── code.js          # Country-currency mapping for dropdowns and flags
├── app.js           # App logic: populating dropdowns, fetching exchange rate, updating UI
```

---

## 🚀 Features

- Real-time exchange rates using [fawazahmed0's currency API](https://github.com/fawazahmed0/currency-api)
- Dynamic dropdowns with currency codes and country flags
- User-friendly interface with default selections (`USD` to `INR`)
- Simple and responsive design
- Click-to-convert functionality

---

## 🔧 How It Works

1. **Dropdowns are populated** using a `countryList` object from `code.js`.
2. User selects currencies and enters an amount.
3. On clicking **"Get Exchange Rate"**, `app.js` fetches live rates from the API.
4. The exchange rate is displayed below the form.

---

## 🔗 API Used

- [Fawaz Ahmed Currency API (via jsDelivr)](https://github.com/fawazahmed0/currency-api)

---

## ✅ To Run Locally

1. Clone this repository or download the ZIP.
2. Open `index.html` in any browser.

> No build tools or server required — pure HTML/CSS/JS.

---

## 📌 To-Do (Suggestions)

- Add loading indicators or error messages
- Implement swap button for switching currencies
- Format results with currency symbols
- Add dark mode toggle
- Make fully mobile responsive

---

## 🧑‍💻 Author

- Built by Deepak Kumar

---

## 📄 License

This project is open-source and free to use.
