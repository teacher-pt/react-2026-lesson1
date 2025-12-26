import { Fragment } from 'react';
import './App.css'
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Students from './components/Students';

// קומפוננטה כוללת 3 חלקים
// 1. תצוגה - HTML
// 2. עיצוב - CSS
// 3. לוגיקה - JS
function App() {
  return (<Fragment>
    {/* כאן נגדיר את התגיות של שאר הקומפוננטות */}
    {/* ניתן לשים תגית מיידית או מלאה */}
    {/* <Header />
    <Card name="shira" mark={98} />
    <Card mark={94} name="efrat" />
    <Card mark={90} name="hadas" />
    <Card mark={95} name="sari" />
    <Card mark={80} name="sara" />
    <Footer></Footer> */}
    <Students />
  </Fragment>);
}

export default App;
