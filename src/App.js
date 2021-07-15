import './App.css';
import SectionHeader from './components/SectionHeader';
import SectionPrimary from './components/SectionPrimary';
import SectionSecondary from './components/SectionSecondary';
import SectionFooter from './components/SectionFooter';
import SectionDescription from './components/SectionDescription';

function App() {
  return (
    <div className="App">
      <SectionHeader />
      <SectionPrimary />
      <SectionSecondary />
      <SectionDescription />
      <SectionFooter/>
    </div>
  );
}

export default App;
