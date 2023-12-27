import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/HomeComponent';
import { Footer } from './components/Footer';
import { Student } from './components/student/Student';
import { RegisterStudent } from './components/student/RegisterStudent';
import { UserReg } from './components/student/UserReg';
import { Country } from './components/student/Country';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { AboutCompany } from './components/AboutCompany';
import { AboutCountry } from './components/AboutCountry';
import { ContactPerson } from './components/ContactPerson';
import { Error404 } from './components/Error404';
import { Storage } from './components/Storage';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { Weather } from './components/api/Weather';
import { ApiDemo } from './components/api/ApiDemo';
import { ApiDemo1 } from './components/api/ApiDemo1';
import { ApiDemo2 } from './components/api/ApiDemo2';
import { UserDetail } from './components/api/UserDetail';
import { UserUpdate } from './components/api/UserUpdate';
import axios from 'axios';
import { FetchUserData } from './components/FetchUserData';
import { AddUserData } from './components/AddUserData';
import { Books } from './context/Books';
import { UserBank } from './components/UserBank';
import { Test } from './components/Test';
import { TransAction } from './components/bankex/TransAction';
import { BankHeader } from './components/bankex/BankHeader';

function App() {
 var title="Student app";
  axios.defaults.baseURL="https://node5.onrender.com";
  return (
    <div className="App">
     {/* <Student title={title}/> */}
    {/* <RegisterStudent/> */}
    {/* <UserReg/> */}
      {/* <Country/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Country/>} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
        </Route>
        <Route path='/aboutus/company' element={<AboutCompany/>}></Route>
        <Route path='/aboutus/country' element={<AboutCountry></AboutCountry>}></Route>
        <Route path='/contactus/person/:id' element={<ContactPerson></ContactPerson>}></Route>
        <Route path='/*' element={<Error404></Error404>}></Route>
        <Route path='/storage' element={<Storage/>}></Route>
        <Route path='/weather' element={<Weather/>}></Route>
        <Route path='/apidemo' element={<ApiDemo/>}></Route>
        <Route path='/apidemo1' element={<ApiDemo1/>}></Route>
        <Route path='/apidemo2' element={<ApiDemo2/>}></Route>
        <Route path='/userdetail/:id' element={<UserDetail/>}></Route>
        <Route path='/userupdate/:id' element={<UserUpdate/>}></Route>
        <Route path='/fetchuserdata' element={<FetchUserData/>}></Route>
        <Route path='/adduserdata' element={<AddUserData/>}></Route>
        <Route path='/books' element={<Books/>}></Route>
        <Route path='/userbank' element={<UserBank/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
        <Route path='/transaction' element={<TransAction/>}></Route>
        <Route path='/bankHeader' element={<BankHeader></BankHeader>}></Route>
      </Routes>

    </div>
  );
}

export default App;
