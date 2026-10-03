/**
 * All copy, contact details and imagery for the site live here,
 * so the real client can swap in their own words and photos quickly.
 */

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const contact = {
  // Placeholder number for the demo. Replace with the real one.
  phoneDisplay: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  whatsappNumber: "919000000000",
  instagramHandle: "@muhabath_catering_",
  instagramUrl: "https://www.instagram.com/muhabath_catering_/",
  regions: "Kerala & Tamil Nadu",
};

export const whatsappLink = (text = "Hello Muhabath, I'd like to enquire about catering for our wedding.") =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: "#story", label: "Our story" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#process", label: "How it works" },
];

export type Photo = { src: string; alt: string; width: number; height: number };

export const heroImage: Photo = {
  src: u("1633945274405-b6c8069047b0"),
  alt: "A wedding platter of biryani laid on deep red silk, garnished with fresh lime and herbs",
  width: 3000,
  height: 2000,
};

export const storyImages: { main: Photo; detail: Photo } = {
  main: {
    src: u("1744805624954-a6686543c3ff"),
    alt: "A wedding stage at dusk lit with strings of golden lights hanging from tall trees",
    width: 2000,
    height: 3000,
  },
  detail: {
    src: u("1744804298181-7fd6894ee84a"),
    alt: "The bride's hennaed hand resting on the groom's embroidered ivory sherwani",
    width: 2000,
    height: 2900,
  },
};

export const strengths = [
  {
    title: "Recipes kept the old way",
    body: "Biryani sealed and slow-cooked on dum, masalas ground fresh on the morning of your wedding, ghee from farms we have trusted for years.",
  },
  {
    title: "Service that never keeps a guest waiting",
    body: "Trained, uniformed servers who know when to refill and when to step back. Your two-thousandth guest gets the same warm plate as the first.",
  },
  {
    title: "Grand, without the worry",
    body: "One planner stays with you from tasting to the last tray, working with your venue, decorator and family so you can simply be present.",
  },
];

export const services = [
  {
    id: "wedding",
    title: "Wedding catering",
    short: "Nikah feasts, muhurtham sadyas and everything in between.",
    body: "Menus built around your family's traditions, whether that is Malabar biryani, a full Kerala sadya on banana leaf, or a Chettinad spread for guests from Madurai. Vegetarian and non-vegetarian kitchens run separately.",
    detail: "From 200 to 5,000 guests",
    image: {
      src: u("1563379091339-03b21ab4a4f8"),
      alt: "Saffron biryani served in a polished brass handi with a gold spoon",
      width: 3000,
      height: 3420,
    },
  },
  {
    id: "reception",
    title: "Grand reception feasts",
    short: "Evening receptions with live counters and dessert tables.",
    body: "Live grills, appam and stew stations, plated courses for the head table and a dessert spread your guests will photograph before they taste. Styled to match your décor down to the serving brass.",
    detail: "Buffet, plated or both",
    image: {
      src: u("1712314947761-a8d718bd8c32"),
      alt: "A reception hall under crystal chandeliers with round tables dressed in ivory and gold",
      width: 3000,
      height: 2000,
    },
  },
  {
    id: "events",
    title: "Corporate & special events",
    short: "Engagements, naming ceremonies, launches and conferences.",
    body: "The same care we give a wedding, sized for the occasion. Punctual service for conferences, relaxed family-style spreads for engagements and housewarmings, and boxed meals when the day calls for them.",
    detail: "Venues across both states",
    image: {
      src: u("1772127822525-7eda37383b9f"),
      alt: "An outdoor reception on a lawn beneath white draped canopies with maroon-clothed tables",
      width: 3000,
      height: 2000,
    },
  },
  {
    id: "menu",
    title: "Custom menu curation",
    short: "Sit with our chefs, taste, adjust, and taste again.",
    body: "Bring a grandmother's recipe, a regional favourite or a dish from your first date. Our chefs build it into a balanced menu, then refine it with you over a private tasting until it tastes like home.",
    detail: "Private tasting included",
    image: {
      src: u("1736680056325-ba2ade6250a3"),
      alt: "Biryani on a dark plate seen from above, ringed with whole spices, red chillies and cinnamon",
      width: 3000,
      height: 3000,
    },
  },
];

