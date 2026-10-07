export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const restaurant = {
  name: "Saffron Hearth",
  tagline: "A modern Indian kitchen",
  address: "12th Main, HAL 2nd Stage, Indiranagar, Bengaluru 560038",
  phone: "+91 98450 12345",
  email: "hello@saffronhearth.in",
  hours: [
    { days: "Tue – Fri", time: "12:00 – 15:30 · 19:00 – 23:30" },
    { days: "Sat – Sun", time: "12:00 – 16:00 · 19:00 – 00:00" },
    { days: "Monday", time: "Closed" },
  ],
};

export const signatures = [
  {
    name: "Dum Gosht Biryani",
    note: "Slow-sealed in a handi for four hours, kewra and saffron rice, mutton on the bone.",
    price: 645,
    image: img("1563379091339-03b21ab4a4f8", 900),
  },
  {
    name: "Paneer Tikka Angaar",
    note: "Hung-curd marinade, charred peppers, served smoking on a cast-iron sizzler.",
    price: 425,
    image: img("1567188040759-fb8a883dc6d8", 900),
  },
  {
    name: "Malabar Meen Curry",
    note: "Kokum and coconut, curry leaf tempering, a squeeze of lime at the table.",
    price: 595,
    image: img("1574484284002-952d92456975", 900),
  },
];

export type Dish = {
  name: string;
  desc: string;
  price: number;
  veg: boolean;
  tag?: string;
};

export const menu: Record<string, Dish[]> = {
  "Small plates": [
    { name: "Samosa Chaat", desc: "Crushed samosa, ragda, tamarind, mint, sev.", price: 245, veg: true },
    { name: "Gilafi Seekh", desc: "Minced lamb, charcoal-grilled, pepper-onion crust.", price: 465, veg: false, tag: "Chef's pick" },
    { name: "Dahi Ke Kebab", desc: "Hung curd, cardamom, crisp outside, molten inside.", price: 325, veg: true },
    { name: "Amritsari Fish", desc: "Ajwain batter, river sole, green chutney.", price: 445, veg: false },
    { name: "Bombay Pav Bhaji", desc: "Butter-griddled pav, spiced mash, raw onion.", price: 285, veg: true },
  ],
  Mains: [
    { name: "Old Delhi Butter Chicken", desc: "Tandoor chicken in tomato-fenugreek makhani.", price: 525, veg: false, tag: "Bestseller" },
    { name: "Dal Hearth", desc: "Black lentils simmered overnight on the hearth.", price: 365, veg: true },
    { name: "Laal Maas", desc: "Rajasthani mutton, Mathania chillies, ghee.", price: 645, veg: false, tag: "Spicy" },
    { name: "Paneer Makhani", desc: "Fresh paneer, cashew-tomato gravy, kasuri methi.", price: 445, veg: true },
    { name: "Chettinad Pepper Prawns", desc: "Black pepper, star anise, curry leaves.", price: 695, veg: false },
  ],
  "Rice & breads": [
    { name: "Dum Gosht Biryani", desc: "Mutton, aged basmati, saffron, burani raita.", price: 645, veg: false },
    { name: "Subz Tehri", desc: "Seasonal vegetables, whole spices, fried onion.", price: 395, veg: true },
    { name: "Garlic Naan", desc: "Tandoor-blistered, brushed with garlic butter.", price: 95, veg: true },
    { name: "Laccha Paratha", desc: "Flaky, many-layered, whole wheat.", price: 85, veg: true },
  ],
  Desserts: [
    { name: "Gulab Jamun Brûlée", desc: "Warm jamun, caramelised rabdi crust.", price: 285, veg: true, tag: "New" },
    { name: "Saffron Kulfi", desc: "Hand-churned, pistachio dust, falooda.", price: 245, veg: true },
    { name: "Gajar Halwa", desc: "Winter carrots, khoya, slow-cooked in ghee.", price: 265, veg: true },
  ],
};

export const reviews = [
  {
    quote: "The dal alone is worth the drive across town. Smoky, rich, and somehow light.",
    name: "Ananya R.",
    source: "Google review",
  },
  {
    quote: "Best biryani I've had outside Lucknow. The service made our anniversary feel special.",
    name: "Rohit & Megha",
    source: "Zomato",
  },
  {
    quote: "Warm room, sharp cooking, an excellent cocktail list built around Indian spice.",
    name: "Bangalore Food Diaries",
    source: "Instagram",
  },
];

export const gallery = [
  { src: img("1517248135467-4c7edcad34c4"), alt: "Dining room with warm pendant lights" },
  { src: img("1565557623262-b51c2513a641", 900), alt: "Mutton curry with naan" },
  { src: img("1599487488170-d11ec9c172f0", 900), alt: "Kebabs grilling over charcoal" },
  { src: img("1514933651103-005eec06c04b"), alt: "The bar with backlit shelves" },
  { src: img("1610192244261-3f33de3f55e4", 900), alt: "Chaat topped with onion and coriander" },
];

export const menuImages: Record<string, { src: string; caption: string }> = {
  "Small plates": { src: img("1601050690597-df0568f70950", 900), caption: "Samosa, made to order" },
  Mains: { src: img("1631452180519-c014fe946bc7", 900), caption: "Old Delhi butter chicken" },
  "Rice & breads": { src: img("1589302168068-964664d93dc0", 900), caption: "Dum biryani, sealed in dough" },
  Desserts: { src: img("1517244683847-7456b63c5969", 900), caption: "Winter gajar halwa" },
};

export const experiences = [
  {
    title: "Chef's Tasting",
    meta: "9 courses · ₹3,400 per guest",
    desc: "A seasonal journey across India's regions, served at the counter facing the hearth.",
    image: img("1414235077428-338989a2e8c0", 1000),
  },
  {
    title: "The Spice Bar",
    meta: "Daily from 18:00",
    desc: "Cocktails built on kokum, curry leaf and smoked jaggery, with small plates till late.",
    image: img("1470337458703-46ad1756a187", 1000),
  },
  {
    title: "Private Dining",
    meta: "Up to 24 guests",
    desc: "A dedicated room and a menu shaped with our chef — birthdays, offsites, celebrations.",
    image: img("1592861956120-e524fc739696", 1000),
  },
];

export const accolades = [
  "Best New Restaurant · City Food Awards 2024",
  "Top 50 Indian Kitchens 2025",
  "Bar Programme of the Year",
  "Green Kitchen Certified",
];
