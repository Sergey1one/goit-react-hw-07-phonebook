
import { GlobalStyle } from "./Global Styles";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from "./Section";
import Contacts from "./Contacts";



import { Box } from "./Box";
import Filter from "./Filter";
import { FormContact } from "./Form/Form";
import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import {  selectError, selectIsLoading } from "redux/selectors";
import { useEffect } from "react";


export function App(){
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error=useSelector(selectError)
  
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  

  return (
    <Box width='400px' pl='16px'>
       

               <Section title={'Phonebook'}>
                 
        <FormContact 
           
        />
         {isLoading && !error && <b>Request in progress...</b>}
      </Section>
      
       <Section title="Contacts">

        <Filter/>
          
        <Contacts/>
          
        </Section>
        <GlobalStyle/>
<ToastContainer/>
        </Box>
  )
}





