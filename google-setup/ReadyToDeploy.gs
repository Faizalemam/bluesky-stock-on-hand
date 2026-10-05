// FULL SINGLE-FILE INVENTORY CODE — 2026-10-05 Owner Admin V2
// Replace the entire Code.gs with this file. Catalog and security are included.
const PRODUCTS = [
  {
    "id": "p1006",
    "code": "1006",
    "name": "Honey Cake. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1007",
    "code": "1007",
    "name": "Saffron Milk Cake. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1009",
    "code": "1009",
    "name": "Red Velvet Cake. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1010",
    "code": "1010",
    "name": "Chocolate Cookies. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1011",
    "code": "1011",
    "name": "Vanilla Cookies. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1012",
    "code": "1012",
    "name": "Mix Cookies Cup. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1013",
    "code": "1013",
    "name": "Classic Donut. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1014",
    "code": "1014",
    "name": "Chocolate Donut. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1015",
    "code": "1015",
    "name": "Cheese Croissant. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1016",
    "code": "1016",
    "name": "Oreo. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1017",
    "code": "1017",
    "name": "Kit Kat. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1018",
    "code": "1018",
    "name": "Snickers. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1019",
    "code": "1019",
    "name": "Cotton Candy. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1025",
    "code": "1025",
    "name": "Sandwich Halloumi. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p1028",
    "code": "1028",
    "name": "Sandwich Chicken. BSC",
    "unit": "PCS",
    "category": "Bakery & snacks",
    "sizes": []
  },
  {
    "id": "p2001",
    "code": "2001",
    "name": "Black Berry Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2002",
    "code": "2002",
    "name": "Blue Berry Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2003",
    "code": "2003",
    "name": "Blue Curacao (LGN) Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2004",
    "code": "2004",
    "name": "Straw Berry Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2005",
    "code": "2005",
    "name": "Grenadine (Mixed Berry) Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2006",
    "code": "2006",
    "name": "Hazelnut Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2007",
    "code": "2007",
    "name": "Vanilla Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2008",
    "code": "2008",
    "name": "Lavender Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2009",
    "code": "2009",
    "name": "Rasp Berry Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2010",
    "code": "2010",
    "name": "Water Melon Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2011",
    "code": "2011",
    "name": "Mojito Mint Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2012",
    "code": "2012",
    "name": "Passion Fruit Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2013",
    "code": "2013",
    "name": "Rose Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2014",
    "code": "2014",
    "name": "Cloudy Lemonade Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2015",
    "code": "2015",
    "name": "Bubble Gum Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2016",
    "code": "2016",
    "name": "Peach Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2017",
    "code": "2017",
    "name": "Ginger Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2018",
    "code": "2018",
    "name": "Red Grape Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2019",
    "code": "2019",
    "name": "White Strawberry Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2020",
    "code": "2020",
    "name": "Caribbean Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2021",
    "code": "2021",
    "name": "Cherry Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2022",
    "code": "2022",
    "name": "Pistachio Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2023",
    "code": "2023",
    "name": "Salted Caramel Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2024",
    "code": "2024",
    "name": "Black Grapes Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2025",
    "code": "2025",
    "name": "Green Mint Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2026",
    "code": "2026",
    "name": "Cinnamon Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2028",
    "code": "2028",
    "name": "Lime/Lemon Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2029",
    "code": "2029",
    "name": "Kiwi Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2030",
    "code": "2030",
    "name": "Hasawy Lemon Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2031",
    "code": "2031",
    "name": "Ice Peach Tea Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2032",
    "code": "2032",
    "name": "Roman (Pomegranate) Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2033",
    "code": "2033",
    "name": "Green Apple Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2034",
    "code": "2034",
    "name": "Honey Syrup. BSC",
    "unit": "ML",
    "category": "Syrups & sauces",
    "sizes": []
  },
  {
    "id": "p2038",
    "code": "2038",
    "name": "Dark Chocolate Sauce (G). BSC",
    "unit": "KG",
    "category": "Syrups & sauces",
    "sizes": []
  },
  {
    "id": "p2039",
    "code": "2039",
    "name": "Caramel Sauce (G). BSC",
    "unit": "KG",
    "category": "Syrups & sauces",
    "sizes": []
  },
  {
    "id": "p2040",
    "code": "2040",
    "name": "White Chocolate Sauce (G). BSC",
    "unit": "KG",
    "category": "Syrups & sauces",
    "sizes": []
  },
  {
    "id": "p2041",
    "code": "2041",
    "name": "Toffee Caramel Sauce (C). BSC",
    "unit": "KG",
    "category": "Syrups & sauces",
    "sizes": []
  },
  {
    "id": "p2042",
    "code": "2042",
    "name": "Pistachio Sauce (C). BSC",
    "unit": "KG",
    "category": "Syrups & sauces",
    "sizes": []
  },
  {
    "id": "p2045",
    "code": "2045",
    "name": "Topping Chocolate Sauce. BSC",
    "unit": "KG",
    "category": "Syrups & sauces",
    "sizes": []
  },
  {
    "id": "p2046",
    "code": "2046",
    "name": "Topping Caramel Sauce. BSC",
    "unit": "KG",
    "category": "Syrups & sauces",
    "sizes": []
  },
  {
    "id": "p2047",
    "code": "2047",
    "name": "Mango Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2048",
    "code": "2048",
    "name": "Pineapple Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2050",
    "code": "2050",
    "name": "Vimto Syrup. BSC",
    "unit": "BTL",
    "category": "Syrups & sauces",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p2051",
    "code": "2051",
    "name": "Hibiscus Sauce. BSC",
    "unit": "KG",
    "category": "Syrups & sauces",
    "sizes": []
  },
  {
    "id": "p3001",
    "code": "3001",
    "name": "Metal Tong. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3002",
    "code": "3002",
    "name": "Stapler. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3003",
    "code": "3003",
    "name": "Stapler Pin. BSC",
    "unit": "PKT",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3004",
    "code": "3004",
    "name": "Mint (Nana) Box. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3005",
    "code": "3005",
    "name": "Sauce Pump Big. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3006",
    "code": "3006",
    "name": "Plastic Juice Jug. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3007",
    "code": "3007",
    "name": "Bar Spoon. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3008",
    "code": "3008",
    "name": "Shaker. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3009",
    "code": "3009",
    "name": "Tea Strainer. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3010",
    "code": "3010",
    "name": "Peacher Small. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3011",
    "code": "3011",
    "name": "Peacher Large. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3012",
    "code": "3012",
    "name": "Knife Large. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3013",
    "code": "3013",
    "name": "Syrup Pump Small. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3014",
    "code": "3014",
    "name": "Scissors. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3015",
    "code": "3015",
    "name": "Pen. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3016",
    "code": "3016",
    "name": "Marker. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3017",
    "code": "3017",
    "name": "Knife Small. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3018",
    "code": "3018",
    "name": "Peacher Medium. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3019",
    "code": "3019",
    "name": "Whipping Cream Dispenser. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3020",
    "code": "3020",
    "name": "Turkish Pot Big. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3021",
    "code": "3021",
    "name": "Turkish Pot Small. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3022",
    "code": "3022",
    "name": "Electric Heater. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3023",
    "code": "3023",
    "name": "Ice Cream Scooper. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3024",
    "code": "3024",
    "name": "Dustbin (L). BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3025",
    "code": "3025",
    "name": "Dust Pan. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3026",
    "code": "3026",
    "name": "Strawberry Scooper. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3027",
    "code": "3027",
    "name": "Powder Box Small. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3028",
    "code": "3028",
    "name": "Powder Box Big. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3029",
    "code": "3029",
    "name": "Arabic Coffee Kettle. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3030",
    "code": "3030",
    "name": "V60 Pot (Jar). BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3031",
    "code": "3031",
    "name": "Measuring Spoon. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3032",
    "code": "3032",
    "name": "Steel Spoon Small. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3033",
    "code": "3033",
    "name": "Steel Spoon Big. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3034",
    "code": "3034",
    "name": "Weighing Scale. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3035",
    "code": "3035",
    "name": "Salt Bottle. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3036",
    "code": "3036",
    "name": "Tray. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3037",
    "code": "3037",
    "name": "Cutting Board. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3038",
    "code": "3038",
    "name": "Calculator. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3039",
    "code": "3039",
    "name": "Folder File. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3040",
    "code": "3040",
    "name": "Chair. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3041",
    "code": "3041",
    "name": "Fruit Basket. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3042",
    "code": "3042",
    "name": "Syrup Stand. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3043",
    "code": "3043",
    "name": "Cup Carrier. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3044",
    "code": "3044",
    "name": "Sugar Bucket (50K). BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3045",
    "code": "3045",
    "name": "Sugar Box (10k). BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3046",
    "code": "3046",
    "name": "Cello Tape. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3047",
    "code": "3047",
    "name": "Temperature Machine. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3048",
    "code": "3048",
    "name": "Fatura Stand. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3049",
    "code": "3049",
    "name": "Pallet. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3050",
    "code": "3050",
    "name": "Wrapping Roll. BSC",
    "unit": "ROLL",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3051",
    "code": "3051",
    "name": "Inventory Paper. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3052",
    "code": "3052",
    "name": "Lemon Squeezer. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3053",
    "code": "3053",
    "name": "Knock Box. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3054",
    "code": "3054",
    "name": "Espresso Cleaning Brush. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3055",
    "code": "3055",
    "name": "Sugar Spoon. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3056",
    "code": "3056",
    "name": "Espresso Shot Glass. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3057",
    "code": "3057",
    "name": "Coffee Tamper. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3058",
    "code": "3058",
    "name": "Rubber Mat. BSC",
    "unit": "UNIT",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3059",
    "code": "3059",
    "name": "Tamper Mat. BSC",
    "unit": "UNIT",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3060",
    "code": "3060",
    "name": "American Coffee Jug. BSC",
    "unit": "UNIT",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3061",
    "code": "3061",
    "name": "Straw Holder. BSC",
    "unit": "UNIT",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3062",
    "code": "3062",
    "name": "Dustbin (S). BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3063",
    "code": "3063",
    "name": "Painting Brush. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3064",
    "code": "3064",
    "name": "Battery AAA. BSC",
    "unit": "PCS",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p3065",
    "code": "3065",
    "name": "A4 Paper. BSC",
    "unit": "Units",
    "category": "Tools & equipment",
    "sizes": []
  },
  {
    "id": "p4002",
    "code": "4002",
    "name": "Blue Sky Sugar (S). BSC",
    "unit": "KG",
    "category": "Sugar",
    "sizes": []
  },
  {
    "id": "p4003",
    "code": "4003",
    "name": "Sugar White (50K).BSC",
    "unit": "KG",
    "category": "Sugar",
    "sizes": []
  },
  {
    "id": "p4004",
    "code": "4004",
    "name": "Tropicana (Diet) Sugar. BSC",
    "unit": "SACHET",
    "category": "Sugar",
    "sizes": []
  },
  {
    "id": "p5001",
    "code": "5001",
    "name": "Vanilla Powder. BSC",
    "unit": "KG",
    "category": "Powders & ingredients",
    "sizes": []
  },
  {
    "id": "p5003",
    "code": "5003",
    "name": "Big Train Mocha Powder. BSC",
    "unit": "KG",
    "category": "Powders & ingredients",
    "sizes": []
  },
  {
    "id": "p5004",
    "code": "5004",
    "name": "Big Train Chocolate Powder. BSC",
    "unit": "KG",
    "category": "Powders & ingredients",
    "sizes": []
  },
  {
    "id": "p5005",
    "code": "5005",
    "name": "Big Coffee Toffee Powder. BSC",
    "unit": "KG",
    "category": "Powders & ingredients",
    "sizes": []
  },
  {
    "id": "p5007",
    "code": "5007",
    "name": "Red Velvet Powder. BSC",
    "unit": "KG",
    "category": "Powders & ingredients",
    "sizes": []
  },
  {
    "id": "p5008",
    "code": "5008",
    "name": "Cerelac Honey. BSC",
    "unit": "KG",
    "category": "Powders & ingredients",
    "sizes": []
  },
  {
    "id": "p5009",
    "code": "5009",
    "name": "Cerelac Fruits. BSC",
    "unit": "KG",
    "category": "Powders & ingredients",
    "sizes": []
  },
  {
    "id": "p5010",
    "code": "5010",
    "name": "Cerelac Dates. BSC",
    "unit": "KG",
    "category": "Powders & ingredients",
    "sizes": []
  },
  {
    "id": "p5011",
    "code": "5011",
    "name": "Almond Beans. BSC",
    "unit": "KG",
    "category": "Powders & ingredients",
    "sizes": []
  },
  {
    "id": "p5012",
    "code": "5012",
    "name": "Karak Tea Powder. BSC",
    "unit": "KG",
    "category": "Powders & ingredients",
    "sizes": []
  },
  {
    "id": "p5016",
    "code": "5016",
    "name": "Matcha Latte. BSC",
    "unit": "KG",
    "category": "Powders & ingredients",
    "sizes": []
  },
  {
    "id": "p5017",
    "code": "5017",
    "name": "Sahlab. BSC",
    "unit": "KG",
    "category": "Powders & ingredients",
    "sizes": []
  },
  {
    "id": "p5023",
    "code": "5023",
    "name": "Pineapple Slices. BSC",
    "unit": "CAN * 10 PCS",
    "category": "Powders & ingredients",
    "sizes": []
  },
  {
    "id": "p6001",
    "code": "6001",
    "name": "Lemon. BSC",
    "unit": "KG",
    "category": "Fresh produce",
    "sizes": []
  },
  {
    "id": "p6002",
    "code": "6002",
    "name": "Orange. BSC",
    "unit": "KG",
    "category": "Fresh produce",
    "sizes": []
  },
  {
    "id": "p6003",
    "code": "6003",
    "name": "Avocado. BSC",
    "unit": "KG",
    "category": "Fresh produce",
    "sizes": []
  },
  {
    "id": "p6004",
    "code": "6004",
    "name": "Mint (Nana) Leaves. BSC",
    "unit": "GRM",
    "category": "Fresh produce",
    "sizes": []
  },
  {
    "id": "p6006",
    "code": "6006",
    "name": "Beetroot. BSC",
    "unit": "KG",
    "category": "Fresh produce",
    "sizes": []
  },
  {
    "id": "p6008",
    "code": "6008",
    "name": "Dates Shukari. BSC",
    "unit": "KG",
    "category": "Fresh produce",
    "sizes": []
  },
  {
    "id": "p7001",
    "code": "7001",
    "name": "Black Berry Frozen. BSC",
    "unit": "KG",
    "category": "Frozen",
    "sizes": []
  },
  {
    "id": "p7002",
    "code": "7002",
    "name": "Blue Berry Frozen. BSC",
    "unit": "KG",
    "category": "Frozen",
    "sizes": []
  },
  {
    "id": "p7004",
    "code": "7004",
    "name": "Mango Frozen. BSC",
    "unit": "KG",
    "category": "Frozen",
    "sizes": []
  },
  {
    "id": "p7005",
    "code": "7005",
    "name": "Straw Berry Frozen. BSC",
    "unit": "KG",
    "category": "Frozen",
    "sizes": []
  },
  {
    "id": "p7006",
    "code": "7006",
    "name": "Rasp Berry Frozen. BSC",
    "unit": "KG",
    "category": "Frozen",
    "sizes": []
  },
  {
    "id": "p7007",
    "code": "7007",
    "name": "Vanilla Ice Cream (10LTR). BSC",
    "unit": "LTR",
    "category": "Frozen",
    "sizes": []
  },
  {
    "id": "p8001",
    "code": "8001",
    "name": "7 UP. BSC",
    "unit": "PCS",
    "category": "Drinks & dairy",
    "sizes": []
  },
  {
    "id": "p8002",
    "code": "8002",
    "name": "Code Red. BSC",
    "unit": "PCS",
    "category": "Drinks & dairy",
    "sizes": []
  },
  {
    "id": "p8003",
    "code": "8003",
    "name": "Red Bull. BSC",
    "unit": "PCS",
    "category": "Drinks & dairy",
    "sizes": []
  },
  {
    "id": "p8004",
    "code": "8004",
    "name": "Spark Soft Drinks (L). BSC",
    "unit": "PCS",
    "category": "Drinks & dairy",
    "sizes": []
  },
  {
    "id": "p8007",
    "code": "8007",
    "name": "Tania Water Gallon. BSC",
    "unit": "PCS",
    "category": "Drinks & dairy",
    "sizes": []
  },
  {
    "id": "p8008",
    "code": "8008",
    "name": "Mixed Black Berry Juice. BSC",
    "unit": "LTR",
    "category": "Drinks & dairy",
    "sizes": []
  },
  {
    "id": "p8009",
    "code": "8009",
    "name": "Roman (Pomegranate) Juice. BSC",
    "unit": "LTR",
    "category": "Drinks & dairy",
    "sizes": []
  },
  {
    "id": "p8012",
    "code": "8012",
    "name": "Long Life Milk. BSC",
    "unit": "LTR",
    "category": "Drinks & dairy",
    "sizes": []
  },
  {
    "id": "p8015",
    "code": "8015",
    "name": "Condensed Milk (397G). BSC",
    "unit": "CAN * 397 ML",
    "category": "Drinks & dairy",
    "sizes": []
  },
  {
    "id": "p8016",
    "code": "8016",
    "name": "Whipping Cream. BSC",
    "unit": "BTL * 200 ML",
    "category": "Drinks & dairy",
    "sizes": []
  },
  {
    "id": "p8017",
    "code": "8017",
    "name": "Cold Brew (Coffee). BSC",
    "unit": "BTL",
    "category": "Drinks & dairy",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p8020",
    "code": "8020",
    "name": "Berain Water. BSC",
    "unit": "PCS",
    "category": "Drinks & dairy",
    "sizes": []
  },
  {
    "id": "p8033",
    "code": "8033",
    "name": "GUINNESS BEER. BSC",
    "unit": "PCS",
    "category": "Drinks & dairy",
    "sizes": []
  },
  {
    "id": "p9001",
    "code": "9001",
    "name": "Espresso Coffee Beans. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9002",
    "code": "9002",
    "name": "Arabic Coffee Powder. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9003",
    "code": "9003",
    "name": "French Coffee Powder. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9004",
    "code": "9004",
    "name": "Turkish Coffee Powder. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9005",
    "code": "9005",
    "name": "Black - Colombian Coffee. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9006",
    "code": "9006",
    "name": "Nescafe. BSC",
    "unit": "BTL * 200 GRM",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9007",
    "code": "9007",
    "name": "German Tea. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9008",
    "code": "9008",
    "name": "Hibiscus Tea. BSC",
    "unit": "SACHET",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9010",
    "code": "9010",
    "name": "Classic Black Tea. BSC",
    "unit": "SACHET",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9011",
    "code": "9011",
    "name": "Moroccan Tea (Twining's Gun Powder). BSC",
    "unit": "BOX * 200 GRM",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9012",
    "code": "9012",
    "name": "Twinning Green Tea Pure. BSC",
    "unit": "SACHET",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9013",
    "code": "9013",
    "name": "Twinning Early Grey Tea. BSC",
    "unit": "SACHET",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9014",
    "code": "9014",
    "name": "English Breakfast Tea. BSC",
    "unit": "SACHET",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9015",
    "code": "9015",
    "name": "Twinning Lemon Ginger Tea. BSC",
    "unit": "SACHET",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9016",
    "code": "9016",
    "name": "Hill (Cardamom) Powder. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9017",
    "code": "9017",
    "name": "Ginger Powder. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9018",
    "code": "9018",
    "name": "Mismar (Cloves) Powder. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9019",
    "code": "9019",
    "name": "Cinnamon Powder. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9020",
    "code": "9020",
    "name": "Pistachio Powder. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9021",
    "code": "9021",
    "name": "Saffron (Q) Powder. BSC",
    "unit": "PCS",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9023",
    "code": "9023",
    "name": "Espresso Brew Powder. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9024",
    "code": "9024",
    "name": "Ethiopian Coffee Powder. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p9027",
    "code": "9027",
    "name": "Ethiopian Coffee Beans. BSC",
    "unit": "KG",
    "category": "Coffee & tea",
    "sizes": []
  },
  {
    "id": "p10001",
    "code": "10001",
    "name": "Garbage Bag. BSC",
    "unit": "CRT",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10002",
    "code": "10002",
    "name": "Cleaning Mop. BSC",
    "unit": "PCS",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10003",
    "code": "10003",
    "name": "Rag Yellow. BSC",
    "unit": "PCS",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10004",
    "code": "10004",
    "name": "Cleaning Brush. BSC",
    "unit": "PCS",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10005",
    "code": "10005",
    "name": "Cleaning Whipper. BSC",
    "unit": "PCS",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10006",
    "code": "10006",
    "name": "Sponge. BSC",
    "unit": "PCS",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10007",
    "code": "10007",
    "name": "Sponge Steel. BSC",
    "unit": "PCS",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10008",
    "code": "10008",
    "name": "Insect Killer. BSC",
    "unit": "PCS",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10009",
    "code": "10009",
    "name": "Hand Wash. BSC",
    "unit": "BTL",
    "category": "Cleaning & filters",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p10010",
    "code": "10010",
    "name": "Face Mask. BSC",
    "unit": "PKT",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10011",
    "code": "10011",
    "name": "Gloves. BSC",
    "unit": "PKT",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10012",
    "code": "10012",
    "name": "Hairnet. BSC",
    "unit": "PKT",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10013",
    "code": "10013",
    "name": "Maxi (Napco) Roll. BSC",
    "unit": "ROLL",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10015",
    "code": "10015",
    "name": "Dettol. BSC",
    "unit": "BTL",
    "category": "Cleaning & filters",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p10016",
    "code": "10016",
    "name": "Napkin Whipes. BSC",
    "unit": "CRT",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10017",
    "code": "10017",
    "name": "Fairy (Dishwashing) Liquid. BSC",
    "unit": "BTL",
    "category": "Cleaning & filters",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p10018",
    "code": "10018",
    "name": "Glass Cleaner. BSC",
    "unit": "BTL",
    "category": "Cleaning & filters",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p10019",
    "code": "10019",
    "name": "Espresso Cleaning Powder. BSC",
    "unit": "BTL",
    "category": "Cleaning & filters",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p10020",
    "code": "10020",
    "name": "American Filter. BSC",
    "unit": "PKT",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10021",
    "code": "10021",
    "name": "German Filter. BSC",
    "unit": "PKT",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10022",
    "code": "10022",
    "name": "Cold Brew Filter. BSC",
    "unit": "PKT",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10023",
    "code": "10023",
    "name": "V60 Filter. BSC",
    "unit": "PKT",
    "category": "Cleaning & filters",
    "sizes": []
  },
  {
    "id": "p10024",
    "code": "10024",
    "name": "Sanitizer. BSC",
    "unit": "BTL",
    "category": "Cleaning & filters",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p10025",
    "code": "10025",
    "name": "Cleanser Dispenser Btl. BSC",
    "unit": "BTL",
    "category": "Cleaning & filters",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p11001",
    "code": "11001",
    "name": "4 OZ Espresso Hot Cup. BSC",
    "unit": "CUP",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11002",
    "code": "11002",
    "name": "9 OZ Hot Paper Cup. BSC",
    "unit": "CUP",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11003",
    "code": "11003",
    "name": "9 OZ Hot Paper Cup W/O Logo. BSC",
    "unit": "CUP",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11004",
    "code": "11004",
    "name": "12 OZ Hot Paper Cup. BSC",
    "unit": "CUP",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11005",
    "code": "11005",
    "name": "12 OZ Hot Paper Cup W/O Logo. BSC",
    "unit": "CUP",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11006",
    "code": "11006",
    "name": "16 OZ Hot Paper Cup. BSC",
    "unit": "CUP",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11007",
    "code": "11007",
    "name": "7 OZ Hot Paper Cup. BSC",
    "unit": "CUP",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11008",
    "code": "11008",
    "name": "14 OZ Plastic Cold Cup (Mocha). BSC",
    "unit": "CUP",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11009",
    "code": "11009",
    "name": "500 U Plastic Cold Cup 16 OZ (Spanish). BSC",
    "unit": "CUP",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11010",
    "code": "11010",
    "name": "700 U Plastic Cold Cup 22 OZ (Large). BSC",
    "unit": "CUP",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11011",
    "code": "11011",
    "name": "2*2 Cup Holder / Molded. BSC",
    "unit": "PCS",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11012",
    "code": "11012",
    "name": "4*4 Cup Holder / Molded. BSC",
    "unit": "PCS",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11013",
    "code": "11013",
    "name": "Straw Juice 10MM. BSC",
    "unit": "PKT",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11014",
    "code": "11014",
    "name": "Straw Juice 6MM. BSC",
    "unit": "PKT",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11015",
    "code": "11015",
    "name": "Bakery Bag. BSC",
    "unit": "KG",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11016",
    "code": "11016",
    "name": "Plastic Bag (L). BSC",
    "unit": "KG",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11017",
    "code": "11017",
    "name": "Plastic Roll (Sealing). BSC",
    "unit": "ROLL",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11018",
    "code": "11018",
    "name": "Machine (POS) Roll. BSC",
    "unit": "ROLL",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11019",
    "code": "11019",
    "name": "Mada Roll. BSC",
    "unit": "ROLL",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11020",
    "code": "11020",
    "name": "Wooden Stirrer. BSC",
    "unit": "PKT",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11021",
    "code": "11021",
    "name": "Plastic Spoon. BSC",
    "unit": "PKT",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11022",
    "code": "11022",
    "name": "Plastic Fork. BSC",
    "unit": "PKT",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11023",
    "code": "11023",
    "name": "Rubber Band. BSC",
    "unit": "PKT",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11024",
    "code": "11024",
    "name": "BOTTLE 1.0 LTR. BSC",
    "unit": "BTL",
    "category": "Cups & packaging",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p11025",
    "code": "11025",
    "name": "BOTTLE 1.5 LTR. BSC",
    "unit": "BTL",
    "category": "Cups & packaging",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p11026",
    "code": "11026",
    "name": "Blue-Sky Box. BSC",
    "unit": "BOX",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11027",
    "code": "11027",
    "name": "Cold Brew BTL (Raw-Met). BSC",
    "unit": "BTL",
    "category": "Cups & packaging",
    "sizes": [
      "1000 ML",
      "700 ML"
    ]
  },
  {
    "id": "p11028",
    "code": "11028",
    "name": "Cookies Box. BSC",
    "unit": "Units",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11029",
    "code": "11029",
    "name": "380ML Plastic Cold Cup (Small). BSC",
    "unit": "CUP",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11030",
    "code": "11030",
    "name": "Blue Sky Cupholder. BSC",
    "unit": "PCS",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11034",
    "code": "11034",
    "name": "Plastic Bag (S). BSC",
    "unit": "KG",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11035",
    "code": "11035",
    "name": "700 U LID. BSC",
    "unit": "PCS",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11036",
    "code": "11036",
    "name": "12 OZ LID. BSC",
    "unit": "PCS",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11037",
    "code": "11037",
    "name": "9 OZ LID. BSC",
    "unit": "PCS",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11038",
    "code": "11038",
    "name": "7 OZ LID. BSC",
    "unit": "PCS",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11039",
    "code": "11039",
    "name": "16 OZ LID. BSC",
    "unit": "PCS",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11040",
    "code": "11040",
    "name": "14 OZ LID. BSC",
    "unit": "PCS",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11041",
    "code": "11041",
    "name": "14 OZ (Mocha Cup) W/O Logo. BSC",
    "unit": "CUP",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11042",
    "code": "11042",
    "name": "Straw Paper 6 MM. BSC",
    "unit": "PKT",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11043",
    "code": "11043",
    "name": "Ice Pellets Cup. BSC",
    "unit": "PCS",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11045",
    "code": "11045",
    "name": "8 OZ Plastic Cold Cup (Ice Cream). BSC",
    "unit": "PCS",
    "category": "Cups & packaging",
    "sizes": []
  },
  {
    "id": "p11046",
    "code": "11046",
    "name": "BlueSky Paper Bag. BSC",
    "unit": "KG",
    "category": "Cups & packaging",
    "sizes": []
  }
];


