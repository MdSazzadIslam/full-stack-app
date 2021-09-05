import React from "react";
import { shallow } from "enzyme";
import Row from "./Row";
const fakeProducts = [
  {
    id: "613156b84e9de604b87ecd8d",
    title:
      "New Free Installation Of Yurt Mosquito Net Encryption Thickened Studen...",
    image_link:
      "https://www.dennisdeal.com/products/new-free-installation-of-yurt-mosq",
    brand: "DennisDeal",
    condition: "new",
    availability: "in stock",
    price: "41.99 EUR",
  },

  {
    id: "613156b84e9de604b87ecd8e",
    title:
      "New Free Installation Of Yurt Mosquito Net Encryption Thickened Studen...",
    image_link:
      "https://www.dennisdeal.com/products/new-free-installation-of-yurt-mosq",
    brand: "DennisDeal",
    condition: "new",
    availability: "in stock",
    price: "41.99 EUR",
  },

  {
    id: "613156b84e9de604b87ecd8f",
    title:
      "New Free Installation Of Yurt Mosquito Net Encryption Thickened Studen...",
    image_link:
      "https://www.dennisdeal.com/products/new-free-installation-of-yurt-mosq",
    brand: "DennisDeal",
    condition: "new",
    availability: "in stock",
    price: "41.99 EUR",
  },

  {
    id: "613156b84e9de604b87ecd91",
    title:
      "New Free Installation Of Yurt Mosquito Net Encryption Thickened Studen...",
    image_link:
      "https://www.dennisdeal.com/products/new-free-installation-of-yurt-mosq",
    brand: "DennisDeal",
    condition: "new",
    availability: "in stock",
    price: "41.99 EUR",
  },
];

describe("Row", () => {
  it("should render Row", () => {
    const wrapper = shallow(<Row products={fakeProducts} />);
  });

  //tests:
  it("always renders a tr element", () => {
    const tr = shallow(<Row products={fakeProducts} />).find("tr");
    expect(tr.length).toBeGreaterThan(0);
  });
});
