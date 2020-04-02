import React, {createContext, useReducer} from 'react';
// import axios from 'axios';
import Reducer from './Reducer';

const initialState = { 
  loading: true,
  owners: [
    // {id:1,	first_name: 'Scot',	last_name: 'Hainning', email: 'shainning0@so-net.ne.jp', country:	'Thailand', car_model: 'Lincoln', car_model_year:	'1996',	car_color: 'Maroon', gender: 'Male',	job_title: 'Staff Accountant III', bio:	'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.'},
    // {id:2,	first_name: 'Vannie',	last_name: 'Fitzer', email: 'vfitzer1@samsung.com', country:	'France', car_model: 'Chrysler', car_model_year:	'	2005',	car_color: 'Green', gender: 'Female	',	job_title: 'VP Quality Control', bio:	'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.'}
  ],
  error: null
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getCarOwnersWithFilter1 = async () => {
    try{
      // const res = await axios.get('api/filter1');
      await fetch('http://localhost:8000/api/filter1')
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_OWNERS_WITH_FILTER_1', payload: data.response}))
        .catch(error => console.log(error))

    } catch(err){
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response
      })
    }
  }

  const getCarOwnersWithFilter2 = async () => {
    try{
      await fetch('http://localhost:8000/api/filter2')
      .then(response => response.json())
      .then(data => dispatch({type: 'GET_OWNERS_WITH_FILTER_2', payload: data.response}))
      .catch(error => console.log(error))
      // const res = await axios.get('api/filter2');
      
      // dispatch({
      //   type: 'GET_OWNERS_WITH_FILTER_2',
      //   payload: res.data.response
      // })
    } catch(err){
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response
      })
    }
  }

  const getCarOwnersWithFilter3 = async () => {
    try{
      await fetch('http://localhost:8000/api/filter3')
      .then(response => response.json())
      .then(data => dispatch({type: 'GET_OWNERS_WITH_FILTER_3', payload: data.response}))
      .catch(error => console.log(error))
      // const res = await axios.get('api/filter3');
      
      // dispatch({
      //   type: 'GET_OWNERS_WITH_FILTER_3',
      //   payload: res.data.response
      // })
    } catch(err){
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response
      })
    }
  }

  const getCarOwnersWithFilter4 = async () => {
    try{
      await fetch('http://localhost:8000/api/filter4')
      .then(response => response.json())
      .then(data => dispatch({type: 'GET_OWNERS_WITH_FILTER_4', payload: data.response}))
      .catch(error => console.log(error))
      // const res = await axios.get('api/filter4');
      
      // dispatch({
      //   type: 'GET_OWNERS_WITH_FILTER_4',
      //   payload: res.data.response
      // })
    } catch(err){
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response
      })
    }
  }

  const getCarOwnersWithFilter5 = async () => {
    try{
      await fetch('http://localhost:8000/api/filter5')
      .then(response => response.json())
      .then(data => dispatch({type: 'GET_OWNERS_WITH_FILTER_5', payload: data.response}))
      .catch(error => console.log(error))
      // const res = await axios.get('api/filter5');
      
      // dispatch({
      //   type: 'GET_OWNERS_WITH_FILTER_5',
      //   payload: res.data.response
      // })
    } catch(err){
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response
      })
    }
  }


  const getCarOwnersWithUnFiltered = async () => {
    try{
      await fetch('http://localhost:8000/api/getowners')
      .then(response => response.json())
      .then(data => dispatch({type: 'GET_OWNERS_WITH_UNFILTERED', payload: data.response}))
      .catch(error => console.log(error))
      // const res = await axios.get('api/filter5');
      
      // dispatch({
      //   type: 'GET_OWNERS_WITH_FILTER_5',
      //   payload: res.data.response
      // })
    } catch(err){
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response
      })
    }
  }

  return (<GlobalContext.Provider value={{
    owners: state.owners,
    error: state.error,
    loading: state.loading,
    getCarOwnersWithFilter1,
    getCarOwnersWithFilter2,
    getCarOwnersWithFilter3,
    getCarOwnersWithFilter4,
    getCarOwnersWithFilter5,
    getCarOwnersWithUnFiltered
  }}>
  {children}
  </GlobalContext.Provider>)
}

