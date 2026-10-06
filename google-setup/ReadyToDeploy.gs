// Public source: costs are NOT stored in GitHub. Use the private downloaded full script for first setup.
const PRODUCTS=[
  {
    "id": "p1006",
    "code": "1006",
    "name": "Honey Cake. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 1
  },
  {
    "id": "p1007",
    "code": "1007",
    "name": "Saffron Milk Cake. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 2
  },
  {
    "id": "p1009",
    "code": "1009",
    "name": "Red Velvet Cake. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 3
  },
  {
    "id": "p1010",
    "code": "1010",
    "name": "Chocolate Cookies. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 4
  },
  {
    "id": "p1011",
    "code": "1011",
    "name": "Vanilla Cookies. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 5
  },
  {
    "id": "p1013",
    "code": "1013",
    "name": "Classic Donut. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 6
  },
  {
    "id": "p1014",
    "code": "1014",
    "name": "Chocolate Donut. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 7
  },
  {
    "id": "p1015",
    "code": "1015",
    "name": "Cheese Croissant. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 8
  },
  {
    "id": "p1016",
    "code": "1016",
    "name": "Oreo. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 9
  },
  {
    "id": "p1017",
    "code": "1017",
    "name": "Kit Kat. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 10
  },
  {
    "id": "p1018",
    "code": "1018",
    "name": "Snickers. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 11
  },
  {
    "id": "p1019",
    "code": "1019",
    "name": "Cotton Candy. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 12
  },
  {
    "id": "p1025",
    "code": "1025",
    "name": "Sandwich Halloumi. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 13
  },
  {
    "id": "p1028",
    "code": "1028",
    "name": "Sandwich Chicken. BSC",
    "category": "Bakery & snacks",
    "unit": "PCS",
    "sizes": [],
    "sequence": 14
  },
  {
    "id": "p2001",
    "code": "2001",
    "name": "Black Berry Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 15
  },
  {
    "id": "p2002",
    "code": "2002",
    "name": "Blue Berry Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 16
  },
  {
    "id": "p2003",
    "code": "2003",
    "name": "Blue Curacao (LGN) Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 17
  },
  {
    "id": "p2004",
    "code": "2004",
    "name": "Straw Berry Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 18
  },
  {
    "id": "p2005",
    "code": "2005",
    "name": "Grenadine (Mixed Berry) Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 19
  },
  {
    "id": "p2006",
    "code": "2006",
    "name": "Hazelnut Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 20
  },
  {
    "id": "p2007",
    "code": "2007",
    "name": "Vanilla Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 21
  },
  {
    "id": "p2008",
    "code": "2008",
    "name": "Lavender Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 22
  },
  {
    "id": "p2009",
    "code": "2009",
    "name": "Rasp Berry Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 23
  },
  {
    "id": "p2010",
    "code": "2010",
    "name": "Water Melon Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 24
  },
  {
    "id": "p2011",
    "code": "2011",
    "name": "Mojito Mint Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 25
  },
  {
    "id": "p2012",
    "code": "2012",
    "name": "Passion Fruit Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 26
  },
  {
    "id": "p2013",
    "code": "2013",
    "name": "Rose Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 27
  },
  {
    "id": "p2014",
    "code": "2014",
    "name": "Cloudy Lemonade Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 28
  },
  {
    "id": "p2015",
    "code": "2015",
    "name": "Bubble Gum Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 29
  },
  {
    "id": "p2016",
    "code": "2016",
    "name": "Peach Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 30
  },
  {
    "id": "p2017",
    "code": "2017",
    "name": "Ginger Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 31
  },
  {
    "id": "p2018",
    "code": "2018",
    "name": "Red Grape Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 32
  },
  {
    "id": "p2019",
    "code": "2019",
    "name": "White Strawberry Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 33
  },
  {
    "id": "p2020",
    "code": "2020",
    "name": "Caribbean Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 34
  },
  {
    "id": "p2021",
    "code": "2021",
    "name": "Cherry Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 35
  },
  {
    "id": "p2022",
    "code": "2022",
    "name": "Pistachio Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 36
  },
  {
    "id": "p2023",
    "code": "2023",
    "name": "Salted Caramel Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 37
  },
  {
    "id": "p2024",
    "code": "2024",
    "name": "Black Grapes Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "750 ML"
    ],
    "sequence": 38
  },
  {
    "id": "p2025",
    "code": "2025",
    "name": "Green Mint Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 39
  },
  {
    "id": "p2026",
    "code": "2026",
    "name": "Cinnamon Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 40
  },
  {
    "id": "p2028",
    "code": "2028",
    "name": "Lime/Lemon Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 41
  },
  {
    "id": "p2029",
    "code": "2029",
    "name": "Kiwi Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 42
  },
  {
    "id": "p2030",
    "code": "2030",
    "name": "Hasawy Lemon Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 43
  },
  {
    "id": "p2031",
    "code": "2031",
    "name": "Ice Peach Tea Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 44
  },
  {
    "id": "p2032",
    "code": "2032",
    "name": "Roman (Pomegranate) Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 45
  },
  {
    "id": "p2033",
    "code": "2033",
    "name": "Green Apple Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 46
  },
  {
    "id": "p2034",
    "code": "2034",
    "name": "Honey Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [],
    "sequence": 47
  },
  {
    "id": "p2038",
    "code": "2038",
    "name": "Dark Chocolate Sauce (G). BSC",
    "category": "Syrups & sauces",
    "unit": "KG",
    "sizes": [],
    "sequence": 48
  },
  {
    "id": "p2039",
    "code": "2039",
    "name": "Caramel Sauce (G). BSC",
    "category": "Syrups & sauces",
    "unit": "KG",
    "sizes": [],
    "sequence": 49
  },
  {
    "id": "p2040",
    "code": "2040",
    "name": "White Chocolate Sauce (G). BSC",
    "category": "Syrups & sauces",
    "unit": "KG",
    "sizes": [],
    "sequence": 50
  },
  {
    "id": "p2041",
    "code": "2041",
    "name": "Toffee Caramel Sauce (C). BSC",
    "category": "Syrups & sauces",
    "unit": "KG",
    "sizes": [],
    "sequence": 51
  },
  {
    "id": "p2042",
    "code": "2042",
    "name": "Pistachio Sauce (C). BSC",
    "category": "Syrups & sauces",
    "unit": "KG",
    "sizes": [],
    "sequence": 52
  },
  {
    "id": "p2045",
    "code": "2045",
    "name": "Topping Chocolate Sauce. BSC",
    "category": "Syrups & sauces",
    "unit": "KG",
    "sizes": [],
    "sequence": 53
  },
  {
    "id": "p2046",
    "code": "2046",
    "name": "Topping Caramel Sauce. BSC",
    "category": "Syrups & sauces",
    "unit": "KG",
    "sizes": [],
    "sequence": 54
  },
  {
    "id": "p2047",
    "code": "2047",
    "name": "Mango Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 55
  },
  {
    "id": "p2048",
    "code": "2048",
    "name": "Pineapple Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "BTL",
    "sizes": [
      "1000 ML",
      "700 ML"
    ],
    "sequence": 56
  },
  {
    "id": "p2050",
    "code": "2050",
    "name": "Vimto Syrup. BSC",
    "category": "Syrups & sauces",
    "unit": "710 ML* BTL",
    "sizes": [],
    "sequence": 57
  },
  {
    "id": "p2051",
    "code": "2051",
    "name": "Hibiscus Sauce. BSC",
    "category": "Syrups & sauces",
    "unit": "KG",
    "sizes": [],
    "sequence": 58
  },
  {
    "id": "p4002",
    "code": "4002",
    "name": "Blue Sky Sugar (S). BSC",
    "category": "Sugar",
    "unit": "KG",
    "sizes": [],
    "sequence": 59
  },
  {
    "id": "p4003",
    "code": "4003",
    "name": "Sugar White (50K).BSC",
    "category": "Sugar",
    "unit": "KG",
    "sizes": [],
    "sequence": 60
  },
  {
    "id": "p4004",
    "code": "4004",
    "name": "Tropicana (Diet) Sugar. BSC",
    "category": "Sugar",
    "unit": "SACHET",
    "sizes": [],
    "sequence": 61
  },
  {
    "id": "p5001",
    "code": "5001",
    "name": "Vanilla Powder. BSC",
    "category": "Powders & ingredients",
    "unit": "KG",
    "sizes": [],
    "sequence": 62
  },
  {
    "id": "p5003",
    "code": "5003",
    "name": "Big Train Mocha Powder. BSC",
    "category": "Powders & ingredients",
    "unit": "KG",
    "sizes": [],
    "sequence": 63
  },
  {
    "id": "p5004",
    "code": "5004",
    "name": "Big Train Chocolate Powder. BSC",
    "category": "Powders & ingredients",
    "unit": "KG",
    "sizes": [],
    "sequence": 64
  },
  {
    "id": "p5005",
    "code": "5005",
    "name": "Big Coffee Toffee Powder. BSC",
    "category": "Powders & ingredients",
    "unit": "KG",
    "sizes": [],
    "sequence": 65
  },
  {
    "id": "p5007",
    "code": "5007",
    "name": "Red Velvet Powder. BSC",
    "category": "Powders & ingredients",
    "unit": "KG",
    "sizes": [],
    "sequence": 66
  },
  {
    "id": "p5008",
    "code": "5008",
    "name": "Cerelac Honey. BSC",
    "category": "Powders & ingredients",
    "unit": "KG",
    "sizes": [],
    "sequence": 67
  },
  {
    "id": "p5009",
    "code": "5009",
    "name": "Cerelac Fruits. BSC",
    "category": "Powders & ingredients",
    "unit": "KG",
    "sizes": [],
    "sequence": 68
  },
  {
    "id": "p5010",
    "code": "5010",
    "name": "Cerelac Dates. BSC",
    "category": "Powders & ingredients",
    "unit": "KG",
    "sizes": [],
    "sequence": 69
  },
  {
    "id": "p5011",
    "code": "5011",
    "name": "Almond Beans. BSC",
    "category": "Powders & ingredients",
    "unit": "KG",
    "sizes": [],
    "sequence": 70
  },
  {
    "id": "p5012",
    "code": "5012",
    "name": "Karak Tea Powder. BSC",
    "category": "Powders & ingredients",
    "unit": "KG",
    "sizes": [],
    "sequence": 71
  },
  {
    "id": "p5016",
    "code": "5016",
    "name": "Matcha Latte. BSC",
    "category": "Powders & ingredients",
    "unit": "KG",
    "sizes": [],
    "sequence": 72
  },
  {
    "id": "p5017",
    "code": "5017",
    "name": "Sahlab. BSC",
    "category": "Powders & ingredients",
    "unit": "KG",
    "sizes": [],
    "sequence": 73
  },
  {
    "id": "p5023",
    "code": "5023",
    "name": "Pineapple Slices. BSC",
    "category": "Powders & ingredients",
    "unit": "CAN * 10 PCS",
    "sizes": [],
    "sequence": 74
  },
  {
    "id": "p6001",
    "code": "6001",
    "name": "Lemon. BSC",
    "category": "Fresh produce",
    "unit": "KG",
    "sizes": [],
    "sequence": 75
  },
  {
    "id": "p6002",
    "code": "6002",
    "name": "Orange. BSC",
    "category": "Fresh produce",
    "unit": "KG",
    "sizes": [],
    "sequence": 76
  },
  {
    "id": "p6003",
    "code": "6003",
    "name": "Avocado. BSC",
    "category": "Fresh produce",
    "unit": "KG",
    "sizes": [],
    "sequence": 77
  },
  {
    "id": "p6004",
    "code": "6004",
    "name": "Mint (Nana) Leaves. BSC",
    "category": "Fresh produce",
    "unit": "TEIR*BDL",
    "sizes": [],
    "sequence": 78
  },
  {
    "id": "p6006",
    "code": "6006",
    "name": "Beetroot. BSC",
    "category": "Fresh produce",
    "unit": "KG",
    "sizes": [],
    "sequence": 79
  },
  {
    "id": "p6008",
    "code": "6008",
    "name": "Dates Shukari. BSC",
    "category": "Fresh produce",
    "unit": "KG",
    "sizes": [],
    "sequence": 80
  },
  {
    "id": "p7001",
    "code": "7001",
    "name": "Black Berry Frozen. BSC",
    "category": "Frozen",
    "unit": "KG",
    "sizes": [],
    "sequence": 81
  },
  {
    "id": "p7002",
    "code": "7002",
    "name": "Blue Berry Frozen. BSC",
    "category": "Frozen",
    "unit": "KG",
    "sizes": [],
    "sequence": 82
  },
  {
    "id": "p7004",
    "code": "7004",
    "name": "Mango Frozen. BSC",
    "category": "Frozen",
    "unit": "KG",
    "sizes": [],
    "sequence": 83
  },
  {
    "id": "p7005",
    "code": "7005",
    "name": "Straw Berry Frozen. BSC",
    "category": "Frozen",
    "unit": "KG",
    "sizes": [],
    "sequence": 84
  },
  {
    "id": "p7006",
    "code": "7006",
    "name": "Rasp Berry Frozen. BSC",
    "category": "Frozen",
    "unit": "KG",
    "sizes": [],
    "sequence": 85
  },
  {
    "id": "p7007",
    "code": "7007",
    "name": "Vanilla Ice Cream (10LTR). BSC",
    "category": "Frozen",
    "unit": "LTR",
    "sizes": [],
    "sequence": 86
  },
  {
    "id": "p8001",
    "code": "8001",
    "name": "7 UP. BSC",
    "category": "Drinks & dairy",
    "unit": "PCS",
    "sizes": [],
    "sequence": 87
  },
  {
    "id": "p8002",
    "code": "8002",
    "name": "Code Red. BSC",
    "category": "Drinks & dairy",
    "unit": "PCS",
    "sizes": [],
    "sequence": 88
  },
  {
    "id": "p8003",
    "code": "8003",
    "name": "Red Bull. BSC",
    "category": "Drinks & dairy",
    "unit": "PCS",
    "sizes": [],
    "sequence": 89
  },
  {
    "id": "p8004",
    "code": "8004",
    "name": "Spark Soft Drinks (L). BSC",
    "category": "Drinks & dairy",
    "unit": "PCS",
    "sizes": [],
    "sequence": 90
  },
  {
    "id": "p8008",
    "code": "8008",
    "name": "Mixed Black Berry Juice. BSC",
    "category": "Drinks & dairy",
    "unit": "BTL* 1.4",
    "sizes": [],
    "sequence": 91
  },
  {
    "id": "p8009",
    "code": "8009",
    "name": "Roman (Pomegranate) Juice. BSC",
    "category": "Drinks & dairy",
    "unit": "BTL* 1.4",
    "sizes": [],
    "sequence": 92
  },
  {
    "id": "p8012",
    "code": "8012",
    "name": "Long Life Milk. BSC",
    "category": "Drinks & dairy",
    "unit": "LTR",
    "sizes": [],
    "sequence": 93
  },
  {
    "id": "p8015",
    "code": "8015",
    "name": "Condensed Milk (397G). BSC",
    "category": "Drinks & dairy",
    "unit": "CAN * 397 ML",
    "sizes": [],
    "sequence": 94
  },
  {
    "id": "p8016",
    "code": "8016",
    "name": "Whipping Cream. BSC",
    "category": "Drinks & dairy",
    "unit": "BTL * 200 ML",
    "sizes": [],
    "sequence": 95
  },
  {
    "id": "p8017",
    "code": "8017",
    "name": "Cold Brew (Coffee). BSC",
    "category": "Drinks & dairy",
    "unit": "BTL",
    "sizes": [],
    "sequence": 96
  },
  {
    "id": "p8020",
    "code": "8020",
    "name": "Berain Water. BSC",
    "category": "Drinks & dairy",
    "unit": "PCS",
    "sizes": [],
    "sequence": 97
  },
  {
    "id": "p8033",
    "code": "8033",
    "name": "GUINNESS BEER. BSC",
    "category": "Drinks & dairy",
    "unit": "PCS",
    "sizes": [],
    "sequence": 98
  },
  {
    "id": "p9001",
    "code": "9001",
    "name": "Espresso Coffee Beans. BSC",
    "category": "Coffee & tea",
    "unit": "KG",
    "sizes": [],
    "sequence": 99
  },
  {
    "id": "p9002",
    "code": "9002",
    "name": "Arabic Coffee Powder. BSC",
    "category": "Coffee & tea",
    "unit": "KG",
    "sizes": [],
    "sequence": 100
  },
  {
    "id": "p9003",
    "code": "9003",
    "name": "French Coffee Powder. BSC",
    "category": "Coffee & tea",
    "unit": "KG",
    "sizes": [],
    "sequence": 101
  },
  {
    "id": "p9004",
    "code": "9004",
    "name": "Turkish Coffee Powder. BSC",
    "category": "Coffee & tea",
    "unit": "KG",
    "sizes": [],
    "sequence": 102
  },
  {
    "id": "p9005",
    "code": "9005",
    "name": "Black - Colombian Coffee. BSC",
    "category": "Coffee & tea",
    "unit": "KG",
    "sizes": [],
    "sequence": 103
  },
  {
    "id": "p9006",
    "code": "9006",
    "name": "Nescafe. BSC",
    "category": "Coffee & tea",
    "unit": "BTL * 200 GRM",
    "sizes": [],
    "sequence": 104
  },
  {
    "id": "p9007",
    "code": "9007",
    "name": "German Tea. BSC",
    "category": "Coffee & tea",
    "unit": "KG",
    "sizes": [],
    "sequence": 105
  },
  {
    "id": "p9008",
    "code": "9008",
    "name": "Hibiscus Tea. BSC",
    "category": "Coffee & tea",
    "unit": "SACHET",
    "sizes": [],
    "sequence": 106
  },
  {
    "id": "p9010",
    "code": "9010",
    "name": "Classic Black Tea. BSC",
    "category": "Coffee & tea",
    "unit": "SACHET",
    "sizes": [],
    "sequence": 107
  },
  {
    "id": "p9011",
    "code": "9011",
    "name": "Moroccan Tea (Twining's Gun Powder). BSC",
    "category": "Coffee & tea",
    "unit": "BOX * 200 GRM",
    "sizes": [],
    "sequence": 108
  },
  {
    "id": "p9012",
    "code": "9012",
    "name": "Twinning Green Tea Pure. BSC",
    "category": "Coffee & tea",
    "unit": "SACHET",
    "sizes": [],
    "sequence": 109
  },
  {
    "id": "p9013",
    "code": "9013",
    "name": "Twinning Early Grey Tea. BSC",
    "category": "Coffee & tea",
    "unit": "SACHET",
    "sizes": [],
    "sequence": 110
  },
  {
    "id": "p9014",
    "code": "9014",
    "name": "English Breakfast Tea. BSC",
    "category": "Coffee & tea",
    "unit": "SACHET",
    "sizes": [],
    "sequence": 111
  },
  {
    "id": "p9015",
    "code": "9015",
    "name": "Twinning Lemon Ginger Tea. BSC",
    "category": "Coffee & tea",
    "unit": "SACHET",
    "sizes": [],
    "sequence": 112
  },
  {
    "id": "p9016",
    "code": "9016",
    "name": "Hill (Cardamom) Powder. BSC",
    "category": "Coffee & tea",
    "unit": "KG",
    "sizes": [],
    "sequence": 113
  },
  {
    "id": "p9017",
    "code": "9017",
    "name": "Ginger Powder. BSC",
    "category": "Coffee & tea",
    "unit": "KG",
    "sizes": [],
    "sequence": 114
  },
  {
    "id": "p9018",
    "code": "9018",
    "name": "Mismar (Cloves) Powder. BSC",
    "category": "Coffee & tea",
    "unit": "KG",
    "sizes": [],
    "sequence": 115
  },
  {
    "id": "p9019",
    "code": "9019",
    "name": "Cinnamon Powder. BSC",
    "category": "Coffee & tea",
    "unit": "KG",
    "sizes": [],
    "sequence": 116
  },
  {
    "id": "p9020",
    "code": "9020",
    "name": "Pistachio Powder. BSC",
    "category": "Coffee & tea",
    "unit": "KG",
    "sizes": [],
    "sequence": 117
  },
  {
    "id": "p9021",
    "code": "9021",
    "name": "Saffron (Q) Powder. BSC",
    "category": "Coffee & tea",
    "unit": "PCS",
    "sizes": [],
    "sequence": 118
  },
  {
    "id": "p9024",
    "code": "9024",
    "name": "Ethiopian Coffee Powder. BSC",
    "category": "Coffee & tea",
    "unit": "KG",
    "sizes": [],
    "sequence": 119
  },
  {
    "id": "p9027",
    "code": "9027",
    "name": "Ethiopian Coffee Beans. BSC",
    "category": "Coffee & tea",
    "unit": "KG",
    "sizes": [],
    "sequence": 120
  },
  {
    "id": "p10001",
    "code": "10001",
    "name": "Garbage Bag. BSC",
    "category": "Cleaning & filters",
    "unit": "PKT",
    "sizes": [],
    "sequence": 121
  },
  {
    "id": "p10002",
    "code": "10002",
    "name": "Cleaning Mop. BSC",
    "category": "Cleaning & filters",
    "unit": "PCS",
    "sizes": [],
    "sequence": 122
  },
  {
    "id": "p10003",
    "code": "10003",
    "name": "Rag Yellow. BSC",
    "category": "Cleaning & filters",
    "unit": "PCS",
    "sizes": [],
    "sequence": 123
  },
  {
    "id": "p10004",
    "code": "10004",
    "name": "Cleaning Brush. BSC",
    "category": "Cleaning & filters",
    "unit": "PCS",
    "sizes": [],
    "sequence": 124
  },
  {
    "id": "p10005",
    "code": "10005",
    "name": "Cleaning Whipper. BSC",
    "category": "Cleaning & filters",
    "unit": "PCS",
    "sizes": [],
    "sequence": 125
  },
  {
    "id": "p10006",
    "code": "10006",
    "name": "Sponge. BSC",
    "category": "Cleaning & filters",
    "unit": "PCS",
    "sizes": [],
    "sequence": 126
  },
  {
    "id": "p10007",
    "code": "10007",
    "name": "Sponge Steel. BSC",
    "category": "Cleaning & filters",
    "unit": "PCS",
    "sizes": [],
    "sequence": 127
  },
  {
    "id": "p10008",
    "code": "10008",
    "name": "Insect Killer. BSC",
    "category": "Cleaning & filters",
    "unit": "PCS",
    "sizes": [],
    "sequence": 128
  },
  {
    "id": "p10009",
    "code": "10009",
    "name": "Hand Wash. BSC",
    "category": "Cleaning & filters",
    "unit": "LTR",
    "sizes": [],
    "sequence": 129
  },
  {
    "id": "p10010",
    "code": "10010",
    "name": "Face Mask. BSC",
    "category": "Cleaning & filters",
    "unit": "PKT",
    "sizes": [],
    "sequence": 130
  },
  {
    "id": "p10011",
    "code": "10011",
    "name": "Gloves. BSC",
    "category": "Cleaning & filters",
    "unit": "PKT",
    "sizes": [],
    "sequence": 131
  },
  {
    "id": "p10012",
    "code": "10012",
    "name": "Hairnet. BSC",
    "category": "Cleaning & filters",
    "unit": "PKT",
    "sizes": [],
    "sequence": 132
  },
  {
    "id": "p10013",
    "code": "10013",
    "name": "Maxi (Napco) Roll. BSC",
    "category": "Cleaning & filters",
    "unit": "ROLL",
    "sizes": [],
    "sequence": 133
  },
  {
    "id": "p10015",
    "code": "10015",
    "name": "Dettol. BSC",
    "category": "Cleaning & filters",
    "unit": "LTR",
    "sizes": [],
    "sequence": 134
  },
  {
    "id": "p10016",
    "code": "10016",
    "name": "Napkin Whipes. BSC",
    "category": "Cleaning & filters",
    "unit": "CRT",
    "sizes": [],
    "sequence": 135
  },
  {
    "id": "p10017",
    "code": "10017",
    "name": "Fairy (Dishwashing) Liquid. BSC",
    "category": "Cleaning & filters",
    "unit": "LTR",
    "sizes": [],
    "sequence": 136
  },
  {
    "id": "p10018",
    "code": "10018",
    "name": "Glass Cleaner. BSC",
    "category": "Cleaning & filters",
    "unit": "LTR",
    "sizes": [],
    "sequence": 137
  },
  {
    "id": "p10019",
    "code": "10019",
    "name": "Espresso Cleaning Powder. BSC",
    "category": "Cleaning & filters",
    "unit": "KG",
    "sizes": [],
    "sequence": 138
  },
  {
    "id": "p10020",
    "code": "10020",
    "name": "American Filter. BSC",
    "category": "Cleaning & filters",
    "unit": "PKT",
    "sizes": [],
    "sequence": 139
  },
  {
    "id": "p10021",
    "code": "10021",
    "name": "German Filter. BSC",
    "category": "Cleaning & filters",
    "unit": "PKT",
    "sizes": [],
    "sequence": 140
  },
  {
    "id": "p10022",
    "code": "10022",
    "name": "Cold Brew Filter. BSC",
    "category": "Cleaning & filters",
    "unit": "PKT",
    "sizes": [],
    "sequence": 141
  },
  {
    "id": "p10023",
    "code": "10023",
    "name": "V60 Filter. BSC",
    "category": "Cleaning & filters",
    "unit": "PKT",
    "sizes": [],
    "sequence": 142
  },
  {
    "id": "p10024",
    "code": "10024",
    "name": "Sanitizer. BSC",
    "category": "Cleaning & filters",
    "unit": "BTL",
    "sizes": [],
    "sequence": 143
  },
  {
    "id": "p10025",
    "code": "10025",
    "name": "Cleanser Dispenser Btl. BSC",
    "category": "Cleaning & filters",
    "unit": "BTL",
    "sizes": [],
    "sequence": 144
  },
  {
    "id": "p11001",
    "code": "11001",
    "name": "4 OZ Espresso Hot Cup. BSC",
    "category": "Cups & packaging",
    "unit": "CUP",
    "sizes": [],
    "sequence": 145
  },
  {
    "id": "p11002",
    "code": "11002",
    "name": "9 OZ Hot Paper Cup. BSC",
    "category": "Cups & packaging",
    "unit": "CUP",
    "sizes": [],
    "sequence": 146
  },
  {
    "id": "p11004",
    "code": "11004",
    "name": "12 OZ Hot Paper Cup. BSC",
    "category": "Cups & packaging",
    "unit": "CUP",
    "sizes": [],
    "sequence": 147
  },
  {
    "id": "p11006",
    "code": "11006",
    "name": "16 OZ Hot Paper Cup. BSC",
    "category": "Cups & packaging",
    "unit": "CUP",
    "sizes": [],
    "sequence": 148
  },
  {
    "id": "p11007",
    "code": "11007",
    "name": "7 OZ Hot Paper Cup. BSC",
    "category": "Cups & packaging",
    "unit": "CUP",
    "sizes": [],
    "sequence": 149
  },
  {
    "id": "p11008",
    "code": "11008",
    "name": "14 OZ Plastic Cold Cup (Mocha). BSC",
    "category": "Cups & packaging",
    "unit": "CUP",
    "sizes": [],
    "sequence": 150
  },
  {
    "id": "p11009",
    "code": "11009",
    "name": "500 U Plastic Cold Cup 16 OZ (Spanish). BSC",
    "category": "Cups & packaging",
    "unit": "CUP",
    "sizes": [],
    "sequence": 151
  },
  {
    "id": "p11010",
    "code": "11010",
    "name": "700 U Plastic Cold Cup 22 OZ (Large). BSC",
    "category": "Cups & packaging",
    "unit": "CUP",
    "sizes": [],
    "sequence": 152
  },
  {
    "id": "p11011",
    "code": "11011",
    "name": "2*2 Cup Holder / Molded. BSC",
    "category": "Cups & packaging",
    "unit": "PCS",
    "sizes": [],
    "sequence": 153
  },
  {
    "id": "p11012",
    "code": "11012",
    "name": "4*4 Cup Holder / Molded. BSC",
    "category": "Cups & packaging",
    "unit": "PCS",
    "sizes": [],
    "sequence": 154
  },
  {
    "id": "p11013",
    "code": "11013",
    "name": "Straw Juice 10MM. BSC",
    "category": "Cups & packaging",
    "unit": "PKT",
    "sizes": [],
    "sequence": 155
  },
  {
    "id": "p11014",
    "code": "11014",
    "name": "Straw Juice 6MM. BSC",
    "category": "Cups & packaging",
    "unit": "PKT",
    "sizes": [],
    "sequence": 156
  },
  {
    "id": "p11015",
    "code": "11015",
    "name": "Bakery Bag. BSC",
    "category": "Cups & packaging",
    "unit": "KG",
    "sizes": [],
    "sequence": 157
  },
  {
    "id": "p11016",
    "code": "11016",
    "name": "Plastic Bag (L). BSC",
    "category": "Cups & packaging",
    "unit": "KG",
    "sizes": [],
    "sequence": 158
  },
  {
    "id": "p11017",
    "code": "11017",
    "name": "Plastic Roll (Sealing). BSC",
    "category": "Cups & packaging",
    "unit": "ROLL",
    "sizes": [],
    "sequence": 159
  },
  {
    "id": "p11018",
    "code": "11018",
    "name": "Machine (POS) Roll. BSC",
    "category": "Cups & packaging",
    "unit": "ROLL",
    "sizes": [],
    "sequence": 160
  },
  {
    "id": "p11019",
    "code": "11019",
    "name": "Mada Roll. BSC",
    "category": "Cups & packaging",
    "unit": "ROLL",
    "sizes": [],
    "sequence": 161
  },
  {
    "id": "p11020",
    "code": "11020",
    "name": "Wooden Stirrer. BSC",
    "category": "Cups & packaging",
    "unit": "PKT",
    "sizes": [],
    "sequence": 162
  },
  {
    "id": "p11021",
    "code": "11021",
    "name": "Plastic Spoon. BSC",
    "category": "Cups & packaging",
    "unit": "PKT",
    "sizes": [],
    "sequence": 163
  },
  {
    "id": "p11022",
    "code": "11022",
    "name": "Plastic Fork. BSC",
    "category": "Cups & packaging",
    "unit": "PKT",
    "sizes": [],
    "sequence": 164
  },
  {
    "id": "p11023",
    "code": "11023",
    "name": "Rubber Band. BSC",
    "category": "Cups & packaging",
    "unit": "PKT",
    "sizes": [],
    "sequence": 165
  },
  {
    "id": "p11024",
    "code": "11024",
    "name": "BOTTLE 1.0 LTR. BSC",
    "category": "Cups & packaging",
    "unit": "BTL",
    "sizes": [],
    "sequence": 166
  },
  {
    "id": "p11025",
    "code": "11025",
    "name": "BOTTLE 1.5 LTR. BSC",
    "category": "Cups & packaging",
    "unit": "BTL",
    "sizes": [],
    "sequence": 167
  },
  {
    "id": "p11026",
    "code": "11026",
    "name": "Blue-Sky Box. BSC",
    "category": "Cups & packaging",
    "unit": "BOX",
    "sizes": [],
    "sequence": 168
  },
  {
    "id": "p11029",
    "code": "11029",
    "name": "380ML Plastic Cold Cup (Small). BSC",
    "category": "Cups & packaging",
    "unit": "CUP",
    "sizes": [],
    "sequence": 169
  },
  {
    "id": "p11030",
    "code": "11030",
    "name": "Blue Sky Cupholder. BSC",
    "category": "Cups & packaging",
    "unit": "PCS",
    "sizes": [],
    "sequence": 170
  },
  {
    "id": "p11034",
    "code": "11034",
    "name": "Plastic Bag (S). BSC",
    "category": "Cups & packaging",
    "unit": "KG",
    "sizes": [],
    "sequence": 171
  },
  {
    "id": "p11042",
    "code": "11042",
    "name": "Straw Paper 6 MM. BSC",
    "category": "Cups & packaging",
    "unit": "PKT",
    "sizes": [],
    "sequence": 172
  },
  {
    "id": "p11046",
    "code": "11046",
    "name": "BlueSky Paper Bag. BSC",
    "category": "Cups & packaging",
    "unit": "KG",
    "sizes": [],
    "sequence": 173
  }
];
const LEGACY_PRODUCTS=[
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
const INVENTORY_SHEET_ID='1udtvE2eZvgVbsQgUzz7iM0QlfO_s06j49ePmfZuFkYg';
const INVENTORY_TAB='Inventory Reports v5';
const EMAIL_FROM='inventory@blueskycoffe.com';
const EMAIL_TO='Samad@blueskycoffe.com', EMAIL_CC='Faizal@itdelhi.in,Saber@blueskycoffe.com,m.osman@blueskycoffe.com';
const CATALOG_VERSION='branches-20261006-v1';
const TEST_BRANCH='IT- Testing';
const MAX_BY_UNIT={}; // No business maximum for inventory quantities.
const WHOLE_NUMBER_UNITS=[]; // Decimal stock quantities are allowed for all units.
function spreadsheet_(){return SpreadsheetApp.openById(INVENTORY_SHEET_ID);}
function fields_(products){return (products||PRODUCTS).flatMap(p=>p.sizes.length?p.sizes.map(size=>({p,size})):[{p,size:''}]);}
function datasets_(){return [{name:INVENTORY_TAB,products:PRODUCTS,costed:true,version:CATALOG_VERSION},{name:'Inventory Reports v4',products:LEGACY_PRODUCTS,costed:true,revalued:true,version:'legacy-v4'}];}
function width_(ds){return 13+fields_(ds.products).length+(ds.costed?3:0);}
function sheet_(){const ss=spreadsheet_();let sheet=ss.getSheetByName(INVENTORY_TAB);if(!sheet){const headers=['Receipt ID','Submitted at (Riyadh)','Branch Name','Employee Name','Filled products','Partly filled products','Not filled products','Filled quantity fields','Blank quantity fields','Email status','Email error',...fields_().map(f=>f.p.code+' | '+f.p.name+' | '+(f.size?f.size+' * BTL':f.p.unit)),'Report status','Superseded by','Unit cost snapshot (private)','Total inventory value','Catalogue version'];sheet=ss.insertSheet(INVENTORY_TAB);if(sheet.getMaxColumns()<headers.length)sheet.insertColumnsAfter(sheet.getMaxColumns(),headers.length-sheet.getMaxColumns());sheet.appendRow(headers);sheet.setFrozenRows(1);sheet.setFrozenColumns(4);sheet.getRange(1,1,1,headers.length).setBackground('#eeeeee').setFontWeight('bold').setWrap(true);}return sheet;}
function findSaved_(id){const ss=spreadsheet_();for(const ds of datasets_()){const sheet=ss.getSheetByName(ds.name);if(!sheet)continue;const cell=findReceipt_(sheet,id);if(cell)return {ds,sheet,rowNumber:cell.getRow()};}return null;}
function readSaved_(saved){return saved.sheet.getRange(saved.rowNumber,1,1,width_(saved.ds)).getValues()[0];}
function configuredCosts_(){const costs=JSON.parse(PropertiesService.getScriptProperties().getProperty('BSC_COSTS_'+CATALOG_VERSION)||'null');if(!Array.isArray(costs)||costs.length!==fields_().length||costs.some(c=>typeof c!=='number'||!Number.isFinite(c)||c<0))throw Error('Final product costs are not configured. Administrator must run setupFinalCatalog.');return costs;}
function setupFinalCatalog(){adminEditor_();const props=PropertiesService.getScriptProperties();if(typeof PRIVATE_COST_SEED!=='undefined'){if(PRIVATE_COST_SEED.length!==fields_().length||PRIVATE_COST_SEED.some(c=>typeof c!=='number'||!Number.isFinite(c)||c<0))throw Error('Invalid Excel costs.');props.setProperty('BSC_COSTS_'+CATALOG_VERSION,JSON.stringify(PRIVATE_COST_SEED));}configuredCosts_();sheet_();verifyInventorySender();MailApp.getRemainingDailyQuota();if(!ScriptApp.getProjectTriggers().some(t=>t.getHandlerFunction()==='retryPendingEmails'))ScriptApp.newTrigger('retryPendingEmails').timeBased().everyMinutes(5).create();console.log('FINAL BRANCHES CATALOG ACTIVE: '+PRODUCTS.length+' products / '+fields_().length+' required quantities. Costs private. Old reports retained. Existing admin passwords unchanged. Deploy NEW VERSION on the existing /exec URL.');}
function setupInventory(){setupFinalCatalog();}
function unitBase_(unit){const text=String(unit).toUpperCase(),base=text.split('*')[0].trim();if(base==='UNITS')return 'UNIT';if(/\bBTL\b/.test(text))return 'BTL';if(/\bBDL\b/.test(text))return 'BDL';return base;}
function checkLimits_(d){PRODUCTS.forEach(p=>(p.sizes.length?p.sizes:['']).forEach(size=>{const v=size?d.values[p.id]?.[size]:d.values[p.id];if(v===undefined||v===null||v==='')return;const n=Number(v),unit=unitBase_(p.unit),max=MAX_BY_UNIT[unit];if(!Number.isFinite(n)||n<0)throw Error('Invalid quantity: '+p.code);if(Number.isFinite(max)&&n>max)throw Error('Quantity limit exceeded: '+p.code+' (maximum '+max+'). Contact the administrator if this stock is correct.');if(WHOLE_NUMBER_UNITS.includes(unit)&&!Number.isInteger(n))throw Error('Whole-number quantity required: '+p.code+'.');}));}
function revisionColumns_(sheet,ds){return 12+fields_((ds||datasets_()[0]).products).length;}
function recordRevision_(sheet,row,branch,day,id){const col=revisionColumns_(sheet),last=sheet.getLastRow();sheet.getRange(row,col,1,2).setValues([['Current','']]);if(last<3)return;sheet.getRange(2,1,last-1,3).getValues().forEach((r,i)=>{if(i+2!==row&&String(r[2])===branch&&dayOf_(r[1])===day){if(sheet.getRange(i+2,col).getValue()!=='Deleted')sheet.getRange(i+2,col,1,2).setValues([['Superseded',id]]);};});}
function doPost(e){const lock=LockService.getScriptLock();let d;try{d=JSON.parse(e.parameter.payload||'');if(typeof d.id!=='string'||!/^[a-f0-9-]{36}$/.test(d.id)||typeof d.branch!=='string'||typeof d.employee!=='string'||!d.branch.trim()||!d.employee.trim()||d.branch.length>100||d.employee.length>100||!d.values||typeof d.values!=='object'||Array.isArray(d.values))throw Error('Invalid branch or employee details.');if(d.website)throw Error('Submission rejected. Please reload the form.');const branch=d.branch.trim();if(!BRANCH_NAMES.includes(branch))throw Error('Select a valid branch from the list.');lock.waitLock(30000);const existing=findSaved_(d.id);if(existing){if(String(existing.sheet.getRange(existing.rowNumber,3).getValue())!==branch)throw Error('Reference belongs to another branch.');return ContentService.createTextOutput('Saved');}if(d.catalogVersion!==CATALOG_VERSION)throw Error('Product list has been updated. Reload the website before submitting. Your draft is retained.');const costs=configuredCosts_();checkLimits_(d);const counts=normalize_(d);if(branch!==TEST_BRANCH&&counts.filled!==PRODUCTS.length)throw Error('All product quantities are mandatory. Enter 0 for no stock.');const at=Utilities.formatDate(new Date(),'Asia/Riyadh','yyyy-MM-dd HH:mm:ss'),sheet=sheet_(),total=counts.quantities.reduce((sum,q,i)=>sum+q*costs[i],0);if(!Number.isFinite(total))throw Error('Calculated inventory value is not a valid number. Check the quantities.');sheet.appendRow([d.id,at,safe_(branch),safe_(d.employee.trim()),counts.filled,counts.partial,counts.blank,counts.filledFields,counts.quantities.length-counts.filledFields,'Pending','',...counts.quantities,'Current','',JSON.stringify(costs),total,CATALOG_VERSION]);recordRevision_(sheet,sheet.getLastRow(),branch,at.slice(0,10),d.id);if(branch===TEST_BRANCH)sheet.getRange(sheet.getLastRow(),revisionColumns_(sheet)).setValue('Test');SpreadsheetApp.flush();return ContentService.createTextOutput('Saved');}catch(err){const message=String(err.message||'Submission failed. Please retry.');cacheSubmissionError_(d,message);console.error(message);return ContentService.createTextOutput('Rejected');}finally{if(lock.hasLock())lock.releaseLock();}}
function doGet(e){const p=e&&e.parameter||{};if(p.action==='admin')return ownerAdminPageV2_();if(p.action==='securityInfo'){let costsReady=false;try{configuredCosts_();costsReady=true;}catch{}return ContentService.createTextOutput('bscSecurity('+JSON.stringify({enabled:true,pinRequired:false,maxByUnit:MAX_BY_UNIT,wholeUnits:WHOLE_NUMBER_UNITS,testBranch:TEST_BRANCH,catalogVersion:CATALOG_VERSION,costsReady})+');').setMimeType(ContentService.MimeType.JAVASCRIPT);}const id=String(p.id||'');let result={saved:false};if(p.action==='status'&&/^[a-f0-9-]{36}$/.test(id)){const saved=findSaved_(id);if(saved){const values=saved.sheet.getRange(saved.rowNumber,5,1,6).getValues()[0];result={saved:true,filled:values[0],partial:values[1],blank:values[2],emailStatus:values[5]};}}if(!result.saved){const rejection=submissionError_(id,String(p.attempt||''));if(rejection)result=rejection;}const json=JSON.stringify(result);return ContentService.createTextOutput(p.callback==='bscReceipt'?'bscReceipt('+json+');':json).setMimeType(p.callback==='bscReceipt'?ContentService.MimeType.JAVASCRIPT:ContentService.MimeType.JSON);}
function costsOf_(row,ds){if(!ds.costed)return null;let stored;try{stored=JSON.parse(row[13+fields_(ds.products).length]);}catch{}const costs=Array.isArray(stored)?stored:stored&&stored.rates;if(!costs&&ds.revalued)return null;if(!Array.isArray(costs)||costs.length!==fields_(ds.products).length||costs.some(c=>!(ds.revalued&&c===null)&&(typeof c!=='number'||!Number.isFinite(c)||c<0)))throw Error('Stored cost snapshot is missing or invalid. Contact the administrator.');return costs;}
function detailProducts_(row,ds){const costs=costsOf_(row,ds);return fields_(ds.products).map((f,i)=>{const qty=row[11+i],unitCost=costs?costs[i]:null;return {sequence:f.p.sequence||ds.products.indexOf(f.p)+1,code:f.p.code,name:f.p.name,unit:f.size?f.size+' * BTL':f.p.unit,qty,unitCost,value:qty===''?null:unitCost===null?(Number(qty)===0?0:null):Number(qty)*unitCost};});}
function adminSummary_(row,revision,ds){ds=ds||datasets_()[0];const n=fields_(ds.products).length;let info=null;try{const raw=JSON.parse(revision?revision[2]:row[13+n]);if(raw&&!Array.isArray(raw)&&Array.isArray(raw.rates))info=raw;}catch{}const total=ds.costed?(revision?revision[3]:row[14+n]):null;return {id:String(row[0]),at:submittedAt_(row[1]),branch:String(row[2]),employee:String(row[3]),filled:row[4],partial:row[5],blank:row[6],emailStatus:String(row[9]),emailError:String(row[10]||''),reportStatus:(revision?revision[0]:row[11+n])||'Historical',supersededBy:(revision?revision[1]:row[12+n])||'',catalogVersion:ds.version,totalProducts:ds.products.length,totalValue:typeof total==='number'?total:null,valuationStatus:info?info.status:ds.revalued?'Unavailable':Number(row[8])>0?'Partial':'Complete',valuationBasis:info?info.basis:'Submission cost snapshot',valuedAt:info?info.valuedAt:'',unpricedStockFields:info?info.unpricedStockFields.length:0,missingQuantityFields:info?info.missingQuantityFields.length:ds.revalued?0:Number(row[8])||0};}
function adminGetReports(token){const user=requireAdmin_(token),ss=spreadsheet_(),reports=[];for(const ds of datasets_()){const sheet=ss.getSheetByName(ds.name);if(!sheet||sheet.getLastRow()<2)continue;const count=sheet.getLastRow()-1,n=fields_(ds.products).length,meta=sheet.getRange(2,1,count,11).getValues(),rev=sheet.getRange(2,12+n,count,ds.costed?5:2).getValues();meta.forEach((r,i)=>reports.push(adminSummary_(r,rev[i],ds)));}reports.sort((a,b)=>b.at.localeCompare(a.at));return {user,reports};}
function adminGetReportDetail(token,id){requireAdmin_(token);if(typeof id!=='string'||!/^[a-f0-9-]{36}$/.test(id))throw Error('Invalid reference.');const saved=findSaved_(id);if(!saved)throw Error('Submission not found.');const row=readSaved_(saved);return Object.assign(adminSummary_(row,null,saved.ds),{products:detailProducts_(row,saved.ds)});}
function report_(row,ds){ds=ds||datasets_()[0];const r=adminSummary_(row,null,ds),details=detailProducts_(row,ds),costText=r.totalValue===null?'Not available for historical reports':Number(r.totalValue).toFixed(2),summary='Branch: '+r.branch+'\nEmployee: '+r.employee+'\nSubmitted (Riyadh): '+r.at+'\nReference: '+r.id+'\nCatalogue: '+r.catalogVersion+'\nProducts filled: '+r.filled+'/'+ds.products.length+'\nPartly filled: '+r.partial+'\nNot filled: '+r.blank+'\n'+(r.valuationStatus==='Partial'?'Valued subtotal (incomplete)':'Total stock value')+': ⃁ '+costText+'\nValuation status: '+r.valuationStatus+'\nValuation basis: '+r.valuationBasis+'\nStock fields without matching cost: '+r.unpricedStockFields+'\nQuantity fields not entered: '+r.missingQuantityFields+'\nCurrency: Saudi riyal (⃁ / SAR). Costs use the unit basis of the supplied Excel; no VAT added.\n0 means counted with no stock; blank means not filled.\nGoogle Sheet: https://docs.google.com/spreadsheets/d/'+INVENTORY_SHEET_ID+'/edit';const csvCell=v=>'"'+safe_(String(v==null?'':v)).replace(/"/g,'""')+'"',csv='\uFEFF'+[['Branch',r.branch],['Employee',r.employee],['Submitted at (Riyadh)',r.at],['Receipt',r.id],['Catalogue',r.catalogVersion],['Valuation status',r.valuationStatus],['Valuation basis',r.valuationBasis],['Stock fields without cost',r.unpricedStockFields],['Missing quantity fields',r.missingQuantityFields],[r.valuationStatus==='Partial'?'Valued subtotal (⃁ / SAR) — incomplete':'Total stock value (⃁ / SAR)',r.totalValue==null?'Not available':r.totalValue],['Sequence','Code','Product','Unit / Size','Quantity','Unit Cost (⃁ / SAR)','Stock Value (⃁ / SAR)'],...details.map(p=>[p.sequence,p.code,p.name,p.unit,p.qty,p.unitCost,p.value])].map(c=>c.map(csvCell).join(',')).join('\r\n');const html='<div style="font-family:Arial;color:#0d2340"><h2>Branch inventory report</h2><p style="white-space:pre-line">'+escaped_(summary)+'</p>'+productTable_(details)+'<p>Developer: @Eng. Faizal Emam<br><a href="https://itdelhi.in">itdelhi.in</a></p></div>';return {subject:(r.branch===TEST_BRANCH?'TEST | ':'')+'Blue Sky Inventory | '+r.branch.replace(/[\r\n]/g,' ')+' | '+r.at+' | '+r.filled+'/'+ds.products.length+' products filled',body:summary+'\n\nFull inventory with unit costs and stock values attached as CSV.',htmlBody:html,csv};}
function productTable_(details){return '<table><thead><tr><th>#</th><th>Product / Code</th><th>Unit / Size</th><th>Quantity</th><th>Unit Cost (⃁ / SAR)</th><th>Stock Value (⃁ / SAR)</th></tr></thead><tbody>'+details.map(p=>'<tr>'+[p.sequence,p.name+' / '+p.code,p.unit,p.qty===''?'Not filled':p.qty,p.unitCost===null?'Not available':'⃁ '+p.unitCost,p.value===null?'Not available':'⃁ '+Number(p.value).toFixed(2)].map(v=>'<td>'+escaped_(v)+'</td>').join('')+'</tr>').join('')+'</tbody></table>';}
function sendReport_(rowNumber,force,ds){ds=ds||datasets_()[0];const lock=LockService.getScriptLock();lock.waitLock(30000);try{const sheet=spreadsheet_().getSheetByName(ds.name);if(!sheet)throw Error('Report sheet not found.');const row=sheet.getRange(rowNumber,1,1,width_(ds)).getValues()[0];if(row[revisionColumns_(sheet,ds)-1]==='Deleted')return;if(force){if(row[9]==='Sending')throw Error('This report email is already being sent.');const props=PropertiesService.getScriptProperties(),key='BSC_RESEND_'+row[0],last=Number(props.getProperty(key)||0);if(Date.now()-last<60000)throw Error('Please wait one minute before resending this report again.');if(MailApp.getRemainingDailyQuota()<emailRecipientCount_())throw Error('Daily email quota exhausted. No resend was sent; try again after the quota resets.');props.setProperty(key,String(Date.now()));}else if(!['Pending','Failed'].includes(row[9]))return;if(MailApp.getRemainingDailyQuota()<emailRecipientCount_()){sheet.getRange(rowNumber,11).setValue('Daily email quota exhausted; queued for retry');return;}const report=report_(row,ds);sheet.getRange(rowNumber,10,1,2).setValues([['Sending','']]);SpreadsheetApp.flush();try{verifyInventorySender();GmailApp.sendEmail(EMAIL_TO,report.subject,report.body,{from:EMAIL_FROM,replyTo:EMAIL_FROM,cc:EMAIL_CC,htmlBody:report.htmlBody,name:'Blue Sky Inventory',attachments:[Utilities.newBlob(report.csv,'text/csv','BlueSky-Inventory-'+row[0]+'.csv')]});sheet.getRange(rowNumber,10,1,2).setValues([['Sent','']]);}catch(err){sheet.getRange(rowNumber,10,1,2).setValues([['Failed',safe_(String(err).slice(0,500))]]);}SpreadsheetApp.flush();}finally{lock.releaseLock();}}
function retryPendingEmails(){let handled=0;const ss=spreadsheet_();for(const ds of datasets_()){const sheet=ss.getSheetByName(ds.name);if(!sheet||sheet.getLastRow()<2)continue;const statuses=sheet.getRange(2,10,sheet.getLastRow()-1,1).getValues();for(let i=0;i<statuses.length&&handled<10;i++)if(['Pending','Failed'].includes(statuses[i][0])){sendReport_(i+2,false,ds);handled++;}}}
function ownerResendEmailV2(token,id){requireOwnerV2_(token);const saved=findSaved_(id);if(!saved)throw Error('Submission not found.');if(readSaved_(saved)[revisionColumns_(saved.sheet,saved.ds)-1]==='Deleted')throw Error('Restore this removed report before resending email.');sendReport_(saved.rowNumber,true,saved.ds);const r=adminGetReportDetail(token,id);return {status:r.emailStatus,note:r.emailError};}
function ownerDownloadReportV2(token,format,ids){requireOwnerV2_(token);if(!['xlsx','pdf'].includes(format)||!Array.isArray(ids)||!ids.length||ids.length>100||ids.some(id=>typeof id!=='string'||!/^[a-f0-9-]{36}$/.test(id)))throw Error('Select 1–100 reports; filter by branch or search for smaller exports.');const selected=new Set(ids),reports=[];for(const ds of datasets_()){const sheet=spreadsheet_().getSheetByName(ds.name);if(!sheet||sheet.getLastRow()<2)continue;const refs=sheet.getRange(2,1,sheet.getLastRow()-1,1).getValues();refs.forEach((r,i)=>{if(selected.has(String(r[0]))){const row=sheet.getRange(i+2,1,1,width_(ds)).getValues()[0];reports.push(Object.assign(adminSummary_(row,null,ds),{products:detailProducts_(row,ds)}));}});}if(reports.length!==selected.size)throw Error('A selected report no longer exists. Refresh reports.');const name='BlueSky-Inventory-'+(reports.length===1?reports[0].id:Utilities.formatDate(new Date(),'Asia/Riyadh','yyyyMMdd-HHmmss'));let blob;if(format==='xlsx'){const headers=['Reference Number','Submitted at (Riyadh)','Branch','Employee','Catalogue','Report status','Email status','Sequence','Code','Product','Unit / Size','Quantity','Unit Cost (⃁ / SAR)','Stock Value (⃁ / SAR)','Submission value / subtotal (⃁ / SAR)','Valuation status','Valuation basis','Unpriced stock fields','Missing quantity fields'];const rows=[headers];for(const r of reports)for(const p of r.products)rows.push([r.id,r.at,r.branch,r.employee,r.catalogVersion,r.reportStatus,r.emailStatus,p.sequence,p.code,p.name,p.unit,p.qty,p.unitCost===null?'Not available':p.unitCost,p.value===null?'Not available':p.value,r.totalValue===null?'Not available':r.totalValue,r.valuationStatus,r.valuationBasis,r.unpricedStockFields,r.missingQuantityFields]);blob=ownerInventoryXlsxV2_(rows,name+'.xlsx');}else{let body='<h1>Blue Sky Inventory</h1><p>Private report · Costs from final Branches Excel · Saudi riyal (⃁ / SAR) · No VAT added</p>';if(reports.length===1){const r=reports[0];body+='<p><b>Branch:</b> '+escaped_(r.branch)+'<br><b>Employee:</b> '+escaped_(r.employee)+'<br><b>Submitted:</b> '+escaped_(r.at)+'<br><b>Reference:</b> '+escaped_(r.id)+'<br><b>Catalogue:</b> '+escaped_(r.catalogVersion)+'<br><b>Status:</b> '+escaped_(r.reportStatus)+'<br><b>Valuation status:</b> '+escaped_(r.valuationStatus)+'<br><b>Valuation basis:</b> '+escaped_(r.valuationBasis)+'<br><b>Stock fields without cost:</b> '+r.unpricedStockFields+'<br><b>Missing quantity fields:</b> '+r.missingQuantityFields+'<br><b>Value / subtotal:</b> '+(r.totalValue===null?'Not available':'⃁ '+Number(r.totalValue).toFixed(2))+'</p>'+productTable_(r.products);}else{body+='<p>'+reports.length+' submissions. Download Excel for all product quantities and costs.</p><table><thead><tr><th>Reference</th><th>Submitted</th><th>Branch / Employee</th><th>Status / Email</th><th>Value / subtotal (⃁ / SAR)</th></tr></thead><tbody>'+reports.map(r=>'<tr>'+[r.id,r.at,r.branch+' / '+r.employee,r.reportStatus+' / '+r.emailStatus,r.totalValue===null?'Not available':'⃁ '+Number(r.totalValue).toFixed(2)+' ('+r.valuationStatus+')'].map(v=>'<td>'+escaped_(v)+'</td>').join('')+'</tr>').join('')+'</tbody></table>';}blob=Utilities.newBlob('<!doctype html><html><head><meta charset="UTF-8"><style>@page{size:A4;margin:14mm}body{font:9px Arial;color:#0d2340}h1{font-size:22px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ccd5df;padding:5px;text-align:left;word-break:break-word}th{background:#eef3f8}thead{display:table-header-group}tr{page-break-inside:avoid}</style></head><body>'+body+'</body></html>','text/html',name+'.html').getAs('application/pdf').setName(name+'.pdf');}return {name:blob.getName(),mime:blob.getContentType(),base64:Utilities.base64Encode(blob.getBytes())};}
function verifyOwnerAdminV2(){const html=doGet({parameter:{action:'admin'}}).getContent();console.log(html.includes('Admin tools v7')?'ADMIN V7 ACTIVE — final catalogue, private costs, Excel, PDF and resend ready':'OLD ADMIN ROUTE IS RUNNING');}
function adminPage_(){return ownerAdminPageV2_();}
function revalueHistoricalCosts(){adminEditor_();const lock=LockService.getScriptLock();lock.waitLock(30000);try{const sheet=spreadsheet_().getSheetByName('Inventory Reports v4');if(!sheet||sheet.getLastRow()<2){console.log('No historical reports.');return;}const oldFields=fields_(LEGACY_PRODUCTS),currentFields=fields_(),rates=configuredCosts_(),lookup={};currentFields.forEach((f,i)=>lookup[JSON.stringify([f.p.code,f.p.unit,f.size])]=rates[i]);const legacyRates=oldFields.map(f=>{const key=JSON.stringify([f.p.code,f.p.unit,f.size]);return Object.prototype.hasOwnProperty.call(lookup,key)?lookup[key]:null;});const col=14+oldFields.length;if(sheet.getMaxColumns()<col+4)sheet.insertColumnsAfter(sheet.getMaxColumns(),col+4-sheet.getMaxColumns());sheet.getRange(1,col,1,5).setValues([['Revalued unit-cost snapshot (private)','Revalued stock subtotal (⃁ / SAR; excludes unpriced items)','Cost source catalogue','Valuation status','Stock fields without matching cost']]);const last=sheet.getLastRow(),all=sheet.getRange(2,1,last-1,col+2).getValues(),stamp=Utilities.formatDate(new Date(),'Asia/Riyadh','yyyy-MM-dd HH:mm:ss');let changed=0;all.forEach((row,i)=>{if(!row[0]||row[col-1])return;const q=row.slice(11,11+oldFields.length),missingCost=[],missingQuantity=[];let total=0;q.forEach((v,j)=>{if(v===''){missingQuantity.push(j);return;}if(legacyRates[j]===null){if(Number(v)>0)missingCost.push(j);}else total+=Number(v)*legacyRates[j];});const snapshot={rates:legacyRates,basis:'Revalued using final Branches Excel costs (6 Oct 2026); original submission quantities retained',valuedAt:stamp,unpricedStockFields:missingCost,missingQuantityFields:missingQuantity,status:missingCost.length||missingQuantity.length?'Partial':'Complete'};sheet.getRange(i+2,col,1,5).setValues([[JSON.stringify(snapshot),total,CATALOG_VERSION,snapshot.status,missingCost.length]]);changed++;});SpreadsheetApp.flush();console.log('Historical reports valued: '+changed+'. Existing valuations retained. Original quantities and receipt IDs untouched.');}finally{lock.releaseLock();}}

// Reports are removed from active views and kept recoverable in the private Sheet.
function requireRemovalOwnerV7_(token){if(requireAdmin_(token)!=='owner')throw Error('Only Faizal Emam (Owner) can remove or restore reports.');}
function ownerRemoveReportsV7(token,ids,reason){requireRemovalOwnerV7_(token);if(!Array.isArray(ids)||!ids.length||ids.length>100||new Set(ids).size!==ids.length||ids.some(id=>typeof id!=='string'||!/^[a-f0-9-]{36}$/.test(id)))throw Error('Select 1–100 reports.');if(typeof reason!=='string'||!reason.trim()||reason.length>300)throw Error('Enter a removal reason (maximum 300 characters).');const lock=LockService.getScriptLock();lock.waitLock(30000);try{const found=ids.map(id=>{const saved=findSaved_(id);if(!saved)throw Error('A selected report no longer exists. Refresh reports.');const row=readSaved_(saved);if(row[9]==='Sending')throw Error('A selected report email is being sent. Retry after it finishes.');return {id,saved,row};});const props=PropertiesService.getScriptProperties(),ss=spreadsheet_();let log=ss.getSheetByName('Admin Audit');if(!log){log=ss.insertSheet('Admin Audit');log.appendRow(['At (Riyadh)','Administrator','Action','Receipt ID','Branch','Reason','Previous status']);}let changed=0;for(const item of found){const col=revisionColumns_(item.saved.sheet,item.saved.ds),status=String(item.row[col-1]||'Historical');if(status==='Deleted')continue;props.setProperty('BSC_REMOVED_'+item.id,JSON.stringify({status,by:requireAdmin_(token),at:Utilities.formatDate(new Date(),'Asia/Riyadh','yyyy-MM-dd HH:mm:ss')}));item.saved.sheet.getRange(item.saved.rowNumber,col).setValue('Deleted');log.appendRow([Utilities.formatDate(new Date(),'Asia/Riyadh','yyyy-MM-dd HH:mm:ss'),requireAdmin_(token),'Remove',item.id,safe_(String(item.row[2])),safe_(reason.trim()),status]);changed++;}SpreadsheetApp.flush();return {removed:changed};}finally{lock.releaseLock();}}
function ownerRestoreReportsV7(token,ids){requireRemovalOwnerV7_(token);if(!Array.isArray(ids)||!ids.length||ids.length>100||new Set(ids).size!==ids.length||ids.some(id=>typeof id!=='string'||!/^[a-f0-9-]{36}$/.test(id)))throw Error('Select 1–100 reports.');const lock=LockService.getScriptLock();lock.waitLock(30000);try{const found=ids.map(id=>{const saved=findSaved_(id);if(!saved)throw Error('A selected report no longer exists.');return {id,saved};}),props=PropertiesService.getScriptProperties(),log=spreadsheet_().getSheetByName('Admin Audit');let changed=0;for(const item of found){const col=revisionColumns_(item.saved.sheet,item.saved.ds);if(item.saved.sheet.getRange(item.saved.rowNumber,col).getValue()!=='Deleted')continue;const prior=JSON.parse(props.getProperty('BSC_REMOVED_'+item.id)||'null');if(!prior)throw Error('Removal record missing. Contact the owner.');item.saved.sheet.getRange(item.saved.rowNumber,col).setValue(prior.status);if(log)log.appendRow([Utilities.formatDate(new Date(),'Asia/Riyadh','yyyy-MM-dd HH:mm:ss'),requireAdmin_(token),'Restore',item.id,'','Restore removed report',prior.status]);changed++;}SpreadsheetApp.flush();return {restored:changed};}finally{lock.releaseLock();}}

const BRANCH_NAMES=["AIRPORT ROAD","FAISALIYAH","KHODARIYAH","SAFWA SAHIK","SAIHAT","FAKHRIYAH","SAHAB 1","SAHAB 2","SAPTCO","ABUHAIDERIYAH","AQRABIYAH","AZIZIYAH 1","DOHA","ESKAN","HALF MOON","JAMA'A","NAFOURA","JESSER 2","RAKAH","TAHLIYAH ABBASI","TAWUN KHALEEJ","JB KURBI","JB TAABA","HASSA 1","HASSA 5","HASSA 6","QATIF","WATANI HOSPITAL","RIYADH 2","RIYADH 4","RIYADH 5","RIYADH 6","RIYADH 8","RIYADH 9","RIYADH 10","HAFAR 1","HAFER 4","NAIRIYAH","IT- Testing"];
function verifyInventorySender(){if(!GmailApp.getAliases().some(a=>a.toLowerCase()===EMAIL_FROM.toLowerCase()))throw Error('Verify inventory@blueskycoffe.com in the deploying Gmail account Send mail as settings first.');console.log('Inventory sender alias verified.');}
function safe_(s){return /^[=+\-@\t\r]/.test(s)?"'"+s:s;}
function escaped_(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function normalize_(d){let filled=0,partial=0,blank=0;const quantities=[];PRODUCTS.forEach(p=>{let entered=0;const sizes=p.sizes.length?p.sizes:[''];sizes.forEach(size=>{const v=size?d.values[p.id]?.[size]:d.values[p.id];if(v===undefined||v===null||v===''){quantities.push('');return;}if(typeof v!=='string'||!v.trim()||!Number.isFinite(Number(v))||Number(v)<0)throw Error('Invalid quantity '+p.id);quantities.push(Number(v));entered++;});if(entered===sizes.length)filled++;else if(entered)partial++;else blank++;});return {quantities:quantities,filled:filled,partial:partial,blank:blank,filledFields:quantities.filter(v=>v!=='').length};}
function findReceipt_(sheet,id){if(sheet.getLastRow()<2)return null;return sheet.getRange(2,1,sheet.getLastRow()-1,1).createTextFinder(id).matchEntireCell(true).findNext();}
function submittedAt_(v){return v instanceof Date?Utilities.formatDate(v,'Asia/Riyadh','yyyy-MM-dd HH:mm:ss'):String(v);}
function emailRecipientCount_(){return new Set((EMAIL_TO+','+EMAIL_CC).split(',').map(address=>address.trim().toLowerCase()).filter(Boolean)).size;}
function adminDigest_(text){return Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,String(text),Utilities.Charset.UTF_8));}
function adminEditor_(){const active=Session.getActiveUser().getEmail().toLowerCase(),effective=Session.getEffectiveUser().getEmail().toLowerCase();if(!active||!effective||active!==effective)throw Error('Run this function from the owner Apps Script editor.');}
function setupAdminLogin(){adminEditor_();const lock=LockService.getScriptLock();lock.waitLock(30000);try{const props=PropertiesService.getScriptProperties();if(props.getProperty('BSC_ADMIN_owner')){console.log('Admin accounts already exist. Passwords were shown only during first setup.');return;}for(const user of ['owner','samad']){const password=Utilities.getUuid().replace(/-/g,'');const salt=Utilities.getUuid();props.setProperty('BSC_ADMIN_'+user,JSON.stringify({salt:salt,hash:adminDigest_(salt+':'+password)}));console.log('ADMIN ID: '+user+' | PASSWORD: '+password);}console.log('Save these passwords privately. Admin URL: '+ScriptApp.getService().getUrl()+'?action=admin');}finally{lock.releaseLock();}}
function adminLogin(user,password){if(!['owner','samad'].includes(user)||typeof password!=='string'||password.length>200)throw Error('Invalid admin ID or password.');const lock=LockService.getScriptLock();lock.waitLock(30000);try{const props=PropertiesService.getScriptProperties(),now=Date.now(),rateKey='BSC_ADMIN_RATE_'+user;let rate=JSON.parse(props.getProperty(rateKey)||'null');if(!rate||now>rate.until)rate={count:0,until:now+15*60*1000};if(rate.count>=10)throw Error('Too many login attempts. Try again in 15 minutes.');rate.count++;props.setProperty(rateKey,JSON.stringify(rate));const account=JSON.parse(props.getProperty('BSC_ADMIN_'+user)||'null');if(!account||adminDigest_(account.salt+':'+password)!==account.hash)throw Error('Invalid admin ID or password.');props.deleteProperty(rateKey);const all=props.getProperties();Object.keys(all).filter(k=>k.startsWith('BSC_ADMIN_SESSION_')).forEach(k=>{if(JSON.parse(all[k]).expires<now)props.deleteProperty(k);});const token=Utilities.getUuid()+Utilities.getUuid();props.setProperty('BSC_ADMIN_SESSION_'+adminDigest_(token),JSON.stringify({user:user,expires:now+8*60*60*1000}));return {token:token};}finally{lock.releaseLock();}}
function requireAdmin_(token){if(typeof token!=='string'||token.length!==72)throw Error('Session expired. Please sign in again.');const props=PropertiesService.getScriptProperties(),key='BSC_ADMIN_SESSION_'+adminDigest_(token),session=JSON.parse(props.getProperty(key)||'null');if(!session||session.expires<Date.now()){props.deleteProperty(key);throw Error('Session expired. Please sign in again.');}return session.user;}
function adminLogout(token){requireAdmin_(token);PropertiesService.getScriptProperties().deleteProperty('BSC_ADMIN_SESSION_'+adminDigest_(token));return true;}
function dayOf_(v){return v instanceof Date?Utilities.formatDate(v,'Asia/Riyadh','yyyy-MM-dd'):String(v).slice(0,10);}
function cacheSubmissionError_(d,message){if(d&&typeof d.id==='string'&&/^[a-f0-9-]{36}$/.test(d.id)&&typeof d.attempt==='string'&&/^[a-f0-9-]{36}$/.test(d.attempt))CacheService.getScriptCache().put('BSC_ERROR_'+d.id+'_'+d.attempt,JSON.stringify({saved:false,error:message}),300);}
function submissionError_(id,attempt){if(!/^[a-f0-9-]{36}$/.test(id)||!/^[a-f0-9-]{36}$/.test(attempt))return null;const cached=CacheService.getScriptCache().get('BSC_ERROR_'+id+'_'+attempt);return cached?JSON.parse(cached):null;}
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



function requireOwnerV2_(token){if(!['owner','samad'].includes(requireAdmin_(token)))throw Error('Authorized administrator login required.');}
function ownerExportXmlV2_(v){return String(v==null?'':v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');}
function ownerExportColumnV2_(i){let s='';for(i++;i>0;i=Math.floor((i-1)/26))s=String.fromCharCode(65+(i-1)%26)+s;return s;}
function ownerInventoryXlsxV2_(rows,name){const ns='http://schemas.openxmlformats.org/spreadsheetml/2006/main';const data=rows.map((r,i)=>'<row r="'+(i+1)+'">'+r.map((v,j)=>{const ref=ownerExportColumnV2_(j)+(i+1);return typeof v==='number'&&isFinite(v)?'<c r="'+ref+'"'+(j===12?' s="1"':j===13||j===14?' s="2"':'')+'><v>'+v+'</v></c>':'<c r="'+ref+'" t="inlineStr"><is><t xml:space="preserve">'+ownerExportXmlV2_(v)+'</t></is></c>';}).join('')+'</row>').join('');const files={'xl/styles.xml':"<styleSheet xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\"><numFmts count=\"2\"><numFmt numFmtId=\"164\" formatCode=\"&quot;\u20c1 &quot;#,##0.00####\"/><numFmt numFmtId=\"165\" formatCode=\"&quot;\u20c1 &quot;#,##0.00\"/></numFmts><fonts count=\"1\"><font><sz val=\"11\"/><name val=\"Calibri\"/></font></fonts><fills count=\"2\"><fill><patternFill patternType=\"none\"/></fill><fill><patternFill patternType=\"gray125\"/></fill></fills><borders count=\"1\"><border/></borders><cellStyleXfs count=\"1\"><xf numFmtId=\"0\" fontId=\"0\" fillId=\"0\" borderId=\"0\"/></cellStyleXfs><cellXfs count=\"3\"><xf numFmtId=\"0\" fontId=\"0\" fillId=\"0\" borderId=\"0\" xfId=\"0\"/><xf numFmtId=\"164\" fontId=\"0\" fillId=\"0\" borderId=\"0\" xfId=\"0\" applyNumberFormat=\"1\"/><xf numFmtId=\"165\" fontId=\"0\" fillId=\"0\" borderId=\"0\" xfId=\"0\" applyNumberFormat=\"1\"/></cellXfs><cellStyles count=\"1\"><cellStyle name=\"Normal\" xfId=\"0\" builtinId=\"0\"/></cellStyles></styleSheet>",

'[Content_Types].xml':'<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>',
'_rels/.rels':'<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
'xl/workbook.xml':'<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="'+ns+'" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Inventory" sheetId="1" r:id="rId1"/></sheets></workbook>',
'xl/_rels/workbook.xml.rels':'<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
'xl/worksheets/sheet1.xml':'<?xml version="1.0" encoding="UTF-8"?><worksheet xmlns="'+ns+'"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><sheetData>'+data+'</sheetData><autoFilter ref="A1:'+ownerExportColumnV2_(rows[0].length-1)+rows.length+'"/></worksheet>'};
return Utilities.zip(Object.keys(files).map(path=>Utilities.newBlob(files[path],'application/xml',path)),name).setContentType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
}
function ownerAdminPageV2_(){return HtmlService.createHtmlOutput("<!doctype html><html><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style>\n*{box-sizing:border-box}body{margin:0;background:#f3f6fb;color:#0d2340;font:15px/1.5 Arial,sans-serif}header{background:#0d2340;color:white;padding:22px 5%}main{max-width:1180px;margin:auto;padding:24px}h1{font-size:23px;margin:0}h2{font-size:20px}.panel{background:#fff;border:1px solid #dde5ef;border-radius:14px;padding:24px;margin-bottom:20px}#login{max-width:430px;margin:35px auto}label{display:block;font-weight:bold;margin-top:15px}input,select,button{font:inherit;padding:12px;border-radius:8px;border:1px solid #cdd8e7}input,select{width:100%;margin-top:6px}button{background:#2965bd;color:white;cursor:pointer;font-weight:bold;min-height:44px}button:disabled{opacity:.5}#login button{width:100%;margin-top:22px}.tools{display:flex;gap:12px;align-items:center;flex-wrap:wrap}.tools>*{flex:1;min-width:140px}.stats{display:flex;gap:14px;flex-wrap:wrap}.stats div{flex:1;min-width:130px}.stats b{display:block;font-size:27px}.table-wrap{overflow:auto}table{border-collapse:collapse;width:100%;font-size:13px}th,td{text-align:left;border-bottom:1px solid #e5ebf1;padding:12px;vertical-align:top}th{background:#f2f6fb;white-space:nowrap}td button{padding:8px;white-space:nowrap}#message{color:#a33;font-weight:bold}#detailRef{overflow-wrap:anywhere}dialog{width:min(900px,94vw);max-height:85vh;border:0;border-radius:14px;padding:22px}dialog::backdrop{background:#0d234088}[hidden]{display:none!important}.muted{color:#697b91;font-size:13px}@media(max-width:600px){main{padding:12px}.panel{padding:16px}}\n.filter-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px}.filter-grid label{margin:0}.check{width:auto;margin:0}.danger{background:#b83232}.filters small{display:block}.filter-grid select[multiple]{height:140px}.table-wrap input[type=checkbox]{width:20px;height:20px}#removeList{max-height:200px;overflow:auto}@media(max-width:600px){.filter-grid{grid-template-columns:1fr 1fr}} </style></head><body><header><h1>Blue Sky Inventory · Admin</h1><span>Private branch submission reports · Admin tools v7 · Filters and owner removal · Historical revaluation · Final Branches catalogue</span></header><main>\n<section id=\"login\" class=\"panel\"><h2>Administrator login</h2><p class=\"muted\">For Faizal Emam and Mohamad Abdul Samad Fazil only.</p><form id=\"loginForm\"><label for=\"username\">Admin ID</label><select id=\"username\"><option value=\"owner\">Faizal Emam</option><option value=\"samad\">Mohamad Abdul Samad Fazil</option></select><label for=\"password\">Password</label><input id=\"password\" type=\"password\" required autocomplete=\"current-password\" maxlength=\"200\"><button id=\"loginButton\">Sign in</button></form></section>\n<p id=\"message\" role=\"status\" aria-live=\"polite\"></p>\n<section id=\"dashboard\" hidden><div class=\"tools panel\"><b id=\"identity\"></b><button id=\"refresh\">Refresh reports</button><button id=\"logout\">Sign out</button></div><div class=\"stats panel\"><div>Submissions<b id=\"total\">0</b></div><div>Branches reporting<b id=\"branchTotal\">0</b></div><div>Latest branch valued subtotal<b id=\"stockValue\">0.00</b><small>Latest report per branch; partial subtotals exclude unpriced stock</small></div><div>Latest submission<b id=\"latest\" style=\"font-size:16px\">—</b></div></div>\n<div class=\"panel\"><h2>All branch submissions</h2><div class=\"filter-grid filters\"><label>Branches (select multiple)<select id=\"branchFilter\" multiple aria-label=\"Filter branches\"></select><small>Choose one or more branches. Clear selection for all branches.</small><button id=\"clearBranches\" type=\"button\">Clear branches</button></label><label>Search<input id=\"search\" placeholder=\"Reference, branch or employee\"></label><label>From date · Riyadh<input type=\"date\" id=\"dateFrom\"></label><label>To date · Riyadh<input type=\"date\" id=\"dateTo\"></label><label>Report status<select id=\"statusFilter\"><option value=\"\">All active reports</option><option>Current</option><option>Historical</option><option>Superseded</option><option>Test</option><option>Deleted</option></select></label><label>Email status<select id=\"emailFilter\"><option value=\"\">All email statuses</option><option>Pending</option><option>Sending</option><option>Sent</option><option>Failed</option></select></label><label>Valuation<select id=\"valuationFilter\"><option value=\"\">All valuations</option><option>Complete</option><option>Partial</option><option>Unavailable</option></select></label><label>Minimum report value · ⃁<input id=\"costMin\" type=\"number\" min=\"0\" step=\"any\" placeholder=\"Any\"></label><label>Maximum report value · ⃁<input id=\"costMax\" type=\"number\" min=\"0\" step=\"any\" placeholder=\"Any\"></label><label>Catalogue<select id=\"catalogFilter\"><option value=\"\">All catalogues</option><option value=\"branches-20261006-v1\">Final Branches</option><option value=\"legacy-v4\">Historical</option></select></label><label>Same branch / same day<select id=\"duplicateFilter\"><option value=\"\">All reports</option><option value=\"yes\">Repeated submissions only</option></select><small>Review quantities before removing; repeat entries may be revisions.</small></label><label>Sort<select id=\"sortFilter\"><option value=\"newest\">Newest first</option><option value=\"oldest\">Oldest first</option><option value=\"high\">Value: high to low</option><option value=\"low\">Value: low to high</option><option value=\"branch\">Branch name</option></select></label></div><div class=\"tools\"><button id=\"resetFilters\">Reset filters</button><button id=\"clearSelection\">Clear report selection</button><span id=\"selectionCount\"></span></div><div id=\"ownerTools\" class=\"tools\" hidden><button id=\"exportExcel\">Download Excel · quantities and costs</button><button id=\"exportPdf\">Download PDF · report values</button></div><div id=\"removalTools\" class=\"tools\" hidden><button id=\"removeSelected\" class=\"danger\">Remove selected reports</button><button id=\"restoreSelected\">Restore selected reports</button></div><p class=\"muted\">Downloads use selected reports, or all filtered reports when none are selected. Removal is restricted to Faizal Emam (Owner) and is recoverable. Currency: Saudi riyal (⃁ / SAR). Values use the costs and unit basis in the final Branches Excel. Historical reports use final Excel costs only for matching products, units and sizes. Partial subtotals exclude stock without matching cost and missing quantities. Export up to 100 reports at a time.</p><p id=\"reportCount\" class=\"muted\"></p><div class=\"table-wrap\"><table><thead><tr><th><input id=\"selectAll\" type=\"checkbox\" aria-label=\"Select all filtered reports\"></th><th>Submitted · Riyadh</th><th>Branch / Employee</th><th>Reference Number</th><th>Filled / Partial / Blank</th><th>Report status</th><th>Value / subtotal (⃁ / SAR)</th><th>Email</th><th>Details</th></tr></thead><tbody id=\"rows\"></tbody></table></div><p id=\"empty\" hidden>No submissions found.</p></div></section>\n<dialog id=\"detail\"><button id=\"closeDetail\">Close</button><h2>Inventory submission</h2><div id=\"detailTools\" class=\"tools\" hidden><button id=\"detailExcel\">Download Excel</button><button id=\"detailPdf\">Download PDF</button><button id=\"resendEmail\">Resend email</button></div><p id=\"detailStatus\" role=\"status\" aria-live=\"polite\"></p><p id=\"detailMeta\"></p><p id=\"detailRef\"></p><p id=\"detailValuation\" class=\"muted\"></p><p id=\"detailError\"></p><div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Product / Code</th><th>Unit / Bottle size</th><th>Quantity</th><th>Unit Cost (⃁ / SAR)</th><th>Stock Value (⃁ / SAR)</th></tr></thead><tbody id=\"detailRows\"></tbody></table></div></dialog>\n<dialog id=\"removeDialog\"><h2 id=\"removeTitle\">Remove selected reports</h2><p>Review the branch, employee and reference numbers below. Removed reports leave the active dashboard and email retry queue. Their quantities remain in the private Sheet for recovery.</p><ul id=\"removeList\"></ul><label>Reason<input id=\"removeReason\" maxlength=\"300\" value=\"Duplicate submission\"></label><p id=\"removeError\" role=\"status\"></p><div class=\"tools\"><button id=\"cancelRemove\">Cancel</button><button id=\"confirmRemove\" class=\"danger\">Confirm removal</button></div></dialog></main><script>\n'use strict';const $=id=>document.getElementById(id);let token='',reports=[],currentReport='',owner=false,removalOwner=false,actionBusy=false;let chosen=new Set(),removalIds=[];\nfunction rpc(name,...args){return new Promise((resolve,reject)=>google.script.run.withSuccessHandler(resolve).withFailureHandler(reject)[name](...args));}\nfunction cell(row,value){const td=document.createElement('td');td.textContent=String(value??'');row.append(td);return td;}\nfunction error(e){$('message').textContent=e.message||'Request failed.';if(/Session expired/.test(e.message||''))clearSession();}\nfunction clearSession(){token='';reports=[];owner=false;removalOwner=false;chosen.clear();$('removalTools').hidden=true;$('removeDialog').close();currentReport='';$('ownerTools').hidden=true;$('detailTools').hidden=true;$('rows').replaceChildren();$('detailRows').replaceChildren();$('detail').close();$('dashboard').hidden=true;$('login').hidden=false;$('password').value='';}\nfunction visibleReports(){const branches=new Set(Array.from($('branchFilter').selectedOptions,o=>o.value)),q=$('search').value.trim().toLowerCase(),status=$('statusFilter').value,from=$('dateFrom').value,to=$('dateTo').value,min=$('costMin').value,max=$('costMax').value;const repeated=new Map();reports.filter(r=>r.reportStatus!=='Deleted').forEach(r=>{const key=r.branch+'|'+r.at.slice(0,10);repeated.set(key,(repeated.get(key)||0)+1);});let list=reports.filter(r=>(status?r.reportStatus===status:r.reportStatus!=='Deleted')&&(!branches.size||branches.has(r.branch))&&[r.id,r.branch,r.employee].join(' ').toLowerCase().includes(q)&&(!from||r.at.slice(0,10)>=from)&&(!to||r.at.slice(0,10)<=to)&&(!$('emailFilter').value||r.emailStatus===$('emailFilter').value)&&(!$('valuationFilter').value||r.valuationStatus===$('valuationFilter').value)&&(!$('catalogFilter').value||r.catalogVersion===$('catalogFilter').value)&&(!min||(typeof r.totalValue==='number'&&r.totalValue>=Number(min)))&&(!max||(typeof r.totalValue==='number'&&r.totalValue<=Number(max)))&&(!$('duplicateFilter').value||repeated.get(r.branch+'|'+r.at.slice(0,10))>1));const sort=$('sortFilter').value;return list.sort((a,b)=>sort==='branch'?a.branch.localeCompare(b.branch)||b.at.localeCompare(a.at):sort==='oldest'?a.at.localeCompare(b.at):sort==='high'||sort==='low'?(a.totalValue==null?1:b.totalValue==null?-1:(sort==='high'?b.totalValue-a.totalValue:a.totalValue-b.totalValue)):b.at.localeCompare(a.at));}\nfunction render(){const visible=visibleReports(),active=reports.filter(r=>r.reportStatus!=='Deleted');$('rows').replaceChildren();for(const r of visible){const tr=document.createElement('tr'),select=cell(tr,''),cb=document.createElement('input');cb.type='checkbox';cb.checked=chosen.has(r.id);cb.setAttribute('aria-label','Select '+r.branch+' '+r.id);cb.onchange=()=>{cb.checked?chosen.add(r.id):chosen.delete(r.id);render();};select.append(cb);cell(tr,r.at);cell(tr,r.branch+' / '+r.employee);cell(tr,r.id);cell(tr,r.filled+' / '+r.partial+' / '+r.blank);cell(tr,r.reportStatus);cell(tr,r.totalValue==null?'Not available':'⃁ '+Number(r.totalValue).toFixed(2)+(r.valuationStatus==='Partial'?' · Partial subtotal':''));cell(tr,r.emailStatus);const td=cell(tr,''),b=document.createElement('button');b.textContent='View quantities';b.onclick=()=>detail(r.id);td.append(b);$('rows').append(tr);}$('empty').hidden=visible.length>0;$('reportCount').textContent=visible.length+' filtered / '+active.length+' active submissions. '+reports.filter(r=>r.reportStatus==='Deleted').length+' removed.';const selected=visible.filter(r=>chosen.has(r.id));$('selectionCount').textContent=selected.length+' selected in this view';$('selectAll').checked=visible.length>0&&selected.length===visible.length;$('selectAll').indeterminate=selected.length>0&&selected.length<visible.length;const latest=new Map();visible.forEach(r=>{if(r.reportStatus!=='Deleted'&&r.reportStatus!=='Superseded'&&r.branch!=='IT- Testing'&&(!latest.has(r.branch)||r.at>latest.get(r.branch).at))latest.set(r.branch,r);});$('total').textContent=visible.length;$('branchTotal').textContent=new Set(visible.filter(r=>r.reportStatus!=='Deleted'&&r.branch!=='IT- Testing').map(r=>r.branch)).size;$('latest').textContent=visible.map(r=>r.at).sort().at(-1)||'—';$('stockValue').textContent='⃁ '+[...latest.values()].reduce((sum,r)=>sum+(typeof r.totalValue==='number'?r.totalValue:0),0).toFixed(2);}\nasync function load(){ $('refresh').disabled=true;try{const result=await rpc('adminGetReports',token);reports=result.reports;owner=['owner','samad'].includes(result.user);$('ownerTools').hidden=!owner;$('identity').textContent='Signed in: '+({owner:'Faizal Emam',samad:'Mohamad Abdul Samad Fazil'}[result.user]||result.user);removalOwner=result.user==='owner';$('removalTools').hidden=!removalOwner;const selected=new Set(Array.from($('branchFilter').selectedOptions,o=>o.value));$('branchFilter').replaceChildren();[...new Set(reports.map(r=>r.branch))].sort().forEach(b=>{const option=new Option(b,b);option.selected=selected.has(b);$('branchFilter').append(option);});chosen=new Set([...chosen].filter(id=>reports.some(r=>r.id===id)));$('message').textContent='';render();}catch(e){error(e);}finally{$('refresh').disabled=false;}}\nasync function detail(id){try{const r=await rpc('adminGetReportDetail',token,id);currentReport=r.id;$('detailTools').hidden=!owner;$('detailStatus').textContent='';$('detailMeta').textContent=r.branch+' · '+r.employee+' · '+r.at+' · '+r.reportStatus+' · '+r.filled+'/'+r.totalProducts+' products · Value / subtotal: '+(r.totalValue==null?'Not available':'⃁ '+Number(r.totalValue).toFixed(2));$('detailValuation').textContent='Valuation: '+r.valuationStatus+' · '+r.valuationBasis+(r.valuedAt?' · Revalued: '+r.valuedAt:'')+'. Stock fields without matching cost: '+r.unpricedStockFields+'. Missing quantities: '+r.missingQuantityFields+(r.valuationStatus==='Partial'?'. Displayed value is a partial subtotal, not a complete inventory total.':'');$('detailRef').textContent='Reference: '+r.id+(r.supersededBy?' · Replaced by: '+r.supersededBy:'');$('detailError').textContent=r.emailError?'Email note: '+r.emailError:'';$('detailRows').replaceChildren();for(const p of r.products){const tr=document.createElement('tr');cell(tr,p.sequence);cell(tr,p.name+' / '+p.code);cell(tr,p.unit);cell(tr,p.qty===''?'Not filled':p.qty);cell(tr,p.unitCost==null?'Not available':'⃁ '+p.unitCost);cell(tr,p.value==null?'Not available':'⃁ '+Number(p.value).toFixed(2));$('detailRows').append(tr);}if(!$('detail').open)$('detail').showModal();}catch(e){error(e);}}\n$('loginForm').onsubmit=async e=>{e.preventDefault();$('loginButton').disabled=true;$('message').textContent='Signing in…';try{const r=await rpc('adminLogin',$('username').value,$('password').value);token=r.token;$('password').value='';$('login').hidden=true;$('dashboard').hidden=false;await load();}catch(e){error(e);}finally{$('loginButton').disabled=false;}};\n$('refresh').onclick=load;$('branchFilter').onchange=render;$('search').oninput=render;$('closeDetail').onclick=()=>$('detail').close();$('logout').onclick=async()=>{const old=token;clearSession();$('message').textContent='Signed out.';try{await rpc('adminLogout',old);}catch{}};\n\nfunction selectedReports(){const visible=visibleReports(),checked=visible.filter(r=>chosen.has(r.id));return (checked.length?checked:visible).map(r=>r.id);}\nfunction busyActions(value){actionBusy=value;['exportExcel','exportPdf','detailExcel','detailPdf','resendEmail','removeSelected','restoreSelected','confirmRemove'].forEach(id=>$(id).disabled=value);}\nasync function download(format,individual){if(actionBusy||!owner)return;busyActions(true);const status=individual?$('detailStatus'):$('message');status.textContent='Preparing download…';try{const file=await rpc('ownerDownloadReportV2',token,format,individual?[currentReport]:selectedReports());const raw=atob(file.base64),bytes=Uint8Array.from(raw,c=>c.charCodeAt(0)),url=URL.createObjectURL(new Blob([bytes],{type:file.mime}));const a=document.createElement('a');a.href=url;a.download=file.name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);status.textContent='Download ready.';}catch(e){status.textContent=e.message||'Download failed.';if(/Session expired/.test(e.message||''))clearSession();}finally{busyActions(false);}}\nasync function resend(){if(actionBusy||!owner||!currentReport)return;if(!confirm('Resend this inventory report to the configured management recipients? This will not create another inventory submission.'))return;busyActions(true);$('detailStatus').textContent='Sending email…';try{const r=await rpc('ownerResendEmailV2',token,currentReport);await load();$('detailStatus').textContent=r.status==='Sent'?'Email accepted for sending. Please check the inbox and spam folder.':'Email status: '+r.status+(r.note?' · '+r.note:'');}catch(e){$('detailStatus').textContent=e.message||'Email resend failed.';if(/Session expired/.test(e.message||''))clearSession();}finally{busyActions(false);}}\n$('exportExcel').onclick=()=>download('xlsx',false);$('exportPdf').onclick=()=>download('pdf',false);$('detailExcel').onclick=()=>download('xlsx',true);$('detailPdf').onclick=()=>download('pdf',true);$('resendEmail').onclick=resend;\nconst filterIds=['branchFilter','search','dateFrom','dateTo','statusFilter','emailFilter','valuationFilter','costMin','costMax','catalogFilter','duplicateFilter','sortFilter'];filterIds.forEach(id=>{$(id).onchange=render;if($(id).tagName==='INPUT')$(id).oninput=render;});\n$('clearBranches').onclick=()=>{Array.from($('branchFilter').options).forEach(o=>o.selected=false);render();};\n$('resetFilters').onclick=()=>{filterIds.forEach(id=>{if(id==='branchFilter')Array.from($(id).options).forEach(o=>o.selected=false);else $(id).value=id==='sortFilter'?'newest':'';});render();};\n$('clearSelection').onclick=()=>{chosen.clear();render();};$('selectAll').onchange=()=>{visibleReports().forEach(r=>$('selectAll').checked?chosen.add(r.id):chosen.delete(r.id));render();};\n$('removeSelected').onclick=()=>{if(!removalOwner||actionBusy)return;const list=visibleReports().filter(r=>chosen.has(r.id)&&r.reportStatus!=='Deleted');if(!list.length){$('message').textContent='Select reports to remove using the checkboxes.';return;}if(list.length>100){$('message').textContent='Remove up to 100 reports at a time.';return;}removalIds=list.map(r=>r.id);$('removeList').replaceChildren();list.forEach(r=>{const li=document.createElement('li');li.textContent=r.branch+' · '+r.employee+' · '+r.at+' · '+r.id;$('removeList').append(li);});$('removeError').textContent='';$('removeDialog').showModal();};\n$('cancelRemove').onclick=()=>$('removeDialog').close();\n$('confirmRemove').onclick=async()=>{if(!removalOwner||actionBusy)return;busyActions(true);try{const result=await rpc('ownerRemoveReportsV7',token,removalIds,$('removeReason').value);removalIds.forEach(id=>chosen.delete(id));$('removeDialog').close();await load();$('message').textContent=result.removed+' reports removed. Filter Report status → Deleted to restore.';}catch(e){$('removeError').textContent=e.message||'Removal failed.';if(/Session expired/.test(e.message||''))clearSession();}finally{busyActions(false);}};\n$('restoreSelected').onclick=async()=>{if(!removalOwner||actionBusy)return;const ids=visibleReports().filter(r=>chosen.has(r.id)&&r.reportStatus==='Deleted').map(r=>r.id);if(!ids.length){$('message').textContent='Filter Report status → Deleted and select reports to restore.';return;}if(!confirm('Restore '+ids.length+' selected reports?'))return;busyActions(true);try{const result=await rpc('ownerRestoreReportsV7',token,ids);ids.forEach(id=>chosen.delete(id));await load();$('message').textContent=result.restored+' reports restored.';}catch(e){error(e);}finally{busyActions(false);}};\n</script></body></html>").setTitle('Blue Sky Inventory Admin').addMetaTag('viewport','width=device-width, initial-scale=1');}
