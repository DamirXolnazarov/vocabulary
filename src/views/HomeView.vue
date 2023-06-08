<template>
  <div class="home">
    <div class="title">
      <h2>
        reading maraphone <span><em>60 days</em></span>
      </h2>
    </div>
    <div class="days">
      <div class="na"><span>Days:</span></div>
      <router-link to="/day">
      <div class="day" @click='dae(day)' v-for="day of this.days" :key="day.id">
        <span class="name">Day <span>{{ day.day }}</span></span>
        <span class="word_count">Words: {{ day.words.length }}</span>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// alert("This site is created by Damir_uzb for your bright future!!!");
export default {
  name: "HomeView",
  components: {},
 
  data() {
    return {
      days: [
        {
          day: 1,
          words: [
            {
              word: "ascension",
              definition: [
                "the process of rising to a position of higher importance, rank, or success",
                "the action of climbing or moving upwards",
                "the process of going up from earth to heaven, especially the process of Jesus Christ going up to heaven after his death and resurrection (= return to life)",
              ],
              examples: [
                "After his time in the US Army, Ashe continued his ascension in the world of tennis.",
                "His daughter's ascension to the speakership, a first for a woman, is a matter of great pride for him.",
                "He never managed to cross the Atlantic via balloon, but he made hundreds of ascensions.",
                "The Ascension of Christ is depicted in this stained-glass window.",
              ],
            },
            {
              word: "sit on",
              definition: ["to locate"],
              examples: ["Earth sits on Milkyway Galaxy"],
            },
            {
              word: "ridge",
              definition: [
                "a long, narrow raised part of a surface, especially a high edge along a mountain",
                "the part of a roof where the sloping sides join at the top",
              ],
              examples: [
                "We walked along the narrow mountain ridge.",
                "Plowed ridges looked like stripes across the field.",
                "A ridge (= a narrow area) of high pressure will bring good weather this afternoon",
              ],
            },
            {
              word: "pull sth apart",
              definition: [
                "to separate two things or people",
                "to destroy something by tearing it into pieces",
                "to say that something, usually a piece of work, is very bad",
              ],
              examples: [
                "They went for each other with their fists and had to be pulled apart.",
                "The last essay I gave him he completely pulled apart.",
              ],
            },
            {
              word: "molten",
              definition: [
                "Molten metal or rock is in a liquid state because of great heat",
              ],
              examples: ["Glass becomes molten when it is +1000 C"],
            },
            {
              word: "explosively",
              definition: [
                "in a way that relates to, causes, or is caused by something exploding",
                "in a way that is very sudden and powerful, like an explosion",
                "in a way that grows or spreads extremely quickly",
                "in a way that relates to or causes strong feelings, especially anger, being loudly or violently expressed",
              ],
              examples: [
                "The substance is toxic and explosively flammable.",
                "During our conversation he sometimes giggles explosively.",
                "India and China were enjoying explosively growing economies.",
                "He has an explosively combative temperament.",
              ],
            },
            {
              word: "seafarer",
              definition: ["a person who travels by sea"],
              examples: ["Portugal is a land of seafarers"],
            },
            {
              word: "barren",
              definition: [
                "unable to produce plants or fruit",
                "unable to have children or young animals",
                "not creating or producing anything new",
              ],
              examples: [
                "We drove through a barren, rocky landscape.",
                "She became very depressed during the barren years when she was unable to paint.",
              ],
            },
            {
              word: "none to speak of",
              definition: ["very little of something"],
              examples: [
                '"Did you get much rain while you were in Singapore?" "None to speak of."',
              ],
            },
            {
              word: "thriving",
              definition: ["growing, developing, or being successful"],
              examples: [
                "The island has a thriving community and a rich and tragic history.",
              ],
            },
            {
              word: "way station",
              definition: [
                "a place where people can stop when travelling from one place to another",
              ],
              examples: [
                "While travelling to Russia from Uzbekistan , you can stop on Kazakstan's way station ",
              ],
            },
            {
              word: "provision",
              definition: [
                "the act of providing something",
                "provisions-supplies of food and other necessary things",
                "a statement within an agreement or a law that a particular thing must happen or be done, especially before another can happen or be done",
                "in a company's accounts (= financial records), an amount of money that is kept in case of a possible future lossF",
              ],
              examples: [
                "The provision of good public transport will be essential for developing the area.",
                "Of course there's provision in the plan for population increase.",
                "We have inserted certain provisions into the treaty to safeguard foreign workers.",
                "The insurance company made a provision against claims over alleged pension fraud.",
              ],
            },
            {
              word: "outpost",
              definition: [
                "a place, especially a small group of buildings or a town, that represents the authority or business interests of a government or company that is far away",
                "a rare example of something that is disappearing",
              ],
              examples: [
                "Free jazz has been described as the last outpost of modernism.",
                "Robotic outposts are, we are told, relatively new mission concepts.",
              ],
            },
            {
              word: "impede",
              definition: [
                "to make it more difficult for something to happen or more difficult for someone to do something",
                "to slow something down or prevent an activity from making progress at its previous rate",
              ],
              examples: [
                "Although he's shy, it certainly hasn't impeded his career in any way.",
                "Shortages of medicine were impeding the effort to control diseases.",
              ],
            },
            {
              word: "swiftly",
              definition: ["quickly or immediately"],
              examples: [
                "Walking swiftly, he was at the office within minutes.",
              ],
            },
            {
              word: "devise",
              definition: [
                "to invent a plan, system, object, etc., usually using your intelligence or imagination",
              ],
              examples: [
                "He's good at devising language games that you can play with students in class.",
                "The cartoon characters Snoopy and Charlie Brown were devised by Charles M. Schultz.",
              ],
            },
            {
              word: "bold",
              definition: [
                "not frightened of danger",
                "strong in colour or shape, and very noticeable to the eye",
                "not shy, especially in a way that shows no respect",
              ],
              examples: [
                "make the bold move The team made the bold move of trading its star player.",
                "take the bold step The newspaper took the bold step of publishing the names of the men involved.",
                "bold colour They painted the kitchen in bold colours.",
                "He was a bold and defiant little boy.",
              ],
            },
            {
              word: "vessel",
              definition: [
                "a large boat or a ship",
                "a curved container that is used to hold liquid:",
                "a person who has a particular quality or who is used for a particular purpose:",
                "a tube that carries liquids such as blood through the body",
              ],
              examples: [
                "The remains of some Roman earthenware vessels were found during the dig.",
                "As a young and spirited politician, he seems a worthy vessel for the nation's hopes.",
                "Blood clots clogged the vessels.",
              ],
            },
            {
              word: "promising",
              definition: [
                "Something that is promising shows signs that it is going to be successful or enjoyable",
              ],
              examples: [
                "They won the award for the most promising new band of the year.",
                "It's a great restaurant but it doesn't look at all promising from the outside.",
              ],
            },
            {
              word: "rugged",
              definition: [
                "(of land) wild and not even; not easy to travel over:",
                "strong and simple; not delicate:",
                "If a man's face is rugged, it is strongly and attractively formed:",
              ],
              examples: [
                "Jeeps are rugged vehicles, designed for rough conditions.",
                "She fell for his rugged good looks.",
                "rugged landscape/terrain/hills/cliffs",
              ],
            },
            {
              word: "desolation",
              definition: [
                "the state of a place that is empty or where everything has been destroyed",
                "the state of feeling sad and alone",
              ],
              examples: [
                "a scene of desolation",
                "a feeling of utter desolation",
                "It was difficult to describe the emptiness, the desolation of the area.",
              ],
            },
            {
              word: "lay out sth for sth",
              definition: ["to spend money, especially a large amount"],
              examples: [
                "It's not every day you lay out so much for a new computer system.",
                "We had to lay out on a replacement boiler.",
              ],
            },
            {
              word: "implement",
              definition: [
                "to start using a plan or system",
                "a tool that works by being moved by hand or by being pulled across a surface",
              ],
              examples: [
                "The changes to the national health system will be implemented next year.",
                "Shopkeepers are not supposed to sell knives and other sharp implements to children.",
                "garden/household/agricultural implements",
              ],
            },
            {
              word: "set off",
              definition: [
                "to cause an activity or event, often a series of events, to begin or happen",
                "to cause a loud noise or explosion, such as that made by a bomb or an alarm (= a warning sound) to begin or happen",
                "to make something look attractive by providing a contrast (= attractive difference) to it",
              ],
              examples: [
                "The court's initial verdict in the police officers' trial set off serious riots.",
                "Terrorists set off a bomb in the city centre.",
                "The new yellow cushions nicely set off the pale green of the chair covers.",
                "Somebody set the alarm off on my car.",
              ],
            },
            {
              word: "ambitious",
              definition: [
                "having a strong wish to be successful, powerful, or rich",
                "If a plan or idea is ambitious, it needs a great amount of skill and effort to be successful or be achieved:",
              ],
              examples: [
                "an ambitious young lawyer",
                "He's very ambitious for his children (= he wants them to be successful).",
                "She has some ambitious plans for her business.",
                "The government has announced an ambitious plan to modernize the railway network.",
              ],
            },
            {
              word: "set in",
              definition: [
                "When something unpleasant sets in, it begins and seems likely to continue in a serious way",
                "to begin",
              ],
              examples: [
                "This rain looks as if it has set in for the rest of the day.",
                "Despair seems to have set in among the team.",
                "If the wound is untreated, infection may set in.",
                "In winter, darkness sets in so early!",
              ],
            },
            {
              word: "elaborate",
              definition: [
                "containing a lot of careful detail or many detailed parts",
                "to add more information to or explain something that you have said",
              ],
              examples: [
                "You want a plain blouse to go with that skirt - nothing too elaborate.",
                "They're making the most elaborate preparations for the wedding.",
                "The congresswoman said she was resigning, but refused to elaborate on her reasons for doing so.",
              ],
            },
            {
              word: "shipment",
              definition: [
                "a large amount of goods sent together to a place, or the act of sending them",
                "goods transported together, or the act of transporting them",
              ],
              examples: [
                " A shipment of vegetables arrived last week.",
                " A shipment of vegetables arrived last week.",
                "It was taken to the airport for shipment to Hawaii.",
              ],
            },
            {
              word: "retention",
              definition: [
                "the continued use, existence, or possession of something or someone",
                "the ability to keep or continue having something",
              ],
              examples: [
                "Two influential senators have argued for the retention of the unpopular tax.",
                "water/heat retention",
                "Officials are focusing on job creation, not job retention.",
              ],
            },
            {
              word: "fertile",
              definition: [
                "Fertile land can produce a large number of good quality crops.",
                "Fertile animals or plants are able to produce (a lot of) young or fruit",
                "A fertile mind or imagination is active and produces a lot of interesting and unusual ideas.",
              ],
              examples: [
                "These plants need a moist fertile soil and a sheltered position.",
                "The corn grows waist-high in these fertile fields.",
                "People get less fertile as they get older.",
              ],
            },
            {
              word: "deposit",
              definition: [
                "to leave something somewhere",
                "to put something valuable, especially money, in a bank or safe (= strong box or cupboard with locks)",
                "a substance or layer that is left, usually after a liquid is removed",
                "a layer that has formed under the ground, especially over a long period",
              ],
              examples: [
                "The flood waters fell, depositing mud over the whole area.",
                "I deposited £500 in my account this morning.",
                "The flood left a thick deposit of mud over the entire ground floor of the house.",
                "mineral/oil/coal deposits",
              ],
            },
            {
              word: "take root",
              definition: [
                "If an idea, belief, or system takes root somewhere, it starts to be accepted there",
              ],
              examples: ["Communism has never really taken root in England."],
            },
            {
              word: "capture",
              definition: [
                "to take someone as a prisoner, or to take something into your possession, especially by force",
                "to succeed in getting something when you are competing with other people:",
                "to represent or describe something very accurately using words or images",
              ],
              examples: [
                "Two of the soldiers were killed and the rest were captured.",
                "Rebel forces captured the city after a week-long battle.",
                "The Democratic Party candidate captured 70 percent of the vote.",
                "It would be impossible to capture her beauty in a painting.",
              ],
            },
            {
              word: "dampness",
              definition: [
                "the fact or state of being slightly wet, especially in a way that is not pleasant or comfortable",
              ],
              examples: [
                "It's the dampness in the air that is bad for your lungs.",
                "I felt the dampness on her clothes.",
              ],
            },
            {
              word: "self-sustaining",
              definition: [
                "able to continue to exist without help from anyone or anything else ",
                "used to describe an activity that can continue without more investment",
              ],
              examples: [
                "The wildflower garden flourished as a self-sustaining ecosystem.",
                "The football club does not have enough income to be self-sustaining.",
                "The idea is to make the website a self-sustaining source of revenue.",
              ],
            },
            {
              word: "far-reaching",
              definition: [
                "Something far-reaching has a great influence on many people or things",
                "likely to influence many people or things",
              ],
              examples: [
                "These new laws will have far-reaching benefits for all working mothers.",
                "The effects of the riots will be far-reaching.",
              ],
            },
            {
              word: "side by side",
              definition: ["next to each other"],
              examples: [
                "The children sat side by side .",
                "I sat with Ronaldo side by side.",
              ],
            },
            {
              word: "colony",
              definition: [
                "a country or area controlled politically by a more powerful country that is often far away",
                "a group of people who live in a colony",
                "a group of animals, insects, or plants of the same type that live together",
              ],
              examples: [
                "Australia and New Zealand are former British colonies.",
                "a colony of ants/termites/bacteria",
              ],
            },
          ],
        },
        {
          day: 2,
          words: [
            {
              word: "merchant",
              definition: [
                "a person whose job is to buy and sell products in large amounts, especially by trading with other countries",
                "someone who is involved in or enjoys something that is unpleasant or annoying to others",
              ],
              examples: [
                "a wine/grain merchant",
                "a gossip merchant (= someone who enjoys talking about people's private lives)",
                "a speed merchant (= someone who drives too fast)",
              ],
            },
            {
              word: "in search of sth",
              definition: ["trying to find something"],
              examples: [
                "She was shot by a sniper when she went out in search of firewood.",
                "Sam went off in search of toilets.",
                "The girls have gone to town in search of bargains.",
              ],
            },
            {
              word: "lay the groundwork (for sth)",
              definition: [
                "work that is done as a preparation for work that will be done later",
              ],
              examples: [
                "The committee will meet today to lay the groundwork for inter-party talks next month.",
              ],
            },
            {
              word: "set out",
              definition: [
                "to start an activity with a particular aim",
                "to give the details of something or to explain it, especially in writing, in a clear, organized way",
                "to arrange something, usually a number of things, in an attractive or organized way",
              ],
              examples: [
                "She set out with the aim of becoming the youngest ever winner of the championship.",
                "Your contract will set out the terms and conditions of your employment.",
                "The farmers' market was full of brightly coloured vegetables set out on stalls.",
              ],
            },
            {
              word: "antiquity",
              definition: [
                "the distant past (= a long time ago), especially before the sixth century",
                "an object that was created a very long time ago",
              ],
              examples: [
                "Cannabis has been used for medicinal purposes since antiquity.",
                "Under Greek law, all antiquities that are discovered in Greece belong to the government.",
              ],
            },
            {
              word: "marble",
              definition: [
                "a type of very hard rock that has a pattern of lines going through it, feels cold, and can be polished to become smooth and shiny",
                "a small ball, usually made of coloured or transparent glass, that is used in children's games",
              ],
              examples: [
                "a marble floor/statue",
                "polished marble floors",
                "Glass marbles were referred to as being a raw material",
              ],
            },
            {
              word: "overlook",
              definition: [
                "to provide a view of, especially from above",
                "to fail to notice or consider something or someone",
                "to forgive or pretend not to notice something",
              ],
              examples: [
                "Our hotel room overlooked the harbour.",
                "I think there is one key fact that you have overlooked.",
                "I'm prepared to overlook his behaviour this time.",
              ],
            },
            {
              word: "landmark",
              definition: [
                "a building or place that is easily recognized, especially one that you can use to judge where you are",
                "an important stage in something's development",
              ],
              examples: [
                "The Rock of Gibraltar is one of Europe's most famous landmarks.",
                "The invention of the silicon chip was a landmark in the history of the computer.",
                "I couldn’t pick out any familiar landmarks in the dark and got completely lost.",
              ],
            },
            {
              word: "violent",
              definition: [
                "using force to hurt or attack",
                "sudden and powerful",
              ],
              examples: [
                "He yells a lot but I don't think he's ever been physically violent towards her.",
                "He has a violent temper.",
                "violent thunderstorms",
              ],
            },
            {
              word: "dismantle",
              definition: [
                "to take a machine apart or to come apart into separate pieces",
                "to get rid of a system or organization, usually over a period of time",
                "to show that a claim, statement or explanation is not true or correct",
              ],
              examples: [
                "The good thing about the bike is that it dismantles if you want to put it in the back of the car.",
                "Unions accuse the government of dismantling the National Health Service.",
                "You need to sharpen your abilities to dismantle his excuses.",
              ],
            },
            {
              word: "vocation",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "inscription",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "mule",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "cooperate",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "proceed",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "drench",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "lashing",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "splash",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "swamp",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "soaked",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "matress",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "remarkably",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "setback",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "splendid",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "prime",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "devastated",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "sadden",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "awe-inspiring",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "sketch",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "adorn",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "foliage",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "strip",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "sanctuary",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "avalanche",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "obliterate",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "peer",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "stick out",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "puzzle out",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "uphill",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "tower over",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "come upon",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "slope",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "pave",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
            {
              word: "misery",
              definition: ["", "", ""],
              examples: ["", "", ""],
            },
          ],
        },
        {
          day: 3,
          words: [
            {
              word: "ascension",
            },
          ],
        },
        {
          day: 4,
          words: [],
        },
        {
          day: 5,
          words: [],
        },
        {
          day: 6,
          words: [],
        },
        {
          day: 7,
          words: [],
        },
        {
          day: 8,
          words: [],
        },
        {
          day: 9,
          words: [],
        },
        {
          day: 10,
          words: [],
        },
        {
          day: 11,
          words: [],
        },
        {
          day: 12,
          words: [],
        },
        {
          day: 13,
          words: [],
        },
        {
          day: 14,
          words: [],
        },
        {
          day: 15,
          words: [],
        },
        {
          day: 16,
          words: [],
        },
        {
          day: 17,
          words: [],
        },
        {
          day: 18,
          words: [],
        },
        {
          day: 19,
          words: [],
        },
        {
          day: 20,
          words: [],
        },
        {
          day: 21,
          words: [],
        },
        {
          day: 22,
          words: [],
        },
        {
          day: 23,
          words: [],
        },
        {
          day: 24,
          words: [],
        },
        {
          day: 25,
          words: [],
        },
        {
          day: 26,
          words: [],
        },
        {
          day: 27,
          words: [],
        },
        {
          day: 28,
          words: [],
        },
        {
          day: 29,
          words: [],
        },
        {
          day: 30,
          words: [],
        },
        {
          day: 31,
          words: [],
        },
        {
          day: 32,
          words: [],
        },
        {
          day: 33,
          words: [],
        },
        {
          day: 34,
          words: [],
        },
        {
          day: 35,
          words: [],
        },
        {
          day: 36,
          words: [],
        },
        {
          day: 37,
          words: [],
        },
        {
          day: 38,
          words: [],
        },
        {
          day: 39,
          words: [],
        },
        {
          day: 40,
          words: [],
        },
        {
          day: 41,
          words: [],
        },
        {
          day: 42,
          words: [],
        },
        {
          day: 43,
          words: [],
        },
        {
          day: 44,
          words: [],
        },
        {
          day: 45,
          words: [],
        },
        {
          day: 46,
          words: [],
        },
        {
          day: 47,
          words: [],
        },
        {
          day: 48,
          words: [],
        },
        {
          day: 49,
          words: [],
        },
        {
          day: 50,
          words: [],
        },
        {
          day: 51,
          words: [],
        },
        {
          day: 52,
          words: [],
        },
        {
          day: 53,
          words: [],
        },
        {
          day: 54,
          words: [],
        },
        {
          day: 55,
          words: [],
        },
        {
          day: 56,
          words: [],
        },
        {
          day: 57,
          words: [],
        },
        {
          day: 58,
          words: [],
        },
        {
          day: 59,
          words: [],
        },
        {
          day: 60,
          words: [],
        },
      ],
    };
       },
     methods: {
     dae(ds){
      for(let i of this.days){
        if(ds.day == i.day){
          window.localStorage.dey = JSON.stringify(i)
        }
      }
     }
     }
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 630vh;
  padding: 0;
}
.title {
  text-transform: capitalize;
  margin-bottom: 25px;
  font-size: 25px;
  padding: 10px 0px;
  box-shadow: 0px 0px 4px #00000025;
}
.day {
  height: 70px;
  padding: 0px 35px;
  display: flex;
  margin: 15px 0px;
  transition: 0.3s;
  flex-direction: row;
  border-radius: 35px;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: rgb(255, 255, 255);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.na span {
  font-size: 30px;
}
.day:active {
  background: rgb(214, 214, 214);
}
.na {
  padding-bottom: 15px;
}
.title span {
  color: #ffbd03;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>
