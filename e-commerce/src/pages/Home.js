import React, { useEffect } from "react";
import OfferMap from "../utils/offermap";
import '../App.css';
import {useSelector , useDispatch} from 'react-redux';
import { getOfferProducts } from '../redux/slice/homeSlice'




function Home(){
    let best_offer = [
        {   
            img:"https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
            product:"camera",
            price:3999,
            brands:"Canon,sony",
            catagory:"electronics"
        },
        {   
            img:"https://rukminim1.flixcart.com/image/200/200/ktszgy80/monitor/b/b/5/ed320qr-full-hd-um-je0ss-p01-acer-original-imag72hyazezew4b.jpeg?q=70",
            product:"monitors",
            price:7500,
            brands:"Lenovo",
            catagory:"electronics"
        },
        {
            img:"https://rukminim1.flixcart.com/image/200/200/kj7gwi80pkrrdj-0/trimmer-refurbished/o/r/u/a-device-of-man-ns-216-runtime-45-min-trimmer-for-men-women-original-imaftfg9hbedkwzu.jpeg?q=70",
            product:"trimmer",
            price:2000,
            brands:"Mi,Realme",
            catagory:"electronics"
        },
        {
            img:"https://rukminim1.flixcart.com/image/200/200/xif0q/projector/e/p/v/k9-pro-android-fhd-1080p-10-pre007-full-hd-egate-original-imagg9k9zauxwrfj.jpeg?q=70",
            product:"projector",
            price:6990,
            brands:"Vega,Philips & More",
            catagory:"electronics"
        },
        {
            img:"https://www.pngall.com/wp-content/uploads/5/Cricket-Bat-PNG-Image.png",
            product:"sports",
            price:"70%",
            brands:"Ceat,Nivia",
            catagory:"beauty_foods_toys"
        },
        {
            img:"https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-piano-keyboard-vector-png-image_1777158.jpg",
            product:"musical_keyboard",
            price:"70%",
            brands:"Beston,Redbox & More",
            catagory:"beauty_foods_toys"
        },
        {
            img:"https://rukminim1.flixcart.com/image/200/200/j3xbzww0/face-wash/4/4/s/150-purifying-neem-face-wash-himalaya-original-imaeuyfzgdmythzw.jpeg?q=70",
            product:"skincare",
            price:"40%",
            brands:"Himalaya,MamaEarth & More",
            catagory:"beauty_foods_toys"
        },
        {
            img:"https://rukminim1.flixcart.com/image/200/200/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=70",
            product:"food_spreads",
            price:"75%",
            brands:"Myfiness,Alpino & More",
            catagory:"beauty_foods_toys"
        }
]


let product_list =[
        {   
            title:"camera",
            img:"https://rukminim1.flixcart.com/image/312/312/xif0q/instant-camera/r/k/t/instax-mini-11-moments-box-instax-mini-11-moments-box-instant-original-imaggmffkfwdmbh8.jpeg?q=70",
            product:"FUJIFILM Instax Mini 11 Moments Box Instant Camera",
            specification:["Grey","Exposure Mode: Automatic","View Finder: NO","Slef Timer: Yes","Battery Included","1 Year Warranty"],
            offer_price:6999,
            original_price:8999,
            offer:"28%",
            delivery:"Free Delivery",
            qty:1,
        },
        {
            title:"camera",
            img:"https://rukminim1.flixcart.com/image/312/312/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70",
            product:"Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens",
            specification:["Black","Exposure Mode: Automatic","View Finder: Yes","Slef Timer: Yes","Battery Included","2 Year Warranty"],
            offer_price:28990,
            original_price:33999,
            offer:"8%",
            delivery:"Free delivery",
            qty:1,
        },
        {
            title:"camera",
            img:"https://rukminim1.flixcart.com/image/312/312/jm2c87k0/sports-action-camera/8/g/y/full-hd10-full-hd1080-p-ng-etc-full-hd10-happy2buy-original-imaf26jhfrg8qn8z.jpeg?q=70",
            product:"RFV1 (tm) Full HD 1080P Sports DV Action Waterproof Sports and Action Camera",
            specification:["Effective pixels 12MP","Full HD","no warranty"],
            offer_price:923,
            original_price:2999,
            offer:"69%",
            delivery:"Free delivery",
            qty:1,
        },
        {   
            title:"camera",
            img:"https://rukminim1.flixcart.com/image/312/312/l5fnhjk0/dslr-camera/f/t/m/eos-r10-24-2-r10-canon-original-imagg42fsbgv79da.jpeg?q=70",
            product:"Canon EOS R10 Mirrorless Camera Body with RF-S 18 - 150 mm f/3.5 - 6.3 IS STM Lens Kit",
            specification:["Effective pixels 24.2MP","Sensor Type: CMOS","WiFi Available","4K","2 Year Domestic warranty"],
            offer_price:113566,
            original_price:117999,
            offer:"3%",
            delivery:"Free Delivery",
            qty:1,
        },
        {   
            title:"monitors",
            img:"https://rukminim1.flixcart.com/image/312/312/l5ld8y80/monitor/w/8/5/-original-imagg897bcqqhczw.jpeg?q=70",
            product:"SAMSUNG 27 inch Curved Full HD VA Panel with 1800R Curvature, Game Mode Function, Eye-Saver Mode, Flic...",
            specification:["Panel Type: VA Panel","Screen Resolution Type: Full HD","Brightness: 250ns","Response Time: 4ms | Refresh Rate: 60 Hz","3 Year warranty"],
            offer_price:12699,
            original_price:24700,
            offer:"48%",
            delivery:"Free delivary",
            qty:1,

        },
        {   
            title:"monitors",
            img:"https://rukminim1.flixcart.com/image/312/312/l3t2fm80/monitor/m/e/j/-original-imageudynqghyhxh.jpeg?q=70",
            product:"MarQ by Flipkart 22 inch Full HD LED Backlit VA Panel with 2 X 3W Inbuilt Speakers Monitor (22FHDMVQII...",
            specification:["Panel Type: VA Panel","Screen Resolution Type: Full HD","Brightness: 220nits","Response Time: 5ms | Refresh Rate: 75 Hz","1 Year warranty"],
            offer_price:6899,
            original_price:12999,
            offer:"44%",
            delivery:"Free delivery",
            qty:1,
        },
        {   
            title:"monitors",
            img:"https://rukminim1.flixcart.com/image/312/312/xif0q/monitor/o/8/v/ka222q-b-full-hd-21-5-um-wx2si-b01-acer-original-imagg4fgmeb8jf4j.jpeg?q=70",
            product:"acer 21.5 inch Full HD VA Panel Monitor (KA222Q B)",
            specification:["Panel Type: VA Panel","Screen Resolution Type: Full HD","Brightness: 250nits","Response Time: 5ms | Refresh Rate: 75 Hz","3 Years warranty"],
            offer_price:6899,
            original_price:10900,
            offer:"36%",
            delivery:"Free delivary",
            qty:1,
        },
        {   
            title:"monitors",
            img:"https://rukminim1.flixcart.com/image/312/312/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70",
            product:"SAMSUNG 24 inch Full HD LED Backlit IPS Panel with 3-Sided Borderless Display, Game &amp; Free Sync Mode, ...",
            specification:["Panel Type: IPS Panel","Screen Resolution Type: Full HD","Brightness: 250nits","Response Time: 5ms | Refresh Rate: 75 Hz","3 Years warranty"],
            offer_price:9899,
            original_price:19100,
            offer:"58%",
            delivery:"Free delivery",
            qty:1,
        },
        {
            title:"projector",
            img:"https://rukminim1.flixcart.com/image/612/612/ktx9si80/projector/j/3/d/advance-full-hd-led-wifi-3d-mini-projector-for-1080p-video-original-imag756hqczfmhr9.jpeg?q=70",
            product:"PLAY Latest 2022 MP11 Full HD Native Android Bluetooth Home theater cinema Projector (6500 lm / Wireless / Remote Controller) Portable Projector",
            specification:["Silvar","Portable: Yes","Internal Storage: 8192 MB","Maximum Brightness: 6500lm"],
            offer_price:24819,
            original_price:150000,
            offer:"83%",
            delivery:"Free delivery",
            qty:1,
        },
        {   
            title:"projector",
            img:"https://rukminim1.flixcart.com/image/612/612/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
            product:"ZEBRONICS Zeb-Pixa Play 12 with Dolby Audio Support &amp; 720p HD (3000 lm / 1 Speaker / Remote Controller) Projector&nbsp;&nbsp;(Black)",
            specification:["Black","Portable: No","Internal Storage: 8192 MB","Maximum Brightness: 3000lm"],
            offer_price:8899,
            original_price:21999,
            offer:"59%",
            delivery:"Free delivery",
            qty:1,
        },
        {   
            title:"projector",
            img:"https://rukminim1.flixcart.com/image/612/612/kyj0vbk0/projector/r/n/r/-original-imagaqky6yftfmn8.jpeg?q=70",
            product:"ZEBRONICS ZEB-PIXAPLAY 15 with Android 9.0, Full HD 1080p, WiFi/BT v5.1 (3400 lm / 1 Speaker / Remote Controller) Projector &nbsp;&nbsp;(Black)",
            specification:["Black","Portable: No","Internal Storage: 8192 MB","Maximum Brightness: 3000lm"],
            offer_price:15399,
            original_price:42999,
            offer:"64%",
            delivery:"Free delivery",
            qty:1,
        },
        {   
            title:"trimmer",
            img:"https://rukminim1.flixcart.com/image/612/612/xif0q/trimmer/e/o/f/0-5-12-mm-nht-1042-usb-stainless-steel-cordless-nova-original-imaggksvup2wwpqf.jpeg?q=70",
            product:"Mi XXQ02HM Trimmer 60 min  Runtime 20 Length Settings &nbsp;&nbsp;(Black)",
            specification:["Blade Material: Stainless Steel","Timming Range: 0.5-10 mm","60 min battery run time","Gender: men"],
            offer_price:799,
            original_price:1999,
            offer:"33%",
            delivery:"Free delivery",
            qty:1,
        },
        {   
            title:"trimmer",
            img:"https://rukminim1.flixcart.com/image/612/612/kuof5ow0/trimmer/7/z/f/0-5-10-mm-bt3101-15-stainless-steel-cordless-philips-original-imag7r4r7ztgnuyk.jpeg?q=70",
            product:"PHILIPS BT3231/15 Trimmer 60 min  Runtime 20 Length Settings &nbsp;&nbsp;(Green)",
            specification:["Blade Material: Stainless Steel","Timming Range: 0.5-10 mm","60 min battery run time","Gender: men"],
            offer_price:1125,
            original_price:1995,
            offer:"37%",
            delivery:"Free delivery",
            qty:1,
        },
        {   
            title:"trimmer",
            img:"https://rukminim1.flixcart.com/image/612/612/ko4ni4w0/trimmer/x/v/k/0-5-12-mm-stainless-steel-ng-1153-digital-usb-corded-cordless-original-imag2ngynbhz6p43.jpeg?q=70",
            product:"PHILIPS BT1232/15 Trimmer 30 mins  Runtime 3 Length Settings &nbsp;&nbsp;(Blue)",
            specification:["Blade Material: Stainless Steel","Timming Range: 0.5-7 mm","30 min battery run time","Gender: men"],
            offer_price:644,
            original_price:995,
            offer:"35%",
            delivery:"Free delivery",
            qty:1,
        },
        {   
            title:"sports",
            img:"https://rukminim1.flixcart.com/image/612/612/kv8fbm80/kit/o/y/q/mrf-grand-edition-vk-18-full-size-ideal-for-15-21-years-complete-original-imag86qh9m2spjhp.jpeg?q=70 ",
            product:"HF MRF GRAND Edition VK - 18 Full Size ( Ideal For 15-21 Years ) Complete Cricket Kit",
            specification:["1 KITBAG","BAT","BATTING PAD","HELMET","LBO GUARD","1 LEATHER BALL","GLOVES"],
            offer_price:3699,
            original_price:18999,
            offer:"80%",
            delivery:"Free delivery",
            qty:1,
        },
        {
            title:"sports",
            img:"https://rukminim1.flixcart.com/image/612/612/l3vxbbk0/kit/b/2/h/dominator-senior-plastic-cricket-bat-with-soft-cricket-ball-na-4-original-imagewskwrppxtpu.jpeg?q=70",
            product:"Jaspo Dominator Senior Plastic Cricket Bat with Soft Cricket Ball Cricket Kit",
            specification:["Green","Metirial: Plastic","4 Pieces","Kids"],
            offer_price:499,
            original_price:1199,
            offer:"58%",
            delivery:"Delivery charge: 40",
            qty:1,
        },
        {
            title:"musical_keyboard",
            img:"https://rukminim1.flixcart.com/image/612/612/kasjjww0/musical-keyboard/h/n/z/ks49-casio-original-imafs9huahwyjtwz.jpeg?q=70",
            product:"CASIO CT-X870IN KS44A Digital Portable Keyboard",
            specification:["NO. of Keys: 61","Key Type: Solid","Control Panel: Digital","Built in Speakers","For: Intermediate","3 Years Warranty"],
            offer_price:13396,
            original_price:14995,
            offer:"10%",
            delivery:"Free delivery",
            qty:1,
        },
        {
            title:"musical_keyboard",
            img:"https://rukminim1.flixcart.com/image/612/612/kasjjww0/musical-keyboard/z/w/7/ct-x870in-casio-original-imafs9hutczdmwrz.jpeg?q=70",
            product:"CASIO CTK-240 CTK-240 Digital Portable Keyboard",
            specification:["NO. of Keys: 49","Key Type: Lever","Control Panel: Digital","Built in Speakers","For: Beginners","3 Years Warranty"],
            offer_price:5599,
            original_price:6165,
            offer:"9%",
            delivery:"Free delivery"  
        },
        {
            title:"skincare",
            img:"https://rukminim1.flixcart.com/image/612/612/l3dcl8w0/moisturizer-cream/g/p/y/-original-imageg3j4crfx89p.jpeg?q=70",
            product:"Vaseline Non Greasy Intensive Care Deep Moisture Body Lotion  (400 ml)",
            specification:["Application Area: Body","For Men & Women","All Day Cream","For All Skin","TypesLotion Form"],
            offer_price:149,
            original_price:365,
            offer:"60%",
            delivery:"Delivery charge: 40",
            qty:1,
        },
        {   
            title:"skincare",
            img:"https://rukminim1.flixcart.com/image/612/612/l09w8sw0/moisturizer-cream/t/f/l/-original-imagc3j9xev7dzzg.jpeg?q=70",
            product:"POND's Bright Beauty Serum Cream Anti-Spot Fairness SPF 15 Day Cream  (35 g)",
            specification:["Application Area: Body","For Women","All Day Cream","For All Skin","Types Lotion Form"],
            offer_price:127,
            original_price:160,
            offer:"20%",
            delivery:"Delivery charge: 40",
            qty:1,
        },
        {
            title:"food_spreads",
            img:"https://rukminim1.flixcart.com/image/612/612/kn97te80/jam-spread/l/b/k/chocolate-peanut-butter-jar-nut-butter-myfitness-original-imagfz6kb5mdbqez.jpeg?q=70",
            product:"MYFITNESS Chocolate Peanut Butter 1250 g",
            specification:["Antioxidants","Vitamin & Minerals","High Protein","Energy Booster",],
            offer_price:501,
            original_price:649,
            offer:"22%",
            delivery:"Delivery charge: 40",
            qty:1,
        },
        {   
            title:"food_spreads",
            img:"https://rukminim1.flixcart.com/image/612/612/kxf0jgw0/jam-spread/c/j/r/1-classic-peanut-butter-crunch-1-kg-made-with-roasted-peanuts-25-original-imag9vhpzqbencdz.jpeg?q=70",
            product:"ALPINO Classic Crunch | High Protein Peanut Butter Crunchy | Vegan 1 kg",
            specification:["Roasted Peanuts","24% Protein","Non GMO","Gluten Free","Vegan"],
            offer_price:220,
            original_price:449,
            offer:"51%",
            delivery:"Delivery charge: 40",
            qty:1,
        }
]


    const {offerProducts,IsLoad} = useSelector((state) => state.HomeSlice);

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getOfferProducts())
    },[])
    
    return(
    <>
    <div className="row m-0 justify-content-center">
        {IsLoad && <div className="spinner-grow text-primary loader" role="status">
                         <span className="visually-hidden">Loading...</span>
                     </div>}
        {offerProducts && (
            <>
            <OfferMap/>
            </>
        )}
    </div>
   
    </>)
}

export default Home;
