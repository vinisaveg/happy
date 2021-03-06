import Image from "../models/Image";

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://10.0.0.101:3001/uploads/${image.path}`,
    };
  },

  renderMany(images: Array<Image>) {
    return images.map((image) => this.render(image));
  },
};