// Paste Catalog.gs and Security.gs beside this file. Run setupInventory once, then deploy as Web app.
const INVENTORY_SHEET_ID='1udtvE2eZvgVbsQgUzz7iM0QlfO_s06j49ePmfZuFkYg';
const INVENTORY_TAB='Inventory Reports v4';
const EMAIL_FROM='inventory@blueskycoffe.com';
function verifyInventorySender(){if(!GmailApp.getAliases().some(a=>a.toLowerCase()===EMAIL_FROM.toLowerCase()))throw Error('Verify inventory@blueskycoffe.com in the deploying Gmail account Send mail as settings first.');console.log('Inventory sender alias verified.');}
const EMAIL_TO='Samad@blueskycoffe.com', EMAIL_CC='Faizal@itdelhi.in,Saber@blueskycoffe.com,m.osman@blueskycoffe.com';
function spreadsheet_(){return SpreadsheetApp.openById(INVENTORY_SHEET_ID);}
function fields_(){return PRODUCTS.flatMap(p=>p.sizes.length?p.sizes.map(size=>({p:p,size:size})):[{p:p,size:''}]);}
function sheet_(){const ss=spreadsheet_();let sheet=ss.getSheetByName(INVENTORY_TAB);if(!sheet){sheet=ss.insertSheet(INVENTORY_TAB);const headers=['Receipt ID','Submitted at (Riyadh)','Branch Name','Employee Name','Filled products','Partly filled products','Not filled products','Filled quantity fields','Blank quantity fields','Email status','Email error',...fields_().map(f=>f.p.code+' | '+f.p.name+' | '+(f.size?f.size+' BTL':f.p.unit))];if(sheet.getMaxColumns()<headers.length)sheet.insertColumnsAfter(sheet.getMaxColumns(),headers.length-sheet.getMaxColumns());sheet.appendRow(headers);sheet.setFrozenRows(1);sheet.setFrozenColumns(4);sheet.getRange(1,1,1,headers.length).setBackground('#eeeeee').setFontWeight('bold').setWrap(true);}return sheet;}
function safe_(s){return /^[=+\-@\t\r]/.test(s)?"'"+s:s;}
function escaped_(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function normalize_(d){let filled=0,partial=0,blank=0;const quantities=[];PRODUCTS.forEach(p=>{let entered=0;const sizes=p.sizes.length?p.sizes:[''];sizes.forEach(size=>{const v=size?d.values[p.id]?.[size]:d.values[p.id];if(v===undefined||v===null||v===''){quantities.push('');return;}if(typeof v!=='string'||!v.trim()||!Number.isFinite(Number(v))||Number(v)<0||Number(v)>1000000000)throw Error('Invalid quantity '+p.id);quantities.push(Number(v));entered++;});if(entered===sizes.length)filled++;else if(entered)partial++;else blank++;});return {quantities:quantities,filled:filled,partial:partial,blank:blank,filledFields:quantities.filter(v=>v!=='').length};}
function findReceipt_(sheet,id){if(sheet.getLastRow()<2)return null;return sheet.getRange(2,1,sheet.getLastRow()-1,1).createTextFinder(id).matchEntireCell(true).findNext();}

function submittedAt_(v){return v instanceof Date?Utilities.formatDate(v,'Asia/Riyadh','yyyy-MM-dd HH:mm:ss'):String(v);}
function report_(row){row=row.slice();row[1]=submittedAt_(row[1]);const fields=fields_();const details=fields.map((f,i)=>({code:f.p.code,name:f.p.name,unit:f.p.unit,size:f.size,qty:row[11+i],status:row[11+i]===''?'Not filled':'Filled'}));const missing=details.filter(d=>d.status==='Not filled');const summary='Branch: '+row[2]+'\nEmployee: '+row[3]+'\nSubmitted (Riyadh): '+row[1]+'\nReceipt: '+row[0]+'\nTotal products: '+PRODUCTS.length+'\nFilled products: '+row[4]+'\nPartly filled products: '+row[5]+'\nNot filled products: '+row[6]+'\nFilled quantity fields: '+row[7]+'\nBlank quantity fields: '+row[8]+'\n0 means counted with no stock; blank means not filled.\nGoogle Sheet: https://docs.google.com/spreadsheets/d/'+INVENTORY_SHEET_ID+'/edit';
const body=summary+'\n\nMissing quantities:\n'+(missing.length?missing.map(d=>d.code+' - '+d.name+(d.size?' - '+d.size+' BTL':'') ).join('\n'):'None')+'\n\nFull inventory attached as CSV.';
const csvCell=v=>'"'+safe_(String(v)).replace(/"/g,'""')+'"';
const csv='\uFEFF'+[['Branch',row[2]],['Employee',row[3]],['Submitted at (Riyadh)',row[1]],['Receipt',row[0]],['Code','Product','Unit','Bottle size','Quantity','Status'],...details.map(d=>[d.code,d.name,d.unit,d.size,d.qty,d.status])].map(r=>r.map(csvCell).join(',')).join('\r\n');
const table='<table cellpadding="7" cellspacing="0" style="border-collapse:collapse;width:100%;font-size:12px"><tr style="background:#eeeeee"><th>Code</th><th>Product</th><th>Unit / size</th><th>Quantity</th><th>Status</th></tr>'+details.map(d=>'<tr style="border-bottom:1px solid #ddd"><td>'+escaped_(d.code)+'</td><td>'+escaped_(d.name)+'</td><td>'+escaped_(d.size?d.size+' BTL':d.unit)+'</td><td>'+escaped_(d.qty===''?'—':d.qty)+'</td><td>'+escaped_(d.status)+'</td></tr>').join('')+'</table>';
return {subject:'Blue Sky Inventory | '+String(row[2]).replace(/[\r\n]/g,' ')+' | '+row[1]+' | '+row[4]+'/'+PRODUCTS.length+' products filled',body:body,htmlBody:'<div style="font-family:Arial;color:#0d2340"><h2>Branch inventory report</h2><p style="white-space:pre-line">'+escaped_(summary)+'</p>'+table+'<p>Developer: @Eng. Faizal Emam<br><a href="https://itdelhi.in">itdelhi.in</a></p></div>',csv:csv};}
function emailRecipientCount_(){return new Set((EMAIL_TO+','+EMAIL_CC).split(',').map(address=>address.trim().toLowerCase()).filter(Boolean)).size;}
function sendReport_(rowNumber,force){const lock=LockService.getScriptLock();lock.waitLock(30000);try{const sheet=sheet_(),row=sheet.getRange(rowNumber,1,1,11+fields_().length).getValues()[0];if(force){if(row[9]==='Sending')throw Error('This report email is already being sent.');const props=PropertiesService.getScriptProperties(),key='BSC_RESEND_'+row[0],last=Number(props.getProperty(key)||0);if(Date.now()-last<60000)throw Error('Please wait one minute before resending this report again.');if(MailApp.getRemainingDailyQuota()<emailRecipientCount_())throw Error('Daily email quota exhausted. No resend was sent; try again after the quota resets.');props.setProperty(key,String(Date.now()));}else if(!['Pending','Failed'].includes(row[9]))return;if(MailApp.getRemainingDailyQuota()<emailRecipientCount_()){sheet.getRange(rowNumber,11).setValue('Daily email quota exhausted; queued for retry');return;}const report=report_(row);sheet.getRange(rowNumber,10,1,2).setValues([['Sending','']]);SpreadsheetApp.flush();try{verifyInventorySender();GmailApp.sendEmail(EMAIL_TO,report.subject,report.body,{from:EMAIL_FROM,replyTo:EMAIL_FROM,cc:EMAIL_CC,htmlBody:report.htmlBody,name:'Blue Sky Inventory',attachments:[Utilities.newBlob(report.csv,'text/csv','BlueSky-Inventory-'+row[0]+'.csv')]});sheet.getRange(rowNumber,10,1,2).setValues([['Sent','']]);}catch(err){sheet.getRange(rowNumber,10,1,2).setValues([['Failed',safe_(String(err).slice(0,500))]]);}SpreadsheetApp.flush();}finally{lock.releaseLock();}}
function retryPendingEmails(){const sheet=sheet_();if(sheet.getLastRow()<2)return;const statuses=sheet.getRange(2,10,sheet.getLastRow()-1,1).getValues();let handled=0;for(let i=0;i<statuses.length&&handled<10;i++)if(['Pending','Failed'].includes(statuses[i][0])){sendReport_(i+2);handled++;}}
function setupInventory(){verifyInventorySender();sheet_();MailApp.getRemainingDailyQuota();if(!ScriptApp.getProjectTriggers().some(t=>t.getHandlerFunction()==='retryPendingEmails'))ScriptApp.newTrigger('retryPendingEmails').timeBased().everyMinutes(5).create();console.log('Inventory sheet and email retry trigger ready. Now deploy as a Web app.');}
function doGet(e){if(e.parameter.action==='securityInfo')return ContentService.createTextOutput('bscSecurity('+JSON.stringify({enabled:true,pinRequired:false,maxByUnit:MAX_BY_UNIT,wholeUnits:WHOLE_NUMBER_UNITS})+');').setMimeType(ContentService.MimeType.JAVASCRIPT);if(e.parameter.action==='admin')return ownerAdminPageV2_();const id=String(e.parameter.id||'');let result={saved:false};if(e.parameter.action==='status'&&/^[a-f0-9-]{36}$/.test(id)){const sheet=sheet_(),cell=findReceipt_(sheet,id);if(cell){const values=sheet.getRange(cell.getRow(),5,1,6).getValues()[0];result={saved:true,filled:values[0],partial:values[1],blank:values[2],emailStatus:values[5]};}}const rejection=submissionError_(id,String(e.parameter.attempt||''));if(rejection)result=rejection;const json=JSON.stringify(result);return ContentService.createTextOutput(e.parameter.callback==='bscReceipt'?'bscReceipt('+json+');':json).setMimeType(e.parameter.callback==='bscReceipt'?ContentService.MimeType.JAVASCRIPT:ContentService.MimeType.JSON);}

/* Admin passwords and sessions stay in Script Properties, never in public site files. */
function adminDigest_(text){return Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,String(text),Utilities.Charset.UTF_8));}
function adminEditor_(){const active=Session.getActiveUser().getEmail().toLowerCase(),effective=Session.getEffectiveUser().getEmail().toLowerCase();if(!active||!effective||active!==effective)throw Error('Run this function from the owner Apps Script editor.');}
function setupAdminLogin(){adminEditor_();const lock=LockService.getScriptLock();lock.waitLock(30000);try{const props=PropertiesService.getScriptProperties();if(props.getProperty('BSC_ADMIN_owner')){console.log('Admin accounts already exist. Passwords were shown only during first setup.');return;}for(const user of ['owner','samad']){const password=Utilities.getUuid().replace(/-/g,'');const salt=Utilities.getUuid();props.setProperty('BSC_ADMIN_'+user,JSON.stringify({salt:salt,hash:adminDigest_(salt+':'+password)}));console.log('ADMIN ID: '+user+' | PASSWORD: '+password);}console.log('Save these passwords privately. Admin URL: '+ScriptApp.getService().getUrl()+'?action=admin');}finally{lock.releaseLock();}}
function adminLogin(user,password){if(!['owner','samad'].includes(user)||typeof password!=='string'||password.length>200)throw Error('Invalid admin ID or password.');const lock=LockService.getScriptLock();lock.waitLock(30000);try{const props=PropertiesService.getScriptProperties(),now=Date.now(),rateKey='BSC_ADMIN_RATE_'+user;let rate=JSON.parse(props.getProperty(rateKey)||'null');if(!rate||now>rate.until)rate={count:0,until:now+15*60*1000};if(rate.count>=10)throw Error('Too many login attempts. Try again in 15 minutes.');rate.count++;props.setProperty(rateKey,JSON.stringify(rate));const account=JSON.parse(props.getProperty('BSC_ADMIN_'+user)||'null');if(!account||adminDigest_(account.salt+':'+password)!==account.hash)throw Error('Invalid admin ID or password.');props.deleteProperty(rateKey);const all=props.getProperties();Object.keys(all).filter(k=>k.startsWith('BSC_ADMIN_SESSION_')).forEach(k=>{if(JSON.parse(all[k]).expires<now)props.deleteProperty(k);});const token=Utilities.getUuid()+Utilities.getUuid();props.setProperty('BSC_ADMIN_SESSION_'+adminDigest_(token),JSON.stringify({user:user,expires:now+8*60*60*1000}));return {token:token};}finally{lock.releaseLock();}}
function requireAdmin_(token){if(typeof token!=='string'||token.length!==72)throw Error('Session expired. Please sign in again.');const props=PropertiesService.getScriptProperties(),key='BSC_ADMIN_SESSION_'+adminDigest_(token),session=JSON.parse(props.getProperty(key)||'null');if(!session||session.expires<Date.now()){props.deleteProperty(key);throw Error('Session expired. Please sign in again.');}return session.user;}
function adminLogout(token){requireAdmin_(token);PropertiesService.getScriptProperties().deleteProperty('BSC_ADMIN_SESSION_'+adminDigest_(token));return true;}
function adminSummary_(row,revision){return {id:String(row[0]),at:submittedAt_(row[1]),branch:String(row[2]),employee:String(row[3]),filled:row[4],partial:row[5],blank:row[6],emailStatus:String(row[9]),emailError:String(row[10]||''),reportStatus:(revision?revision[0]:row[11+fields_().length])||'Historical',supersededBy:(revision?revision[1]:row[12+fields_().length])||''};}
function adminGetReports(token){const user=requireAdmin_(token),sheet=sheet_(),last=sheet.getLastRow();revisionColumns_(sheet);if(last<2)return {user:user,reports:[]};const n=fields_().length,meta=sheet.getRange(2,1,last-1,11).getValues(),rev=sheet.getRange(2,12+n,last-1,2).getValues();return {user:user,reports:meta.map((r,i)=>adminSummary_(r,rev[i])).reverse()};}
function adminGetReportDetail(token,id){requireAdmin_(token);if(typeof id!=='string'||!/^[a-f0-9-]{36}$/.test(id))throw Error('Invalid reference.');const sheet=sheet_(),cell=findReceipt_(sheet,id);if(!cell)throw Error('Submission not found.');revisionColumns_(sheet);const fields=fields_(),row=sheet.getRange(cell.getRow(),1,1,13+fields.length).getValues()[0];return Object.assign(adminSummary_(row),{products:fields.map((f,i)=>({sequence:PRODUCTS.indexOf(f.p)+1,code:f.p.code,name:f.p.name,unit:f.size?f.size+' BTL':f.p.unit,qty:row[11+i]}))});}
function ownerAdminPageV2_(){return HtmlService.createHtmlOutput("<!doctype html><html><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style>\n*{box-sizing:border-box}body{margin:0;background:#f3f6fb;color:#0d2340;font:15px/1.5 Arial,sans-serif}header{background:#0d2340;color:white;padding:22px 5%}main{max-width:1180px;margin:auto;padding:24px}h1{font-size:23px;margin:0}h2{font-size:20px}.panel{background:#fff;border:1px solid #dde5ef;border-radius:14px;padding:24px;margin-bottom:20px}#login{max-width:430px;margin:35px auto}label{display:block;font-weight:bold;margin-top:15px}input,select,button{font:inherit;padding:12px;border-radius:8px;border:1px solid #cdd8e7}input,select{width:100%;margin-top:6px}button{background:#2965bd;color:white;cursor:pointer;font-weight:bold;min-height:44px}button:disabled{opacity:.5}#login button{width:100%;margin-top:22px}.tools{display:flex;gap:12px;align-items:center;flex-wrap:wrap}.tools>*{flex:1;min-width:140px}.stats{display:flex;gap:14px;flex-wrap:wrap}.stats div{flex:1;min-width:130px}.stats b{display:block;font-size:27px}.table-wrap{overflow:auto}table{border-collapse:collapse;width:100%;font-size:13px}th,td{text-align:left;border-bottom:1px solid #e5ebf1;padding:12px;vertical-align:top}th{background:#f2f6fb;white-space:nowrap}td button{padding:8px;white-space:nowrap}#message{color:#a33;font-weight:bold}#detailRef{overflow-wrap:anywhere}dialog{width:min(900px,94vw);max-height:85vh;border:0;border-radius:14px;padding:22px}dialog::backdrop{background:#0d234088}[hidden]{display:none!important}.muted{color:#697b91;font-size:13px}@media(max-width:600px){main{padding:12px}.panel{padding:16px}}\n</style></head><body><header><h1>Blue Sky Inventory · Admin</h1><span>Private branch submission reports · Admin tools v3</span></header><main>\n<section id=\"login\" class=\"panel\"><h2>Administrator login</h2><p class=\"muted\">For Faizal Emam and Mohamad Abdul Samad Fazil only.</p><form id=\"loginForm\"><label for=\"username\">Admin ID</label><select id=\"username\"><option value=\"owner\">Faizal Emam</option><option value=\"samad\">Mohamad Abdul Samad Fazil</option></select><label for=\"password\">Password</label><input id=\"password\" type=\"password\" required autocomplete=\"current-password\" maxlength=\"200\"><button id=\"loginButton\">Sign in</button></form></section>\n<p id=\"message\" role=\"status\" aria-live=\"polite\"></p>\n<section id=\"dashboard\" hidden><div class=\"tools panel\"><b id=\"identity\"></b><button id=\"refresh\">Refresh reports</button><button id=\"logout\">Sign out</button></div><div class=\"stats panel\"><div>Submissions<b id=\"total\">0</b></div><div>Branches reporting<b id=\"branchTotal\">0</b></div><div>Latest submission<b id=\"latest\" style=\"font-size:16px\">—</b></div></div>\n<div class=\"panel\"><h2>All branch submissions</h2><div class=\"tools\"><select id=\"branchFilter\" aria-label=\"Filter branch\"><option value=\"\">All branches</option></select><input id=\"search\" placeholder=\"Search reference, branch or employee\" aria-label=\"Search reports\"></div><div id=\"ownerTools\" class=\"tools\" hidden><button id=\"exportExcel\">Download Excel · all quantities</button><button id=\"exportPdf\">Download PDF · report list</button></div><p id=\"reportCount\" class=\"muted\"></p><div class=\"table-wrap\"><table><thead><tr><th>Submitted · Riyadh</th><th>Branch / Employee</th><th>Reference Number</th><th>Filled / Partial / Blank</th><th>Report status</th><th>Email</th><th>Details</th></tr></thead><tbody id=\"rows\"></tbody></table></div><p id=\"empty\" hidden>No submissions found.</p></div></section>\n<dialog id=\"detail\"><button id=\"closeDetail\">Close</button><h2>Inventory submission</h2><div id=\"detailTools\" class=\"tools\" hidden><button id=\"detailExcel\">Download Excel</button><button id=\"detailPdf\">Download PDF</button><button id=\"resendEmail\">Resend email</button></div><p id=\"detailStatus\" role=\"status\" aria-live=\"polite\"></p><p id=\"detailMeta\"></p><p id=\"detailRef\"></p><p id=\"detailError\"></p><div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Product / Code</th><th>Unit / Bottle size</th><th>Quantity</th></tr></thead><tbody id=\"detailRows\"></tbody></table></div></dialog>\n</main><script>\n'use strict';const $=id=>document.getElementById(id);let token='',reports=[],currentReport='',owner=false,actionBusy=false;\nfunction rpc(name,...args){return new Promise((resolve,reject)=>google.script.run.withSuccessHandler(resolve).withFailureHandler(reject)[name](...args));}\nfunction cell(row,value){const td=document.createElement('td');td.textContent=String(value??'');row.append(td);return td;}\nfunction error(e){$('message').textContent=e.message||'Request failed.';if(/Session expired/.test(e.message||''))clearSession();}\nfunction clearSession(){token='';reports=[];owner=false;currentReport='';$('ownerTools').hidden=true;$('detailTools').hidden=true;$('rows').replaceChildren();$('detailRows').replaceChildren();$('detail').close();$('dashboard').hidden=true;$('login').hidden=false;$('password').value='';}\nfunction render(){const branch=$('branchFilter').value,q=$('search').value.toLowerCase();const visible=reports.filter(r=>(!branch||r.branch===branch)&&[r.id,r.branch,r.employee].join(' ').toLowerCase().includes(q));$('rows').replaceChildren();for(const r of visible){const tr=document.createElement('tr');cell(tr,r.at);cell(tr,r.branch+' / '+r.employee);cell(tr,r.id);cell(tr,r.filled+' / '+r.partial+' / '+r.blank);cell(tr,r.reportStatus);cell(tr,r.emailStatus);const td=cell(tr,'');const b=document.createElement('button');b.textContent='View quantities';b.onclick=()=>detail(r.id);td.append(b);$('rows').append(tr);}$('empty').hidden=visible.length>0;$('reportCount').textContent=visible.length+' of '+reports.length+' submissions';}\nasync function load(){ $('refresh').disabled=true;try{const result=await rpc('adminGetReports',token);reports=result.reports;owner=['owner','samad'].includes(result.user);$('ownerTools').hidden=!owner;$('identity').textContent='Signed in: '+({owner:'Faizal Emam',samad:'Mohamad Abdul Samad Fazil'}[result.user]||result.user);$('total').textContent=reports.length;$('branchTotal').textContent=new Set(reports.map(r=>r.branch)).size;$('latest').textContent=reports[0]?.at||'—';const selected=$('branchFilter').value;$('branchFilter').replaceChildren(new Option('All branches',''));[...new Set(reports.map(r=>r.branch))].sort().forEach(b=>$('branchFilter').append(new Option(b,b)));$('branchFilter').value=selected;$('message').textContent='';render();}catch(e){error(e);}finally{$('refresh').disabled=false;}}\nasync function detail(id){try{const r=await rpc('adminGetReportDetail',token,id);currentReport=r.id;$('detailTools').hidden=!owner;$('detailStatus').textContent='';$('detailMeta').textContent=r.branch+' · '+r.employee+' · '+r.at+' · '+r.reportStatus;$('detailRef').textContent='Reference: '+r.id+(r.supersededBy?' · Replaced by: '+r.supersededBy:'');$('detailError').textContent=r.emailError?'Email note: '+r.emailError:'';$('detailRows').replaceChildren();for(const p of r.products){const tr=document.createElement('tr');cell(tr,p.sequence);cell(tr,p.name+' / '+p.code);cell(tr,p.unit);cell(tr,p.qty===''?'Not filled':p.qty);$('detailRows').append(tr);}if(!$('detail').open)$('detail').showModal();}catch(e){error(e);}}\n$('loginForm').onsubmit=async e=>{e.preventDefault();$('loginButton').disabled=true;$('message').textContent='Signing in…';try{const r=await rpc('adminLogin',$('username').value,$('password').value);token=r.token;$('password').value='';$('login').hidden=true;$('dashboard').hidden=false;await load();}catch(e){error(e);}finally{$('loginButton').disabled=false;}};\n$('refresh').onclick=load;$('branchFilter').onchange=render;$('search').oninput=render;$('closeDetail').onclick=()=>$('detail').close();$('logout').onclick=async()=>{const old=token;clearSession();$('message').textContent='Signed out.';try{await rpc('adminLogout',old);}catch{}};\n\nfunction selectedReports(){const branch=$('branchFilter').value,q=$('search').value.toLowerCase();return reports.filter(r=>(!branch||r.branch===branch)&&[r.id,r.branch,r.employee].join(' ').toLowerCase().includes(q)).map(r=>r.id);}\nfunction busyActions(value){actionBusy=value;['exportExcel','exportPdf','detailExcel','detailPdf','resendEmail'].forEach(id=>$(id).disabled=value);}\nasync function download(format,individual){if(actionBusy||!owner)return;busyActions(true);const status=individual?$('detailStatus'):$('message');status.textContent='Preparing download…';try{const file=await rpc('ownerDownloadReportV2',token,format,individual?[currentReport]:selectedReports());const raw=atob(file.base64),bytes=Uint8Array.from(raw,c=>c.charCodeAt(0)),url=URL.createObjectURL(new Blob([bytes],{type:file.mime}));const a=document.createElement('a');a.href=url;a.download=file.name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);status.textContent='Download ready.';}catch(e){status.textContent=e.message||'Download failed.';if(/Session expired/.test(e.message||''))clearSession();}finally{busyActions(false);}}\nasync function resend(){if(actionBusy||!owner||!currentReport)return;if(!confirm('Resend this inventory report to the configured management recipients? This will not create another inventory submission.'))return;busyActions(true);$('detailStatus').textContent='Sending email…';try{const r=await rpc('ownerResendEmailV2',token,currentReport);await load();$('detailStatus').textContent=r.status==='Sent'?'Email accepted for sending. Please check the inbox and spam folder.':'Email status: '+r.status+(r.note?' · '+r.note:'');}catch(e){$('detailStatus').textContent=e.message||'Email resend failed.';if(/Session expired/.test(e.message||''))clearSession();}finally{busyActions(false);}}\n$('exportExcel').onclick=()=>download('xlsx',false);$('exportPdf').onclick=()=>download('pdf',false);$('detailExcel').onclick=()=>download('xlsx',true);$('detailPdf').onclick=()=>download('pdf',true);$('resendEmail').onclick=resend;\n</script></body></html>").setTitle('Blue Sky Inventory Admin').addMetaTag('viewport','width=device-width, initial-scale=1');}

