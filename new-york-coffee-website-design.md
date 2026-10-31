# New York Coffee Pakistan: Website Design Structure

Brief for building the website (hand this to opencode or whoever builds it). Read `new-york-coffee-info.md` first for brand facts.

---

## 1. Goal

A modern, appetising website for New York Coffee Pakistan that does four things:

1. Makes the brand feel premium, warm and American-café.
2. Shows the full menu with photos, grouped by category.
3. Helps people find a branch (address, phone, hours, map).
4. Pushes people to order or call (delivery link, phone, WhatsApp/UAN).

Audience: young adults and families in Karachi, Lahore and Islamabad, mostly on mobile. **Build mobile-first.**

## 2. Brand direction

- **Personality:** cozy New York café, warm, welcoming, a little bold. Copy lines from the global brand: "Brew Something Inspiring", "Freshly Roasted", "More than just great coffee".
- **Colours:** not confirmed. Pull them from the official logo (`https://nycoffee.com/wp-content/uploads/2020/02/logo-retail-1.svg`) and keep a coffee-brown / cream / dark neutral base with one accent. Confirm with the client before finalising.
- **Typography:** one expressive display font for headings (slab or condensed, NYC signage feel) plus one clean sans-serif for body text.
- **Imagery:** big, tight food and drink photos on dark or cream backgrounds. Crystal-glass layered drinks are their signature look, so show them large.
- **Motion:** subtle only (fade-up on scroll, hover zoom on menu cards). Keep it fast.

## 3. Sitemap

```
/                Home
/menu            Full menu (category tabs)
/menu/<category> Optional deep links (hot-coffee, iced, signature, frappes, not-coffee, breakfast, ...)
/locations       Branches by city + map
/our-story       Brand story, roastery, freshness promise
/order           Order online / delivery links
/franchise       (optional) Franchise enquiry
/careers         (optional)
/contact         Contact form, phone, email, socials
```

## 4. Page-by-page structure

### Home
1. **Sticky header:** logo left, nav (Menu, Locations, Our Story, Contact), "Order Now" button right. Hamburger on mobile.
2. **Hero:** full-width image/video of a layered iced coffee, headline "Brew Something Inspiring", two buttons: *View Menu* and *Order Now*.
3. **Signature drinks strip:** 4 cards (The Melting Pot, Queens, Manhattan Special, Greatest of All Time) with photos.
4. **About teaser:** two-column, short story (founded Bahrain 1999, own roastery, 100% Arabica, fresh within 7 days of roasting) + "Our Story" link.
5. **Menu categories grid:** image tiles for Hot Coffee, Iced Coffee, Frappes, Not Coffee, Breakfast, Eats, Sweet Affairs, each linking to the menu tab.
6. **Why NYC / freshness band:** 3 icons (Own roastery, 100% Arabica, Fresh every 14 days).
7. **Locations teaser:** city selector (Karachi / Lahore / Islamabad) with the nearest branches and a "Find us" button.
8. **Order CTA band:** delivery buttons (Supermeal etc.) and phone number.
9. **Instagram/social feed or photo grid.**
10. **Footer:** logo, quick links, UAN (+92 21 111 692 692), email (info@nycoffee.com.pk), social icons, copyright.

### Menu
- Sticky category tab bar (scrollable on mobile): Hot Coffee, Iced Coffee, Signature, Frappes, Not Coffee, Breakfast, Appetizers & Salads, Crepes, Sandwiches & Wraps, Sweet Affairs.
- Grid of **menu cards**: photo (square), item name, short description, price (when supplied), optional tags (Vegetarian, Bestseller).
- Search box and simple filters (hot / cold / food / vegetarian).
- Click a card to open a small modal with a larger photo and details.
- Sections marked "needs client data" below should render a placeholder card until content arrives.

### Locations
- City tabs. Each branch card: name, address, phone, hours, "Get directions" (Google Maps link), "Call" button.
- Embedded map showing all pins.

### Our Story
- Timeline: 1999 Bahrain roastery, first Manama shop, growth, arrival in Pakistan.
- Roastery section: Arabica, roasting, 7-day dispatch, 14-day stock policy.
- Photo gallery of the cafés.

### Order
- Big buttons to delivery partners and phone. Add a note on delivery hours.

### Contact
- Form (name, email, phone, message), UAN, email, social links, optional franchise/wholesale enquiry tabs.

## 5. Components to build

- Header and mobile drawer
- Hero with CTA buttons
- Category tile
- Menu card and menu modal
- Tab bar (sticky, horizontally scrollable)
- Branch card and map block
- CTA band
- Footer
- Reusable section heading

