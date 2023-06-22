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
        <div class="day" @click="dae(day)" v-for="day of this.days" :key="day.id">
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
              definition: [
                "a type of work that you feel you are suited to doing and to which you should give all your time and energy, or the feeling that a type of work suits you in this way",
              ],
              examples: [
                "I feel I've found/missed my true vocation.",
                "To work in medicine, you should have a vocation for it.",
              ],
            },
            {
              word: "inscription",
              definition: [
                "words that are written or cut in something",
              ],
              examples: [
                'The inscription read "To darling Molly, Christmas 1904"."',
                "The inscriptions on the gravestones were worn away.",
              ],
            },
            {
              word: "mule",
              definition: [
                "an animal whose mother is a horse and whose father is a donkey, used especially for transporting goods ",
                "a person who agrees to carry illegal drugs into another country in return for payment by the person selling the drugs",
                "a woman's shoe or slipper that has no back"
              ],
              examples: [
                "These very poor women who are used as mules by drug barons often get long prison sentences.",
                "I have loaded my all stuffs on mule",
              ],
            },
            {
              word: "cooperate",
              definition: [
                "to act or work together for a particular purpose, or to be helpful by doing what someone asks you to do",
              ],
              examples: [
                "A two-year old is likely to refuse to cooperate when you tell her to get dressed.",
                "The two companies have cooperated in joint ventures for the past several years.",
                "The Spanish authorities cooperated with the British police in finding the terrorists."
              ],
            },
            {
              word: "proceed",
              definition: [
                "to continue as planned",
                "proceed to do something-to do something after you have done something else",
                "to move forward or travel in a particular direction"
              ],
              examples: [
                "His lawyers have decided not to proceed with the case.",
                "Preparations for the festival are now proceeding smoothly.",
                "She sat down and proceeded to tell me about her skiing holiday.",
                "Passengers for Madrid should proceed to gate 26 for boarding."
              ],
            },
            {
              word: "drench",
              definition: [
                "to make someone or something extremely wet",
                "to make something have a very large amount of a quality",
              ],
              examples: [
                "A sudden thunderstorm had drenched us to the skin.",
                "She likes to eat her popcorn drenched in chilli sauce.",
                "The opera was light on plot and positively drenched in comedy."
              ],
            },
            {
              word: "lashing",
              definition: [
                "the punishment of being hit with a whip",
                "a rope, cable, etc. for tying one thing to another",
                "lashings - a lot of food or drink  "
              ],
              examples: [
                "He was sentenced to receive a lashing.",
                "Each fitting had been sealed and each lashing tied.",
                "scones with lashings of cream",
                "A life-size effigy was tied to a stake with tight lashings of twine."
              ],
            },
            {
              word: "splash",
              definition: [
                "If a liquid splashes or if you splash a liquid, it falls on or hits something or someone",
                "to move in water so that drops of it go in all directions",
                "to print or show something, or be printed or shown, in a very noticeable way"
              ],
              examples: [
                "Water was splashing from a hole in the roof.",
                "She splashed her face with cold water.",
                "The kids were splashing (about/around) in the shallow end of the swimming pool.",
                "The story has splashed all over Canadian newspapers."
              ],
            },
            {
              word: "swamp",
              definition: [
                "(an area of) very wet, soft land",
                "to cover a place or thing with a large amount of water",
                "If something swamps a person, system, or place, more of it arrives than can be easily dealt with"
              ],
              examples: [
                "The Everglades are an area of swamp in southern Florida.",
                "High tides have swamped the coast.",
                "Foreign cars have swamped the UK market."
              ],
            },
            {
              word: "soaked",
              definition: [
                "extremely wet",
              ],
              examples: [
                "My shoes are soaked (through).",
                "His T-shirt was soaked in sweat.",
              ],
            },
            {
              word: "mattress",
              definition: [
                "the part of a bed, made of a strong cloth cover filled with firm material, that makes the bed comfortable to lie on",
              ],
              examples: [
                "My bed's mattress is very hard."
              ],
            },
            {
              word: "remarkably",
              definition: [
                "used for emphasizing how surprising or unusual something is",
              ],
              examples: [
                "Remarkably, she wasn't hurt in the crash.",
                "It is a remarkably noisy and crowded city.",
              ],
            },
            {
              word: "setback",
              definition: [
                "something that happens that delays or prevents a process from developing",
              ],
              examples: [
                "Sally had been recovering well from her operation, but yesterday she experienced/suffered a setback.",
                "There has been a slight/temporary setback in our plans.",
              ],
            },
            {
              word: "splendid",
              definition: [
                "excellent, or beautiful and impressive",
              ],
              examples: [
                "We had splendid food/a splendid holiday/splendid weather.",
                "You look splendid in that outfit.",
                "The splendid old opera house was torn down."
              ],
            },
            {
              word: "prime",
              definition: [
                "main or most important",
                "of the best quality",
                "the period in your life when you are most active or successful"
              ],
              examples: [
                "This is a prime example of 1930s architecture.",
                "The hotel is in a prime location in the city centre.",
                "Middle age can be the prime of life if you have the right attitude."
              ],
            },
            {
              word: "devastated",
              definition: [
                "completely destroyed",
                "very shocked and upset",
              ],
              examples: [
                "Thousands of people have left their devastated villages and fled to the mountains.",
                "She was utterly devastated when her husband died.",
              ],
            },
            {
              word: "sadden",
              definition: [
                "to make someone sad or unhappy",
              ],
              examples: [
                "It saddens me to think that we'll never see her again.",
                "It saddened me to learn of your father’s death",
                "We are deeply saddened by this devastating tragedy."
              ],
            },
            {
              word: "awe-inspiring",
              definition: [
                "causing you to feel great respect or admiration:",
                "awesome"
              ],
              examples: [
                "Niagara Falls really is an awe-inspiring sight.",
                "Her knowledge of computers is quite awe-inspiring.",
              ],
            },
            {
              word: "sketch",
              definition: [
                "a simple, quickly-made drawing that does not have many details ",
                "a short written or spoken story that does not have many details",
                "a short, humorous part of a longer show on stage, television, or radio"
              ],
              examples: [
                "My mother made a (pencil) sketch of my brother reading a book.",
                "I thought the sketch about celebrity chefs was really funny.",
                "The art students were told to sketch the landscape."
              ],
            },
            {
              word: "adorn",
              definition: [
                "to add something decorative to a person or thing",
              ],
              examples: [
                "The bride's hair was adorned with white flowers.",
                "The great doorway was adorned with curved foliage."
              ],
            },
            {
              word: "foliage",
              definition: [
                "the leaves of a plant or tree, or leaves on the stems or branches on which they are growing",
                "the leaves of a plant or tree",
              ],
              examples: [
                "The dense foliage overhead almost blocked out the sun.",
                "Dense foliage blocked the path.",
              ],
            },
            {
              word: "strip",
              definition: [
                "to remove, pull, or tear the covering or outer layer from something",
                "to remove something from somewhere",
                "to take something important, such as a title, away from someone, usually as a punishment",
                "to take out everything that is not part of the structure of a room or building",
                "to sell the assets (= valuable parts) of a company",
              ],
              examples: [
                "Huge areas of land have been stripped of all trees and vegetation.",
                "When you strip the word from its context, it loses its meaning.",
                "He was stripped of his knighthood after he was convicted of stealing from the company.",
                "The house had been stripped, except for one wall fitting.",
                "He made his fortune as a young man by buying up large companies and stripping the assets."
              ],
            },
            {
              word: "sanctuary",
              definition: [
                "protection or a safe place, especially for someone or something being chased or hunted",
                "a place where birds or animals can live and be protected, especially from being hunted or dangerous conditions",
              ],
              examples: [
                "The chapel became a sanctuary for the refugees.",
                "a wildlife/bird sanctuary",
                "Illegal immigrants found/sought/took sanctuary in a local church."
              ],
            },
            {
              word: "avalanche",
              definition: [
                "a large amount of ice, snow, and rock falling quickly down the side of a mountain",
                "too many things that arrive or happen at the same time",
              ],
              examples: [
                "We were swamped by an avalanche of letters/phone calls/complaints.",
                "We received an avalanche of complaints.",
              ],
            },
            {
              word: "obliterate",
              definition: [
                "to remove all signs of something, either by destroying it or by covering it so that it cannot be seen",
                "to make an idea or feeling disappear completely",
              ],
              examples: [
                "The missile strike was devastating - the target was totally obliterated.",
                "All of a sudden the view was obliterated by the fog.",
                "Maybe she gets drunk to obliterate painful memories."
              ],
            },
            {
              word: "peer",
              definition: [
                "to look carefully or with difficulty",
                "a person who is the same age or has the same social position or the same abilities as other people in a group",
              ],
              examples: [
                "The driver was peering into the distance trying to read the road sign.",
                "Do you think it's true that teenage girls are less self-confident than their male peers?",
              ],
            },
            {
              word: "stick out",
              definition: [
                "to go past the surface or edge of something",
                "to be very easy to notice",
                "to come forward from the rest of your body, or to make part of your body do this"
              ],
              examples: [
                "Paul's ears stick out a little.",
                "There was a handkerchief sticking out of his jacket pocket.",
                "She certainly sticks out in a crowd.",
                "Mum, Lewis stuck out his tongue at me!"
              ],
            },
            {
              word: "puzzle out",
              definition: [
                "to discover or understand something by thinking hard about it",
              ],
              examples: [
                "I still can't puzzle out how I managed to spend so much money last month.",
              ],
            },
            {
              word: "uphill",
              definition: [
                "leading to a higher place on a slope",
                "needing a large amount of effort",
              ],
              examples: [
                "an uphill climb",
                "It'll be an uphill struggle/battle/fight to get the new proposals accepted.",
              ],
            },
            {
              word: "tower over",
              definition: [
                "to be very tall in comparison with someone or something else",
                "to be much bigger and more successful than another thing of the same type",
              ],
              examples: [
                "The new hotel towers over the Shanghai skyline.",
                "Although he's only twelve, David towers over his mother.",
                "One computer manufacturer towers above all the rest."
              ],
            },
            {
              word: "come upon",
              definition: [
                "to find something or meet someone unexpectedly",
              ],
              examples: [
                "I came upon this book in the attic - would you like it?",
              ],
            },
            {
              word: "slope",
              definition: [
                "a surface that lies at an angle to the horizontal so that some points on it are higher than others",
                "(part of) the side of a hill or mountain",
              ],
              examples: [
                "The roof is at a slope (= at an angle to a horizontal surface) of 30°.",
                "Snow had settled on some of the higher slopes.",
                "a ski/mountain slope"
              ],
            },
            {
              word: "pave",
              definition: [
                "to cover an area of ground with a hard, flat surface of pieces of stone, concrete, or bricks",
                "pave the wway (for/to sth) - to make it possible for someone to do something or for something to happen",
              ],
              examples: [
                "The area near the beach is paved with bricks set in patterns.",
                "This merger will revolutionize the industry and pave the way for more international alliances.",
              ],
            },
            {
              word: "misery",
              definition: [
                "great unhappiness",
                "azob-uqubat",
              ],
              examples: [
                "We have witnessed the most appalling scenes of human misery.",
                "Ten years of marriage to him have made her life a misery.",
              ],
            },
          ],
        },
        {
          day: 3,
          words: [
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
            {
              word: "",
              definition: [
                "",
                "",
                ""
              ],
              examples: [
                "",
                "",
                ""
              ]
            },
          ],
        },
        {
          day: 4,
          words: [
            {
              word: "iconoclastic",
              definition: [
                "strongly opposing generally accepted beliefs and traditions",
              ],
              examples: [
                "iconoclastic views",
                "His plays were fairly iconoclastic in their day.",
              ]
            },
            {
              word: "iconoclast",
              definition: [
                "a person who strongly opposes generally accepted beliefs and traditions",
              ],
              examples: [
                "Rogers, an iconoclast in architecture, is sometimes described as putting the insides of buildings on the outside.",
              ]
            },
            {
              word: "precisely",
              definition: [
                "exactly",
                "used to emphasize what you are saying",
                "used to express complete agreement with someone or suggest that what they have said is obvious"
              ],
              examples: [
                "The fireworks begin at eight o'clock precisely.",
                "What do you think the problem is, precisely?",
                "But it's precisely because of the noise that they're thinking of moving.",
                '"It would be stupid to attempt the journey in the dark." "Precisely!" he answered.'
              ]
            },
            {
              word: "utilize",
              definition: [
                "to use something in an effective way",
              ],
              examples: [
                "The vitamins come in a form that is easily utilized by the body.",
              ]
            },
            {
              word: "circuit",
              definition: [
                "a regular pattern of visits or the places visited",
                "a particular area containing different courts that a judge visits",
                "something shaped approximately like a circle, especially a route, path, or sports track that starts and ends in the same place",
                "a closed system of wires or pipes through which electricity or liquid can flow"
              ],
              examples: [
                "He was a familiar figure on the lecture circuit.",
                "They first met each other on the tennis circuit",
                "The judge had served for many years on the northeastern Circuit.",
                "We made a leisurely circuit of the city walls.",
                "A defect was found in the water-cooling/electrical circuit."
              ]
            },
            {
              word: "naysayer",
              definition: [
                "someone who says something is not possible, is not good, or will fail",
              ],
              examples: [
                "He ignored the naysayers and persevered.",
              ]
            },
            {
              word: "irrelevant",
              definition: [
                "not related to what is being discussed or considered and therefore not important",
              ],
              examples: [
                "These documents are largely irrelevant to the present investigation.",
                "Making a large profit is irrelevant to us - the important thing is to make the book available to the largest possible audience.",
              ]
            },
            {
              word: "constraint",
              definition: [
                "something that controls what you do by keeping you within particular limits",
                "under constraint-If you do something under constraint, you do it only because you have been forced to",
                "unnatural behaviour that is sometimes the result of forcing yourself to act in a particular way"
              ],
              examples: [
                "The constraints of politeness wouldn't allow her to say what she really thought about his cooking.",
                "Financial constraints on the company are preventing them from employing new staff.",
                "They confessed, but only under severe constraint.",
                "She tried to appear friendly, but her constraint was obvious."
              ]
            },
            {
              word: "drumbeat",
              definition: [
                "(the sound of) a single hit on a drum",
              ],
              examples: [
                "Now, the drumbeats of war can be heard.",
              ]
            },
            {
              word: "rumbling",
              definition: [
                "a sign of anger or disagreement",
                "a continuous low sound",
              ],
              examples: [
                "There are rumblings of annoyance throughout the workforce.",
                "the rumbling of distant guns/thunder",
                "Is it a rumbling for my work"
              ]
            },
            {
              word: "transmit",
              definition: [
                "to broadcast something, or to send out or carry signals or messages using radio, television, etc.",
                "to pass a disease from one person or animal to another",
                "to pass a particular feeling from one person to another or others, or to an animal"
              ],
              examples: [
                "The information is transmitted electronically to the central computer.",
                "Some diseases are transmitted from one generation to the next.",
                "I'm transmitting my feelings through music."
              ]
            },
            {
              word: "pitfall",
              definition: [
                "a likely mistake or problem in a situation",
                "an unexpected danger or difficulty",
                "a problem that may happen in the future"
              ],
              examples: [
                "There's a video that tells new students about pitfalls to avoid.",
                "Who knows what kind of pitfalls they’re going to run into.",
                "You should study hard to avoid financial pitfalls."
              ]
            },
            {
              word: "shortcut",
              definition: [
                "a route that leads from one place to another and is quicker and more direct than the usual route",
                "a quicker way of doing something in order to save time or effort",
                "a quick way to start or use a computer program"
              ],
              examples: [
                "I know a shortcut to town.",
                "a shortcut key",
                "The kids take a shortcut through the parking lot to get to school."
              ]
            },
            {
              word: "plague",
              definition: [
                "to cause worry, pain, or difficulty to someone or something over a period of time",
                "to annoy someone, especially by asking repeated questions",
              ],
              examples: [
                "My shoulder's been plaguing me all week.",
                "The children plagued him with questions all through lunch.",
                "My feet are plauging me because I have broken them"
              ]
            },
            {
              word: "conjecture",
              definition: [
                "a guess about something based on how it seems and not on proof",
              ],
              examples: [
                "There's been a lot of conjecture in the media recently about the marriage.",
                "I have a conjecture about how people are created."
              ]
            },
            {
              word: "basis",
              definition: [
                "the most important facts, ideas, etc. from which something is developed",
                "form the basis for",
                "on the basis of"
              ],
              examples: [
                "Their proposals have no proven scientific basis.",
                "Decisions were often made on the basis of (= using) incorrect information.",
                "This document will form the basis for our discussion."
              ]
            },
            {
              word: "bombard",
              definition: [
                "to attack a place with continuous shooting or bombs",
              ],
              examples: [
                "The troops bombarded the city, killing and injuring hundreds.",
                "The Russia is bombarding the Ukraine"
              ]
            },
            {
              word: "novelty",
              definition: [
                "the quality of being new and unusual",
                "the quality of being new and unusual",
                "a cheap unusual object such as a small toy, often given as a present"
              ],
              examples: [
                "In Britain in the 1950s, television still had novelty value.",
                "Tourists are still a novelty on this remote island.",
                "The shop sells gifts and other novelties.",
                "novelty item",
                "I have an old phone that has novelty value"
              ]
            },
            {
              word: "embrace",
              definition: [
                "to accept something enthusiastically",
                "to hold someone tightly with both arms to express love, liking, or sympathy, or when greeting or leaving someone",
                "to include something, often as one of a number of things"
              ],
              examples: [
                "This was an opportunity that he would embrace.",
                "She saw them embrace on the station platform.",
                "Linguistics embraces a diverse range of subjects such as phonetics and stylistics."
              ]
            },
            {
              word: "inhibit",
              definition: [
                "to prevent someone from doing something by making them feel nervous or embarrassed ",
                "to slow down a process or the growth of something",
              ],
              examples: [
                "Some workers were inhibited (from speaking) by the presence of their managers.",
                "This drug inhibits the growth of tumours.",
              ]
            },
            {
              word: "afflict",
              definition: [
                "If a problem or illness afflicts a person or thing, they suffer from it",
                "to make someone or something suffer physically or mentally",
              ],
              examples: [
                "It is an illness that afflicts women more than men.",
                "a country afflicted by civil war",
                "He was afflicted with severe asthma."
              ]
            },
            {
              word: "empathy",
              definition: [
                "the ability to share someone else's feelings or experiences by imagining what it would be like to be in that person's situation",
              ],
              examples: [
                "He loves children and has a certain empathy with them.",
                "I love reading fantastic books and I have empathy with that books",
              ]
            },
            {
              word: "social identity",
              definition: [
                "Social identities are labels that people use to categorize or identify themselves and/or others as members of specific groups",
              ],
              examples: [
                "It expanded on the potential of Rodney's archive as a resource for challenging our conceptions of cultural, physical and social identity",
              ]
            },
            {
              word: "social cognition",
              definition: [
                "Social cognition is the way we think about others.",
              ],
              examples: [
                "I have no social cognition , because I am selfish",
              ]
            },
            {
              word: "intertwined",
              definition: [
                "twisted together or closely connected so as to be difficult to separate",
              ],
              examples: [
                "Our fates seemed to be intertwined.",
                "We are interwined friends , becuase I have known him since my childhood"
              ]
            },
            {
              word: "asset",
              definition: [
                "a useful or valuable quality, skill, or person",
                "something valuable belonging to a person or organization that can be used for the payment of debts",
              ],
              examples: [
                "He'll be a great asset to the team.",
                "Knowledge of languages is a real asset in this sort of work.",
                "A company's assets can consist of cash, investments, specialist knowledge, or copyright material."
              ]
            },
          ],
        },
        {
          day: 5,
          words: [
            {
              word: "olfaction",
              definition: [
                "the action of smelling, or the ability to smell",
              ],
              examples: [
                "Dogs have a great olfaction.",
              ]
            },
            {
              word: "evoke",
              definition: [
                "to make someone remember something or feel an emotion",
              ],
              examples: [
                "That smell always evokes memories of my old school.",
                "It has evoked me",
              ]
            },
            {
              word: "scent",
              definition: [
                "a pleasant natural smell",
                "scent of roses"
              ],
              examples: [
                "Apples have a great scent",
              ]
            },
            {
              word: "rush",
              definition: [
                "to (cause to) go or do something very quickly",
              ],
              examples: [
                "Slow down! What's the rush?",
                "I try to do my shopping before the Christmas rush.",
                "They made a rush at him to get his gun.",
              ]
            },
            {
              word: "foul",
              definition: [
                "extremely unpleasant",
                "Foul speech or other language is offensive, rude, or shocking",
                "against the rules of a sport",
                "morally wrong"
              ],
              examples: [
                "Those toilets smell foul!",
                "Why are you in such a foul mood this morning?",
                "a foul throw",
                "All murders are foul and futile."
              ]
            },
            {
              word: "grimace",
              definition: [
                "to make an expression of pain, strong dislike, etc. in which the face twists in an ugly way",
                "an expression of pain, strong dislike, etc. in which the face twists in an ugly way",
              ],
              examples: [
                "He tried to stand and grimaced with pain.",
                "Helen made a grimace of disgust when she saw the raw meat.",
                "I usually make a grimace when I smell a bad scent of something.",
              ]
            },
            {
              word: "disgust",
              definition: [
                "a strong feeling of disapproval and dislike at a situation, person's behaviour, etc",
                "to make you feel extreme dislike or disapproval",
              ],
              examples: [
                "She walked out in disgust.",
                "Sometimes some teachers disgust from students",
              ]
            },
            {
              word: "fragrant",
              definition: [
                "with a pleasant smell",
              ],
              examples: [
                "fragrant flowers",
                "I have couple of fragrat flowers",
              ]
            },
            {
              word: "bonding",
              definition: [
                "the process by which a close emotional relationship is developed",
              ],
              examples: [
                "Much of the bonding between mother and child takes place in those early weeks",
                "Our bonding between teachers and students is crucial for good lesson.",
                "",
              ]
            },
            {
              word: "distinguish",
              definition: [
                "to notice or understand the difference between two things, or to make one person or thing seem different from another",
                "distinguish yourself - to do something so well that you are admired and praised for it",
              ],
              examples: [
                "I sometimes have difficulty distinguishing Spanish from Portuguese.",
                "It's important to distinguish between business and pleasure.",
                "He distinguished himself as a writer at a very early age.",
                "I distinguished myself as a football player at my 7 years old."
              ]
            },
            {
              word: "feeble",
              definition: [
                "weak and without energy, strength, or power",
                "not effective or good",
              ],
              examples: [
                "He was a feeble, helpless old man.",
                "Your brain is feeble and you should broaden your horizon.",
                "a feeble joke/excuse",
              ]
            },
            {
              word: "elusive",
              definition: [
                "difficult to describe, find, achieve, or remember",
              ],
              examples: [
                "The answers to these questions remain as elusive as ever.",
                "I think this reading is very elusive , I can't retell it.",
              ]
            },
            {
              word: "realm",
              definition: [
                "an area of interest or activity",
                "a country ruled by a king or queen",
              ],
              examples: [
                "Her interests are in the realm of practical politics.",
                "The matter was hotly debated in all the towns of the realm.",
                "UK is realm ",
                "I am keen on realm of being programmer"
              ]
            },
            {
              word: "implication",
              definition: [
                "an occasion when you seem to suggest something without saying it directly",
                'the effect that an action or decision will have on something else in the future'
              ],
              examples: [
                "She accused the party and, by implication, its leader too.",
                "What are the implications of the new law?",
                "He blamed her without any implications.",
              ]
            },
            {
              word: "hence",
              definition: [
                "that is the reason or explanation for",
              ],
              examples: [
                "His mother was Italian, hence his name - Luca.",
                "My name is Damir , hence I am Uzbek",
              ]
            },
            {
              word: "invest",
              definition: [
                "to put money, effort, time, etc. into something to make a profit or get an advantage",
              ],
              examples: [
                "The institute will invest five million in the project.",
                "The best father in the world is who invest to his children's education.",
              ]
            },
            {
              word: "intimate",
              definition: [
                "being a close, personal friend, or having a close, personal relationship",
                "(of knowledge or understanding) detailed, and obtained from a lot of studying or experience",
              ],
              examples: [
                "He became very intimate with an actor who is widely regarded as a Tomas Gates",
                "The restaurant has a very intimate atmosphere.",
                "She has an intimate knowledge of Tuscany, where she has lived for 20 years.",
              ]
            },
            {
              word: "attach",
              definition: [
                "to fasten, join, or connect something",
                "attach to sb/sth - To attach a particular quality to something is to consider it to have that quality",
              ],
              examples: [
                "I attached a photo to my application form.",
                "I don't attach any importance/significance to these rumours.",
              ]
            },
            {
              word: "interiorized",
              definition: [
                "(of an idea, opinion, belief, etc.) accepted or absorbed so that it becomes part of your character",
                "not allowing your feelings or emotions to show, although you think about them",
              ],
              examples: [
                'Many people had this interiorised belief that "North is better".',
                "I interiorized that reading e-books is better than reading paper based ones.",
                "He was a typical example of a misunderstood, neglected, interiorized, troubled young man with violent tendencies.",
              ]
            },
            {
              word: "essence",
              definition: [
                "the basic or most important idea or quality of something",
                "in essence - relating to the most important characteristics or ideas of something",
                "be of the essence - to be the most important thing"
              ],
              examples: [
                "I am of the essence , because I am a president",
                "The essence of his argument was that education should continue throughout life.",
                "Water consumption is in essence , because of its lackage.",
              ]
            },
            {
              word: "sniff sb/sth out",
              definition: [
                "to discover where something or someone is by smelling",
              ],
              examples: [
                "At customs, dogs are used to sniff out drugs in passengers' luggage",
                "His father sniffed him out to check whether or not he smoked.",
              ]
            },
            {
              word: "plum",
              definition: [
                "fruit calles olxo'ri",
                "plummer/plummest - very good and worth having",
                "plum-coloured - having a dark reddish-purple colour"
              ],
              examples: [
                "I like eating plum jam",
                "Can I buy this plum teddy bear",
                "This teddy bear is plum-coloured."
              ]
            },
            {
              word: "leak",
              definition: [
                "(of a liquid or gas) to escape from a hole or crack in a pipe or container; (of a container) to allow liquid or gas to escape",
                "to allow secret information to become generally known",
              ],
              examples: [
                "Having our tubes broken , water leaked and flooded.",
                "Oil leaked out of the car.",
                "News of the pay cuts had somehow leaked out."
              ]
            },
            {
              word: "postage",
              definition: [
                "the money that you pay for sending letters and parcels through the post",
              ],
              examples: [
                "The postage costs $123.With dicount it will be $100.",
              ]
            },
            {
              word: "suck up into smth",
              definition: [
                "Biror narsaga singib ketish",
              ],
              examples: [
                "The bad scent of his skin have sucked up into his body.",
              ]
            },
            {
              word: "dwell",
              definition: [
                "to live in a place or in a particular way",
                "dwell on sth- to keep thinking or talking about something, especially something bad or unpleasant",
                "dwell time - how long people are likely to spend looking at an advertisement, buying goods, etc., especially while they are waiting somewhere such as an airport or train station"
              ],
              examples: [
                "She dwelt in remote parts of Asia for many years.",
                "I dwell in Uzbekistan.",
                "My dwell time on these aggressive games was 5 hours per week."
              ]
            },
            {
              word: "nuance",
              definition: [
                "a very slight difference in appearance, meaning, sound, etc.",
                "a quality of something that is not easy to notice but may be important",
              ],
              examples: [
                "Linguists explore the nuances of language.",
                "Actors have to study the nuances of facial expression to show the whole range of emotions.",
                "He gives a beautifully nuanced performance in a tricky role."
              ]
            },
            {
              word: "spectacular",
              definition: [
                "very exciting to look at",
                "especially great",
                ""
              ],
              examples: [
                "a spectacular view",
                "He scored a spectacular goal in the second half.",
                "We've had spectacular success with the product.",
                "He is very imaginative boy , so he has spectacular vies about how the brain works."
              ]
            },
          ],
        },
        {
          day: 6,
          words: [
            {
              word: 'five-a-day',
              definition: [
                'the five portions of fruit and vegetables that people are recommended to eat every day as part of a healthy diet.',
              ],
              examples: [
                'If you eat your five-a-day you will be healthy till you die.',
              ]
            },
            {
              word: 'substantiate',
              definition: [
                'to show something to be true, or to support a claim with facts',
              ],
              examples: [
                'I can substantiate if you don"t beleive in me.',
                'He substantiated the murder'
              ]
            },
            {
              word: 'disrupt',
              definition: [
                'to prevent something, especially a system, process, or event, from continuing as usual or as expected',
                'to change the traditional way that an industry operates, especially in a new and effective way',
              ],
              examples: [
                'Heavy snow disrupted our plan.',
                'Having broken trains , disrupted travel in the morning',
              ]
            },
            {
              word: 'catch up',
              definition: [
                'to reach someone in front of you by going faster than them',
                'to reach the same quality or standard as someone or something else',
                'to do something you did not have time to do earlier',
                'learn and discuss news'
              ],
              examples: [
                'I catched my brother up after 5 metres',
                'I am catching up my homeworks',
                'Let"s go for a coffee - I need to catch up on all the gossip.'
              ]
            },
            {
              word: 'deteriorate',
              definition: [
                'to become worse',
              ],
              examples: [
                'The political situation in the region has deteriorated rapidly.',
                'The value of money deteriorated suddenly in 21th century',
              ]
            },
            {
              word: 'saturated',
              definition: [
                'a type of fat found in meat, eggs, milk, cheese, etc. that is thought to be bad for your health',
              ],
              examples: [
                'Butter and cream contain a lot of saturated fats.',
                'In order to be healthy , you should stop eating foods containing saturated fat.',
              ]
            },
            {
              word: 'prescriptive',
              definition: [
                'saying exactly what must happen, especially by giving an instruction or making a rule',
              ],
              examples: [
                'Most teachers think the government"s guidelines on homework are too prescriptive.',
                'His basic attitude toward language is highly prescriptive.',
              ]
            },
            {
              word: 'stringency',
              definition: [
                'the quality of being very strict, severe, or limiting',
                'a situation in which not enough money is available for borrowing as a result of firm controls on the amount of money in an economy',
              ],
              examples: [
                'My math teacher has a great stringency',
                'Greater financial stringency is needed to eradicate inflation from the economy.'
              ]
            },
            {
              word: 'assert ',
              definition: [
                'assert yourself - to behave in a way that expresses your confidence, importance, or power and earns you respect from others',
                'to say that something is certainly true',
                'to do something to show that you have power',
                'assert sb"s authority , assert your right'  
              ],
              examples: [
                'I really must assert myself more in meetings.',
                'Don"t be afraid to assert yourself and make your views clear.',
                'He asserts that she stole money from him.',
                'She very rarely asserts her authority over the children.'
              ]
            },
            {
              word: 'moderate',
              definition: [
                'neither small nor large in size, amount, degree, or strength',
              ],
              examples: [
                'The cabin is of moderate size - just right for a small family.',
                'He"s a moderate drinker.',
                'We have had moderate success in changing people"s attitudes.'
              ]
            },
            {
              word: 'lofty',
              definition: [
                'high',
                'Lofty ideas, etc. are of a high moral standard',
              ],
              examples: [
                'a lofty ceiling/mountain/wall',
                'lofty sentiments/ideals',
                'a lofty attitude/air/tone'
              ]
            },
          ],
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
    dae(ds) {
      for (let i of this.days) {
        if (ds.day == i.day) {
          window.localStorage.dey = JSON.stringify(i);
        }
      }
    },
  },
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
