
puts "🌱 Seeding spices..."

Shoppe.create(name: "Thorn and Moon", address: "123 Fake Street")
Shoppe.create(name: "Thorn and Spoon", address: "122 Fakely Avenue")
Shoppe.create(name: "Thorn and Soon", address: "126 Fakester Blvd")
Shoppe.create(name: "Thorn and June", address: "126 Fakingham Place")

Item.create(name: "Cauldron", description:"Double, double toil and trouble; Fire burn and caldron bubble.", category: "Witchcraft", price: 64.99, img_url: "")
Item.create(name: "Grim Grimoire", description:"A very forbidden book.", category: "Witchcraft", price: 26.50, img_url: "https://i.etsystatic.com/14966474/r/il/270bdd/3522828509/il_794xN.3522828509_hz5x.jpg")

#Vera's famous crystals
Item.create(name: "Clear quartz", description:"A clear crystal considered a master healer and believed to support the entire energetic system", category:"Crystals", price:100, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Beautiful-Selenite-Heart-Miner-310718956_2.jpg?v=1621235125")
Item.create(name: "Jasper", description:"A nurturing stone said to provide support during times of stress",category:"Crystals", price:10, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Closeup-Of-Sample-Of-Natural-M-347724766_5.jpg?v=1619017113")
Item.create(name: "Obsidian", description:"Believed to help process emotions and experiences and aid in letting go", category:"Crystals", price:50, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Closeup-Of-Sample-Of-Natural-M-347731333_2.jpg?v=1621090514")
Item.create(name: "Amethyst", description:"Used for healing, purifying, and enhancing willpower", category:"Crystals", price:56, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Violet-Crystal-Stone-macro-min-334573360_1.jpg?v=1606375388")
Item.create(name: "Bloodstone", description:"Said to improve circulation and provide support to blood-related issues", category:"Crystals", price:120, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Macro-Photography-Of-Sample-Of-392549078.jpg?v=1606560087")
Item.create(name: "Tiger eye", description:"Said to provide motivation and lessen fear", category:"Crystals", price:100, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Closeup-Of-Sample-Of-Natural-M-347725234_2.jpg?v=1606721907")
Item.create(name: "Citrine", description:"Believed to spark enthusiasm, creativity, and concentration", category:"Crystals", price:112, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Closeup-Of-Sample-Of-Natural-M-347725987_2.jpg?v=1606560137")
Item.create(name: "Turquoise", description:"Thought to soothe emotions and attract good luck", category:"Crystals", price:160, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Closeup-Of-Sample-Of-Natural-M-347732161_2.jpg?v=1608297123")
Item.create(name: "Sapphire", description:"Known as a stone of prosperity", category:"Crystals", price:200, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Closeup-Of-Sample-Of-Natural-M-347732161_2.jpg?v=1608297123")
Item.create(name: "Jade", description:"Another well-known stone for prosperity and luck", category:"Crystals", price:20, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Closeup-Of-Sample-Of-Natural-M-347728384_3.jpg?v=1606560051")
Item.create(name: "Rose quartz", description:"Sometimes referred to as the stone of love and believed to encourage love and trust", category:"Crystals", price:25, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Rose-Quartz-On-White-4470713_2.jpg?v=1606486749")
Item.create(name: "Moonstone", description:"Said to prompt feelings of inner strength and growth", category:"Crystals", price:30, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Closeup-Of-Sample-Of-Natural-M-347724289_3.jpg?v=1621090697")
Item.create(name: "Ruby", description:"Believed to support sexuality and sensuality", category:"Crystals", price:430, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Macro-Of-A-Mineral-Garnet-Ston-361446721_5.jpg?v=1620976437")
Item.create(name: "Adularia", description:"It is considered to be the primary stone for female fertility, and is also sometimes used as an aid in the birthing process", category:"Crystals", price:16, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Closeup-Of-Sample-Of-Natural-M-385789349_3.jpg?v=1621090949")
Item.create(name: "Amber", description:"Although it aligns primarily with the Sacral Chakra, amber also opens the Crown, bringing in pure golden light throughout the body", category:"Crystals", price:68, img_url: "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Closeup-Of-Sample-Of-Natural-M-347725987_2.jpg?v=1606560137")

# Mad Mazin's Ferocious Menagerie

puts "Creating items..."
Item.create(category: "Familiar", name: "Lion Spirit", description: "a sign of leadership", price: 10, img_url: "https://thegreenmanstore.com/wp-content/uploads/2020/06/Lion-Spirit-Animal-230x230.jpg")
Item.create(category: "Familiar", name: "Cobra Spirit", description: "bite bite bite venom", price: 15, img_url: "https://thegreenmanstore.com/wp-content/uploads/2020/06/Cobra-Spirit-Animal-230x230.jpg")
Item.create(category: "Familiar", name: "Bear Spirit", description: "represents the courage to evolve and the ability to be open-minded", price: 9, img_url: "https://thegreenmanstore.com/wp-content/uploads/2020/06/Bear-Spirit-Animal-230x230.jpg")
Item.create(category: "Familiar", name: "Horse Spirit", description: "represents freedom above all else", price: 8, img_url: "https://thegreenmanstore.com/wp-content/uploads/2020/06/Horse-Spirit-Animal-230x230.jpg")
Item.create(category: "Familiar", name: "Black Cat Spirit", description: "mystery and secrecy", price: 11, img_url: "https://thegreenmanstore.com/wp-content/uploads/2020/06/Cat-black-Spirit-Animal-230x230.jpg")
Item.create(category: "Divination", name: "Dragon Crystals", description: "Arising from the East You Can only travel to the future as a dragon", price: 8000, img_url: "https://cdn.shoplightspeed.com/shops/621140/files/24657562/1652x1652x2/liuli-crystal-art-crystal-dragon-limited-edition-a.jpg")
Item.create(category: "Divination", name: "Astro Gallery of Gems", description: "a secret gem that freeze the future and only work in the ocean", price: 700, img_url: "https://secure.img1-cg.wfcdn.com/im/80404856/resize-h445%5Ecompr-r85/2109/210914913/Azurite+and+Malachite+from+Tsumeb+Mine%252C+Otavi-Bergland+District%252C+Oshikoto%252C+Namibia.jpg")
Item.create(category: "Divination", name: "Deluxe Celestial Crystal Ball", description: "royal family crystal that let you go to the future and the past", price: 25000, img_url: "https://akamai-scene7.grandinroad.com/is/img/frontgate/164068_main?$wgih$")
Item.create(category: "Divination", name: "Australian Fine gemstone", description: "rare to find and make you travel to diffrent worlds", price: 50000, img_url: "https://a.1stdibscdn.com/big-boulder-australian-opal-freeform-475-carats-neon-blue-multicolor-fang-shape-for-sale-picture-3/j_20322/j_132930121635850453139/vivid_boulder_opal_gabilo_1121_3__master.jpg?disable=upscale&auto=webp&quality=60&width=1318")



puts "Creating interactions..."
Interaction.create(comment: "love it", liked: true, count: 20, shoppe_id: Shoppe.ids.sample , item_id: Item.ids.sample)
Interaction.create(comment: "will buy again", liked: false, count: 20, shoppe_id: Shoppe.ids.sample, item_id: Item.ids.sample)
Interaction.create(comment: "it's trash", liked: false, count: 20, shoppe_id: Shoppe.ids.sample, item_id: Item.ids.sample)
Interaction.create(comment: "scammers my crush didn't like me", liked: true, count: 20, shoppe_id: Shoppe.ids.sample, item_id: Item.ids.sample)
Interaction.create(comment: "it's a mericale or im just high", liked: false, count: 20, shoppe_id: Shoppe.ids.sample, item_id: Item.ids.sample)


puts "✅ Done seeding!"
