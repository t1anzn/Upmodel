// QuizData: 20 questions with 5 answer options each.
// The questions are grouped so that each group maps the 5 answers to a set of 5 unique styles.
// Over 20 questions, each of the 25 styles appears exactly 4 times.

// Group 1 mapping (questions 1, 6, 11, 16):
// a: Streetwear, b: Sportswear, c: Avant-garde, d: Punk, e: Glam
// Group 2 mapping (questions 2, 7, 12, 17):
// a: Loungewear, b: Regency, c: Goth, d: Casual, e: Retro
// Group 3 mapping (questions 3, 8, 13, 18):
// a: Boho, b: Western, c: Indie, d: Utility, e: Futuristic
// Group 4 mapping (questions 4, 9, 14, 19):
// a: Cottagecore, b: Skatter, c: Fairy, d: Rave, e: Y2k
// Group 5 mapping (questions 5, 10, 15, 20):
// a: Grunge, b: Minimalist, c: Coquette, d: Preppy, e: Gorpcore

const quizData = [
    // Group 1 - Question 1
    {
      question: "1. When stepping out in the city, which vibe resonates with you?",
      answers: {
        a: "Urban edge with street-inspired cuts",
        b: "Athletic, performance-focused fits",
        c: "Bold and experimental silhouettes",
        d: "Rebellious, edgy looks",
        e: "Shiny, attention-grabbing outfits"
      },
      points: { a: "Streetwear", b: "Sportswear", c: "Avant-garde", d: "Punk", e: "Glam" }
    },
    // Group 2 - Question 2
    {
      question: "2. For a relaxed day, which outfit best suits your mood?",
      answers: {
        a: "Cozy, effortless loungewear",
        b: "Elegant, period-inspired ensembles",
        c: "Dark, mysterious aesthetics",
        d: "Simple, comfortable everyday wear",
        e: "Vintage pieces with a twist"
      },
      points: { a: "Loungewear", b: "Regency", c: "Goth", d: "Casual", e: "Retro" }
    },
    // Group 3 - Question 3
    {
      question: "3. When expressing your individuality, which style speaks to you?",
      answers: {
        a: "Free-spirited boho looks",
        b: "Rugged, cowboy-inspired designs",
        c: "Unique, indie-inspired pieces",
        d: "Functional, work-ready styles",
        e: "Cutting-edge, futuristic trends"
      },
      points: { a: "Boho", b: "Western", c: "Indie", d: "Utility", e: "Futuristic" }
    },
    // Group 4 - Question 4
    {
      question: "4. Which dreamy aesthetic do you find most appealing?",
      answers: {
        a: "Romantic cottagecore vibes",
        b: "Urban, skate-inspired looks",
        c: "Whimsical, fairy-tale designs",
        d: "Energetic rave styles",
        e: "Nostalgic Y2K trends"
      },
      points: { a: "Cottagecore", b: "Skatter", c: "Fairy", d: "Rave", e: "Y2k" }
    },
    // Group 5 - Question 5
    {
      question: "5. Which statement best describes your everyday look?",
      answers: {
        a: "Raw, edgy grunge elements",
        b: "Clean, understated minimalism",
        c: "Flirty, playful details",
        d: "Polished, preppy elegance",
        e: "Durable, outdoorsy gear"
      },
      points: { a: "Grunge", b: "Minimalist", c: "Coquette", d: "Preppy", e: "Gorpcore" }
    },
    // Group 1 - Question 6
    {
      question: "6. For a night out on the town, which style do you lean towards?",
      answers: {
        a: "Urban street-ready ensembles",
        b: "Sporty cuts with modern flair",
        c: "Avant-garde, boundary-pushing designs",
        d: "Bold, rebellious statement pieces",
        e: "Glamorous, eye-catching attire"
      },
      points: { a: "Streetwear", b: "Sportswear", c: "Avant-garde", d: "Punk", e: "Glam" }
    },
    // Group 2 - Question 7
    {
      question: "7. At home or out, which style feels most natural to you?",
      answers: {
        a: "Relaxed, comfy loungewear",
        b: "Sophisticated, classic regency looks",
        c: "Dark, brooding goth aesthetics",
        d: "Effortlessly casual outfits",
        e: "Retro-inspired vintage charm"
      },
      points: { a: "Loungewear", b: "Regency", c: "Goth", d: "Casual", e: "Retro" }
    },
    // Group 3 - Question 8
    {
      question: "8. For an adventurous day, which look inspires you?",
      answers: {
        a: "Boho chic with eclectic mixes",
        b: "Rugged western styles",
        c: "Unique indie statements",
        d: "Practical, utility-focused attire",
        e: "Futuristic, tech-forward designs"
      },
      points: { a: "Boho", b: "Western", c: "Indie", d: "Utility", e: "Futuristic" }
    },
    // Group 4 - Question 9
    {
      question: "9. Which look best sums up your whimsical side?",
      answers: {
        a: "Soft, romantic cottagecore",
        b: "Edgy, street-smart skatter",
        c: "Delicate, fairy-like details",
        d: "Pulsating, rave energy",
        e: "Playful Y2K nostalgia"
      },
      points: { a: "Cottagecore", b: "Skatter", c: "Fairy", d: "Rave", e: "Y2k" }
    },
    // Group 5 - Question 10
    {
      question: "10. For your go-to outfit, which vibe fits you best?",
      answers: {
        a: "A raw, grunge-inspired look",
        b: "Clean and minimalist styling",
        c: "Flirty touches with coquette charm",
        d: "Smart, preppy details",
        e: "Functional gear for any adventure"
      },
      points: { a: "Grunge", b: "Minimalist", c: "Coquette", d: "Preppy", e: "Gorpcore" }
    },
    // Group 1 - Question 11
    {
      question: "11. In your urban adventures, what defines your look?",
      answers: {
        a: "Streetwear that's bold and direct",
        b: "Sportswear that balances function and style",
        c: "Avant-garde designs that challenge norms",
        d: "A punk edge with attitude",
        e: "Glam outfits that dazzle"
      },
      points: { a: "Streetwear", b: "Sportswear", c: "Avant-garde", d: "Punk", e: "Glam" }
    },
    // Group 2 - Question 12
    {
      question: "12. When comfort meets style, which look do you prefer?",
      answers: {
        a: "Loungewear that feels like a warm hug",
        b: "Regency-inspired outfits with a modern twist",
        c: "Goth styles that evoke mystery",
        d: "Casual pieces that are effortlessly chic",
        e: "Retro looks that bring back classics"
      },
      points: { a: "Loungewear", b: "Regency", c: "Goth", d: "Casual", e: "Retro" }
    },
    // Group 3 - Question 13
    {
      question: "13. How do you incorporate creativity into your attire?",
      answers: {
        a: "Mixing boho patterns and textures",
        b: "Channeling western ruggedness",
        c: "Sporting indie pieces with character",
        d: "Choosing utilitarian designs",
        e: "Experimenting with futuristic details"
      },
      points: { a: "Boho", b: "Western", c: "Indie", d: "Utility", e: "Futuristic" }
    },
    // Group 4 - Question 14
    {
      question: "14. When seeking a touch of magic in your look, what do you choose?",
      answers: {
        a: "Ethereal cottagecore florals",
        b: "Skatter elements that add urban edge",
        c: "Fairy-like accessories and prints",
        d: "Rave-inspired neon accents",
        e: "Bold Y2K inspired designs"
      },
      points: { a: "Cottagecore", b: "Skatter", c: "Fairy", d: "Rave", e: "Y2k" }
    },
    // Group 5 - Question 15
    {
      question: "15. When curating your personal style, which element stands out?",
      answers: {
        a: "An edgy, grunge aesthetic",
        b: "A refined minimalist approach",
        c: "Playful, coquette details",
        d: "A polished preppy look",
        e: "Robust, gorpcore functionality"
      },
      points: { a: "Grunge", b: "Minimalist", c: "Coquette", d: "Preppy", e: "Gorpcore" }
    },
    // Group 1 - Question 16
    {
      question: "16. When exploring downtown, how do you prefer to dress?",
      answers: {
        a: "With street-inspired confidence",
        b: "In sporty, dynamic gear",
        c: "Using avant-garde statement pieces",
        d: "With a rebellious punk edge",
        e: "Dressed in glamorous details"
      },
      points: { a: "Streetwear", b: "Sportswear", c: "Avant-garde", d: "Punk", e: "Glam" }
    },
    // Group 2 - Question 17
    {
      question: "17. How do you combine comfort with sophistication?",
      answers: {
        a: "By choosing luxe loungewear",
        b: "Mixing historical regency influences",
        c: "Incorporating dark goth elements",
        d: "Opting for laid-back casuals",
        e: "Pairing retro pieces with modern twists"
      },
      points: { a: "Loungewear", b: "Regency", c: "Goth", d: "Casual", e: "Retro" }
    },
    // Group 3 - Question 18
    {
      question: "18. What style best reflects your free-spirited nature?",
      answers: {
        a: "Boho chic with artistic flair",
        b: "Western-inspired rugged charm",
        c: "Unique indie finds that stand out",
        d: "Functional utility that works for you",
        e: "Futuristic accents that break the mold"
      },
      points: { a: "Boho", b: "Western", c: "Indie", d: "Utility", e: "Futuristic" }
    },
    // Group 4 - Question 19
    {
      question: "19. How do you blend nostalgia with modern flair in your fashion?",
      answers: {
        a: "Through soft cottagecore aesthetics",
        b: "With edgy skatter street elements",
        c: "By embracing delicate fairy details",
        d: "Via vibrant, energetic rave looks",
        e: "Using playful Y2K references"
      },
      points: { a: "Cottagecore", b: "Skatter", c: "Fairy", d: "Rave", e: "Y2k" }
    },
    // Group 5 - Question 20
    {
      question: "20. How do you balance sophistication with edge in your wardrobe?",
      answers: {
        a: "With raw grunge accents",
        b: "Using sleek minimalist designs",
        c: "Incorporating flirty coquette details",
        d: "Sporting smart, preppy styles",
        e: "Choosing functional gorpcore gear"
      },
      points: { a: "Grunge", b: "Minimalist", c: "Coquette", d: "Preppy", e: "Gorpcore" }
    }
  ];
    
  // Function to build the quiz dynamically
  function buildQuiz() {
    const quizContainer = document.getElementById("quiz");
    let output = "";
    
    quizData.forEach((currentQuestion, index) => {
      let answersHTML = "";
      for (let letter in currentQuestion.answers) {
        answersHTML += `
          <label>
            <input type="radio" name="question${index}" value="${letter}">
            ${currentQuestion.answers[letter]}
          </label>
        `;
      }
      output += `
        <div class="question">
          <p>${currentQuestion.question}</p>
          ${answersHTML}
        </div>
      `;
    });
    
    quizContainer.innerHTML = output;
  }
    
  // Function to calculate results and determine the ideal fashion style
  function calculateResults() {
    // Initialize score counts for all 25 styles
    const fashionScores = {
      Streetwear: 0,
      Sportswear: 0,
      "Avant-garde": 0,
      Punk: 0,
      Glam: 0,
      Loungewear: 0,
      Regency: 0,
      Goth: 0,
      Casual: 0,
      Retro: 0,
      Boho: 0,
      Western: 0,
      Indie: 0,
      Utility: 0,
      Futuristic: 0,
      Cottagecore: 0,
      Skatter: 0,
      Fairy: 0,
      Rave: 0,
      Y2k: 0,
      Grunge: 0,
      Minimalist: 0,
      Coquette: 0,
      Preppy: 0,
      Gorpcore: 0
    };
    
    // Loop through each question and add a point for the selected style
    quizData.forEach((question, index) => {
      const selector = `input[name="question${index}"]:checked`;
      const answerElem = document.querySelector(selector);
      if (answerElem) {
        const chosenStyle = question.points[answerElem.value];
        fashionScores[chosenStyle]++;
      }
    });
    
    // Determine which style has the highest score
    let recommendedStyle = "";
    let maxScore = 0;
    for (let style in fashionScores) {
      if (fashionScores[style] > maxScore) {
        maxScore = fashionScores[style];
        recommendedStyle = style;
      }
    }
    
    displayResults(recommendedStyle);
  }
    
  // Function to display the recommended fashion style along with an image
  function displayResults(style) {
    // Map each fashion style to an image URL (update these paths as needed)
    const imageMapping = {
      Streetwear: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbucklemybelt.com%2Fblogs%2Fnews%2Fultimate-guide-for-men-merging-streetwear-with-vintage-skateboard-and-skatewear-trends-in-2024&psig=AOvVaw08H8e6y-mCzFrUvUA_0q-x&ust=1741535845121000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDe7t_s-osDFQAAAAAdAAAAABAE",
      Sportswear: "https://www.google.com/imgres?q=sportswear&imgurl=http%3A%2F%2Fmedia.rapha.cc%2Fimage%2Fupload%2Ff_auto%2Fq_auto%3Abest%2Fv1714401272%2Fgraphics%2Fh124_studio_PERFORMANC-SPORTSWEAR_on-model_100.jpg&imgrefurl=https%3A%2F%2Fcontent.rapha.cc%2Fgb%2Fen%2Fcollections%2Flifestyle&docid=S6_Gvuk9omDHTM&tbnid=5cwXXmyZ8L9vtM&vet=12ahUKEwj0kY-K7fqLAxVMRUEAHRAsPTgQM3oECGUQAA..i&w=3200&h=1800&hcb=2&ved=2ahUKEwj0kY-K7fqLAxVMRUEAHRAsPTgQM3oECGUQAA",
      "Avant-garde": "https://www.google.com/imgres?q=avante%20garde%20&imgurl=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2Fv2%2FD5612AQGILs_Mtmu09w%2Farticle-cover_image-shrink_600_2000%2Farticle-cover_image-shrink_600_2000%2F0%2F1726505980894%3Fe%3D2147483647%26v%3Dbeta%26t%3DiAsWwVhwZyC2IfySu1Ag7f6YcKNu-vBPdaEFyUs4NHc&imgrefurl=https%3A%2F%2Fwww.linkedin.com%2Fpulse%2Favant-garde-fashion-ahamed-sadab-zj7ec&docid=bgx85RX0f9V5yM&tbnid=rbsZfH0rFTrd1M&vet=12ahUKEwjTwuaa7fqLAxUQWEEAHRDyAoMQM3oECEgQAA..i&w=696&h=391&hcb=2&ved=2ahUKEwjTwuaa7fqLAxUQWEEAHRDyAoMQM3oECEgQAA",
      Punk: "https://www.google.com/imgres?q=punk&imgurl=https%3A%2F%2Fwww.walesartsreview.org%2Fwp-content%2Fuploads%2F2020%2F09%2F61677.jpg&imgrefurl=https%3A%2F%2Fwww.walesartsreview.org%2Fwhat-does-it-mean-to-be-a-punk-in-2020%2F&docid=JJqeQTlxl9QVfM&tbnid=cNqeXJM9762TFM&vet=12ahUKEwi6zZCn7fqLAxXwSUEAHf3VCB4QM3oECGAQAA..i&w=700&h=648&hcb=2&ved=2ahUKEwi6zZCn7fqLAxXwSUEAHf3VCB4QM3oECGAQAA",
      Glam: "https://www.google.com/imgres?q=glam%20fashion&imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0256%2F9787%2F8082%2Ft%2F5%2Fassets%2F00038tomfordspring2022rtwcreditfilippofiorgorunway-1654492196350.png%3Fv%3D1654492229&imgrefurl=https%3A%2F%2Fwww.mystylebox.ca%2Fpages%2Fglamorous-fashion-style-explained&docid=yZ0999t2EXQ_aM&tbnid=ZhNqhnlF0xSnxM&vet=12ahUKEwjb3rfC7fqLAxWVXEEAHfQ1MisQM3oECGAQAA..i&w=2240&h=3360&hcb=2&ved=2ahUKEwjb3rfC7fqLAxWVXEEAHfQ1MisQM3oECGAQAA",
      Loungewear: "https://www.google.com/imgres?q=loungewear&imgurl=https%3A%2F%2Fmedia.cntraveller.com%2Fphotos%2F6634e3996af59cec00fd933a%2F1%3A1%2Fw_1968%2Ch_1968%2Cc_limit%2FWomen%2520Loungewear%2520Sets-2023_00-Lede.jpg&imgrefurl=https%3A%2F%2Fwww.cntraveller.com%2Farticle%2Fbest-womens-loungewear-sets&docid=5yUB_iQoq7xoTM&tbnid=Nppt8eIzL1uXAM&vet=12ahUKEwiAhb_R7fqLAxWZYEEAHYitDQsQM3oECBkQAA..i&w=1968&h=1968&hcb=2&ved=2ahUKEwiAhb_R7fqLAxWZYEEAHYitDQsQM3oECBkQAA",
      Regency: "https://www.google.com/imgres?q=regency&imgurl=https%3A%2F%2Fbeatriceknight.com%2Fwp-content%2Fuploads%2F2020%2F03%2FRegency-Modistes-Compendium-Page-1000.jpg&imgrefurl=https%3A%2F%2Fbeatriceknight.com%2Flist-of-dressmakers-in-regency-london%2F&docid=hcLrXY2DOp3YgM&tbnid=BoIExPfbnp5qAM&vet=12ahUKEwiHwK_a7fqLAxWoT0EAHdnAG-sQM3oECGYQAA..i&w=1000&h=409&hcb=2&ved=2ahUKEwiHwK_a7fqLAxWoT0EAHdnAG-sQM3oECGYQAA",
      Goth: "images/goth.jpg",
      Casual: "images/casual.jpg",
      Retro: "images/retro.jpg",
      Boho: "images/boho.jpg",
      Western: "images/western.jpg",
      Indie: "images/indie.jpg",
      Utility: "images/utility.jpg",
      Futuristic: "images/futuristic.jpg",
      Cottagecore: "images/cottagecore.jpg",
      Skatter: "images/skatter.jpg",
      Fairy: "images/fairy.jpg",
      Rave: "images/rave.jpg",
      Y2k: "images/y2k.jpg",
      Grunge: "images/grunge.jpg",
      Minimalist: "images/minimalist.jpg",
      Coquette: "images/coquette.jpg",
      Preppy: "images/preppy.jpg",
      Gorpcore: "images/gorpcore.jpg"
    };
    
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = `
      <p>Your ideal fashion style is: <strong>${style}</strong></p>
      <img src="${imageMapping[style] || ''}" alt="${style}" class="result-img">
    `;
  }
    
  document.getElementById("submit").addEventListener("click", calculateResults);
    
  // Initialize the quiz on page load
  buildQuiz();
  