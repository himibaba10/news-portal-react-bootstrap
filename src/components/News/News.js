import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { Alert, Badge, Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";

const News = (props) => {
  const [handleLike, setHandleLike] = useState(false);

  const { title, urlToImage, description, author, publishedAt, source } = props.singleNews;
  return (
    <Card>
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
      <OverlayTrigger
      key='top'
      placement='top'
      overlay={
        <Tooltip id={`tooltip-top`}>{source.name}</Tooltip>
      }
    >
      <Card.Title>{title} <Badge bg="secondary">{new Date(publishedAt).toLocaleString()}</Badge></Card.Title>
    </OverlayTrigger>
        
        <Card.Text>{description}</Card.Text>
        <div className="d-flex align-items-start justify-content-between">
          <Button variant="primary" onClick={() => setHandleLike(true)}>
            Like the News
          </Button>
          {handleLike && <Alert style={{padding: "5px 15px"}} variant="primary">You liked this news! <FontAwesomeIcon style={{cursor: "pointer"}} icon={faTimes} onClick={() => setHandleLike(false)}/>
</Alert>}
        </div>
      </Card.Body>
      <Card.Footer>
        <small>Author: {author}</small>
      </Card.Footer>
    </Card>
  );
};

export default News;
