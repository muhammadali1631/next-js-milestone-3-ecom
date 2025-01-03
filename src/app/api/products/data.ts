import shoes1 from "@/images/shoes1.jpg";
import shoes2 from "@/images/shoes2.jpg";
import shoes3 from "@/images/shoes3.jpg";
import shoes4 from "@/images/shoes4.jpg";
import shoes5 from "@/images/shoes5.jpg";
import shoes6 from "@/images/shoes6.jpg";
import shoes7 from "@/images/shoes7.jpg";
import shoes8 from "@/images/shoes8.jpg";
import shirt1 from "@/images/shirt1.jpg";
import shirt2 from "@/images/shirt2.jpg";
import shirt3 from "@/images/shirt3.jpg";
import shirt4 from "@/images/shirt4.jpg";
import shirt5 from "@/images/71v0+FidhSL._AC_SX569_.jpg";
import shirt6 from "@/images/shirt6.jpg";
import shirt7 from "@/images/shirt7.jpg";
import shirt8 from "@/images/shirt8.jpg";
import watch1 from "@/images/watch1.jpg";
import watch2 from "@/images/watch2.jpg";
import watch3 from "@/images/71+92bd6KSL._AC_SX679_.jpg";
import watch4 from "@/images/watch4.jpg";
import shirt9 from "@/images/shirt9.jpg";
import shirt10 from "@/images/shirt10.jpg";
import shirt11 from "@/images/shirt11.jpg";
import shirt12 from "@/images/shirt12.jpg";
import hoodie1 from "@/images/hoodie1.jpg";
import hoodie2 from "@/images/hoodie2.jpg";
import hoodie3 from "@/images/hooie3.jpg";
import hoodie4 from "@/images/hoodie4.jpg";
import shoes9 from "@/images/shoes9.jpg";
import shoes10 from "@/images/shoes10.jpg";
import shoes11 from "@/images/shoes11.jpg";
import shoes12 from "@/images/shoes12.jpg";
import headphone1 from "@/images/headphone1.jpg";
import headphone2 from "@/images/headphone2.jpg";
import headphone3 from "@/images/headphone3.jpg";
import headphone4 from "@/images/headphone4.jpg";
import powerbank1 from "@/images/powerbank1.jpg";
import powerbank2 from "@/images/powerbank2.jpg";
import powerbank3 from "@/images/powerbank3.jpg";
import powerbank4 from "@/images/powerbank4.jpg";

