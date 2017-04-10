import { combineReducers } from 'redux'
import { 
    REQUEST_DOCUMENTS, 
    RECEIVE_DOCUMENTS, 
    INVALIDATE_DOCUMENTS, 
    NEXT_PAGE, 
    PREV_PAGE, 
    CHANGE_ORDER,
    TOOGLE_DOCUMENT,
    TOOGLE_ALL_DOCUMENTS,
    TOOGLE_SPINNER,
    OPEN_DOCUMENT,
    CLOSE_DOCUMENT,
    CLOSE_ALLDOCUMENTS,
    REQUEST_DOCUMENTDETAIL, 
    RECEIVE_DOCUMENTDETAIL
} from '../actions'

const initialState = {
    isFetching: false,
    items: [],
    selectedItems: [],
    lastUpdated: '',
    didInvalidate: true,
    pageNmb: 0,
    pageSize: 20,
    order: 'number',
    dirOrder: 'asc'
}

// Document list reducer
const updateOpen = (id, items, receivedAt) => {
  return items.map( (doc) => {
    if (doc.id === id) {
      return {
        ...doc,
        opening: true,
        closing: false,
        lastUpdated: receivedAt
      }
    } else return doc
  })
}

const updateClose = (id, items, receivedAt) => {
  return items.map( (doc) => {
    if (doc.id === id) {
      return {
        ...doc,
        opening: false,
        closing: true,
        lastUpdated: receivedAt
      }
    } else return doc 
  })
}

const toogle = (selectedItems, items, toogleDocumentId, receivedAt ) => {
    // Row is selected and will be deselected
    if ( selectedItems[toogleDocumentId] )
        delete(selectedItems[toogleDocumentId])
    // Row is not selected and will be selected
    else 
        selectedItems[toogleDocumentId] = true

    return {
        items: items.map( (doc) => {
            if (doc.id === parseInt(toogleDocumentId, 10)) {
                return {
                    ...doc,
                    checked: selectedItems[toogleDocumentId] ? true : false,
                    lastUpdated: receivedAt
                }
            } else return doc
        }),
        selectedItems: selectedItems
    }
}
const toogleAllDocuments = (items, action) => {
    var selectedItems = []
    return {
        items: items.map( (doc) => {
            if (action.selectAll) selectedItems[doc.id] = true
            return {
                ...doc,
                checked: action.selectAll,
                lastUpdated: action.receivedAt
            }
        }),
        selectedItems: selectedItems
    }
}

// Set selected documents after page change, set opened
const updateDocumentsState = ( state, items, receivedAt ) => {
    let selectedItems = state.selectedItems
    let newItems = items.map( (doc) => {
        if ( selectedItems[ doc.id ] ) {
            return {
                ...doc,
                checked: true,
                opening: false,
                closing: false,
                spinner: false,
                lastUpdated: receivedAt
            }
        } 
        else return { 
            ...doc,
            checked: false,
            opening: false,
            closing: false,
            spinner: false,
            lastUpdated: receivedAt
        }    
    })
    return newItems
}

const documents = ( state = initialState, action ) => {
    switch( action.type ) {
        case REQUEST_DOCUMENTS:            
          return {
              ...state,
              isFetching: true,
              didInvalidate: false
          }
        case RECEIVE_DOCUMENTS:
          return {
              ...state,
              isFetching: false,
              didInvalidate: false,
              items: updateDocumentsState( state, action.items, action.receivedAt ),
              lastUpdated: action.receivedAt
          }
        case INVALIDATE_DOCUMENTS:
          return {
              ...state,
              didInvalidate: true
          }
        case NEXT_PAGE:
          return {
              ...state,
              pageNmb: state.pageNmb + 1,
              didInvalidate: true
          }
        case PREV_PAGE:
          return {
              ...state,
              pageNmb: state.pageNmb - 1,
              didInvalidate: true
          }
        case CHANGE_ORDER:
          if ( state.order === action.order) {
              return {
                  ...state,
                  order: action.order,
                  dirOrder: state.dirOrder === 'asc' ? 'desc' : 'asc',
                  didInvalidate: true                    
              }
          }
          return {
              ...state,
              order: action.order,
              dirOrder: 'asc',
              didInvalidate: true
          }
        case TOOGLE_DOCUMENT:
          const {items, selectedItems} = toogle( state.selectedItems, state.items, action.id, action.receivedAt )
          return {
            ...state,
            items: items,
            lastUpdated: action.receivedAt,
            selectedItems: selectedItems
          }
        case TOOGLE_ALL_DOCUMENTS:
          var {items, selectedItems} = toogleAllDocuments( state.items, action )
          return {
            ...state,
            items: items,
            selectedItems: selectedItems
          }
        case OPEN_DOCUMENT:
          return {
            ...state,
            items: updateOpen(action.id, state.items, action.receivedAt)
          }
        case CLOSE_DOCUMENT:
          return {
            ...state,
            items: updateClose(action.id, state.items, action.receivedAt)
          }
        case TOOGLE_SPINNER:
          return {
            ...state,
            items: state.items.map( (doc) => { 
                if ( doc.id === action.id ) {
                    return {
                        ...doc,
                        spinner: !doc.spinner,
                        lastUpdated: action.receivedAt
                    }
                } else return doc
            })
          }        
        case CLOSE_ALLDOCUMENTS:
          return {
            ...state,
            items: state.items.map( (doc) => { 
                if ( doc.opening ) {
                    return {
                        ...doc,
                        opening: false,
                        closing: true,
                        lastUpdated: action.receivedAt
                    }
                } else return doc
            }),
            lastUpdated: action.receivedAt
          }
        default:
          return state
    }
}

// Document detail reducer
const initialStateDocDetail = {
    isFetching: false,
    data: null,
    lastUpdated: '',
    //documentId: null,
    items: []
}
const articles = ( state = initialStateDocDetail, action ) => {
    console.log('documentDetail() reducer, state:', state, action.type)
    switch (action.type) {
        case REQUEST_DOCUMENTDETAIL:
         return {
              ...state,
              isFetching: true,
              data: null
            }
        case RECEIVE_DOCUMENTDETAIL:
          console.log("reducer RECEIVE_DOCUMENTDETAIL")
          var newItems = state.items;
          newItems[action.id] = {
              articles: action.document.articles,
              lastUpdated: action.receivedAt
          }
          return {
              ...state,
              lastUpdated: action.receivedAt,
              items: newItems
          }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    documents,
    articles
})

export default rootReducer;