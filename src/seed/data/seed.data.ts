import * as bcrypt from 'bcrypt';

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';

interface SeedProduct {
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: ValidSizes[];
  gender: string[];
  tags: string[];
  images: string[];
  category: string;
}

interface SeedCategories {
  name_category: string;
  slug: string;
  description: string;
}

interface SeedUser {
  email: string;
  name: string;
  password: string;
  role: string[];
  isActive: boolean;
}

interface SeedReviews {
  rating: number;
  comment: string;
  created_at: Date;
}

interface SeedData {
  users: SeedUser[];
  products: SeedProduct[];
  categories: SeedCategories[];
  reviews: SeedReviews[];
}

export const initialData: SeedData = {
  users: [
    {
      name: 'super user',
      email: 'superuser@google.com',
      password: bcrypt.hashSync('_super_43435frgfr_user', 10),
      role: ['super-user'],
      isActive: true,
    },
    {
      name: 'Miss Tanya Lueilwitz II',
      email: 'burnice42@gmail.com',
      password: bcrypt.hashSync('_7Cv2e2S2RA5', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Darrell Sanford',
      email: 'libby21@hotmail.com',
      password: bcrypt.hashSync('RO6U__GeMCac', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Ms. Adriana Wolff',
      email: 'enoch_johnston@hotmail.com',
      password: bcrypt.hashSync('6IQTsMQVliFi', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Davion Medhurst II',
      email: 'jenny97@hotmail.com',
      password: bcrypt.hashSync('nVR7WBdlgSYa', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Miss Moriah Dibbert PhD',
      email: 'reggie_oconner55@hotmail.com',
      password: bcrypt.hashSync('whVasbUo57Kj', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Laury Crist-Denesik Jr.',
      email: 'clayton_reilly22@hotmail.com',
      password: bcrypt.hashSync('PAuAeOYFK0C1', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Noe Mills',
      email: 'idella_white31@hotmail.com',
      password: bcrypt.hashSync('sygKiwVsc_Do', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Karla Cremin Sr.',
      email: 'ramiro58@gmail.com',
      password: bcrypt.hashSync('agAofNWotpyh', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Otis Marks',
      email: 'terri_kuhic63@gmail.com',
      password: bcrypt.hashSync('rzkXU5mEstz4', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Marco Kuhn',
      email: 'carter_harris@yahoo.com',
      password: bcrypt.hashSync('ewZ8rQCJ6s9N', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Willis Wiegand',
      email: 'sherry16@gmail.com',
      password: bcrypt.hashSync('2CZ7rA4ApYhP', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Adolph Hills',
      email: 'jenna.armstrong21@gmail.com',
      password: bcrypt.hashSync('SJUxJRhK_vT0', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Ms. Sonia Nikolaus DVM',
      email: 'jaclyn_gleichner62@gmail.com',
      password: bcrypt.hashSync('flYKitcd93vJ', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Lazaro Hammes',
      email: 'dwayne.mann1@gmail.com',
      password: bcrypt.hashSync('EXyC1joMDJMp', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Saul Corkery',
      email: 'mckenzie_denesik@hotmail.com',
      password: bcrypt.hashSync('1BKYOQ3KqdBp', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Charlene Upton MD',
      email: 'patricia6@yahoo.com',
      password: bcrypt.hashSync('MzNYidb0fErF', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Timmothy Ondricka',
      email: 'inez_kilback70@gmail.com',
      password: bcrypt.hashSync('elhbh698r8y3', 10),
      role: ['admin'],
      isActive: true,
    },
    {
      name: 'Bradly Collier',
      email: 'aubrey9@hotmail.com',
      password: bcrypt.hashSync('EJ1Z4FXPam6M', 10),
      role: ['admin'],
      isActive: true,
    },
    {
      name: 'Rochelle Brakus',
      email: 'alphonso_kassulke5@hotmail.com',
      password: bcrypt.hashSync('4imjjnwb5k4L', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Natalie Funk',
      email: 'joan_bashirian@hotmail.com',
      password: bcrypt.hashSync('RIv9C5TZlXaM', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Joseph Rempel',
      email: 'renee53@gmail.com',
      password: bcrypt.hashSync('8gKNas7T1U0s', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Zack McKenzie',
      email: 'thomas_bartell@yahoo.com',
      password: bcrypt.hashSync('CP1kNgG5R9sT', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Rocio Parker',
      email: 'bernie.bruen87@hotmail.com',
      password: bcrypt.hashSync('ijI2EqrRaSoy', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Mr. Tracy Kassulke',
      email: 'erin_keeling@yahoo.com',
      password: bcrypt.hashSync('Sxb8eaw8Atlt', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Lillie Armstrong',
      email: 'leanne_emard@yahoo.com',
      password: bcrypt.hashSync('v_KYMFAlIwJw', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Violet Franecki',
      email: 'green.volkman17@yahoo.com',
      password: bcrypt.hashSync('H6puovvWLCNw', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Candace Hahn',
      email: 'eddie.hartmann79@yahoo.com',
      password: bcrypt.hashSync('RKnsvsHPC17q', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Devin Walker II',
      email: 'armando.mitchell-kessler28@gmail.com',
      password: bcrypt.hashSync('DwKBVDF3u7ko', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Mossie Hansen',
      email: 'liliana_friesen@yahoo.com',
      password: bcrypt.hashSync('F5HKcbCYkya8', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Lionel Tromp',
      email: 'antwan_veum@yahoo.com',
      password: bcrypt.hashSync('MrWRUfyMB3hp', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Nya Batz-Dibbert',
      email: 'lillian97@yahoo.com',
      password: bcrypt.hashSync('2AmO_887rq7Z', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Tracey Hilpert',
      email: 'lessie93@yahoo.com',
      password: bcrypt.hashSync('rEH3R_r4dGdF', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Justen Fay',
      email: 'rylee.stanton@yahoo.com',
      password: bcrypt.hashSync('G7tVvPhu48hI', 10),
      role: ['admin'],
      isActive: true,
    },
    {
      name: 'Marguerite Mills-Koss',
      email: 'garnet_gibson7@gmail.com',
      password: bcrypt.hashSync('_n1unFeK2FKs', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Mamie Beatty',
      email: 'lora_buckridge@gmail.com',
      password: bcrypt.hashSync('tqZy8HiXI4PY', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Cody Dietrich',
      email: 'else64@yahoo.com',
      password: bcrypt.hashSync('ltc6aCE2QElS', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Mattie Schneider',
      email: 'edwin_glover@gmail.com',
      password: bcrypt.hashSync('Hvn6GZfgisPP', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Mr. Ross Hagenes',
      email: 'jazmin_mertz13@gmail.com',
      password: bcrypt.hashSync('h7TfKBEnHqIe', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Yoshiko Veum',
      email: 'monte_powlowski57@yahoo.com',
      password: bcrypt.hashSync('CNheNPECA1wb', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Lillie Rutherford',
      email: 'juan_franecki75@gmail.com',
      password: bcrypt.hashSync('idF1fux7Dxre', 10),
      role: ['user'],
      isActive: true,
    },
    {
      name: 'Mandy Grant I',
      email: 'sheri24@gmail.com',
      password: bcrypt.hashSync('OXVJQ2EggY1q', 10),
      role: ['user'],
      isActive: true,
    },
  ],

  categories: [
    {
      name_category: 'Automotive',
      slug: 'automotive',
      description:
        'Products and accessories for vehicle maintenance, performance, and customization, including parts, tools, and car care essentials.',
    },
    {
      name_category: 'Retro Gaming',
      slug: 'retro-gaming',
      description:
        'Classic gaming consoles, cartridges, and memorabilia for enthusiasts and collectors of vintage video game systems.',
    },
    {
      name_category: 'Electronics',
      slug: 'electronics',
      description:
        'Latest consumer electronics including smartphones, laptops, accessories, and smart devices for everyday use.',
    },
    {
      name_category: 'Fashion',
      slug: 'fashion',
      description:
        'Clothing, footwear, and accessories reflecting modern trends and styles for all demographics.',
    },
    {
      name_category: 'Home & Kitchen',
      slug: 'home-kitchen',
      description:
        'Essential items and appliances designed to enhance comfort, functionality, and efficiency in home living spaces.',
    },
    {
      name_category: 'Sports & Fitness',
      slug: 'sports-fitness',
      description:
        'Equipment, apparel, and accessories to support physical activity, training, and a healthy lifestyle.',
    },
    {
      name_category: 'Beauty & Personal Care',
      slug: 'beauty-personal-care',
      description:
        'Personal care products, cosmetics, and wellness items designed to promote hygiene and enhance appearance.',
    },
    {
      name_category: 'Toys & Hobbies',
      slug: 'toys-hobbies',
      description:
        'Entertainment products including toys, games, and hobby supplies for all ages and interests.',
    },
    {
      name_category: 'Books & Media',
      slug: 'books-media',
      description:
        'A wide range of books, magazines, and digital media for education, entertainment, and professional development.',
    },
    {
      name_category: 'Garden & Outdoor',
      slug: 'garden-outdoor',
      description:
        'Tools, furniture, and accessories for gardening, landscaping, and outdoor living spaces.',
    },
    {
      name_category: 'Tools & DIY',
      slug: 'tools-diy',
      description:
        'Hand tools, power tools, and materials for construction, repairs, and do-it-yourself projects.',
    },
    {
      name_category: 'Office Supplies',
      slug: 'office-supplies',
      description:
        'Products designed to support productivity and organization in professional and home office environments.',
    },
  ],

  products: [
    {
      title: 'Premium Car Cleaning Kit',
      price: 49.99,
      description:
        'Complete automotive cleaning kit designed for professional-level interior and exterior detailing.',
      slug: 'premium-car-cleaning-kit',
      stock: 120,
      sizes: [],
      gender: ['unisex'],
      tags: ['car-care', 'cleaning', 'automotive', 'detailing'],
      images: [
        'https://picsum.photos/seed/premium-car-cleaning-kit/600/400',
        'https://picsum.photos/seed/premium-car-cleaning-kit-2/600/400',
      ],
      category: 'automotive',
    },
    {
      title: 'Vintage NES Console Bundle',
      price: 199.99,
      description:
        'Classic retro gaming console bundle including original-style controllers and preloaded games.',
      slug: 'vintage-nes-console-bundle',
      stock: 40,
      sizes: [],
      gender: ['unisex'],
      tags: ['retro', 'gaming', 'console', 'nes'],
      images: [
        'https://picsum.photos/seed/nes-console/600/400',
        'https://picsum.photos/seed/nes-console-2/600/400',
      ],
      category: 'retro-gaming',
    },
    {
      title: 'Wireless Noise Cancelling Headphones',
      price: 149.99,
      description:
        'High-performance wireless headphones with advanced noise cancellation and long battery life.',
      slug: 'wireless-noise-cancelling-headphones',
      stock: 85,
      sizes: [],
      gender: ['unisex'],
      tags: ['audio', 'electronics', 'wireless', 'headphones'],
      images: [
        'https://picsum.photos/seed/headphones/600/400',
        'https://picsum.photos/seed/headphones-2/600/400',
      ],
      category: 'electronics',
    },
    {
      title: 'Men Casual Slim Fit T-Shirt',
      price: 24.99,
      description:
        'Comfortable slim fit t-shirt made from breathable cotton fabric for everyday wear.',
      slug: 'men-casual-slim-fit-tshirt',
      stock: 200,
      sizes: ['S', 'M', 'L', 'XL'],
      gender: ['men'],
      tags: ['fashion', 'tshirt', 'casual', 'cotton'],
      images: [
        'https://picsum.photos/seed/tshirt-men/600/400',
        'https://picsum.photos/seed/tshirt-men-2/600/400',
      ],
      category: 'fashion',
    },
    {
      title: 'Stainless Steel Cookware Set',
      price: 179.99,
      description:
        'Durable cookware set designed for efficient heat distribution and long-lasting performance.',
      slug: 'stainless-steel-cookware-set',
      stock: 60,
      sizes: [],
      gender: ['unisex'],
      tags: ['kitchen', 'cookware', 'home', 'steel'],
      images: [
        'https://picsum.photos/seed/cookware/600/400',
        'https://picsum.photos/seed/cookware-2/600/400',
      ],
      category: 'home-kitchen',
    },
    {
      title: 'Adjustable Dumbbell Set',
      price: 129.99,
      description:
        'Versatile adjustable dumbbell set ideal for strength training at home.',
      slug: 'adjustable-dumbbell-set',
      stock: 70,
      sizes: [],
      gender: ['unisex'],
      tags: ['fitness', 'gym', 'weights', 'training'],
      images: [
        'https://picsum.photos/seed/dumbbell/600/400',
        'https://picsum.photos/seed/dumbbell-2/600/400',
      ],
      category: 'sports-fitness',
    },
    {
      title: 'Organic Facial Skincare Kit',
      price: 59.99,
      description:
        'Complete skincare kit made with organic ingredients for healthy and glowing skin.',
      slug: 'organic-facial-skincare-kit',
      stock: 110,
      sizes: [],
      gender: ['women'],
      tags: ['beauty', 'skincare', 'organic', 'face'],
      images: [
        'https://picsum.photos/seed/skincare/600/400',
        'https://picsum.photos/seed/skincare-2/600/400',
      ],
      category: 'beauty-personal-care',
    },
    {
      title: 'Remote Control Racing Car',
      price: 39.99,
      description:
        'High-speed remote control car designed for thrilling racing experiences.',
      slug: 'remote-control-racing-car',
      stock: 150,
      sizes: [],
      gender: ['unisex'],
      tags: ['toy', 'rc-car', 'racing', 'fun'],
      images: [
        'https://picsum.photos/seed/rc-car/600/400',
        'https://picsum.photos/seed/rc-car-2/600/400',
      ],
      category: 'toys-hobbies',
    },
    {
      title: 'Modern Business Strategy Book',
      price: 29.99,
      description:
        'Insightful book covering advanced business strategies and market analysis techniques.',
      slug: 'modern-business-strategy-book',
      stock: 95,
      sizes: [],
      gender: ['unisex'],
      tags: ['book', 'business', 'strategy', 'learning'],
      images: [
        'https://picsum.photos/seed/book-strategy/600/400',
        'https://picsum.photos/seed/book-strategy-2/600/400',
      ],
      category: 'books-media',
    },
    {
      title: 'Outdoor Patio Furniture Set',
      price: 499.99,
      description:
        'Elegant outdoor furniture set designed for comfort and durability in all weather conditions.',
      slug: 'outdoor-patio-furniture-set',
      stock: 25,
      sizes: [],
      gender: ['unisex'],
      tags: ['outdoor', 'garden', 'furniture', 'patio'],
      images: [
        'https://picsum.photos/seed/patio/600/400',
        'https://picsum.photos/seed/patio-2/600/400',
      ],
      category: 'garden-outdoor',
    },
    {
      title: 'Cordless Power Drill',
      price: 89.99,
      description:
        'High-performance cordless drill suitable for various DIY and professional tasks.',
      slug: 'cordless-power-drill',
      stock: 75,
      sizes: [],
      gender: ['unisex'],
      tags: ['tools', 'drill', 'diy', 'power'],
      images: [
        'https://picsum.photos/seed/drill/600/400',
        'https://picsum.photos/seed/drill-2/600/400',
      ],
      category: 'tools-diy',
    },
    {
      title: 'Ergonomic Office Chair',
      price: 219.99,
      description:
        'Comfortable ergonomic chair designed to improve posture and productivity.',
      slug: 'ergonomic-office-chair',
      stock: 55,
      sizes: [],
      gender: ['unisex'],
      tags: ['office', 'chair', 'ergonomic', 'workspace'],
      images: [
        'https://picsum.photos/seed/chair/600/400',
        'https://picsum.photos/seed/chair-2/600/400',
      ],
      category: 'office-supplies',
    },

    // Para no hacer ilegible el mensaje, continúo con el patrón equilibrado y consistente

    {
      title: 'Car Tire Pressure Gauge',
      price: 14.99,
      description:
        'Accurate and easy-to-use tire pressure gauge for optimal vehicle maintenance.',
      slug: 'car-tire-pressure-gauge',
      stock: 300,
      sizes: [],
      gender: ['unisex'],
      tags: ['automotive', 'tools', 'car', 'maintenance'],
      images: [
        'https://picsum.photos/seed/tire-gauge/600/400',
        'https://picsum.photos/seed/tire-gauge-2/600/400',
      ],
      category: 'automotive',
    },
    {
      title: 'Retro Game Boy Handheld',
      price: 129.99,
      description:
        'Portable retro gaming device with a nostalgic design and classic gameplay experience.',
      slug: 'retro-gameboy-handheld',
      stock: 65,
      sizes: [],
      gender: ['unisex'],
      tags: ['retro', 'gaming', 'handheld', 'console'],
      images: [
        'https://picsum.photos/seed/gameboy/600/400',
        'https://picsum.photos/seed/gameboy-2/600/400',
      ],
      category: 'retro-gaming',
    },
    {
      title: 'Smartwatch Fitness Tracker',
      price: 99.99,
      description:
        'Advanced smartwatch with health monitoring and fitness tracking features.',
      slug: 'smartwatch-fitness-tracker',
      stock: 140,
      sizes: [],
      gender: ['unisex'],
      tags: ['electronics', 'watch', 'fitness', 'smart'],
      images: [
        'https://picsum.photos/seed/smartwatch/600/400',
        'https://picsum.photos/seed/smartwatch-2/600/400',
      ],
      category: 'electronics',
    },
    {
      title: 'Women Summer Dress Floral',
      price: 39.99,
      description:
        'Lightweight floral summer dress designed for comfort and elegance.',
      slug: 'women-summer-dress-floral',
      stock: 180,
      sizes: ['S', 'M', 'L'],
      gender: ['women'],
      tags: ['fashion', 'dress', 'summer', 'floral'],
      images: [
        'https://picsum.photos/seed/dress/600/400',
        'https://picsum.photos/seed/dress-2/600/400',
      ],
      category: 'fashion',
    },
    {
      title: 'Car Dashboard Phone Mount',
      price: 19.99,
      description:
        'Secure and adjustable phone mount designed for safe and convenient driving.',
      slug: 'car-dashboard-phone-mount',
      stock: 210,
      sizes: [],
      gender: ['unisex'],
      tags: ['automotive', 'phone', 'mount', 'car'],
      images: [
        'https://picsum.photos/seed/car-dashboard-phone-mount/600/400',
        'https://picsum.photos/seed/car-dashboard-phone-mount-2/600/400',
      ],
      category: 'automotive',
    },
    {
      title: 'SNES Classic Controller',
      price: 29.99,
      description:
        'Ergonomic retro controller compatible with classic gaming systems.',
      slug: 'snes-classic-controller',
      stock: 95,
      sizes: [],
      gender: ['unisex'],
      tags: ['retro', 'controller', 'gaming', 'snes'],
      images: [
        'https://picsum.photos/seed/snes-classic-controller/600/400',
        'https://picsum.photos/seed/snes-classic-controller-2/600/400',
      ],
      category: 'retro-gaming',
    },
    {
      title: 'Bluetooth Portable Speaker',
      price: 59.99,
      description:
        'Compact speaker delivering powerful sound with wireless connectivity.',
      slug: 'bluetooth-portable-speaker',
      stock: 130,
      sizes: [],
      gender: ['unisex'],
      tags: ['electronics', 'speaker', 'bluetooth', 'audio'],
      images: [
        'https://picsum.photos/seed/bluetooth-portable-speaker/600/400',
        'https://picsum.photos/seed/bluetooth-portable-speaker-2/600/400',
      ],
      category: 'electronics',
    },
    {
      title: 'Men Hoodie Classic Fit',
      price: 49.99,
      description:
        'Warm and comfortable hoodie made from premium cotton blend fabric.',
      slug: 'men-hoodie-classic-fit',
      stock: 160,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      gender: ['men'],
      tags: ['fashion', 'hoodie', 'casual', 'winter'],
      images: [
        'https://picsum.photos/seed/men-hoodie-classic-fit/600/400',
        'https://picsum.photos/seed/men-hoodie-classic-fit-2/600/400',
      ],
      category: 'fashion',
    },
    {
      title: 'Non-Stick Frying Pan',
      price: 34.99,
      description: 'High-quality non-stick pan ideal for everyday cooking.',
      slug: 'non-stick-frying-pan',
      stock: 140,
      sizes: [],
      gender: ['unisex'],
      tags: ['kitchen', 'cookware', 'pan', 'home'],
      images: [
        'https://picsum.photos/seed/non-stick-frying-pan/600/400',
        'https://picsum.photos/seed/non-stick-frying-pan-2/600/400',
      ],
      category: 'home-kitchen',
    },
    {
      title: 'Yoga Mat Pro Grip',
      price: 39.99,
      description:
        'Durable yoga mat with superior grip for all fitness levels.',
      slug: 'yoga-mat-pro-grip',
      stock: 175,
      sizes: [],
      gender: ['unisex'],
      tags: ['fitness', 'yoga', 'mat', 'exercise'],
      images: [
        'https://picsum.photos/seed/yoga-mat-pro-grip/600/400',
        'https://picsum.photos/seed/yoga-mat-pro-grip-2/600/400',
      ],
      category: 'sports-fitness',
    },
    {
      title: 'Hair Dryer Ionic Technology',
      price: 69.99,
      description:
        'Professional hair dryer designed to reduce frizz and enhance shine.',
      slug: 'hair-dryer-ionic-technology',
      stock: 90,
      sizes: [],
      gender: ['women'],
      tags: ['beauty', 'hair', 'dryer', 'care'],
      images: [
        'https://picsum.photos/seed/hair-dryer-ionic-technology/600/400',
        'https://picsum.photos/seed/hair-dryer-ionic-technology-2/600/400',
      ],
      category: 'beauty-personal-care',
    },
    {
      title: 'Building Blocks Set 500pcs',
      price: 44.99,
      description:
        'Creative building block set designed to stimulate imagination and learning.',
      slug: 'building-blocks-set-500pcs',
      stock: 200,
      sizes: [],
      gender: ['unisex'],
      tags: ['toys', 'blocks', 'kids', 'creative'],
      images: [
        'https://picsum.photos/seed/building-blocks-set-500pcs/600/400',
        'https://picsum.photos/seed/building-blocks-set-500pcs-2/600/400',
      ],
      category: 'toys-hobbies',
    },
    {
      title: 'Science Fiction Novel Collection',
      price: 39.99,
      description:
        'A curated set of modern science fiction novels from top authors.',
      slug: 'science-fiction-novel-collection',
      stock: 75,
      sizes: [],
      gender: ['unisex'],
      tags: ['books', 'fiction', 'reading', 'collection'],
      images: [
        'https://picsum.photos/seed/science-fiction-novel-collection/600/400',
        'https://picsum.photos/seed/science-fiction-novel-collection-2/600/400',
      ],
      category: 'books-media',
    },
    {
      title: 'Garden Hose 20m Flexible',
      price: 54.99,
      description:
        'Flexible and durable garden hose suitable for all watering needs.',
      slug: 'garden-hose-20m-flexible',
      stock: 110,
      sizes: [],
      gender: ['unisex'],
      tags: ['garden', 'hose', 'watering', 'outdoor'],
      images: [
        'https://picsum.photos/seed/garden-hose-20m-flexible/600/400',
        'https://picsum.photos/seed/garden-hose-20m-flexible-2/600/400',
      ],
      category: 'garden-outdoor',
    },
    {
      title: 'Hammer Steel Claw',
      price: 19.99,
      description: 'Durable steel hammer designed for precision and strength.',
      slug: 'hammer-steel-claw',
      stock: 180,
      sizes: [],
      gender: ['unisex'],
      tags: ['tools', 'hammer', 'diy', 'construction'],
      images: [
        'https://picsum.photos/seed/hammer-steel-claw/600/400',
        'https://picsum.photos/seed/hammer-steel-claw-2/600/400',
      ],
      category: 'tools-diy',
    },
    {
      title: 'Desk Organizer Multi Compartment',
      price: 24.99,
      description:
        'Efficient desk organizer to keep office supplies neatly arranged.',
      slug: 'desk-organizer-multi-compartment',
      stock: 150,
      sizes: [],
      gender: ['unisex'],
      tags: ['office', 'organizer', 'desk', 'storage'],
      images: [
        'https://picsum.photos/seed/desk-organizer-multi-compartment/600/400',
        'https://picsum.photos/seed/desk-organizer-multi-compartment-2/600/400',
      ],
      category: 'office-supplies',
    },

    {
      title: 'Car Vacuum Cleaner Portable',
      price: 39.99,
      description:
        'Compact vacuum cleaner designed specifically for car interiors.',
      slug: 'car-vacuum-cleaner-portable',
      stock: 130,
      sizes: [],
      gender: ['unisex'],
      tags: ['automotive', 'vacuum', 'cleaning', 'car'],
      images: [
        'https://picsum.photos/seed/car-vacuum-cleaner-portable/600/400',
        'https://picsum.photos/seed/car-vacuum-cleaner-portable-2/600/400',
      ],
      category: 'automotive',
    },
    {
      title: 'Retro Arcade Joystick USB',
      price: 49.99,
      description:
        'Classic arcade joystick compatible with modern systems via USB.',
      slug: 'retro-arcade-joystick-usb',
      stock: 80,
      sizes: [],
      gender: ['unisex'],
      tags: ['retro', 'arcade', 'joystick', 'gaming'],
      images: [
        'https://picsum.photos/seed/retro-arcade-joystick-usb/600/400',
        'https://picsum.photos/seed/retro-arcade-joystick-usb-2/600/400',
      ],
      category: 'retro-gaming',
    },

    {
      title: '4K Ultra HD Smart TV 55 Inch',
      price: 599.99,
      description:
        'High-definition smart TV with vibrant colors and streaming capabilities.',
      slug: '4k-ultra-hd-smart-tv-55-inch',
      stock: 45,
      sizes: [],
      gender: ['unisex'],
      tags: ['electronics', 'tv', 'smart', '4k'],
      images: [
        'https://picsum.photos/seed/4k-ultra-hd-smart-tv-55-inch/600/400',
        'https://picsum.photos/seed/4k-ultra-hd-smart-tv-55-inch-2/600/400',
      ],
      category: 'electronics',
    },

    {
      title: 'Women Denim Jacket Classic',
      price: 79.99,
      description:
        'Stylish denim jacket perfect for casual and semi-formal wear.',
      slug: 'women-denim-jacket-classic',
      stock: 140,
      sizes: ['S', 'M', 'L', 'XL'],
      gender: ['women'],
      tags: ['fashion', 'jacket', 'denim', 'style'],
      images: [
        'https://picsum.photos/seed/women-denim-jacket-classic/600/400',
        'https://picsum.photos/seed/women-denim-jacket-classic-2/600/400',
      ],
      category: 'fashion',
    },
    {
      title: 'Car Jump Starter Power Bank',
      price: 89.99,
      description:
        'Portable jump starter with built-in power bank for emergency vehicle battery support.',
      slug: 'car-jump-starter-power-bank',
      stock: 95,
      sizes: [],
      gender: ['unisex'],
      tags: ['automotive', 'battery', 'emergency', 'power'],
      images: [
        'https://picsum.photos/seed/car-jump-starter-power-bank/600/400',
        'https://picsum.photos/seed/car-jump-starter-power-bank-2/600/400',
      ],
      category: 'automotive',
    },
    {
      title: 'Retro Sega Genesis Console',
      price: 179.99,
      description:
        'Classic Sega Genesis console bundle with iconic retro gaming experience.',
      slug: 'retro-sega-genesis-console',
      stock: 40,
      sizes: [],
      gender: ['unisex'],
      tags: ['retro', 'gaming', 'console', 'sega'],
      images: [
        'https://picsum.photos/seed/retro-sega-genesis-console/600/400',
        'https://picsum.photos/seed/retro-sega-genesis-console-2/600/400',
      ],
      category: 'retro-gaming',
    },
    {
      title: 'Wireless Charging Pad Fast Charge',
      price: 29.99,
      description:
        'Fast wireless charging pad compatible with modern smartphones and devices.',
      slug: 'wireless-charging-pad-fast-charge',
      stock: 160,
      sizes: [],
      gender: ['unisex'],
      tags: ['electronics', 'charger', 'wireless', 'tech'],
      images: [
        'https://picsum.photos/seed/wireless-charging-pad-fast-charge/600/400',
        'https://picsum.photos/seed/wireless-charging-pad-fast-charge-2/600/400',
      ],
      category: 'electronics',
    },
    {
      title: 'Men Slim Fit Jeans Classic',
      price: 59.99,
      description:
        'Stylish slim fit jeans crafted from durable denim for everyday wear.',
      slug: 'men-slim-fit-jeans-classic',
      stock: 140,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      gender: ['men'],
      tags: ['fashion', 'jeans', 'denim', 'casual'],
      images: [
        'https://picsum.photos/seed/men-slim-fit-jeans-classic/600/400',
        'https://picsum.photos/seed/men-slim-fit-jeans-classic-2/600/400',
      ],
      category: 'fashion',
    },
    {
      title: 'Electric Kettle Stainless Steel',
      price: 44.99,
      description:
        'Efficient electric kettle with rapid boiling and stainless steel design.',
      slug: 'electric-kettle-stainless-steel',
      stock: 120,
      sizes: [],
      gender: ['unisex'],
      tags: ['kitchen', 'appliance', 'kettle', 'home'],
      images: [
        'https://picsum.photos/seed/electric-kettle-stainless-steel/600/400',
        'https://picsum.photos/seed/electric-kettle-stainless-steel-2/600/400',
      ],
      category: 'home-kitchen',
    },
    {
      title: 'Resistance Bands Set Fitness',
      price: 34.99,
      description:
        'Versatile resistance bands set for strength training and rehabilitation exercises.',
      slug: 'resistance-bands-set-fitness',
      stock: 180,
      sizes: [],
      gender: ['unisex'],
      tags: ['fitness', 'bands', 'training', 'exercise'],
      images: [
        'https://picsum.photos/seed/resistance-bands-set-fitness/600/400',
        'https://picsum.photos/seed/resistance-bands-set-fitness-2/600/400',
      ],
      category: 'sports-fitness',
    },
    {
      title: 'Face Moisturizer Hydrating Cream',
      price: 24.99,
      description:
        'Deep hydrating face cream designed to nourish and protect sensitive skin.',
      slug: 'face-moisturizer-hydrating-cream',
      stock: 200,
      sizes: [],
      gender: ['women'],
      tags: ['beauty', 'skincare', 'moisturizer', 'face'],
      images: [
        'https://picsum.photos/seed/face-moisturizer-hydrating-cream/600/400',
        'https://picsum.photos/seed/face-moisturizer-hydrating-cream-2/600/400',
      ],
      category: 'beauty-personal-care',
    },
    {
      title: 'Puzzle 1000 Pieces Landscape',
      price: 19.99,
      description:
        'Challenging 1000-piece puzzle featuring a beautiful landscape design.',
      slug: 'puzzle-1000-pieces-landscape',
      stock: 150,
      sizes: [],
      gender: ['unisex'],
      tags: ['toys', 'puzzle', 'game', 'hobby'],
      images: [
        'https://picsum.photos/seed/puzzle-1000-pieces-landscape/600/400',
        'https://picsum.photos/seed/puzzle-1000-pieces-landscape-2/600/400',
      ],
      category: 'toys-hobbies',
    },
    {
      title: 'History of Technology Book',
      price: 32.99,
      description:
        'Comprehensive book exploring the evolution of technology through history.',
      slug: 'history-of-technology-book',
      stock: 85,
      sizes: [],
      gender: ['unisex'],
      tags: ['books', 'history', 'technology', 'reading'],
      images: [
        'https://picsum.photos/seed/history-of-technology-book/600/400',
        'https://picsum.photos/seed/history-of-technology-book-2/600/400',
      ],
      category: 'books-media',
    },
    {
      title: 'Outdoor Solar Garden Lights',
      price: 49.99,
      description:
        'Energy-efficient solar-powered lights for enhancing outdoor spaces.',
      slug: 'outdoor-solar-garden-lights',
      stock: 130,
      sizes: [],
      gender: ['unisex'],
      tags: ['garden', 'lights', 'solar', 'outdoor'],
      images: [
        'https://picsum.photos/seed/outdoor-solar-garden-lights/600/400',
        'https://picsum.photos/seed/outdoor-solar-garden-lights-2/600/400',
      ],
      category: 'garden-outdoor',
    },
    {
      title: 'Adjustable Wrench Heavy Duty',
      price: 22.99,
      description:
        'Heavy-duty adjustable wrench suitable for professional and home use.',
      slug: 'adjustable-wrench-heavy-duty',
      stock: 170,
      sizes: [],
      gender: ['unisex'],
      tags: ['tools', 'wrench', 'diy', 'repair'],
      images: [
        'https://picsum.photos/seed/adjustable-wrench-heavy-duty/600/400',
        'https://picsum.photos/seed/adjustable-wrench-heavy-duty-2/600/400',
      ],
      category: 'tools-diy',
    },
    {
      title: 'Office Wireless Keyboard and Mouse',
      price: 54.99,
      description:
        'Ergonomic wireless keyboard and mouse combo for efficient office work.',
      slug: 'office-wireless-keyboard-and-mouse',
      stock: 140,
      sizes: [],
      gender: ['unisex'],
      tags: ['office', 'keyboard', 'mouse', 'wireless'],
      images: [
        'https://picsum.photos/seed/office-wireless-keyboard-and-mouse/600/400',
        'https://picsum.photos/seed/office-wireless-keyboard-and-mouse-2/600/400',
      ],
      category: 'office-supplies',
    },
    {
      title: 'Car Seat Organizer Storage',
      price: 27.99,
      description:
        'Multi-pocket car seat organizer for keeping essentials within reach.',
      slug: 'car-seat-organizer-storage',
      stock: 190,
      sizes: [],
      gender: ['unisex'],
      tags: ['automotive', 'organizer', 'car', 'storage'],
      images: [
        'https://picsum.photos/seed/car-seat-organizer-storage/600/400',
        'https://picsum.photos/seed/car-seat-organizer-storage-2/600/400',
      ],
      category: 'automotive',
    },
    {
      title: 'Retro Game Cartridge Storage Case',
      price: 24.99,
      description:
        'Protective storage case designed for organizing retro game cartridges.',
      slug: 'retro-game-cartridge-storage-case',
      stock: 75,
      sizes: [],
      gender: ['unisex'],
      tags: ['retro', 'gaming', 'storage', 'cartridge'],
      images: [
        'https://picsum.photos/seed/retro-game-cartridge-storage-case/600/400',
        'https://picsum.photos/seed/retro-game-cartridge-storage-case-2/600/400',
      ],
      category: 'retro-gaming',
    },
    {
      title: 'Smart LED Light Bulb WiFi',
      price: 19.99,
      description:
        'WiFi-enabled smart bulb with customizable colors and voice control support.',
      slug: 'smart-led-light-bulb-wifi',
      stock: 210,
      sizes: [],
      gender: ['unisex'],
      tags: ['electronics', 'smart', 'lighting', 'wifi'],
      images: [
        'https://picsum.photos/seed/smart-led-light-bulb-wifi/600/400',
        'https://picsum.photos/seed/smart-led-light-bulb-wifi-2/600/400',
      ],
      category: 'electronics',
    },
    {
      title: 'Women Activewear Leggings High Waist',
      price: 44.99,
      description:
        'High-waist leggings designed for comfort and performance during workouts.',
      slug: 'women-activewear-leggings-high-waist',
      stock: 160,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      gender: ['women'],
      tags: ['fashion', 'leggings', 'activewear', 'fitness'],
      images: [
        'https://picsum.photos/seed/women-activewear-leggings-high-waist/600/400',
        'https://picsum.photos/seed/women-activewear-leggings-high-waist-2/600/400',
      ],
      category: 'fashion',
    },
    {
      title: 'Car Windshield Sun Shade',
      price: 21.99,
      description:
        'Foldable sun shade designed to protect your car interior from heat and UV rays.',
      slug: 'car-windshield-sun-shade',
      stock: 180,
      sizes: [],
      gender: ['unisex'],
      tags: ['automotive', 'sunshade', 'car', 'protection'],
      images: [
        'https://picsum.photos/seed/car-windshield-sun-shade/600/400',
        'https://picsum.photos/seed/car-windshield-sun-shade-2/600/400',
      ],
      category: 'automotive',
    },
    {
      title: 'Retro Game Console Handheld Mini',
      price: 89.99,
      description:
        'Compact handheld retro console preloaded with classic games.',
      slug: 'retro-game-console-handheld-mini',
      stock: 70,
      sizes: [],
      gender: ['unisex'],
      tags: ['retro', 'gaming', 'console', 'portable'],
      images: [
        'https://picsum.photos/seed/retro-game-console-handheld-mini/600/400',
        'https://picsum.photos/seed/retro-game-console-handheld-mini-2/600/400',
      ],
      category: 'retro-gaming',
    },
    {
      title: 'USB-C Fast Charging Cable',
      price: 14.99,
      description:
        'Durable USB-C cable designed for fast charging and data transfer.',
      slug: 'usb-c-fast-charging-cable',
      stock: 250,
      sizes: [],
      gender: ['unisex'],
      tags: ['electronics', 'cable', 'charging', 'usb-c'],
      images: [
        'https://picsum.photos/seed/usb-c-fast-charging-cable/600/400',
        'https://picsum.photos/seed/usb-c-fast-charging-cable-2/600/400',
      ],
      category: 'electronics',
    },
    {
      title: 'Men Formal Shirt Slim Fit',
      price: 45.99,
      description:
        'Elegant slim fit formal shirt ideal for business and special occasions.',
      slug: 'men-formal-shirt-slim-fit',
      stock: 130,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      gender: ['men'],
      tags: ['fashion', 'shirt', 'formal', 'men'],
      images: [
        'https://picsum.photos/seed/men-formal-shirt-slim-fit/600/400',
        'https://picsum.photos/seed/men-formal-shirt-slim-fit-2/600/400',
      ],
      category: 'fashion',
    },
    {
      title: 'Kitchen Knife Set Professional',
      price: 99.99,
      description:
        'High-quality kitchen knife set designed for precision and durability.',
      slug: 'kitchen-knife-set-professional',
      stock: 85,
      sizes: [],
      gender: ['unisex'],
      tags: ['kitchen', 'knives', 'cooking', 'home'],
      images: [
        'https://picsum.photos/seed/kitchen-knife-set-professional/600/400',
        'https://picsum.photos/seed/kitchen-knife-set-professional-2/600/400',
      ],
      category: 'home-kitchen',
    },
    {
      title: 'Running Shoes Lightweight',
      price: 79.99,
      description:
        'Lightweight running shoes designed for comfort and performance.',
      slug: 'running-shoes-lightweight',
      stock: 150,
      sizes: [],
      gender: ['men', 'women'],
      tags: ['sports', 'shoes', 'running', 'fitness'],
      images: [
        'https://picsum.photos/seed/running-shoes-lightweight/600/400',
        'https://picsum.photos/seed/running-shoes-lightweight-2/600/400',
      ],
      category: 'sports-fitness',
    },
    {
      title: 'Makeup Brush Set Professional',
      price: 34.99,
      description:
        'Complete set of professional makeup brushes for flawless application.',
      slug: 'makeup-brush-set-professional',
      stock: 160,
      sizes: [],
      gender: ['women'],
      tags: ['beauty', 'makeup', 'brushes', 'cosmetics'],
      images: [
        'https://picsum.photos/seed/makeup-brush-set-professional/600/400',
        'https://picsum.photos/seed/makeup-brush-set-professional-2/600/400',
      ],
      category: 'beauty-personal-care',
    },
    {
      title: 'Kids Educational Toy Tablet',
      price: 49.99,
      description:
        'Interactive educational toy tablet designed for kids learning and entertainment.',
      slug: 'kids-educational-toy-tablet',
      stock: 140,
      sizes: [],
      gender: ['kid'],
      tags: ['toys', 'kids', 'education', 'tablet'],
      images: [
        'https://picsum.photos/seed/kids-educational-toy-tablet/600/400',
        'https://picsum.photos/seed/kids-educational-toy-tablet-2/600/400',
      ],
      category: 'toys-hobbies',
    },
    {
      title: 'Self Development Book Guide',
      price: 27.99,
      description:
        'Inspirational self-development book focused on personal growth and productivity.',
      slug: 'self-development-book-guide',
      stock: 95,
      sizes: [],
      gender: ['unisex'],
      tags: ['books', 'self-help', 'growth', 'reading'],
      images: [
        'https://picsum.photos/seed/self-development-book-guide/600/400',
        'https://picsum.photos/seed/self-development-book-guide-2/600/400',
      ],
      category: 'books-media',
    },
    {
      title: 'Garden Tool Set 5 Pieces',
      price: 39.99,
      description:
        'Complete set of essential gardening tools for home and outdoor use.',
      slug: 'garden-tool-set-5-pieces',
      stock: 120,
      sizes: [],
      gender: ['unisex'],
      tags: ['garden', 'tools', 'outdoor', 'plants'],
      images: [
        'https://picsum.photos/seed/garden-tool-set-5-pieces/600/400',
        'https://picsum.photos/seed/garden-tool-set-5-pieces-2/600/400',
      ],
      category: 'garden-outdoor',
    },
    {
      title: 'Electric Screwdriver Kit',
      price: 59.99,
      description:
        'Compact electric screwdriver kit suitable for DIY and repair tasks.',
      slug: 'electric-screwdriver-kit',
      stock: 110,
      sizes: [],
      gender: ['unisex'],
      tags: ['tools', 'screwdriver', 'electric', 'diy'],
      images: [
        'https://picsum.photos/seed/electric-screwdriver-kit/600/400',
        'https://picsum.photos/seed/electric-screwdriver-kit-2/600/400',
      ],
      category: 'tools-diy',
    },
    {
      title: 'Office Desk Lamp LED Adjustable',
      price: 29.99,
      description:
        'Adjustable LED desk lamp designed for efficient and comfortable lighting.',
      slug: 'office-desk-lamp-led-adjustable',
      stock: 150,
      sizes: [],
      gender: ['unisex'],
      tags: ['office', 'lamp', 'lighting', 'desk'],
      images: [
        'https://picsum.photos/seed/office-desk-lamp-led-adjustable/600/400',
        'https://picsum.photos/seed/office-desk-lamp-led-adjustable-2/600/400',
      ],
      category: 'office-supplies',
    },
    {
      title: 'Car Bluetooth FM Transmitter',
      price: 26.99,
      description:
        'Wireless FM transmitter for streaming music and hands-free calls in your car.',
      slug: 'car-bluetooth-fm-transmitter',
      stock: 170,
      sizes: [],
      gender: ['unisex'],
      tags: ['automotive', 'bluetooth', 'music', 'car'],
      images: [
        'https://picsum.photos/seed/car-bluetooth-fm-transmitter/600/400',
        'https://picsum.photos/seed/car-bluetooth-fm-transmitter-2/600/400',
      ],
      category: 'automotive',
    },
    {
      title: 'Retro Gaming Posters Set',
      price: 22.99,
      description:
        'Decorative poster set featuring iconic retro gaming designs.',
      slug: 'retro-gaming-posters-set',
      stock: 90,
      sizes: [],
      gender: ['unisex'],
      tags: ['retro', 'decor', 'gaming', 'posters'],
      images: [
        'https://picsum.photos/seed/retro-gaming-posters-set/600/400',
        'https://picsum.photos/seed/retro-gaming-posters-set-2/600/400',
      ],
      category: 'retro-gaming',
    },
    {
      title: 'Wireless Earbuds Noise Isolation',
      price: 69.99,
      description:
        'Compact wireless earbuds with noise isolation and high-quality sound.',
      slug: 'wireless-earbuds-noise-isolation',
      stock: 140,
      sizes: [],
      gender: ['unisex'],
      tags: ['electronics', 'audio', 'earbuds', 'wireless'],
      images: [
        'https://picsum.photos/seed/wireless-earbuds-noise-isolation/600/400',
        'https://picsum.photos/seed/wireless-earbuds-noise-isolation-2/600/400',
      ],
      category: 'electronics',
    },
    {
      title: 'Women Casual Sneakers Comfort',
      price: 64.99,
      description: 'Comfortable casual sneakers designed for everyday wear.',
      slug: 'women-casual-sneakers-comfort',
      stock: 135,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      gender: ['women'],
      tags: ['fashion', 'sneakers', 'casual', 'shoes'],
      images: [
        'https://picsum.photos/seed/women-casual-sneakers-comfort/600/400',
        'https://picsum.photos/seed/women-casual-sneakers-comfort-2/600/400',
      ],
      category: 'fashion',
    },
    {
      title: 'Car Emergency Roadside Kit',
      price: 59.99,
      description:
        'Comprehensive roadside emergency kit for safety and preparedness during travel.',
      slug: 'car-emergency-roadside-kit',
      stock: 120,
      sizes: [],
      gender: ['unisex'],
      tags: ['automotive', 'emergency', 'safety', 'car'],
      images: [
        'https://picsum.photos/seed/car-emergency-roadside-kit/600/400',
        'https://picsum.photos/seed/car-emergency-roadside-kit-2/600/400',
      ],
      category: 'automotive',
    },
    {
      title: 'Retro Arcade Game Machine Mini',
      price: 129.99,
      description:
        'Mini arcade machine with built-in classic games for nostalgic entertainment.',
      slug: 'retro-arcade-game-machine-mini',
      stock: 60,
      sizes: [],
      gender: ['unisex'],
      tags: ['retro', 'arcade', 'gaming', 'console'],
      images: [
        'https://picsum.photos/seed/retro-arcade-game-machine-mini/600/400',
        'https://picsum.photos/seed/retro-arcade-game-machine-mini-2/600/400',
      ],
      category: 'retro-gaming',
    },
    {
      title: 'Laptop Stand Adjustable Aluminum',
      price: 39.99,
      description:
        'Ergonomic aluminum laptop stand designed for better posture and cooling.',
      slug: 'laptop-stand-adjustable-aluminum',
      stock: 140,
      sizes: [],
      gender: ['unisex'],
      tags: ['electronics', 'laptop', 'stand', 'office'],
      images: [
        'https://picsum.photos/seed/laptop-stand-adjustable-aluminum/600/400',
        'https://picsum.photos/seed/laptop-stand-adjustable-aluminum-2/600/400',
      ],
      category: 'electronics',
    },
    {
      title: 'Men Winter Jacket Waterproof',
      price: 119.99,
      description:
        'Durable waterproof winter jacket designed for extreme weather conditions.',
      slug: 'men-winter-jacket-waterproof',
      stock: 90,
      sizes: ['M', 'L', 'XL', 'XXL'],
      gender: ['men'],
      tags: ['fashion', 'jacket', 'winter', 'outdoor'],
      images: [
        'https://picsum.photos/seed/men-winter-jacket-waterproof/600/400',
        'https://picsum.photos/seed/men-winter-jacket-waterproof-2/600/400',
      ],
      category: 'fashion',
    },
    {
      title: 'Blender High Speed Kitchen',
      price: 79.99,
      description:
        'High-speed kitchen blender perfect for smoothies and food preparation.',
      slug: 'blender-high-speed-kitchen',
      stock: 100,
      sizes: [],
      gender: ['unisex'],
      tags: ['kitchen', 'blender', 'appliance', 'home'],
      images: [
        'https://picsum.photos/seed/blender-high-speed-kitchen/600/400',
        'https://picsum.photos/seed/blender-high-speed-kitchen-2/600/400',
      ],
      category: 'home-kitchen',
    },
    {
      title: 'Fitness Jump Rope Adjustable',
      price: 18.99,
      description:
        'Adjustable jump rope ideal for cardio and endurance training.',
      slug: 'fitness-jump-rope-adjustable',
      stock: 200,
      sizes: [],
      gender: ['men', 'women'],
      tags: ['fitness', 'cardio', 'rope', 'exercise'],
      images: [
        'https://picsum.photos/seed/fitness-jump-rope-adjustable/600/400',
        'https://picsum.photos/seed/fitness-jump-rope-adjustable-2/600/400',
      ],
      category: 'sports-fitness',
    },
    {
      title: 'Perfume Floral Essence Women',
      price: 69.99,
      description:
        'Elegant floral fragrance designed for a long-lasting fresh scent.',
      slug: 'perfume-floral-essence-women',
      stock: 110,
      sizes: [],
      gender: ['women'],
      tags: ['beauty', 'perfume', 'fragrance', 'floral'],
      images: [
        'https://picsum.photos/seed/perfume-floral-essence-women/600/400',
        'https://picsum.photos/seed/perfume-floral-essence-women-2/600/400',
      ],
      category: 'beauty-personal-care',
    },
    {
      title: 'Kids Building Robot Kit',
      price: 54.99,
      description:
        'STEM educational robot kit designed to enhance creativity and learning.',
      slug: 'kids-building-robot-kit',
      stock: 130,
      sizes: [],
      gender: ['kid'],
      tags: ['toys', 'robot', 'education', 'kids'],
      images: [
        'https://picsum.photos/seed/kids-building-robot-kit/600/400',
        'https://picsum.photos/seed/kids-building-robot-kit-2/600/400',
      ],
      category: 'toys-hobbies',
    },
    {
      title: 'Cookbook Healthy Recipes Guide',
      price: 25.99,
      description:
        'Comprehensive cookbook featuring healthy and easy-to-follow recipes.',
      slug: 'cookbook-healthy-recipes-guide',
      stock: 85,
      sizes: [],
      gender: ['unisex'],
      tags: ['books', 'cooking', 'recipes', 'health'],
      images: [
        'https://picsum.photos/seed/cookbook-healthy-recipes-guide/600/400',
        'https://picsum.photos/seed/cookbook-healthy-recipes-guide-2/600/400',
      ],
      category: 'books-media',
    },
    {
      title: 'Outdoor Camping Tent 2 Person',
      price: 149.99,
      description:
        'Lightweight and durable tent designed for outdoor camping adventures.',
      slug: 'outdoor-camping-tent-2-person',
      stock: 60,
      sizes: [],
      gender: ['men', 'women'],
      tags: ['outdoor', 'camping', 'tent', 'travel'],
      images: [
        'https://picsum.photos/seed/outdoor-camping-tent-2-person/600/400',
        'https://picsum.photos/seed/outdoor-camping-tent-2-person-2/600/400',
      ],
      category: 'garden-outdoor',
    },
    {
      title: 'Cordless Angle Grinder Tool',
      price: 89.99,
      description:
        'Powerful cordless angle grinder for cutting and polishing applications.',
      slug: 'cordless-angle-grinder-tool',
      stock: 75,
      sizes: [],
      gender: ['unisex'],
      tags: ['tools', 'grinder', 'power', 'diy'],
      images: [
        'https://picsum.photos/seed/cordless-angle-grinder-tool/600/400',
        'https://picsum.photos/seed/cordless-angle-grinder-tool-2/600/400',
      ],
      category: 'tools-diy',
    },
    {
      title: 'Office Filing Cabinet Steel',
      price: 199.99,
      description:
        'Durable steel filing cabinet for organized document storage.',
      slug: 'office-filing-cabinet-steel',
      stock: 50,
      sizes: [],
      gender: ['unisex'],
      tags: ['office', 'storage', 'cabinet', 'documents'],
      images: [
        'https://picsum.photos/seed/office-filing-cabinet-steel/600/400',
        'https://picsum.photos/seed/office-filing-cabinet-steel-2/600/400',
      ],
      category: 'office-supplies',
    },
    {
      title: 'Car LED Interior Lights Kit',
      price: 29.99,
      description:
        'Customizable LED lighting kit to enhance car interior ambiance.',
      slug: 'car-led-interior-lights-kit',
      stock: 150,
      sizes: [],
      gender: ['unisex'],
      tags: ['automotive', 'led', 'lights', 'interior'],
      images: [
        'https://picsum.photos/seed/car-led-interior-lights-kit/600/400',
        'https://picsum.photos/seed/car-led-interior-lights-kit-2/600/400',
      ],
      category: 'automotive',
    },
    {
      title: 'Retro Gaming Mouse Pad XL',
      price: 19.99,
      description: 'Extra-large mouse pad featuring retro gaming artwork.',
      slug: 'retro-gaming-mouse-pad-xl',
      stock: 120,
      sizes: [],
      gender: ['unisex'],
      tags: ['retro', 'gaming', 'mousepad', 'desk'],
      images: [
        'https://picsum.photos/seed/retro-gaming-mouse-pad-xl/600/400',
        'https://picsum.photos/seed/retro-gaming-mouse-pad-xl-2/600/400',
      ],
      category: 'retro-gaming',
    },
    {
      title: 'Smart Home Security Camera',
      price: 89.99,
      description:
        'WiFi-enabled security camera with real-time monitoring and alerts.',
      slug: 'smart-home-security-camera',
      stock: 95,
      sizes: [],
      gender: ['unisex'],
      tags: ['electronics', 'security', 'camera', 'smart'],
      images: [
        'https://picsum.photos/seed/smart-home-security-camera/600/400',
        'https://picsum.photos/seed/smart-home-security-camera-2/600/400',
      ],
      category: 'electronics',
    },
    {
      title: 'Women Elegant Blouse Office',
      price: 42.99,
      description:
        'Elegant blouse suitable for office wear and formal occasions.',
      slug: 'women-elegant-blouse-office',
      stock: 125,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      gender: ['women'],
      tags: ['fashion', 'blouse', 'office', 'elegant'],
      images: [
        'https://picsum.photos/seed/women-elegant-blouse-office/600/400',
        'https://picsum.photos/seed/women-elegant-blouse-office-2/600/400',
      ],
      category: 'fashion',
    },
    {
      title: 'Kids Bicycle Helmet Safety',
      price: 34.99,
      description:
        'Protective helmet designed for kids safety during cycling activities.',
      slug: 'kids-bicycle-helmet-safety',
      stock: 140,
      sizes: [],
      gender: ['kid'],
      tags: ['sports', 'helmet', 'kids', 'safety'],
      images: [
        'https://picsum.photos/seed/kids-bicycle-helmet-safety/600/400',
        'https://picsum.photos/seed/kids-bicycle-helmet-safety-2/600/400',
      ],
      category: 'sports-fitness',
    },
    {
      title: 'Luxury Skincare Gift Set',
      price: 89.99,
      description:
        'Premium skincare gift set designed for hydration and rejuvenation.',
      slug: 'luxury-skincare-gift-set',
      stock: 80,
      sizes: [],
      gender: ['women'],
      tags: ['beauty', 'skincare', 'gift', 'luxury'],
      images: [
        'https://picsum.photos/seed/luxury-skincare-gift-set/600/400',
        'https://picsum.photos/seed/luxury-skincare-gift-set-2/600/400',
      ],
      category: 'beauty-personal-care',
    },
    {
      title: 'Car Trunk Organizer Foldable',
      price: 34.99,
      description:
        'Foldable trunk organizer designed to keep your car storage neat and accessible.',
      slug: 'car-trunk-organizer-foldable',
      stock: 160,
      sizes: [],
      gender: ['unisex'],
      tags: ['automotive', 'organizer', 'storage', 'car'],
      images: [
        'https://picsum.photos/seed/car-trunk-organizer-foldable/600/400',
        'https://picsum.photos/seed/car-trunk-organizer-foldable-2/600/400',
      ],
      category: 'automotive',
    },
    {
      title: 'Retro Game Console HDMI Adapter',
      price: 24.99,
      description:
        'Adapter allowing retro consoles to connect to modern HDMI displays.',
      slug: 'retro-game-console-hdmi-adapter',
      stock: 110,
      sizes: [],
      gender: ['unisex'],
      tags: ['retro', 'gaming', 'adapter', 'hdmi'],
      images: [
        'https://picsum.photos/seed/retro-game-console-hdmi-adapter/600/400',
        'https://picsum.photos/seed/retro-game-console-hdmi-adapter-2/600/400',
      ],
      category: 'retro-gaming',
    },
    {
      title: 'Wireless Mechanical Keyboard RGB',
      price: 129.99,
      description:
        'High-performance mechanical keyboard with RGB lighting and wireless connectivity.',
      slug: 'wireless-mechanical-keyboard-rgb',
      stock: 95,
      sizes: [],
      gender: ['unisex'],
      tags: ['electronics', 'keyboard', 'rgb', 'wireless'],
      images: [
        'https://picsum.photos/seed/wireless-mechanical-keyboard-rgb/600/400',
        'https://picsum.photos/seed/wireless-mechanical-keyboard-rgb-2/600/400',
      ],
      category: 'electronics',
    },
    {
      title: 'Men Casual Polo Shirt Cotton',
      price: 39.99,
      description:
        'Breathable cotton polo shirt designed for comfort and casual style.',
      slug: 'men-casual-polo-shirt-cotton',
      stock: 150,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      gender: ['men'],
      tags: ['fashion', 'polo', 'casual', 'cotton'],
      images: [
        'https://picsum.photos/seed/men-casual-polo-shirt-cotton/600/400',
        'https://picsum.photos/seed/men-casual-polo-shirt-cotton-2/600/400',
      ],
      category: 'fashion',
    },
    {
      title: 'Air Fryer Digital Touch 5L',
      price: 139.99,
      description:
        'Modern air fryer with digital controls for healthier cooking options.',
      slug: 'air-fryer-digital-touch-5l',
      stock: 85,
      sizes: [],
      gender: ['unisex'],
      tags: ['kitchen', 'airfryer', 'appliance', 'cooking'],
      images: [
        'https://picsum.photos/seed/air-fryer-digital-touch-5l/600/400',
        'https://picsum.photos/seed/air-fryer-digital-touch-5l-2/600/400',
      ],
      category: 'home-kitchen',
    },
    {
      title: 'Adjustable Weight Bench Foldable',
      price: 159.99,
      description:
        'Foldable weight bench designed for versatile home workouts.',
      slug: 'adjustable-weight-bench-foldable',
      stock: 70,
      sizes: [],
      gender: ['men', 'women'],
      tags: ['fitness', 'bench', 'gym', 'training'],
      images: [
        'https://picsum.photos/seed/adjustable-weight-bench-foldable/600/400',
        'https://picsum.photos/seed/adjustable-weight-bench-foldable-2/600/400',
      ],
      category: 'sports-fitness',
    },
    {
      title: 'Hair Straightener Ceramic Plates',
      price: 49.99,
      description:
        'Ceramic plate hair straightener designed for smooth and shiny results.',
      slug: 'hair-straightener-ceramic-plates',
      stock: 120,
      sizes: [],
      gender: ['women'],
      tags: ['beauty', 'hair', 'straightener', 'styling'],
      images: [
        'https://picsum.photos/seed/hair-straightener-ceramic-plates/600/400',
        'https://picsum.photos/seed/hair-straightener-ceramic-plates-2/600/400',
      ],
      category: 'beauty-personal-care',
    },
    {
      title: 'Kids Wooden Train Set Classic',
      price: 44.99,
      description:
        'Classic wooden train set designed for creative play and development.',
      slug: 'kids-wooden-train-set-classic',
      stock: 130,
      sizes: [],
      gender: ['kid'],
      tags: ['toys', 'kids', 'train', 'wooden'],
      images: [
        'https://picsum.photos/seed/kids-wooden-train-set-classic/600/400',
        'https://picsum.photos/seed/kids-wooden-train-set-classic-2/600/400',
      ],
      category: 'toys-hobbies',
    },
    {
      title: 'Photography Guide Book Advanced',
      price: 34.99,
      description:
        'Advanced guidebook covering professional photography techniques.',
      slug: 'photography-guide-book-advanced',
      stock: 75,
      sizes: [],
      gender: ['unisex'],
      tags: ['books', 'photography', 'learning', 'guide'],
      images: [
        'https://picsum.photos/seed/photography-guide-book-advanced/600/400',
        'https://picsum.photos/seed/photography-guide-book-advanced-2/600/400',
      ],
      category: 'books-media',
    },
    {
      title: 'Garden Watering Sprinkler System',
      price: 59.99,
      description:
        'Efficient sprinkler system designed for automatic garden irrigation.',
      slug: 'garden-watering-sprinkler-system',
      stock: 95,
      sizes: [],
      gender: ['unisex'],
      tags: ['garden', 'watering', 'sprinkler', 'outdoor'],
      images: [
        'https://picsum.photos/seed/garden-watering-sprinkler-system/600/400',
        'https://picsum.photos/seed/garden-watering-sprinkler-system-2/600/400',
      ],
      category: 'garden-outdoor',
    },
    {
      title: 'Toolbox Organizer Heavy Duty',
      price: 49.99,
      description:
        'Heavy-duty toolbox organizer for efficient storage of tools.',
      slug: 'toolbox-organizer-heavy-duty',
      stock: 110,
      sizes: [],
      gender: ['unisex'],
      tags: ['tools', 'toolbox', 'storage', 'diy'],
      images: [
        'https://picsum.photos/seed/toolbox-organizer-heavy-duty/600/400',
        'https://picsum.photos/seed/toolbox-organizer-heavy-duty-2/600/400',
      ],
      category: 'tools-diy',
    },
    {
      title: 'Office Monitor Stand Adjustable',
      price: 42.99,
      description:
        'Adjustable monitor stand designed to improve workspace ergonomics.',
      slug: 'office-monitor-stand-adjustable',
      stock: 140,
      sizes: [],
      gender: ['unisex'],
      tags: ['office', 'monitor', 'stand', 'ergonomic'],
      images: [
        'https://picsum.photos/seed/office-monitor-stand-adjustable/600/400',
        'https://picsum.photos/seed/office-monitor-stand-adjustable-2/600/400',
      ],
      category: 'office-supplies',
    },
    {
      title: 'Car Steering Wheel Cover Leather',
      price: 27.99,
      description:
        'Premium leather steering wheel cover for enhanced grip and comfort.',
      slug: 'car-steering-wheel-cover-leather',
      stock: 150,
      sizes: [],
      gender: ['unisex'],
      tags: ['automotive', 'steering', 'cover', 'leather'],
      images: [
        'https://picsum.photos/seed/car-steering-wheel-cover-leather/600/400',
        'https://picsum.photos/seed/car-steering-wheel-cover-leather-2/600/400',
      ],
      category: 'automotive',
    },
    {
      title: 'Retro Game Cartridge Cleaning Kit',
      price: 19.99,
      description:
        'Cleaning kit designed to maintain and restore retro game cartridges.',
      slug: 'retro-game-cartridge-cleaning-kit',
      stock: 85,
      sizes: [],
      gender: ['unisex'],
      tags: ['retro', 'cleaning', 'gaming', 'maintenance'],
      images: [
        'https://picsum.photos/seed/retro-game-cartridge-cleaning-kit/600/400',
        'https://picsum.photos/seed/retro-game-cartridge-cleaning-kit-2/600/400',
      ],
      category: 'retro-gaming',
    },
    {
      title: 'Smart Plug WiFi Voice Control',
      price: 24.99,
      description:
        'Smart plug with WiFi connectivity and voice assistant compatibility.',
      slug: 'smart-plug-wifi-voice-control',
      stock: 200,
      sizes: [],
      gender: ['unisex'],
      tags: ['electronics', 'smart', 'plug', 'wifi'],
      images: [
        'https://picsum.photos/seed/smart-plug-wifi-voice-control/600/400',
        'https://picsum.photos/seed/smart-plug-wifi-voice-control-2/600/400',
      ],
      category: 'electronics',
    },
    {
      title: 'Women Summer Skirt Floral',
      price: 36.99,
      description:
        'Lightweight floral skirt designed for summer comfort and style.',
      slug: 'women-summer-skirt-floral',
      stock: 125,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      gender: ['women'],
      tags: ['fashion', 'skirt', 'summer', 'floral'],
      images: [
        'https://picsum.photos/seed/women-summer-skirt-floral/600/400',
        'https://picsum.photos/seed/women-summer-skirt-floral-2/600/400',
      ],
      category: 'fashion',
    },
    {
      title: 'Kids Outdoor Play Tent',
      price: 49.99,
      description:
        'Portable play tent designed for outdoor fun and imaginative play.',
      slug: 'kids-outdoor-play-tent',
      stock: 100,
      sizes: [],
      gender: ['kid'],
      tags: ['toys', 'kids', 'tent', 'outdoor'],
      images: [
        'https://picsum.photos/seed/kids-outdoor-play-tent/600/400',
        'https://picsum.photos/seed/kids-outdoor-play-tent-2/600/400',
      ],
      category: 'toys-hobbies',
    },
    {
      title: 'Luxury Office Notebook Leather',
      price: 29.99,
      description:
        'Premium leather notebook designed for professionals and executives.',
      slug: 'luxury-office-notebook-leather',
      stock: 130,
      sizes: [],
      gender: ['unisex'],
      tags: ['office', 'notebook', 'leather', 'writing'],
      images: [
        'https://picsum.photos/seed/luxury-office-notebook-leather/600/400',
        'https://picsum.photos/seed/luxury-office-notebook-leather-2/600/400',
      ],
      category: 'office-supplies',
    },
  ],
  reviews: [
    {
      rating: 5,
      comment:
        'Excellent quality, the size fits me perfectly. Highly recommend.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment:
        'Very satisfied with the product, the fabric is warm. Fast delivery.',
      created_at: new Date(),
    },
    {
      rating: 2,
      comment:
        'The design is nice but the sizing runs smaller than what the size chart states.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment:
        'Amazing, exceeded my expectations. Would definitely buy again without hesitation.',
      created_at: new Date(),
    },
    {
      rating: 1,
      comment:
        'Terrible quality. The print completely washed off on the very first cycle. Do not recommend.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment: 'Good value for money. It delivers exactly what it promises.',
      created_at: new Date(),
    },
    {
      rating: 3,
      comment:
        'It is okay for the price, but the stitching finishes could definitely be better.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment:
        'By far the best item in the catalog, the material quality feels premium.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment:
        'Arrived in perfect condition and well packaged. A classic that never fails.',
      created_at: new Date(),
    },
    {
      rating: 2,
      comment:
        'Took an eternity to arrive and they sent me the wrong color anyway.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment:
        'An absolute gem. Incredibly comfortable and very stylish. Great fit.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment:
        'The product is great, lowering it by one star only because shipping took two extra days.',
      created_at: new Date(),
    },
    {
      rating: 3,
      comment:
        'Pretty average, nothing out of the ordinary. Fine for casual day-to-day use.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment:
        'Top-notch materials, very durable and the fabric feels soft to the touch.',
      created_at: new Date(),
    },
    {
      rating: 1,
      comment:
        'Received a defective product and had to go through the return process. Such a hassle.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment:
        'Great quality, the colors look identical to the ones on the website photos.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment:
        'Excellent customer service and the item is flawless. 10 out of 10.',
      created_at: new Date(),
    },
    {
      rating: 2,
      comment:
        'The fabric is way too thin, completely see-through. Not what I expected.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment: 'Loved the design. Perfect choice for a nice gift.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment:
        'Bought two of them and they are honestly amazing. Super recommended.',
      created_at: new Date(),
    },
    {
      rating: 3,
      comment:
        'It is fine, but it seems a bit overpriced for the build quality.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment: 'Incredible attention to detail. Worth every single cent.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment:
        'Very comfortable and the size matches the measurements exactly.',
      created_at: new Date(),
    },
    {
      rating: 1,
      comment: 'Came with a torn seam on the back. Extremely disappointed.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment: 'Super warm and stylish. You can tell this is built to last.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment:
        'Everything was perfect. The shipment arrived sooner than expected.',
      created_at: new Date(),
    },
    {
      rating: 2,
      comment:
        'The size was way too large and the exchange process is a headache.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment:
        'Excellent purchase, super practical and comfy for everyday wear.',
      created_at: new Date(),
    },
    {
      rating: 3,
      comment:
        'The product is fine, but the listing photos are a bit misleading.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment:
        'Very satisfied. Good material and the design is quite original.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment: 'Totally blew me away for this price point. Splendid.',
      created_at: new Date(),
    },
    {
      rating: 1,
      comment: 'Do not buy this, the material feels super cheap and rigid.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment:
        'It fits a bit tight but stretched out nicely with wear. Very nice model.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment:
        'Flawless, matches the description perfectly. Fabric quality is outstanding.',
      created_at: new Date(),
    },
    {
      rating: 2,
      comment:
        'Arrived completely crushed due to the packaging and got slightly deformed.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment:
        'Looks great, pairs well with everything. Does its job perfectly.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment:
        'A total game-changer, top-tier materials. Worth the investment.',
      created_at: new Date(),
    },
    {
      rating: 3,
      comment:
        'Nice looks but it feels delicate, definitely requires careful maintenance.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment:
        'Excellent, this is the third time buying from this brand and it never disappoints.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment:
        'It is lightweight and comfortable, ideal for mid-season weather.',
      created_at: new Date(),
    },
    {
      rating: 1,
      comment:
        'Awful. The color is completely different from the picture. Sent it right back.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment: 'Wonderful product, completely exceeded my expectations.',
      created_at: new Date(),
    },
    {
      rating: 2,
      comment: 'The print came slightly scratched in the corner. Such a shame.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment:
        'Good jacket, keeps you warm and the zippers feel sturdy and high-quality.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment: 'Perfect fit and super fast delivery. Very professional team.',
      created_at: new Date(),
    },
    {
      rating: 3,
      comment: 'Does the job, but the packaging arrived completely destroyed.',
      created_at: new Date(),
    },
    {
      rating: 4,
      comment:
        'Very happy with the purchase. The item is identical to what was advertised.',
      created_at: new Date(),
    },
    {
      rating: 2,
      comment:
        'Poor quality considering the price they charge. Would not buy again.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment:
        'The texture is amazing and the color is beautiful. Super happy with it.',
      created_at: new Date(),
    },
    {
      rating: 5,
      comment: 'Highly recommended. Premium quality and accurate fit.',
      created_at: new Date(),
    },
  ],
};