const data = [
  {
    id: 1001,
    title: "Under Armour Men's Charged Assert 9 Running Shoe",
    colors: ["black", "white"],
    price: 70,
    discountedPrice: 60,
    images: { white: [shoes1, shoes2], black: [shoes3, shoes4] },
    tags: ["shoes", "featured"],
    description:
      "The Under Armour Men's Charged Assert 9 Running Shoe is a versatile and comfortable option for everyday runs, featuring a lightweight and breathable engineered mesh upper for cool comfort, a Charged Cushioning® midsole that absorbs impact and returns energy for a responsive feel, and a durable solid rubber outsole for lasting traction on various surfaces; a molded sockliner enhances the fit and provides additional comfort, making this shoe a reliable choice for runners seeking a balance of cushioning, support, and performance.",
  },
  {
    id: 1002,
    title: "Adidas Men's Lite Racer Adapt 7.0 Sneaker",
    colors: ["black", "white"],
    price: 50,
    discountedPrice: 45,
    images: { white: [shoes5, shoes6], black: [shoes7, shoes8] },
    tags: ["shoes", "featured"],
    description:
      "The Adidas Men's Lite Racer Adapt 7.0 Sneaker offers a sleek, modern look with a focus on lightweight comfort and easy wear; its slip-on construction and stretchy upper provide a snug, sock-like fit, while the soft cushioning midsole delivers all-day comfort, making it a great choice for casual wear and light activity",
  },
  {
    id: 1003,
    title: "Hanes Men’s X-Temp Short Sleeve Polo Shirt, Midweight Men's Shirt",
    colors: ["blue", "white"],
    price: 9.99,
    discountedPrice: 8.14,
    images: { blue: [shirt1, shirt2], white: [shirt3, shirt4] },
    tags: ["shirt", "featured"],
    description:
      "The Hanes Men's X-Temp Short Sleeve Polo Shirt is a midweight, classic polo designed for comfort and versatility. Featuring X-Temp technology, this shirt is designed to adapt to your body temperature, keeping you cool and dry throughout the day. Its durable construction and comfortable fit make it suitable for casual wear, work, or layering, while the traditional polo styling offers a timeless look. This shirt offers a great value for those seeking a reliable and comfortable everyday polo.",
  },
  {
    id: 1004,
    title:
      "Hanes EcoSmart Fleece, Cotton-Blend Pullover, Crewneck Sweatshirt for Men.",
    colors: ["green", "white"],
    price: 10.12,
    discountedPrice: 8.97,
    images: { green: [shirt5, shirt6], white: [shirt7, shirt8] },
    tags: ["shirt", "featured", "latest"],
    description:
      "The Hanes EcoSmart Fleece Cotton-Blend Pullover Crewneck Sweatshirt for Men offers classic comfort and a reduced environmental footprint, crafted from a soft, mid-weight fleece blend of cotton and recycled polyester fibers; this crewneck features a relaxed fit for easy layering, ribbed cuffs and hem for shape retention, and a tag-free neck for itch-free comfort, making it a reliable and cozy choice for everyday wear.",
  },
  {
    id: 1005,
    title:
      "Michael Kors Oversized Slim Runway Men's Watch, Stainless Steel Watch for Men",
    colors: ["gold", "black"],
    price: 200,
    discountedPrice: 150,
    images: { gold: [watch3, watch4], black: [watch1, watch2] },
    tags: ["watch", "featured", "latest"],
    description:
      "The Michael Kors Oversized Slim Runway Men's Watch is a sleek and sophisticated timepiece crafted from durable stainless steel, offering a modern, minimalist design with an oversized dial for a bold statement; its slim profile ensures comfortable wear, while the clean lines and understated details exude a timeless elegance suitable for both casual and formal occasions, making it a versatile accessory for the modern man.",
  },
  {
    id: 1006,
    title:
      "Alimens & Gentle Men's Button Down Regular Fit Long Sleeve Plaid Flannel Casual Shirts",
    colors: ["red", "gray"],
    price: 24,
    discountedPrice: 21,
    images: { gray: [shirt9, shirt10], red: [shirt11, shirt12] },
    tags: ["shirt", "featured"],
    description:
      "The Alimens & Gentle Men's Button Down Regular Fit Long Sleeve Plaid Flannel Casual Shirts offer classic style and comfortable wear, crafted from soft flannel fabric in a regular fit that allows for easy movement; featuring a button-down collar and long sleeves, these shirts are versatile enough for casual everyday wear, layering over t-shirts, or dressing up slightly with chinos or jeans, providing a timeless and relaxed look with a variety of plaid patterns to choose from.",
  },
  {
    id: 1007,
    title: "NIKE Sportswear Men's Pullover Club Hoodie",
    colors: ["black", "gray"],
    price: 60.99,
    discountedPrice: 52.23,
    images: { black: [hoodie1, hoodie2], gray: [hoodie3, hoodie4] },
    tags: ["hoodie", "featured", "latest"],
    description:
      "The Nike Sportswear Men's Pullover Club Hoodie is a classic, comfortable essential, crafted from soft fleece fabric for all-day warmth and a relaxed fit; it features a kangaroo pocket for convenient storage, a drawstring hood for adjustable coverage, and ribbed cuffs and hem for a snug, secure feel, making it perfect for everyday wear, workouts, or layering on cooler days.",
  },
  {
    id: 1008,
    title: "Skechers Men's Hands Free Slip-ins Summits High Range Sneaker",
    colors: ["black", "white"],
    price: 62,
    discountedPrice: 65,
    images: { black: [shoes9, shoes10], white: [shoes11, shoes12] },
    tags: ["shoes", "featured"],
    description:
      "The Skechers Men's Hands Free Slip-ins Summits High Range Sneaker offers effortless comfort and convenience with its innovative Hands Free Slip-ins design, allowing for easy on and off without bending over; featuring a lightweight athletic mesh upper for breathability, a comfortable Skechers Air-Cooled Memory Foam® cushioned insole, and a flexible traction outsole, this sneaker provides a comfortable and supportive fit ideal for everyday wear and light workouts.",
  },
  {
    id: 1009,
    title:
      "RORSOU R10 On-Ear Headphones with Microphone, Lightweight Folding Stereo Bass Headphones with 1.5M No-Tangle Cord, Portable Wired Headphones for Smartphone Tablet Computer MP3 / 4 (Black)",
    colors: ["black", "blue"],
    price: 15.99,
    discountedPrice: 12.99,
    images: { black: [headphone1, headphone2], blue: [headphone3, headphone4] },
    tags: ["headphones", "latest"],
    description:
      "The RORSOU R10 On-Ear Headphones offer a portable and convenient listening experience with powerful bass and clear stereo sound; their lightweight, folding design makes them easy to carry, while the 1.5-meter no-tangle cord ensures hassle-free use with smartphones, tablets, computers, and MP3/4 players; equipped with a built-in microphone, these wired headphones also facilitate hands-free calling and communication, making them a versatile choice for music, podcasts, and online conversations.",
  },
  {
    id: 1010,
    title:
      "Anker 332 USB-C Hub (5-in-1) with 4K HDMI Display, 5Gbps USB-C Data Port and 2 5Gbps USB-A Data Ports and for MacBook Pro, MacBook Air, Dell XPS, Lenovo Thinkpad, HP Laptops and More(White)",
    colors: ["black", "white"],
    price: 29.99,
    discountedPrice: 24.99,
    images: {
      black: [powerbank1, powerbank2],
      white: [powerbank3, powerbank4],
    },
    tags: ["headphones", "latest"],
    description:
      "The Anker 332 USB-C Hub (5-in-1) expands your laptop's connectivity with a single USB-C port, adding a stunning 4K HDMI display output for crisp visuals, a high-speed 5Gbps USB-C data port for fast file transfers, and two additional 5Gbps USB-A data ports for connecting peripherals like mice, keyboards, and flash drives; this compact and portable hub is compatible with a wide range of devices including MacBook Pro, MacBook Air, Dell XPS, Lenovo ThinkPad, HP laptops, and more, making it an ideal solution for boosting productivity and streamlining your workspace.",
  },
].map((product) => ({
  ...product,
  slug: product.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
}));

export default data;