## 6. Data model (keep the menu in one JSON file)

```json
{
  "categories": [
    {
      "id": "hot-coffee",
      "name": "Espresso Hot",
      "items": [
        {
          "name": "Cappuccino",
          "image": "/images/menu/hot/cappuccino.jpg",
          "description": "",
          "price": null,
          "tags": []
        }
      ]
    }
  ]
}
```

Prices and descriptions are empty because they were not available. Do not invent them.

## 7. Technical suggestions

- Static, fast site: Next.js or Astro (or plain HTML/CSS/JS) deployed on Vercel.
- Download all menu photos into `/public/images/menu/...` and serve them locally with `next/image` (or equivalent) with lazy loading and WebP conversion. Do not hotlink in production.
- Basic SEO: title/description per page, Open Graph image, structured data (`Restaurant`/`CafeOrCoffeeShop`) with address and phone, sitemap.xml.
- Accessibility: alt text on every photo, contrast check, keyboard-friendly tabs.
- Analytics and a click-to-call / click-to-order event.

---

## 8. Full menu with photos

Photos come from the official global site (nycoffee.com). They are the brand's own images, so **get written permission or the original files from the client** before using them in production. I could not download them from my side because outbound access to that domain is blocked, so these are direct URLs to fetch.

The menu below is the **global/Bahrain** menu. The Pakistan menu has more items (see section 9).

### Beverages: Espresso Hot
| Item | Photo URL |
|---|---|
| Americano | https://nycoffee.com/wp-content/uploads/2020/02/Americano-2-563x564.jpg |
| Cappuccino | https://nycoffee.com/wp-content/uploads/2020/02/Cappuccino-1-563x564.jpg |
| Caramel Macchiato | https://nycoffee.com/wp-content/uploads/2020/02/Caramel-Macchiato-563x564.jpg |
| Cortado | https://nycoffee.com/wp-content/uploads/2020/02/Cortado-1-563x564.jpg |
| Espresso Macchiato | https://nycoffee.com/wp-content/uploads/2020/02/Espresso-Macchiato-563x564.jpg |
| Espresso | https://nycoffee.com/wp-content/uploads/2020/02/Espresso-2-563x564.jpg |
| Flat White | https://nycoffee.com/wp-content/uploads/2020/02/Flat-White-563x564.jpg |
| Latte | https://nycoffee.com/wp-content/uploads/2020/02/Latte-563x564.jpg |
| Mocha Dark & White | https://nycoffee.com/wp-content/uploads/2020/02/Mocha-DarkWhite-563x564.jpg |
| Spanish Latte | https://nycoffee.com/wp-content/uploads/2020/02/Spanish-Latte-563x564.jpg |

### Beverages: Espresso Iced
| Item | Photo URL |
|---|---|
| Americano | https://nycoffee.com/wp-content/uploads/2020/02/Americano-3-563x564.jpg |
| Caramel Macchiato | https://nycoffee.com/wp-content/uploads/2020/02/Caramel-Macchiato-1-564x564.jpg |
| Latte | https://nycoffee.com/wp-content/uploads/2020/02/Latte-1-563x564.jpg |
| Mocha Dark & White | https://nycoffee.com/wp-content/uploads/2020/02/Mocha-DarkWhite-1-564x564.jpg |
| Spanish Latte | https://nycoffee.com/wp-content/uploads/2020/02/Spanish-Latte-1-563x564.jpg |

### Beverages: Signature
| Item | Photo URL |
|---|---|
| The Melting Pot | https://nycoffee.com/wp-content/uploads/2020/02/The-Melting-Pot-563x564.jpg |
| Queens | https://nycoffee.com/wp-content/uploads/2020/02/Queens-564x564.jpg |
| Manhattan Special | https://nycoffee.com/wp-content/uploads/2020/02/Manhattan-Special-563x564.jpg |
| Greatest of All Time (spelled "Greates" on their site) | https://nycoffee.com/wp-content/uploads/2020/02/Greates-of-All-Time-563x564.jpg |

### Beverages: Frappes
| Item | Photo URL |
|---|---|
| Caramel | https://nycoffee.com/wp-content/uploads/2020/02/Caramel-563x564.jpg |
| Chocolate | https://nycoffee.com/wp-content/uploads/2020/02/Chocolate-563x564.jpg |
| Coffee | https://nycoffee.com/wp-content/uploads/2020/02/Coffee-1-563x564.jpg |
| Mocha | https://nycoffee.com/wp-content/uploads/2020/02/Mocha-563x564.jpg |
| Toffee | https://nycoffee.com/wp-content/uploads/2020/02/Toffee-563x564.jpg |
| Vanilla | https://nycoffee.com/wp-content/uploads/2020/02/Vanilla-563x564.jpg |

