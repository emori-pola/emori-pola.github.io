export default {
  home: {
    title: "Hi, I'm Yuka, a web designer.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  about: {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus arcu, eleifend sed malesuada in, auctor nec lectus. Aliquam varius sodales elit id hendrerit. Duis quis enim in quam tempor venenatis.",
    content2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus arcu, eleifend sed malesuada in, auctor nec lectus. Aliquam varius sodales elit id hendrerit. Duis quis enim in quam tempor venenatis.",
    content3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus arcu, eleifend sed malesuada in, auctor nec lectus. Aliquam varius sodales elit id hendrerit. Duis quis enim in quam tempor venenatis.",
    content4:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus arcu, eleifend sed malesuada in, auctor nec lectus. Aliquam varius sodales elit id hendrerit. Duis quis enim in quam tempor venenatis.",
  },
  caseStudies: [
    {
      id: "hosync",
      name: "Hōsync",
      year: "2023",
      tags: ["iOS App", "Coursera"],
      image: "/images/hosync/thumbnail.jpg",
      intro:
        "A useful legal information app for everyday life for those who are not familiar with the law",
      hero: "/images/hosync/hero.jpg",
      heroClass: "translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]",
      overview: [
        {
          header: "Problem",
          content:
            "Although the law is relevant to the general public, it is perceived as difficult and something only experts should understand.",
        },
        {
          header: "Goal",
          content:
            "To provide an app that makes the law feel accessible and understandable to the general public.",
        },
        {
          header: "My Role",
          content:
            "This was an individual project carried out under the processes of design thinking (empathize, define, ideate, prototype, test).",
        },
        {
          header: "Responsibilities",
          content:
            "・Conducting user research\n・Defining problems and deriving insights\n・Creating personas, user journeys, empathy maps, and user flows\n・Visual design",
        },
        {
          header: "Year of Production",
          content: "2023",
        },
        {
          header: "Software",
          content: "Figma",
        },
      ],

      research:
        "We interviewed general people who are not directly involved with the law in their work but are interested in it. The interviews were conducted to understand the following points:\n\n・To what extent general people have come into contact with the law\n・How to create a service that general people would use\n・How this app could potentially benefit the general public",
      painPoints: [
        {
          header: "Clarity",
          content: "There is a language barrier for foreigners.",
        },
        {
          header: "Ease of Finding",
          content:
            "Audio guide apps only provide voice, with no support options.",
        },
        {
          header: "Convenience Features",
          content:
            "Audio guide apps do not provide support during crowded times.",
        },
      ],
      persona: [
        {
          name: "Takuya Yoshida",
          image: "/images/hosync/persona-yoshida.png",
          alt: "Persona Image Takuya Yoshida",
          age: "38",
          education: "Bachelor's Degree",
          hometown: "Yamagata",
          family: "Wife and two children",
          occupation: "Office Worker",
          header:
            "I think I need to be more responsible so that I can continue to enjoy life with my family.",
          goals: [
            "To be aware of tax saving systems and save money",
            "To know the laws related to cars, which will be useful when driving",
            "To know the laws related to houses, which will be useful when building a house",
            "To be aware of the systems related to children and use them to improve our lives",
          ],
          frustrations: [
            "I missed out on some benefits because I was not aware of the systems related to children.",
            "I am considering buying a house, but it is troublesome to keep up with the system changes every year.",
          ],
          bio: "Takuya Yoshida is an office worker with a wife and two children. He lives in Tokyo. As his children have grown, he is considering buying a new house in Saitama. He also wants to own a car so that he can go on trips with his family. Since getting married, he has been thinking more about asset formation, something he wasn't very knowledgeable about before.",
        },
        {
          name: "Natsumi Hasegawa",
          image: "/images/hosync/persona-hasegawa.png",
          alt: "Persona Image Natsumi Hasegawa",
          age: "31",
          education: "Bachelor's Degree",
          hometown: "Shiga",
          family: "Lives alone",
          occupation: "Freelance Designer",
          header:
            "As a designer, I am constantly studying. Of course, I want to expense everything I can.",
          goals: [
            "To know information about copyright and use it in my work",
            "To find and use convenient systems during tax filing",
          ],
          frustrations: [
            "If I am not aware of tax-saving systems, I could lose money.",
            "I keep an eye out for laws related to designers, but I get information from others, so it is not always reliable.",
          ],
          bio: "Natsumi Hasegawa works as a freelance designer in Tokyo. She files her taxes every year. Due to the nature of her work, she has researched copyright, but she is not an expert. She has a basic knowledge from her own research.",
        },
      ],
      userJourney: [
        {
          name: "Takuya Yoshida",
          table: [
            {
              action: "Considers gathering information before building a house",
              task: "A. Picks up his smartphone\nB. Searches on Google",
              feeling: "Anxiety and urgency due to first-time experience",
              opportunities:
                "If Hōsync has a know-how page for people building houses, they may visit Hōsync directly at this stage.",
            },
            {
              action: "Visits a site and realizes there are various laws",
              task: "A. Visits the first site that comes up\nB. Reads the content\nC. Becomes interested in the laws",
              feeling:
                "A bit of relief from understanding the big picture\nStress from finding the laws difficult",
            },
            {
              action: "Researches laws related to building a house",
              task: "A. Searches Google for laws\nB. Finds Hōsync",
              feeling: "Anxiety about whether he can understand",
            },
            {
              action: "Finds a site that compiles laws",
              task: "A. Visits the Hōsync site\nB. Finds laws related to houses from laws related to daily life",
              feeling: "Confusion due to various options",
              opportunities:
                "Need a search function that makes it easy to find laws suited to oneself",
            },
            {
              action:
                "Can view laws related to building a house comprehensively",
              task: "A. Understands the laws",
              feeling: "Relief from understanding thanks to summaries",
              opportunities:
                "Inform users that laws are updated and highlight the attractiveness of the app's notification function",
            },
          ],
        },
        {
          name: "Natsumi Hasegawa",
          table: [
            {
              action: "Learns about a copyright amendment on social media",
              task: "A. Looks at social media\nB. Learns about the copyright amendment",
              feeling: "Stress from not understanding the details",
              opportunities:
                "Posting on social media as well can help users find information faster",
            },
            {
              action: "Researches in detail",
              task: "A. Searches on Google",
              feeling: "Interest in new information",
            },
            {
              action: "Finds Hōsync",
              task: "A. Accesses Hōsync\nB. Finds the copyright page",
              feeling:
                "Anxiety about an unfamiliar site\nHappiness from quickly finding what she wants to know",
              opportunities:
                "Make it easy to find the desired information quickly",
            },
            {
              action: "Understands the amendment",
              task: "A. Views the summary of the copyright amendment\nB. Views the full text",
              feeling: "Reassured by the clarity",
              opportunities:
                "Provide not only the amendment details but also the full text of the law",
            },
            {
              action:
                "Encounters a situation where the knowledge is needed for work",
              task: "A. Encounters a situation related to the copyright amendment\nB. Remembers the content\nC. Accesses Hōsync again to confirm",
              feeling: "Panic from suddenly needing legal knowledge",
              opportunities:
                "Make it easy to re-access previously accessed information",
            },
          ],
        },
      ],

      definingTheProblems: [
        {
          name: "Takuya Yoshida",
          userStory:
            "As a parent of two children, I want to stabilize and enrich my family life. Therefore, I want to understand information that is relevant to us.",
          problemStatement:
            "Takuya Yoshida is a parent of two children. He needs to easily understand the laws related to building a house because he is about to start preparing to build one but is not an expert and lacks knowledge.",
          goalStatement:
            "Hōsync provides a function to search for laws in categories of interest. This function allows ordinary people who are not familiar with laws to understand them and use the information to improve their lives. We will measure the effectiveness by tracking the number of accesses to the general public pages in the app.",
        },
        {
          name: "Natsumi Hasegawa",
          userStory:
            "As a professional designer, I want to work responsibly with knowledge of industry information. Therefore, I want to collect information in a more efficient and reliable way.",
          problemStatement:
            "Natsumi Hasegawa is a freelance designer. She needs to be aware of changes in laws that affect her work because keeping up with these changes is crucial for her profession.",
          goalStatement:
            "Hōsync provides a function to register laws of interest. This function helps ordinary people who are not tracking laws to notice amendments related to their work. We will measure the effectiveness by tracking the usage of the notification function in the app.",
        },
      ],
      userFlow: [
        {
          image: "/images/hosync/user-flow.png",
          alt: "user flow",
        },
      ],
      storyboard: {
        content:
          "We created a storyboard imagining the scene where Takuya Yoshida uses the app.",
        bigPicture: {
          image: "/images/hosync/storyboard_bigpicture.jpg",
          alt: "Big Picture",
        },
        closeUp: {
          image: "/images/hosync/storyboard_closeup.jpg",
          alt: "Close Up",
        },
      },
      prototype:
        "We will move on to creating a prototype to achieve Gabriel's goals.",
      wireframes: [
        {
          image: "/images/hosync/wireframes.png",
          alt: "Paper wireframes",
        },
      ],
      digitalWireframes: [
        {
          image: "/images/hosync/degital-wireframes.png",
          alt: "Digital wireframes",
        },
      ],
      lowFidelityPrototype: [
        {
          image: "/images/hosync/low-fidelity-prototype.png",
          alt: "Low-fidelity prototype",
          link: "https://www.figma.com/proto/BoqfATRjhVyCEjQY8qVVSM/H%C5%8Dsync?page-id=18%3A282&node-id=51-312&viewport=406%2C358%2C0.5&t=df4RKqT07OzJFdtS-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=51%3A312",
        },
      ],
      usabilityStudy: [
        {
          content:
            "We conducted a usability test to understand if the design allows users to easily find and obtain information about laws relevant to them.",
        },
      ],
      design:
        "Based on the results of the usability test, we created the mockups.",
      mockups: [
        {
          image: "/images/hosync/mockups.png",
          alt: "mockups",
        },
      ],
    },

    {
      id: "national-gallery",
      name: "National Gallery",
      year: "2022",
      tags: ["iOS App", "Coursera"],
      image: "/images/national-gallery/thumbnail.jpg",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus arcu, eleifend sed malesuada in, auctor nec lectus. Aliquam varius sodales elit id hendrerit. Duis quis enim in quam tempor venenatis.",
      hero: "/images/national-gallery/hero.jpg",
      heroClass: "translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]",
      overview: [
        {
          header: "Problem",
          content:
            "オーディオガイドは音声を聞くことに重点を置いた物が多くあります。ネイティブの言語が対応していない場合、理解するのに苦労することがあります。視覚的にわかりやすいデザイン、ノンネイティブの補助をしながらより使いやすいアプリが必要です。",
        },
        {
          header: "Responsibilities",
          content:
            "List the responsibilities you had throughout the project - e.g., user research, wireframing, prototyping, etc. ",
        },
        {
          header: "Role",
          content:
            "Identify your role in the project - e.g., lead UX designer, UX researcher, etc. ",
        },
      ],
      research:
        "I conducted fictional interviews and created empathy maps to understand the users I’m designing for and their needs. A primary use group identified through research was foreigner interested in art who don’t fully enjoy audio-tour to have a language barrier. This user group confirmed initial assumptions about audio-tour app customers,  but research also revealed that language was not the only factor limiting users from enjoying the audio-tour app. Other user problems included crowded or time that make it difficult for them to finish seeing the museum",

      painPoints: [
        {
          header: "language",
          content: "Foreigner have a language barrier.",
        },
        {
          header: "Accessibility",
          content:
            "Audio-tour app are equipped with audio only, no assistive options",
        },
        {
          header: "Crowded",
          content: "Audio-tour app does not provide support during busy times.",
        },
        {
          header: "Time",
          content: "Visitors have time constraints due to travel, etc.",
        },
      ],
      persona: [
        {
          name: "Gabriel",
          image: "/images/national-gallery/persona-gabriel.png",
          alt: "persona image Gabriel",
          age: "21",
          education: "University student, 3th year",
          hometown: "Rio de Janeiro, Brazil",
          family: "Lives with parents",
          occupation: "Full time student",
          header:
            "If I am paying to use an audio guide,\nI want to use it to its fullest.",
          goals: [
            "to completely understand of the content of the audio guide",
            "To obtain information that would only be available at the museum",
          ],
          frustrations: [
            "It is difficult to fully understand English if it is the language of choice (content is too difficult, speed is too fast, etc.) because it does not support one's native language.",
          ],
          bio: "Gabriel is a junior in college. He is studying abroad in Europe. He is interested in art and often goes to museums. He frequently uses audio guides. Although English is not his native language and he understands it reasonably well, he chooses English when there is no native language in the audio guide, but it is difficult for him to understand it completely because the speed is too fast and there are words he does not know.",
        },
      ],
      userJourney: [
        {
          action: "Arrive the museum",
          task: "A. find a exhibition\nB. search an artist of the exhibition\nC. decide to go\nD. go to the museum",
          feeling:
            "happy to find the interesting exhibition\nWorried that language might be a barrier",
        },
        {
          action: "Buy a ticket and audio-tour app",
          task: "A. queue at the ticket office\nB. buy a ticket and audio-tour",
          feeling: "Disappointed that the line is long",
          opportunities: "Offer a way to book ticket and audio-tour advance",
        },
        {
          action: "Start touring the museum",
          task: "A. enter the museum\nB. View exhibits",
          feeling: "Excited about the museum",
        },
        {
          action: "Use the audio-tour app",
          task: "A. select English\nB. listen the audio guide\nC. listen again same section",
          feeling:
            "Overwhelmed by audio-tour speed\nIrritated by difficult understanding the audio-tour",
          opportunities: "Provide option to changing speed and display text",
        },
        {
          action: "Leave the museum",
          task: "A. finish the audio-tour and exhibition\nB. leave the museum\nC. search information by native language",
          feeling:
            "Satisfied with the content of the exhibition\nDisappointed not to  understand all content",
          opportunities: "Provide text data for audio-tour",
        },
      ],
      userFlow: [
        {
          image: "/images/national-gallery/user-flow.png",
          alt: "user flow",
        },
      ],
      userStory:
        "As an International student interested in art I want to change speed and display text of an audio guideso that I can fully enjoy the contents of the museum.",

      problemStatement:
        "Gabriel is a foreigner student who needs to completely understand of the content of the audio guide if they select non-native language because they can pay same amount of money and receive equivalent service whether their native language or not",
      goalStatement:
        "Our audio guide app will let users use an audio playback function that makes it easy for anyone to understand the content which will affect visitor who use the audio app in languages other than their native language by giving them to ability to enjoy same We will measure effectiveness by tracking uses the function in app.",
      storyboard: {
        content:
          "実際にガブリエルがアプリを使用する場面を想定してストーリーボードを書き起こしました。",
        bigPicture: {
          image: "/images/national-gallery/storyboard_bigpicture.jpg",
          alt: "Big Picture",
        },
        closeUp: {
          image: "/images/national-gallery/storyboard_closeup.jpg",
          alt: "Close Up",
        },
      },
      design:
        "私は架空のインタビューを行い、共感マップを作成して、私がデザインしようとしているユーザーとそのニーズを理解しました。リサーチを通じて特定された主な利用者グループは、言葉の壁があるためにオーディオツアーを十分に楽しめない、芸術に興味のある外国人だった。        このユーザー・グループは、オーディオ・ツアー・アプリの顧客に関する当初の想定を裏付けたが、リサーチによって、ユーザーがオーディオ・ツアー・アプリを楽しむことを制限する要因は言語だけではないことも明らかになった。        他のユーザーの問題には、混雑していたり、時間が迫っていたりして、美術館を見終えるのが難しいというものがあった。",
      wireframes: [
        {
          image: "/images/national-gallery/low-fidelity-prototype.png",
          alt: "Paper wireframes",
        },
      ],
      digitalWireframes: [
        {
          image: "/images/national-gallery/low-fidelity-prototype.png",
          alt: "Digital wireframes",
        },
      ],
      lowFidelityPrototype: [
        {
          image: "/images/national-gallery/low-fidelity-prototype.png",
          alt: "Low-fidelity prototype",
          link: "https://www.figma.com/proto/uCk4y0U1mv4M7lEsB0s7KW/Audio-guide-app?page-id=22%3A2&node-id=22-3&viewport=963%2C981%2C0.5&scaling=scale-down&starting-point-node-id=22%3A3",
        },
      ],
      usabilityStudy: [
        {
          content:
            "Users need a clearer map display with photos and descriptions.",
        },
      ],
      affinityDiagram: [
        {
          image: "/images/national-gallery/affinity-diagram.png",
          alt: "Affinity Diagram",
        },
      ],
      prioritizedInsights: [
        {
          content:
            "Based on the theme that: lack of map description made it difficult to find, an insight is: users need a clearer map display with photos and descriptions.",
          image: "",
        },
        {
          content:
            "Based on the theme that: for most users, the differences between “the artwork in detail” and “the audio guide in detail” are not clear, an insight is: users need a more straightforward structure.",
          image: "",
        },
        {
          content:
            "Based on the theme that: for not everyone, the music playback UI is familiar, an insight is: users need a UI that they can understand even if they are not familiar with music playback UI.",
          image: "",
        },
      ],
      mockups: [
        {
          image: "/images/national-gallery/mockups.png",
          alt: "mockups",
        },
      ],
      nextStep:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus arcu, eleifend sed malesuada in, auctor nec lectus. Aliquam varius sodales elit id hendrerit. Duis quis enim in quam tempor venenatis.",
    },

    {
      id: "oshitimer",
      name: "Oshi Timer",
      year: "2020",
      tags: ["iOS App"],
      image: "/images/oshitimer/thumbnail.jpg",
      intro: "text",
      hero: "/images/oshitimer/hero.jpg",
      heroClass: "translate-y-[-50%] right-0 top-[50%]",
    },
  ],
};