export const gallery: Photo[] = [
  {
    src: u("1631515243349-e0cb75fb8d3a"),
    alt: "Chicken biryani in a white bowl with raita and gravy on the side",
    width: 3000,
    height: 1960
  },
  {
    src: u("1642821373181-696a54913e93"),
    alt: "Biryani in a clay pot beside a bowl of raita on red cloth",
    width: 3000,
    height: 2000
  },
  {
    src: u("1772127822552-ce9ef537bdcf"),
    alt: "A floral wedding mandap at the end of a white aisle lined with flowers",
    width: 3000,
    height: 1950
  },
  {
    src: u("1691171047462-66025ecd5efc"),
    alt: "A dark pan of paneer biryani lit dramatically from above",
    width: 2000,
    height: 2830
  },
  {
    src: u("1670529776286-f426fb7ba42c"),
    alt: "A reception hall glowing with chandeliers over round guest tables",
    width: 3000,
    height: 2000
  },
  {
    src: u("1728745118618-941ec839208f"),
    alt: "A serving of biryani on a wooden table with warm lights behind",
    width: 3000,
    height: 1690
  },
  {
    src: u("1761472606347-bfebc5a3e546"),
    alt: "An ornate carved archway lit by chandeliers leading into a wedding hall",
    width: 2000,
    height: 3000
  },
  {
    src: u("1716550781939-beb7d7247aae"),
    alt: "A generous plate of chicken biryani with a side of curry and a folded napkin",
    width: 2000,
    height: 3000
  },
  {
    src: u("1665607437981-973dcd6a22bb"),
    alt: "Long banquet tables set with ivory linen, glassware and greenery under a glass roof",
    width: 3000,
    height: 2000
  },
  {
    src: u("1589302168068-964664d93dc0"),
    alt: "Hyderabadi-style biryani on a white plate with salan and raita",
    width: 2000,
    height: 3000
  },
  {
    src: u("1770387688486-397ff1afdb2c"),
    alt: "A smiling couple sharing a moment at their reception under soft fairy lights",
    width: 3000,
    height: 2000
  },
  {
    src: u("1705174299330-939dd03cc864"),
    alt: "A spoonful of biryani lifted from a dark bowl against a black background",
    width: 2000,
    height: 3000
  },
];

export const testimonials = [
  {
    quote:
      "Fourteen hundred guests and not a single cold plate. People still ask us who made the mutton biryani. Muhabath made our daughter's wedding feel effortless for the whole family.",
    name: "Rasheed & family",
    place: "Kozhikode",
    occasion: "Nikah & reception",
  },
  {
    quote:
      "We wanted a sadya for the muhurtham and a Chettinad spread for the reception. They handled both as if they had done it all their lives, and the payasam was perfect.",
    name: "Priya & Karthik",
    place: "Coimbatore",
    occasion: "Wedding, two days",
  },
  {
    quote:
      "The tasting is where we knew. The chef asked about my grandmother's cooking and put her ada pradhaman on our menu. I cried a little when it was served.",
    name: "Anjali & Vivek",
    place: "Thrissur",
    occasion: "Wedding feast",
  },
  {
    quote:
      "Calm, organised and on time from the first call to the last tray. Our 600-guest anniversary dinner ran to the minute, and the food was the talk of the evening.",
    name: "Meera Nair",
    place: "Kochi",
    occasion: "Company anniversary",
  },
];

export const steps = [
  {
    title: "Share your date",
    body: "Tell us the date, the venue and roughly how many guests. We reply within a day to check availability.",
  },
  {
    title: "Taste and talk",
    body: "Visit our kitchen for a private tasting. We shape the menu around your family, your region and your budget.",
  },
  {
    title: "Plan every detail",
    body: "Your planner settles counters, service style, timings and staff with your venue, so nothing is left to the day.",
  },
  {
    title: "Feast day",
    body: "We arrive early, cook fresh on site wherever possible, and stay until the very last guest has eaten well.",
  },
];
