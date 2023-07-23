let len = document.getElementsByClassName("grid-element").length;
        let info ={
            p401: {name: "Marigold", cost: 200, season: "All",
                feature: "Marigold is beleived to represent the sun, symbolizing brightness and positive energy and is very popular in Indian culture, weddings and festivities. In medicine, the main applications of marigold are skin conditions of all kinds, including contusions, bruises and varicose veins. Minor skin injuries and inflammation can also be successfully treated. Marigold ointment promotes wound healing for eczema and sunburns."},
            p402: {name: "Rose", cost: 250, season: "All",
                feature: "Rose is popular flower for its beauty and smell. It is widely used as a symbol of love and often used in cosmetics. In India roses are grown for cut flowers, making essential oil, rose water and Gulkand. Besides this it is used for Veni and Garland. It can also be used for covering trellies, arbours, arches, for giving mass effect in beds or growing pots."},
            p403: {name: "Lily", cost: 200, season: "All",
                feature: "The flowers represent purity, innocence and rebirth: in religious iconography, they often represent the Virgin Mary, and are also often depicted at the Resurrection of Christ. "},
            p404: {name: "Tulip", cost: 200, season: "All",
            feature: "The most known meaning of tulips is perfect and deep love. As tulips are a classic flower that has been loved by many for centuries they have been attached with the meaning of love. They're ideal to give to someone who you have a deep, unconditional love for, whether it's your partner, children, parents or siblings."},
            p405: {name: "Lotus", cost: 200, season: "All",
            feature: "The lotus flower meaning varies from culture to culture. In general, however, the lotus commonly serves as a sacred for purity, rebirth, and strength. Because lotuses rise from the mud without stains, they are often viewed as a symbol of purity."},
            p406: {name: "Pancy", cost: 200, season: "All",
            feature: "Pansy flowers are traditionally seen as symbols of love both romantic and platonic. In Victorian floriography, pansies often represented forbidden love between secret lovers. Pansies also symbolize qualities like compassion, remembrance, and nostalgia. Pansies also embody thoughtfulness."},
            p407: {name: "Tulsi", cost: 200, season: "All",
            feature: "Tulsi is oeof many sacred plant and has proved to be highly effective in protecting our body from various infections and diseases of the liver, skin, kidney, etc. It contains powerful oxidants that can help in keeping your blood pressure levels and cholesterol levels under control, making it one of the best heart-healthy foods."},
            p408: {name: "Giloy", cost: 200, season: "All",
            feature: "Giloy is an antipyretic herb. It improves platelet count in dengue fever and reduces the chances of complications. Regular intake of Giloy helps to improve immunity during dengue and also for a speedy recovery. For better results boil Giloy juice with a few Tulsi leaves and drink to increase platelet count"},
            p409: {name: "Turmeric", cost: 200, season: "All",
            feature: "In Ayurvedic practices, turmeric is thought to have many medicinal properties including strengthening the overall energy of the body, relieving gas, dispelling worms, improving digestion, regulating menstruation, dissolving gallstones, and relieving arthritis."},
            p410: {name: "Ginger", cost: 200, season: "All",
            feature: "Eating ginger can cut down on fermentation, constipation and other causes of bloating and intestinal gas. Wear and tear on cells. Ginger contains antioxidants. These molecules help manage free radicals, which are compounds that can damage cells when their numbers grow too high."},
            p411: {name: "Bamboo", cost: 200, season: "All",
            feature: "Bamboo are used as a traditional medicine with demonstrated effects of anti-oxidation, free radical scavenging, anti-inflammatory, liver protection and ameliorating cognitive deficits. Bamboo leaf is mainly used for the treatment of atherosclerotic, diabetic and nervous system diseases."},
            p412: {name: "Orange", cost: 200, season: "All",
            feature: "Orange is a citric plant having various health benifits including protecting cells from damage, boost immun system, absorb iron, heal wounds and smoothen skin."},
            p413: {name: "Sadabahar", cost: 200, season: "All",
            feature: "Sadabahar is an effective ayurvedic remedy for all sorts of Kapha aggravating disorders. The bulk of active constituents in this flower offers an ultimate remedy for treating respiratory disorders like asthma, bronchitis, COPD, cough and cold symptoms."},
            p414: {name: "Coriander", cost: 200, season: "All",
            feature: "Coriander leaves and seeds are full of vitamin K, which plays an important role in helping your blood clot. Vitamin K also helps your bones repair themselves, helping prevent problems like osteoporosis. Additionally, evidence points to vitamin K helping lower your risk of heart disease."},
            p415: {name: "Fenu greek", cost: 200, season: "All",
            feature: "Fenugreek is native to the Mediterranean, Europe, and Asia. Fenugreek seems to slow sugar absorption in the stomach and stimulate insulin. Both of these effects lower blood sugar in people with diabetes. Fenugreek might also improve levels of testosterone and estrogen, helping to improve interest in sex."},
            p416: {name: "China Pink", cost: 100, season: "All",
            feature: "This plant is used in Chinese herbal medicine as a bitter tonic to stimulate the digestive and urinary systems and bowels to treat cystitis, urinary stones, and constipation. It is also used externally for skin inflammations and swellings. The plants are harvested before the flowers bloom and then dried."},
            p417: {name: "Gazania", cost: 150, season: "All",
            feature: "Gazanias belong to one of the most economically important families, Asteraceae, which includes import food crops as well as garden favourites such as Zinnias, Dahlias and Marigolds to name a few. Gazanias are perennial plants and can be easily overwintered in milder climates."},
            p418: {name: "Ficus Creeper", cost: 50, season: "All",
            feature: "Ficus Creeper is wide range of creeper plants generally grown as show plants. They are grown with support of a wall or structure."}
        }
        let pics=["p1_marigold.jpg","p2_rose.jpg","p3_lily.jpeg","p4_tulip.jpg","p5_lotus.jpg","p6_pancy.jpg",
                  "p7_tulsi.jpg","p8_giloy.jpg","p9_turmeric.jpg","p10_ginger.jpg","p11_bamboo.jpg","p12_orange.jpg",
                "p13_sadabahar.jfif","p14_coriander.jpg","p15_fenugreek.jpg","p16_chinapink.jpg","p17_gazania.jpg","p18_ficus.jpg"]
        
        let IDs=Array()
        for(let i=0;i<len;i++){

            IDs.push(document.getElementsByClassName("grid-element")[i].id);
            let gridElm = document.querySelectorAll(".plantname")[i];

            gridElm.innerHTML = info[IDs[i]].name;
            let element = document.getElementsByClassName("grid-element")[i];
            element.style.background ="url('Sources/" + pics[i] + "')";
            element.style.backgroundSize="cover";

        }

        // Default Information rendred only first time
        document.querySelector("#image_holder").style.background="url('Sources/leaf.png')";
        document.getElementById("image_describe").innerHTML="<h3> Hello There. This is Devanshu Rawat, the developer of this small project.</h3> <p><i> Here I have tried to creat a web project having front end part. The main emphasis was on functionality designed using JS.</i></p> <p> The images used and some detalis are taken from the internet for just the sake of this learning project. <br><br><h5> Checkout my other work on github: https://github.com/DevanshuSinghRawat/ <br><br>Happy Learning!</h5>";

        function showDetails(elm){
            let givenID = elm.id;
            str='<h3>'+ info[givenID].name +'</h3>' + 'Rs '+ info[givenID].cost + '<p>'+'Season: '+ info[givenID].season +'</p>' + '<p>'+info[givenID].feature +'<p>'
            document.getElementById("image_describe").innerHTML=str;
            
            let css_BG = elm.style.background;
            document.querySelector("#image_holder").style.background=css_BG;
            
        }