// Used with Code.gs + Catalog.gs. ReadyToDeploy.gs already includes this file; do not add it twice.

const BRANCH_NAMES=["AIRPORT ROAD","FAISALIYAH","KHODARIYAH","SAFWA SAHIK","SAIHAT","FAKHRIYAH","SAHAB 1","SAHAB 2","SAPTCO","ABUHAIDERIYAH","AQRABIYAH","AZIZIYAH 1","DOHA","ESKAN","HALF MOON","JAMA'A","NAFOURA","JESSER 2","RAKAH","TAHLIYAH ABBASI","TAWUN KHALEEJ","JB KURBI","JB TAABA","HASSA 1","HASSA 5","HASSA 6","QATIF","WATANI HOSPITAL","RIYADH 2","RIYADH 4","RIYADH 5","RIYADH 6","RIYADH 8","RIYADH 9","RIYADH 10","HAFAR 1","HAFER 4","NAIRIYAH"];
const MAX_BY_UNIT={PCS:5000,UNIT:5000,PKT:2000,ROLL:2000,BTL:500,KG:1000,ML:100000,GRM:100000,LTR:1000,SACHET:5000,CAN:5000,CRT:5000,CUP:50000,BOX:5000};
const WHOLE_NUMBER_UNITS=['PCS','UNIT','UNITS','PKT','ROLL','BTL','SACHET','CAN','CRT','CUP','BOX'];
function unitBase_(unit){const base=String(unit).toUpperCase().split('*')[0].trim();return base==='UNITS'?'UNIT':base;}
function pinHash_(salt,pin){return adminDigest_(salt+':'+pin);}
function randomPin_(){const b=Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,Utilities.getUuid()+Utilities.getUuid());const n=((b[0]&255)<<16)|((b[1]&255)<<8)|(b[2]&255);return String(100000+n%900000);}
function setupBranchPins(){adminEditor_();const lock=LockService.getScriptLock();lock.waitLock(30000);try{const props=PropertiesService.getScriptProperties();BRANCH_NAMES.forEach(name=>{const key='BSC_PIN_'+adminDigest_(name);if(props.getProperty(key)){console.log('SKIPPED (already has PIN): '+name);return;}const pin=randomPin_(),salt=Utilities.getUuid();props.setProperty(key,JSON.stringify({salt:salt,hash:pinHash_(salt,pin)}));console.log('BRANCH: '+name+' | PIN: '+pin);});}finally{lock.releaseLock();}}
function resetBranchPin(){adminEditor_();const name='PASTE BRANCH NAME HERE';if(!BRANCH_NAMES.includes(name))throw Error('Unknown branch name.');const lock=LockService.getScriptLock();lock.waitLock(30000);try{const pin=randomPin_(),salt=Utilities.getUuid(),props=PropertiesService.getScriptProperties();props.setProperty('BSC_PIN_'+adminDigest_(name),JSON.stringify({salt:salt,hash:pinHash_(salt,pin)}));props.deleteProperty('BSC_PINRATE_'+adminDigest_(name));console.log('BRANCH: '+name+' | NEW PIN: '+pin);}finally{lock.releaseLock();}}
function checkBranchPin_(branch,pin){const props=PropertiesService.getScriptProperties(),k=adminDigest_(branch),now=Date.now(),acct=JSON.parse(props.getProperty('BSC_PIN_'+k)||'null');if(!acct)throw Error('Branch PIN is not configured. Contact the inventory administrator.');let rate=JSON.parse(props.getProperty('BSC_PINRATE_'+k)||'null');if(!rate||now>rate.until)rate={count:0,until:now+15*60*1000};if(rate.count>=5)throw Error('Branch PIN locked. Try again after 15 minutes.');if(typeof pin!=='string'||!/^\d{6}$/.test(pin)||pinHash_(acct.salt,pin)!==acct.hash){rate.count++;props.setProperty('BSC_PINRATE_'+k,JSON.stringify(rate));throw Error(rate.count>=5?'Branch PIN locked. Try again after 15 minutes.':'Incorrect branch PIN. Please check your PIN and retry.');}props.deleteProperty('BSC_PINRATE_'+k);}
function checkLimits_(d){PRODUCTS.forEach(p=>(p.sizes.length?p.sizes:['']).forEach(size=>{const v=size?d.values[p.id]?.[size]:d.values[p.id];if(v===undefined||v===null||v==='')return;const n=Number(v),unit=unitBase_(p.unit),max=MAX_BY_UNIT[unit]||5000;if(!Number.isFinite(n)||n<0)throw Error('Invalid quantity: '+p.code);if(n>max)throw Error('Quantity limit exceeded: '+p.code+' (maximum '+max+'). Contact the administrator if this stock is correct.');if(WHOLE_NUMBER_UNITS.includes(unit)&&!Number.isInteger(n))throw Error('Whole-number quantity required: '+p.code+'.');}));}
function revisionColumns_(sheet){const col=12+fields_().length;if(sheet.getMaxColumns()<col+1)sheet.insertColumnsAfter(sheet.getMaxColumns(),col+1-sheet.getMaxColumns());sheet.getRange(1,col,1,2).setValues([['Report status','Superseded by']]);return col;}
function dayOf_(v){return v instanceof Date?Utilities.formatDate(v,'Asia/Riyadh','yyyy-MM-dd'):String(v).slice(0,10);}
function recordRevision_(sheet,row,branch,day,id){const col=revisionColumns_(sheet),last=sheet.getLastRow();sheet.getRange(row,col,1,2).setValues([['Current','']]);if(last<3)return;const metadata=sheet.getRange(2,1,last-1,3).getValues();metadata.forEach((r,i)=>{if(i+2!==row&&String(r[2])===branch&&dayOf_(r[1])===day)sheet.getRange(i+2,col,1,2).setValues([['Superseded',id]]);});}
function cacheSubmissionError_(d,message){if(d&&typeof d.id==='string'&&/^[a-f0-9-]{36}$/.test(d.id)&&typeof d.attempt==='string'&&/^[a-f0-9-]{36}$/.test(d.attempt))CacheService.getScriptCache().put('BSC_ERROR_'+d.id+'_'+d.attempt,JSON.stringify({saved:false,error:message}),300);}
function submissionError_(id,attempt){if(!/^[a-f0-9-]{36}$/.test(id)||!/^[a-f0-9-]{36}$/.test(attempt))return null;const cached=CacheService.getScriptCache().get('BSC_ERROR_'+id+'_'+attempt);return cached?JSON.parse(cached):null;}
function doPost(e){const lock=LockService.getScriptLock();let row,d;try{d=JSON.parse(e.parameter.payload||'');if(!/^[a-f0-9-]{36}$/.test(d.id)||typeof d.branch!=='string'||typeof d.employee!=='string'||!d.branch.trim()||!d.employee.trim()||d.branch.length>100||d.employee.length>100||!d.values||typeof d.values!=='object')throw Error('Invalid branch or employee details.');if(d.website)throw Error('Submission rejected. Please reload the form.');const branch=d.branch.trim();if(!BRANCH_NAMES.includes(branch))throw Error('Select a valid branch from the list.');lock.waitLock(30000);const sheet=sheet_(),existing=findReceipt_(sheet,d.id);if(existing){row=existing.getRow();if(String(sheet.getRange(row,3).getValue())!==branch)throw Error('Reference belongs to another branch.');}else{checkLimits_(d);const counts=normalize_(d);if(counts.filled!==PRODUCTS.length)throw Error('All product quantities are mandatory. Enter 0 for no stock.');const at=Utilities.formatDate(new Date(),'Asia/Riyadh','yyyy-MM-dd HH:mm:ss');sheet.appendRow([d.id,at,safe_(branch),safe_(d.employee.trim()),counts.filled,counts.partial,counts.blank,counts.filledFields,counts.quantities.length-counts.filledFields,'Pending','',...counts.quantities]);row=sheet.getLastRow();recordRevision_(sheet,row,branch,at.slice(0,10),d.id);SpreadsheetApp.flush();}}catch(err){const message=String(err.message||'Submission failed. Please retry.');cacheSubmissionError_(d,message);console.error(message);return ContentService.createTextOutput('Rejected');}finally{if(lock.hasLock())lock.releaseLock();}try{sendReport_(row);}catch(err){console.error(String(err));}return ContentService.createTextOutput('Saved');}


