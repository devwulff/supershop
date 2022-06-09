import Products from "./Products";

let shopArr = [
  {
    img: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
    text: "Cocooil",
    price: "30$",
  },
  {
    img: "https://www.haus.de/sites/default/files/styles/textbreite_2_spalten_tablet_klein/public/gutewahl/2020-03/Sofortbildkamera_Polaroid%20OneStep%2B-3.jpg?itok=QA7wdMps",
    text: "Polaroid",
    price: "60$",
  },
  {
    img: "https://www.gtworld.de/media/image/4b/39/82/Artikelbild-998660-1ZaJuHwTLzAH7Q_600x600@2x.jpg",
    text: "Maui Moisture",
    price: "20$",
  },
];

const Shop = () => {
  return (
    <div className="grid">
      {shopArr.map((elt, i) => (
        <Products key={i} img={elt.img} text={elt.text} price={elt.price} />
      ))}
    </div>
  );
};

export default Shop;
