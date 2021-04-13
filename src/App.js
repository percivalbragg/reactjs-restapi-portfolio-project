import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import MajorStrengths from './components/MajorStrengths';
import ProfessionalExperience from './components/ProfessionalExperience';
import Education from './components/Education';
import Certification from './components/Certification';

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <MajorStrengths />
      <ProfessionalExperience />
      <Education />
      <Certification />
    </>
  );
}

export default App;