function sendInventoryTestEmail() {
  verifyInventorySender();
  if (MailApp.getRemainingDailyQuota() < emailRecipientCount_()) throw new Error('Not enough daily email quota for all recipients. Try again after the quota resets.');
  const reference = 'BSC-TEST-' + Utilities.formatDate(new Date(), 'Asia/Riyadh', 'yyyyMMdd-HHmmss');
  GmailApp.sendEmail(
    EMAIL_TO,
    'TEST | Blue Sky Inventory Email | ' + reference,
    'Assalam Alaikum,\n\nThis is a test email from the Blue Sky Inventory system.\n\nReference: ' + reference + '\nSender: ' + EMAIL_FROM + '\n\nNo inventory submission has been created and no stock data has been changed.\n\nBlue Sky Inventory',
    { from: EMAIL_FROM, replyTo: EMAIL_FROM, cc: EMAIL_CC, name: 'Blue Sky Inventory' }
  );
  console.log('Test email accepted for sending. Reference: ' + reference + '. Check the recipients inbox and spam folder.');
}



/* Owner-only private downloads and controlled email resend. */
function requireOwnerV2_(token){if(!['owner','samad'].includes(requireAdmin_(token)))throw Error('Authorized administrator login required.');}
function ownerResendEmailV2(token,id){requireOwnerV2_(token);adminGetReportDetail(token,id);const sheet=sheet_(),cell=findReceipt_(sheet,id);if(!cell)throw Error('Submission not found.');sendReport_(cell.getRow(),true);const r=adminGetReportDetail(token,id);return {status:r.emailStatus,note:r.emailError};}
function ownerExportXmlV2_(v){return String(v==null?'':v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');}
function ownerExportColumnV2_(i){let s='';for(i++;i>0;i=Math.floor((i-1)/26))s=String.fromCharCode(65+(i-1)%26)+s;return s;}
function ownerInventoryXlsxV2_(rows,name){const ns='http://schemas.openxmlformats.org/spreadsheetml/2006/main';const data=rows.map((r,i)=>'<row r="'+(i+1)+'">'+r.map((v,j)=>{const ref=ownerExportColumnV2_(j)+(i+1);return typeof v==='number'&&isFinite(v)?'<c r="'+ref+'"><v>'+v+'</v></c>':'<c r="'+ref+'" t="inlineStr"><is><t xml:space="preserve">'+ownerExportXmlV2_(v)+'</t></is></c>';}).join('')+'</row>').join('');const files={
'[Content_Types].xml':'<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>',
'_rels/.rels':'<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
'xl/workbook.xml':'<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="'+ns+'" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Inventory" sheetId="1" r:id="rId1"/></sheets></workbook>',
'xl/_rels/workbook.xml.rels':'<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>',
'xl/worksheets/sheet1.xml':'<?xml version="1.0" encoding="UTF-8"?><worksheet xmlns="'+ns+'"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><sheetData>'+data+'</sheetData><autoFilter ref="A1:'+ownerExportColumnV2_(rows[0].length-1)+rows.length+'"/></worksheet>'};
return Utilities.zip(Object.keys(files).map(path=>Utilities.newBlob(files[path],'application/xml',path)),name).setContentType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
}
function ownerDownloadReportV2(token,format,ids){
requireOwnerV2_(token);if(!['xlsx','pdf'].includes(format)||!Array.isArray(ids)||!ids.length||ids.length>500||ids.some(id=>typeof id!=='string'||!/^[a-f0-9-]{36}$/.test(id)))throw Error('Select 1–500 reports; filter by branch or search for smaller exports.');
const selected=new Set(ids),sheet=sheet_(),last=sheet.getLastRow(),fields=fields_();if(last<2)throw Error('No submissions found.');revisionColumns_(sheet);
const rows=sheet.getRange(2,1,last-1,13+fields.length).getValues().filter(r=>selected.has(String(r[0])));if(rows.length!==selected.size)throw Error('A selected submission no longer exists. Refresh reports.');
const name='BlueSky-Inventory-'+(rows.length===1?rows[0][0]:Utilities.formatDate(new Date(),'Asia/Riyadh','yyyyMMdd-HHmmss'));
let blob;if(format==='xlsx'){const headers=['Reference Number','Submitted at (Riyadh)','Branch','Employee','Filled products','Partial products','Blank products','Filled quantity fields','Blank quantity fields','Email status','Email note',...fields.map(f=>f.p.code+' | '+f.p.name+' | '+(f.size?f.size+' BTL':f.p.unit)),'Report status','Superseded by'];blob=ownerInventoryXlsxV2_([headers,...rows.map(r=>r.map((v,i)=>i===1?submittedAt_(v):v))],name+'.xlsx');}
else{const e=escaped_;let body='<h1>Blue Sky Inventory</h1><p>Private inventory report · Riyadh time</p>';if(rows.length===1){const r=rows[0];body+='<p><b>Branch:</b> '+e(r[2])+'<br><b>Employee:</b> '+e(r[3])+'<br><b>Submitted:</b> '+e(submittedAt_(r[1]))+'<br><b>Reference:</b> '+e(r[0])+'<br><b>Status:</b> '+e(r[11+fields.length]||'Historical')+'</p><table><thead><tr><th>#</th><th>Product / code</th><th>Unit / size</th><th>Quantity</th></tr></thead><tbody>'+fields.map((f,i)=>'<tr><td>'+(PRODUCTS.indexOf(f.p)+1)+'</td><td>'+e(f.p.name)+' / '+e(f.p.code)+'</td><td>'+e(f.size?f.size+' BTL':f.p.unit)+'</td><td>'+e(r[11+i]===''?'Not filled':r[11+i])+'</td></tr>').join('')+'</tbody></table>';}
else{body+='<p>'+rows.length+' submissions. Download Excel for all product quantities.</p><table><thead><tr><th>Reference</th><th>Submitted</th><th>Branch / Employee</th><th>Filled / Partial / Blank</th><th>Status / Email</th></tr></thead><tbody>'+rows.map(r=>'<tr><td>'+e(r[0])+'</td><td>'+e(submittedAt_(r[1]))+'</td><td>'+e(r[2])+' / '+e(r[3])+'</td><td>'+e(r[4])+' / '+e(r[5])+' / '+e(r[6])+'</td><td>'+e(r[11+fields.length]||'Historical')+' / '+e(r[9])+'</td></tr>').join('')+'</tbody></table>';}
blob=Utilities.newBlob('<!doctype html><html><head><meta charset="UTF-8"><style>@page{size:A4;margin:18mm}body{font:10px Arial;color:#0d2340}h1{font-size:22px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ccd5df;padding:5px;text-align:left;word-break:break-word}th{background:#eef3f8}thead{display:table-header-group}tr{page-break-inside:avoid}</style></head><body>'+body+'</body></html>','text/html',name+'.html').getAs('application/pdf').setName(name+'.pdf');}
return {name:blob.getName(),mime:blob.getContentType(),base64:Utilities.base64Encode(blob.getBytes())};
}



function verifyOwnerAdminV2(){const html=doGet({parameter:{action:"admin"}}).getContent();console.log(html.includes("Admin tools v3")?"OWNER AND SAMAD ADMIN ACCESS ACTIVE — Excel, PDF and resend route ready":"OLD ADMIN ROUTE IS RUNNING");}
function adminPage_(){return ownerAdminPageV2_();}
