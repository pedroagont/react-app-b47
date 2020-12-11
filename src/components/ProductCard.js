import React from 'react';
import { Link } from "react-router-dom";
import { Badge, Button,
  Card, CardImg, CardText,
  CardBody, CardTitle
} from 'reactstrap';

const ProductCard = (props) => {
  const { id, data } = props;

  return (
    <Card className="m-2 text-center">
      <CardBody>
        <CardImg top width="100%" src={data.imagen} alt="Card image cap" />
        <CardTitle tag="h5">{data.nombre}</CardTitle>
        <CardText>${data.precio}</CardText>
        <Badge color="secondary">{data.categoria}</Badge>
        <CardText>
          <Link to={`/products/${id}`}>
            <Button className="mt-3" color="primary">Ver más</Button>
          </Link>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
