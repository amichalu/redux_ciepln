// Document's list actions
export const REQUEST_DOCUMENTS = 'REQUEST_DOCUMENTS'
export const RECEIVE_DOCUMENTS = 'RECEIVE_DOCUMENTS'
export const INVALIDATE_DOCUMENTS = 'INVALIDATE_DOCUMENTS'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
export const CHANGE_ORDER = 'CHANGE_ORDER'
export const TOOGLE_DOCUMENT = 'TOOGLE_DOCUMENT'
export const TOOGLE_ALL_DOCUMENTS = 'TOOGLE_ALL_DOCUMENTS'
export const TOOGLE_SPINNER = 'TOOGLE_SPINNER'
export const OPEN_DOCUMENT = 'OPEN_DOCUMENT'
export const CLOSE_DOCUMENT = 'CLOSE_DOCUMENT'
export const CLOSE_ALLDOCUMENTS = 'CLOSE_ALLDOCUMENTS'

// Document detail actions
export const RECEIVE_DOCUMENTDETAIL = 'RECEIVE_DOCUMENTDETAIL'

export const invalidateDocuments = () => ({
  type: INVALIDATE_DOCUMENTS
})

export const requestDocuments = () => ({
  type: REQUEST_DOCUMENTS
})

const prepareDocuments = (documents) => {
  var even = false;
  for (var i = 0; i < documents.length; i++) {
    documents[i].even = !even;
    even = !even;
  }
  return documents;
}

export const toogleDocument = (id) => ({
  type: TOOGLE_DOCUMENT,
  id: id,
  receivedAt: Date.now()
}) 
export const toogleAllDocuments = (selectAll) => ({
  type: TOOGLE_ALL_DOCUMENTS,
  selectAll: selectAll,
  receivedAt: Date.now()
}) 

export const toogleSpinner = (id) => ({
  type: TOOGLE_SPINNER,
  id: id,
  receivedAt: Date.now()  
})

export const openDocument = (id) => ({
  type: OPEN_DOCUMENT,
  id: id,
  receivedAt: Date.now()
})
export const closeDocument = (id) => ({
  type: CLOSE_DOCUMENT,
  id: id,
  receivedAt: Date.now()
})
export const closeAllDocuments = () => ({
  type: CLOSE_ALLDOCUMENTS,
  receivedAt: Date.now()
})

export const receiveDocuments = (json) => ({
  type: RECEIVE_DOCUMENTS,
  items: prepareDocuments( json.documents ),
  receivedAt: Date.now()
})

export const changeOrder = ( col = 'number' ) => ({
  type: CHANGE_ORDER,
  order: col
})

export const nextPage = () => ({
    type: NEXT_PAGE
})
export const prevPage = () => ({
  type: PREV_PAGE
})

// export const changePage = (dispatch, incr) => {
//   console.log("changePage")
//   if ( incr === -1 && getState().documents.pageNmb > 0 ) {
//     dispatch(prevPage())
//     dispatch(invalidateDocuments())
//     dispatch(fetchDocumentsIfNeeded())
//   }
//   if ( incr === 1 ) {
//     dispatch(nextPage())
//     dispatch(invalidateDocuments())
//     dispatch(fetchDocumentsIfNeeded())
//   }  
// }

const getUrl = (state) => ("/documents/" + state.documents.order + "/" + state.documents.pageNmb + "/" + state.documents.pageSize + "/" + state.documents.dirOrder)

const fetchDocuments = () => (dispatch, getState) => {
  dispatch(requestDocuments())
  return fetch( getUrl(getState()) )
    .then(response => response.json())
    .then(json => dispatch(receiveDocuments(json)))
}

const shouldFetchDocuments = (state) => {
  
  const documents = state.documents
  if (!documents.items) {
    return true
  }
  if (documents.isFetching) {
    return false
  }
  return documents.didInvalidate
}

export const fetchDocumentsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchDocuments(getState())) {
    return dispatch(fetchDocuments())
  }
}

// Document detail actions
export const receiveDocumentDetail = (json, id) => ({
  type: RECEIVE_DOCUMENTDETAIL,
  document: json,
  id: id,
  receivedAt: Date.now()
})

// This is called by fetch() in fetchDocumentDetail()
// We dispatch RECEIVE_DOCUMENTDETAIL, TOOGLE_SPINNER & OPEN_DOCUMENT
export const receiveDocumentDetailActions = (json, id) => (dispatch) => {
  dispatch(receiveDocumentDetail(json,id))
  dispatch(toogleSpinner(id))
  dispatch(openDocument(id))
}

const getUrlDocumentDetail = (id) => ("/documentarticles/" + id)

export const fetchDocumentDetail = id => (dispatch) => {
  return fetch( getUrlDocumentDetail(id) )
    .then(response => response.json())
    .then(json => dispatch(receiveDocumentDetailActions(json, id)))
}


