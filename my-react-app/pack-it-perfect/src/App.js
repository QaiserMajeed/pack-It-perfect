import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import MainContent from './components/mainContent'; 
import TopProducts from './components/TopProduct';
import Products from './components/Products';
import ProductCard from './components/Productcard';
import './App.css';
import ProductDetails from './components/ProductDetails';
import TopProductDetails from './components/TopProductDetails';
import CarouselComponent from './components/carasoulContainer';
import StyleCarouselComponent from './components/StyleCarasoulComponent';
import ImageGridComponent from './components/ImageOverlay';
import TextContainer from './components/Textcontainer';
import CustomBoxesForm from './components/CustomBoxform';
function App() {

  const materialSlides = [
    {
      title: 'White Uncoated Recyclable Eco Friendly Card',
      imgSrc: 'images/ChooseMaterial/1.webp'
    },
    {
      title: 'Brilliant White Uncoated Recyclable Eco Friendly Card',
      imgSrc: 'images/ChooseMaterial/2.webp'
    },
    {
      title: 'White and Brown Recycled',
      imgSrc: 'images/ChooseMaterial/3.webp'
    },
    {
      title: 'SBS',
      imgSrc: 'images/ChooseMaterial/4.webp'
    },
    {
      title: '1 Side Coated Paperboard',
      imgSrc: 'images/ChooseMaterial/5.webp'
    },
    {
      title: '2 Side Coated Paperboard',
      imgSrc: 'images/ChooseMaterial/6.webp'
    },
    {
      title: 'Brown Card',
      imgSrc: 'images/ChooseMaterial/7.webp'
    },
    {
      title: 'Corrugated Brown fluting (E-flute) = 2mm',
      imgSrc: 'images/ChooseMaterial/8.webp'
    },
    {
      title: 'Corrugated Brown fluting (B-flute) = 3mm',
      imgSrc: 'images/ChooseMaterial/9.webp'
    },
    {
      title: 'Corrugated White fluting (E-flute) = 5mm',
      imgSrc: 'images/ChooseMaterial/10.webp'
    },
    {
      title: 'Blood Red Recycled',
      imgSrc: 'images/ChooseMaterial/11.webp'
    },
    {
      title: 'Dark Green Recycled',
      imgSrc: 'images/ChooseMaterial/12.webp'
    },
    {
      title: 'Dark Purple Recycled',
      imgSrc: 'images/ChooseMaterial/13.webp'
    },
    {
      title: 'Green Recycled',
      imgSrc: 'images/ChooseMaterial/14.webp'
    },
    {
      title: 'Maroon Recycled',
      imgSrc: 'images/ChooseMaterial/15.webp'
    },
    {
      title: 'Mustard Recycled',
      imgSrc: 'images/ChooseMaterial/16.webp'
    },
    {
      title: 'White Uncoated Recyclable Eco Friendly Card',
      imgSrc: 'images/ChooseMaterial/17.webp'
    },
    {
      title: 'Brilliant White Uncoated Recyclable Eco Friendly Card',
      imgSrc: 'images/ChooseMaterial/18.webp'
    },
    {
      title: 'Yellow Uncoated Recyclable Eco Friendly Card',
      imgSrc: 'images/ChooseMaterial/19.webp'
    },
    {
      title: 'White Uncoated Recyclable Eco Friendly Card',
      imgSrc: 'images/ChooseMaterial/20.webp'
    },
    {
      title: 'Red Uncoated Recyclable Eco Friendly Card',
      imgSrc: 'images/ChooseMaterial/21.webp'
    },
    {
      title: 'White Uncoated Recyclable Eco Friendly Card',
      imgSrc: 'images/ChooseMaterial/22.webp'
    },
    {
      title: 'Maroon Recycled',
      imgSrc: 'images/ChooseMaterial/23.webp'
    }
  ];
  const styleSlides = [
    { title: 'Agenda Boxes', imgSrc: 'images/ChooseYourStyle/Agenda Boxes.webp' },
    { title: 'Archive Boxes', imgSrc: 'images/ChooseYourStyle/ArchiveBoxes.webp' },
    { title: 'Auto Lock Bottom Boxes', imgSrc: 'images/ChooseYourStyle/Auto Lock Bottom Boxes.webp' },
    { title: 'Beige Gift Box', imgSrc: 'images/ChooseYourStyle/Beige Gift Box.webp' },
    { title: 'Bottle Carrier Boxes', imgSrc: 'images/ChooseYourStyle/Bottle Carrier Boxes.webp' },
    { title: 'Bottom Pan Top Hat', imgSrc: 'images/ChooseYourStyle/Bottom Pan Top Hat.webp' },
    { title: 'Burger Boxes', imgSrc: 'images/ChooseYourStyle/Burger Boxes.webp' },
    { title: '240200', imgSrc: 'images/ChooseYourStyle/240200.webp' },
    { title: 'Candela Tumbler Window Gift Box', imgSrc: 'images/ChooseYourStyle/Candela Tumbler Window Gift Box.webp' },
    { title: 'Catering Box With Handle', imgSrc: 'images/ChooseYourStyle/Catering Box With Handle.webp' },
    { title: 'Cigarettes Packaging', imgSrc: 'images/ChooseYourStyle/Cigarettes Packaging.webp' },
    { title: 'Compostable Cometac IT Bag Box', imgSrc: 'images/ChooseYourStyle/Compostable Comatec IT Bag Box.webp' },
    { title: 'Corner Tray Tuck Top Boxes', imgSrc: 'images/ChooseYourStyle/Corner Tray Tuck Top Boxes.webp' },
    { title: 'Corrugated Packaging Box', imgSrc: 'images/ChooseYourStyle/Corrugated Packaging Box.webp' },
    { title: 'Custom Cardboard Box', imgSrc: 'images/ChooseYourStyle/Custom Cardboard Box.webp' },
    { title: 'Custom Cosmetic Packaging', imgSrc: 'images/ChooseYourStyle/Custom Cosmetic Packaging.webp' },
    { title: 'Custom Display Box', imgSrc: 'images/ChooseYourStyle/Custom Display Box.webp' },
    { title: 'Custom Partition Boxes', imgSrc: 'images/ChooseYourStyle/Custom Partition Boxes.webp' },
    { title: 'Custom Window Boxes', imgSrc: 'images/ChooseYourStyle/CustomWindowBoxes.webp' },
    { title: 'Die Cut Fitting Box', imgSrc: 'images/ChooseYourStyle/Die Cut Fitting Box.webp' },
    { title: 'Display Boxes', imgSrc: 'images/ChooseYourStyle/Display Boxes.webp' },
    { title: 'Double Door Open Luxurian Box', imgSrc: 'images/ChooseYourStyle/Double Door Open Luxurian Box.webp' },
    { title: 'Drink Cup Carrier With Handles Box', imgSrc: 'images/ChooseYourStyle/Drink Cup Carrier With Handles Box.webp' },
    { title: 'Eco Delivery Box', imgSrc: 'images/ChooseYourStyle/Eco Delivery Box.webp' },
    { title: 'Fast Food Box', imgSrc: 'images/ChooseYourStyle/Fast Food Box.webp' },
    { title: 'Flash Box', imgSrc: 'images/ChooseYourStyle/Flash Box.webp' },
    { title: 'Food Container', imgSrc: 'images/ChooseYourStyle/Food Container.webp' },
    { title: 'Gift Box With Window', imgSrc: 'images/ChooseYourStyle/Gift Box With Window.webp' },
    { title: 'Gift Craft Box', imgSrc: 'images/ChooseYourStyle/Gift Craft Box.webp' },
    { title: 'Grocery Bag Box', imgSrc: 'images/ChooseYourStyle/Grocery Bag Box.webp' },
    { title: 'Hamburger', imgSrc: 'images/ChooseYourStyle/Hamburger Boxes Medium Kraft.webp' },
    { title: 'Kraft Box', imgSrc: 'images/ChooseYourStyle/Kraft Box.webp' },
    { title: 'Kraft Cupcake', imgSrc: 'images/ChooseYourStyle/Kraft Cupcake Box.webp' },
    { title: 'Kraft Folding Box', imgSrc: 'images/ChooseYourStyle/Kraft Folding Box.webp' },
    { title: 'Kraft Popcorn', imgSrc: 'images/ChooseYourStyle/Kraft Popcorn Box.webp' },
    { title: 'Literature Mailer', imgSrc: 'images/ChooseYourStyle/Literature Mailer Box.webp' },
    { title: 'Long Postal Tube', imgSrc: 'images/ChooseYourStyle/Long Postal Tube.webp' },
    { title: 'Mark Cardboard', imgSrc: 'images/ChooseYourStyle/Mark Cardboard 4 Recyclable Box.webp' },
    { title: 'Multipurpose Box With Handle', imgSrc: 'images/ChooseYourStyle/Multipurpose Box With Handle.webp' },
    { title: 'Natural Box With Window', imgSrc: 'images/ChooseYourStyle/Natural Box With Window.webp' },
    { title: 'Pinch Top (Single Box)', imgSrc: 'images/ChooseYourStyle/Pinch Top (Single Box).webp' },
    { title: 'Pizza Slice Box', imgSrc: 'images/ChooseYourStyle/Pizza Slice Box.webp' },
    { title: 'Plain Bottle Packaging Box', imgSrc: 'images/ChooseYourStyle/Plain Bottle Packaging Box.webp' },
    { title: 'Premier Retail Box', imgSrc: 'images/ChooseYourStyle/Premier Retail Box.webp' },
    { title: 'Quality Gift Box', imgSrc: 'images/ChooseYourStyle/Quality Gift Box.webp' },
    { title: 'Rakhi Box', imgSrc: 'images/ChooseYourStyle/Rakhi Box.webp' },
    { title: 'Retail Hanging', imgSrc: 'images/ChooseYourStyle/Reatail Hanging.webp' },
    { title: 'Rectangle Box', imgSrc: 'images/ChooseYourStyle/Rectangle Box.webp' },
    { title: 'Reverse Tuck Box', imgSrc: 'images/ChooseYourStyle/Reverse Tuck Box.webp' },
    { title: 'Roll End Tray With Lid', imgSrc: 'images/ChooseYourStyle/Roll End Tray With Lid.webp' },
    { title: 'Self-locking Display Box', imgSrc: 'images/ChooseYourStyle/Self-locking Display Box.webp' },
    { title: 'Sleeve Box Tray Boxes', imgSrc: 'images/ChooseYourStyle/Sleeve Box Tray Boxes.webp' },
    { title: 'Slotted Box', imgSrc: 'images/ChooseYourStyle/Slotted Box.webp' },
    { title: 'Tall Boxes', imgSrc: 'images/ChooseYourStyle/Tall Boxex.webp' },
    { title: 'Transportation Packaging', imgSrc: 'images/ChooseYourStyle/Transportation Packaging.webp' },
    { title: 'Tray Kraft', imgSrc: 'images/ChooseYourStyle/Tray Kraft.webp' },
    { title: 'Tuck Flap Box', imgSrc: 'images/ChooseYourStyle/Tuck Flap Box.webp' },
    { title: 'Zaar Corrugated Packing Box', imgSrc: 'images/ChooseYourStyle/Zaar Corrugated Packing Box.webp' }
  ];
  const topproducts = [
    { title: 'Pizza Boxes', image: 'images/FastFood/Pizza.webp' },
    { title: 'Cream Boxes', image: 'images/CosmeticImages/4.webp' },
    { title: 'Diffuser Boxes', image: 'images/CosmeticImages/2.webp' },
    { title: 'Eye Lashes Boxes', image: 'images/CosmeticImages/7.webp' },
    { title: 'Lip Balm Boxes', image: 'images/CosmeticImages/5.webp' },
    { title: 'Mascara Boxes', image: 'images/CosmeticImages/mascara.webp' },
    { title: 'Perfume Boxes', image: 'images/CosmeticImages/6.webp' },
    { title: 'Donut Boxes', image: 'images/CustomMadeBoxes/DonutBoxes.webp' },
    { title: 'CBD Product Boxes', image: 'images/cannabis/cbdProductBoxes.webp' },
    { title: 'Child Resistant Boxes', image: 'images/cannabis/ChildResistantBoxes.webp' },
    { title: 'Display Boxes', image: 'images/SuperMarket/DisplayPackaging.webp' }
  ];
  const TextContainers = {
    title: 'Choosing us, why?',
    description: "Superior services aim to help you achieve your company's Goals successfully and economically.",
    services: [
      {
        icon: 'fas fa-cog',
        title: 'Personalized Dimensions and design:',
        description: 'We pride ourselves on offering our customers complete artistic freedom when it comes to the design of their packing boxes.'
      },
      {
        icon: 'fas fa-gift',
        title: 'Environmental Team:',
        description: "Sustainability and environmental issues are rising, and We are aware of this. That's why we provide bespoke packaging in eco-friendly, Long-lasting materials. You may help shape a more sustainable future by working With us."
      },
      {
        icon: 'fas fa-print',
        title: 'Advanced & Top printing quality:',
        description: 'Affordable Custom Boxes of Superior Quality We were able to distinguish ourselves from the competition thanks to advancements in digital and inkjet printing.'
      },
      {
        icon: 'fas fa-list',
        title: 'Unique features and coatings:',
        description: 'The finishing touch! Make a statement with your eye-catching boxes thanks to the limitless personalization choices.'
      },
      {
        icon: 'fas fa-user',
        title: 'Quick and cost-free shipping:',
        description: "Plus, what's great? Delivery is completely free! Our guarantee is the most dependable and speediest delivery to your house."
      },
      {
        icon: 'fas fa-tag',
        title: 'Get a design at no cost:',
        description: "Give your ideas to our expert designers, and we'll turn them into reality."
      },
      {
        icon: 'fas fa-list',
        title: 'Above all, customer satisfaction:',
        description: 'Our customers are our priority! Our CSRs are on duty 24/7. Please get in touch with me.'
      },
      {
        icon: 'fas fa-truck',
        title: 'Unbeatable prices promised!',
        description: "Discover rates that are impossible to find anywhere else! Affordable and outstanding bespoke packaging alternatives may boost your company's success."
      }
    ]};
 

  const HomePage = () => (
    <>
      <MainContent />
      <TopProducts products={topproducts} />
      <CarouselComponent/>
      <StyleCarouselComponent slides={styleSlides} />
      <StyleCarouselComponent slides={materialSlides} />
      <ImageGridComponent/>
      <TextContainer list={TextContainers}/>
      <CustomBoxesForm/>
    </>
  );
  return (
    <Router>
      <div>
        <Header />
        <main>
          <section className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryName" element={<ProductCard categories={Products} />} />
              <Route path="/category/:categoryName/product/:product" element={<ProductDetails  />} />
              <Route path="/product/:product" element={<TopProductDetails/>} />
            </Routes>
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
