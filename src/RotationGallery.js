import React, { PureComponent } from "react";
import moize from "moize";

import Carousel from "./Carousel";

import RotationGalleryItem from "./RotationGalleryItem";

import { Form, Page, Card, Button } from "tabler-react";

class RotationGallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  mountGallery = moize(
    () =>
      this.props.RotationGalleryList.map((galleryItem, i) => (
        <RotationGalleryItem galleryItem={galleryItem} index={i} />
      )),
    {
      isDeepEqual: true
    }
  );

  render() {
    return (
      <Page.Card title="Galeria Rotativa">
        <Form>
          <Carousel>
            {this.mountGallery()}
          </Carousel>
          <Card.Footer>
            <div className="d-flex">
              <Button
                onClick={e => {
                  e.preventDefault();
                }}
                link
              >
                Voltar
              </Button>
              <Button
                type="submit"
                value="submit"
                color="primary"
                className="ml-auto"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                Salvar
              </Button>
            </div>
          </Card.Footer>
        </Form>
      </Page.Card>
    );
  }
}

export default RotationGallery;
