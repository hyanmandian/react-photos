import React, { Component } from "react";
import { connect } from "react-redux";

import { transformPhotosToAlbumsWithPhotos } from './transformers';

export class Photos extends Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  renderPhotos() {
    const { photos: { photos } } = this.props;

    return transformPhotosToAlbumsWithPhotos(photos).map((album) => (
      <div />
    ));
  }

  render() {
    const { photos: { loading } } = this.props;

    return loading ? "Loading..." : this.renderPhotos();
  }
}

const mapState = state => ({ photos: state.photos });

const mapDispatch = ({ photos: { fetchPhotos } }) => ({ fetchPhotos });

export default connect(
  mapState,
  mapDispatch
)(Photos);