### Beverages: Not Coffee
| Item | Photo URL |
|---|---|
| Hot Nutella | https://nycoffee.com/wp-content/uploads/2020/02/Nuetella-563x564.jpg |
| Orange Juice | https://nycoffee.com/wp-content/uploads/2020/02/Orange-Juice-563x564.jpg |
| Shaken Iced Tea | https://nycoffee.com/wp-content/uploads/2020/02/Shaken-Iced-Tea-563x564.jpg |
| Smoothie Berry Blast | https://nycoffee.com/wp-content/uploads/2020/02/Smoothie-Berry-Blast-563x564.jpg |
| Smoothie Paradise Passion | https://nycoffee.com/wp-content/uploads/2020/02/Smoothie-Paradise-Passion-563x564.jpg |
| Stash Tea | https://nycoffee.com/wp-content/uploads/2020/02/Stash-Tea-563x564.jpg |

### Eats: Breakfast (800x800 photos)
| Item | Photo URL |
|---|---|
| Cheesy Beef & Egg Hash | https://nycoffee.com/wp-content/uploads/2020/03/Cheesy-Beef-Egg-Hash-800x800.jpg |
| Chickpeas in Tomato Sauce | https://nycoffee.com/wp-content/uploads/2020/03/Chickpeas-in-Tomato-Sauce-800x800.jpg |
| Classic Pancakes | https://nycoffee.com/wp-content/uploads/2020/03/Classic-Pancakes-800x800.jpg |
| Club Omelette | https://nycoffee.com/wp-content/uploads/2020/03/Club-Omelette-800x800.jpg |
| Eggs Benedict | https://nycoffee.com/wp-content/uploads/2020/03/Egg-Benedict-800x800.jpg |
| English Waffle | https://nycoffee.com/wp-content/uploads/2020/03/English-Waffle-800x800.jpg |
| Farmhouse Crepe | https://nycoffee.com/wp-content/uploads/2020/03/Farmhouse-Crepe-800x800.jpg |
| Four Cheese Omelette | https://nycoffee.com/wp-content/uploads/2020/03/Four-Cheese-Omelette-800x800.jpg |
| Fresh Mushroom Omelette | https://nycoffee.com/wp-content/uploads/2020/03/Fresh-Mushroom-Omelette-800x800.jpg |
| Fused English Breakfast | https://nycoffee.com/wp-content/uploads/2020/03/Fused-Enlgish-Breakfast-800x800.jpg |
| Scrambled Eggs | https://nycoffee.com/wp-content/uploads/2020/03/Scrambled-Eggs-800x800.jpg |
| Spicy Egg & Potatoes | https://nycoffee.com/wp-content/uploads/2020/03/Spicy-Egg-Potatoes-800x800.jpg |
| Stuffed Croissant | https://nycoffee.com/wp-content/uploads/2020/03/Stuffed-Croissant-800x800.jpg |

### Still missing (pages exist on the site but could not be opened)
- Eats: Appetizers & Salads
- Eats: Crepes
- Eats: Sandwiches & Wraps
- Sweet Affairs

Their names/photos need to be taken from the live site (`nycoffee.com/appetizers-salads/`, `/nyc1/crepes/`, `/sandwiches-wraps/`, `/sweet-affairs/`) or from the client.

## 9. Pakistan menu extras (from delivery listing and reviews)

Categories seen on the Pakistan listing: Breakfast, Starters, Waffles, Pasta, Grills, Wraps, Sandwiches, Pizza, NYC Frappes, Muffins, NYC On The Rocks, Signature Drinks, Smoothies, Espresso Drinks, Other Alternatives, Drinks.

Individual items mentioned by customers: Fettuccine Alfredo, Moroccan Chicken, Lava Cake, Spinach Omelette, Caesar Salad, small burgers.

Add these categories to the site as "needs client data" until the client sends the real Pakistan menu with prices and photos.

## 10. Questions for the client

1. Official logo files and brand colours/fonts.
2. Complete Pakistan menu with prices, descriptions and photos.
3. Full branch list with addresses, hours and Google Maps links.
4. Delivery/ordering links they want on the site (own ordering, Supermeal, foodpanda, WhatsApp).
5. Permission to reuse the photos from nycoffee.com, plus photos of the Pakistani branches.
6. Do they want franchise, careers and online shop pages?
7. Any approved testimonials.
