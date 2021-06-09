import { List } from '@material-ui/core';
import React from 'react';
import DocumentListItem from './DocumentListItem';



export default function DocumentList(props) {
  const listOfDocItems = props.data.map(file => {
    return (
      <DocumentListItem 
        key={file.id}
        title={file.title}
        category={file.category_type}
        path={file.path}
        project_id={file.project_id}
        data={props.data}
        />
    )
  })

    
  return (
    <List>{listOfDocItems}</List>
  )
}