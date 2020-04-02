export default (state, action) => {
  switch (action.type) {
    case 'GET_OWNERS_WITH_FILTER_1':
      return {
        ...state,
        loading: false,
        // cs: () => console.log(action.payload),
        owners: action.payload
      }
    case 'GET_OWNERS_WITH_FILTER_2':
      return {
        ...state,
        loading: false,
        owners: action.payload
      }
    case 'GET_OWNERS_WITH_FILTER_3':
      return {
        ...state,
        loading: false,
        owners: action.payload
      }
    case 'GET_OWNERS_WITH_FILTER_4':
      return {
        ...state,
        loading: false,
        owners: action.payload
      }
    case 'GET_OWNERS_WITH_FILTER_5':
      return {
        ...state,
        loading: false,
        owners: action.payload
      }
    case 'GET_OWNERS_WITH_UNFILTERED':
      return{
        ...state,
        loading: false,
        owners: action.payload
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}