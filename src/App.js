import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import CategoryBar from './Component/CategoryBar'
import Deal from './Component/Deal'
import Exclusive from './Component/Exclusive'
import PgFoot from './Component/PgFoot'
import SlideOffer from './Component/SlideOffer'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

      // Header Values

          headLogo : "https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png",
          buttonName:["Login & Signup","Cart"],

      // Category bar
      
          categoryName:["Electronics","TVs & Appliances","Men","Women","Baby & Kids","Home & Furniture","Sports,Books & More","Offer Zone"],
      
          //Daily Deal

          deal:[
                {
                itemImage : ["https://rukminim1.flixcart.com/image/150/150/jz05rww0/shoe/q/c/d/ly5031-9-layasa-gray-black-original-imafj4dztpsx4atq.jpeg?q=70"],
                dealCategory : ["Mens Footwear"],
                discount : ["From $199"],
                brands : ["Layasa,Sparx and more"]
 
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/flap/150/150/image/50839556079e1440.jpg?q=70"],
                dealCategory : ["Woodland LeeCooper "],
                discount : ["30-70%"],
                brands : ["Casual Formal"]
 
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/image/150/150/jzygccw0/bedsheet/5/k/2/candy-gold-bedsheet-cn2001-flat-story-home-original-imaf8kz4yzx2yhwf.jpeg?q=70"],
                dealCategory : ["Designer Bedsheet"],
                discount : ["30-70%"],
                brands : ["Bombay Dyeing"]
 
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/image/150/150/jv5k2a80/kurta/r/y/a/m-ie15kt0bk1100-indo-era-original-imafg3jaabjfyuzg.jpeg?q=70"],
                dealCategory : ["Kurtas,Sets & More"],
                discount : ["30-70%"],
                brands : ["Mokshi,Indo Era.."]
 
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/image/150/150/jwqpocw0/mobile/h/h/6/i-kall-k33-new-k33-new-original-imafh9hpcduprtds.jpeg?q=70"],
                dealCategory : ["KeyPad Phones"],
                discount : ["30-70%"],
                brands : ["Deal Start From $389"]
 
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/flap/150/150/image/bec792bfcaa63e21.jpg?q=70"],
                dealCategory : ["Skybags&American tourister"],
                discount : ["30-70%"],
                brands : ["Backpacks and Trolleys"]
 
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/flap/150/150/image/785e3a7a1a06e4b9.jpg?q=70"],
                dealCategory : ["Timex,Daniel Klien.."],
                discount : ["30-70%"],
                brands : ["Watches"]
 
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/image/150/150/jvjugsw0/mobile-phone-lens/w/y/h/mobile-camera-lens-0-63x-wide-angle-tizum-original-imafgehksmrgeh8g.jpeg?q=70"],
                dealCategory : ["Mobile Cables & More"],
                discount : ["30-70%"],
                brands : ["By Tizum,Philips"]
 
              }
            ],
            deal2:[
              {
                itemImage : ["https://rukminim1.flixcart.com/image/150/150/jgmkwi80/shoe/u/u/a/court-borough-mid-ni-7-nike-thunder-blue-mtlc-cool-grey-obsidian-original-imaf4tgkzn6vjhfu.jpeg?q=70"],
                dealCategory : ["Mobile Cables & More"],
                discount : ["30-70%"],
                brands : ["By Tizum,Philips"]
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/image/150/150/jmkwya80/sports-action-camera/n/j/m/hero-7-hero-7-chdhx-701-rw-gopro-original-imaf9fegntmxfhfs.jpeg?q=70"],
                dealCategory : ["Mobile Cables & More"],
                discount : ["30-70%"],
                brands : ["By Tizum,Philips"]
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/image/150/150/jefzonk0/dslr-camera/g/v/r/eos-80d-80d-canon-original-imaf329wfqqyawwx.jpeg?q=70"],
                dealCategory : ["Mobile Cables & More"],
                discount : ["30-70%"],
                brands : ["By Tizum,Philips"]
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/image/150/150/j7qi9ow0/tablet/q/u/2/alcatel-9026t-original-imaexwzrwg4zrxkq.jpeg?q=70"],
                dealCategory : ["Mobile Cables & More"],
                discount : ["30-70%"],
                brands : ["By Tizum,Philips"]
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/image/150/150/j9oiufk0/instant-camera/v/z/4/film-10x1-with-instax-square-sq10-hybrid-instax-square-sq10-original-imaez7g2kczz4mhj.jpeg?q=70"],
                dealCategory : ["Mobile Cables & More"],
                discount : ["30-70%"],
                brands : ["By Tizum,Philips"]
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/image/150/150/jxkpx8w0/gimbal/s/h/j/0-075-1-4-screw-mini-dslr-hand-stabilizer-holder-grip-for-original-imafdzsxfk2gtuhr.jpeg?q=70"],
                dealCategory : ["Mobile Cables & More"],
                discount : ["30-70%"],
                brands : ["By Tizum,Philips"]
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/image/150/150/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70"],
                dealCategory : ["Mobile Cables & More"],
                discount : ["30-70%"],
                brands : ["By Tizum,Philips"]
              },
              {
                itemImage : ["https://rukminim1.flixcart.com/flap/150/150/image/eba3fe55961b10fa.jpg?q=70"],
                dealCategory : ["Mobile Cables & More"],
                discount : ["30-70%"],
                brands : ["By Tizum,Philips"]
              },

            ],


                imageUrl:[
              {
                  first:"https://www.flashsaletricks.com/wp-content/uploads/2017/08/Flipkart_Gift_Card_Offer.jpg",
                  second:"https://cdn.grabon.in/gograbon/giftbycard/images/product/1532676830561/flipkart-gift-card.jpg",
                  third:"https://i.ytimg.com/vi/Z6l5QHiA5Uk/maxresdefault.jpg"
              }],

                imageUrl2:[
              {
                  first:"https://assets.mspimages.in/wp-content/uploads/2019/07/flip2-696x365.jpg",
                  second:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201809/Flipkart_big_billion_days_sale.png?ibrL88qcqCDS8aVoHXlVzdQBXq4zMgMv",
                  third:"https://www.sbicard.com/sbi-card-en/assets/media/images/personal/offers/categories/shopping/flipkart/m-flipkart.jpg"
              }
          ]
    }
  }
render(){

  return (

    <div className = "App">
         
          <Header 
              logo = {this.state.headLogo} 
              valueButton = {this.state.buttonName}
              //textColor = {}
           />
          <CategoryBar categoryName = {this.state.categoryName}/>
          
          <Deal dealData={this.state.deal}/>
          <Exclusive 
              excData1={this.state.imageUrl[0].first} 
              excData2={this.state.imageUrl[0].second} 
              excData3={this.state.imageUrl[0].third} 
          />
          <Deal dealData={this.state.deal2}/>
           <Exclusive 
              excData1={this.state.imageUrl2[0].first} 
              excData2={this.state.imageUrl2[0].second} 
              excData3={this.state.imageUrl2[0].third} 
          />
          <PgFoot />

    </div>
  );
}
}

export default App;
