import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import LoginPage from './components/LoginPage'
import SignUpCustPage from './components/SignUpCustPage'
import SignUpProPage from './components/SignUpProPage'
import FindAProPage from './components/FindAProPage'
import BookConfirmedPage from './components/BookConfirmedPage'
import BookingPage from './components/BookingPage'
import ProDetailsPage from './components/ProDetailsPage'
// import Header from './components/Header'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path='signUpProPage' element={<SignUpProPage />} />
          <Route path='loginPage' element={<LoginPage />} />
          <Route path='signUpCustPage' element={<SignUpCustPage />} />
          <Route path='findAProPage' element={<FindAProPage />} />
          <Route path='bookConfirmedPage' element={<BookConfirmedPage />} />
          <Route path='bookingPage' element={<BookingPage />} />
          <Route path='proDetailsPage' element={<ProDetailsPage />} />
          <Route path='bookingPage' element={<BookingPage />} />
        </Routes>





      </Router>
    </>
  );
}

export default App;
