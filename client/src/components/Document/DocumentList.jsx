import { List } from '@material-ui/core';
import React from 'react';
import DocumentListItem from './DocumentListItem';



export default function DocumentList(props) {
  console.log(`doc list props.data ${props.data}`)
  const listOfDocItems = props.data.map(file => {
    return (
      <DocumentListItem 
        key={file.id}
        id={file.id}
        title={file.title}
        category={file.category_type}
        path={file.path}
        project_id={file.project_id}
        data={props.data}
        categories={props.categories}
        delete={props.onDelete}
        onEdit={props.onEdit}
        />
    )
  })

    
  return (
    <List>{listOfDocItems}</List>
  )
}