import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchDocumentsIfNeeded, invalidateDocuments, prevPage, nextPage, changeOrder, toogleDocument } from '../actions'
import DocumentList from '../components/DocumentList'
import {mylog} from '../solidity/apputils';

class DocumentListContainer extends Component {
  constructor(props) {
    super(props)
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleRefreshData = this.handleRefreshData.bind(this);
    this.handleOnToogle = this.handleOnToogle.bind(this);
  }
    
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDocumentsIfNeeded())
  }

  handlePageClick( e, incr ) {
    const { dispatch } = this.props
    if ( incr === -1 && this.props.documents.pageNmb > 0 ) {
      dispatch(prevPage())
      dispatch(invalidateDocuments())
      dispatch(fetchDocumentsIfNeeded())
    }
    if ( incr === 1 ) {
      dispatch(nextPage())
      dispatch(invalidateDocuments())
      dispatch(fetchDocumentsIfNeeded())
    }
  }

  onChangeOrder( order ) {
    console.log( "order: " , order )
    const { dispatch } = this.props
    dispatch(changeOrder(order))
    dispatch(invalidateDocuments())
    dispatch(fetchDocumentsIfNeeded())
  }

  handleRefreshData() {
    const { dispatch } = this.props
    dispatch(invalidateDocuments())
    dispatch(fetchDocumentsIfNeeded())
  }

  handleOnToogle(id, checked) {
    const { dispatch } = this.props
    dispatch(toogleDocument(id))
  }

  render() {
    mylog('DocumentListContainer.render() this.props.documents: ', this.props.documents)
    const isFetching = this.props.documents.isFetching || false
    return <div>
              <div style={{float: "left", margin: ".2em"}}>
                <div className="div-button" style={{color: "white", backgroundColor: "lightslategrey"}} 
                  onClick={(e) => this.handlePageClick(e, -1)}>❮ Previous</div>
                <div className="div-button" style={{color: "white", backgroundColor: "lightslategrey"}} 
                  onClick={(e) => this.handlePageClick(e, 1)}>Next ❯</div>
                <div className="div-button" style={{color: "white", backgroundColor: "indianred"}} 
                  onClick={this.handleRefreshData}>Reload { isFetching ? "..." : ""}</div>
                <div className="div-button" style={{color: "#000"}}>Page: {this.props.documents.pageNmb + 1}</div>
              </div>
              <DocumentList documents={this.props.documents} onChangeOrder={(i,dir)=>(this.onChangeOrder(i,dir))} onToogle={(id,checked)=>(this.handleOnToogle(id,checked))}/>
          </div>;   
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps() ', state)
  return state
}
export default connect(mapStateToProps)(DocumentListContainer)
