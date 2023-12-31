import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';





axios.defaults.baseURL = 'https://651d3d7244e393af2d597011.mockapi.io/'


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try{ const response = await axios.get('/contacts')
        return response.data
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
   
});

export const addContact = createAsyncThunk('contacts/addContact',
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { name, number });
            console.log(response)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
    }
    })

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
         }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
})