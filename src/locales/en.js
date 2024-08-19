export default {
  home: {
    title: "Crafting\nMeaningful\nExperiences",
    description: "Deep Insights and Empathy-Led design \nwith a Touch of Joy",
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
      heroClass:
        "md:translate-y-[-50%] md:left-[min(120px,9.375vw)] lg:left-[min(200px,15.625vw)] md:top-[50%] md:w-[33vw] lg:w-[25vw]",
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
          content: "Figma, FigJam, Google Slides, Google Sheets, Google Docs",
        },
      ],
      link: [
        {
          name: "High-Fidelity prototype",
          url: "https://www.figma.com/proto/BoqfATRjhVyCEjQY8qVVSM/H%C5%8Dsync?page-id=135%3A393&node-id=138-1076&viewport=1442%2C1154%2C0.5&t=ifOroanJ9mMQqXCI-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=138%3A1076",
        },
      ],
      research:
        "We interviewed general people who are not directly involved with the law in their work but are interested in it. The interviews were conducted to understand the following points: ・To what extent general people have come into contact with the law ・How to create a service that general people would use ・How this app could potentially benefit the general public The main user group identified through the interviews were general people who do not professionally deal with the law in their work but are interested in laws related to their jobs or lives. Although they have some interest and may have looked into the law after coming across it on social media, they often found it difficult to understand, or even if they did understand, they only researched it at the moment and did not follow up on the developments afterward.",
      painPointsContent:
        "We summarized the problems identified through the interviews into the following three points.",

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
      persona: {
        content:
          "Through conducting interviews and deriving insights, we created two personas.",
        personas: [
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
      },
      userJourney: {
        content: "",
        map: [
          {
            name: "Takuya Yoshida",
            table: [
              {
                action:
                  "Considers gathering information before building a house",
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
      },
      competitor: [
        {
          header: "Competitor Analysis",
          content:
            "Since there were few services providing legal information to the general public, we focused our research on how news sites present information to the public.",
          strengths: [
            "Users can register as members, but the service is also usable without registration",
            "Clear and consistent navigation",
            "Articles with thorough explanations",
            "Easy-to-understand categorization, allowing users to quickly find links to relevant laws",
          ],
          weaknesses: [
            "Only links to laws are provided, making it difficult for those without specialized knowledge to fully understand",
            "Available only in Japanese",
          ],
        },
      ],

      researchResult:
        "The navigation on news sites was clear and seemed applicable to Hōsync as well. However, legal sites are often difficult to understand without prior knowledge, highlighting the need for content that is easy to understand even for those without legal expertise.",
      definingTheProblemsContent: "",

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
      userFlow: [
        {
          image: "/images/hosync/user-flow.png",
          alt: "user flow",
        },
      ],

      prototype:
        "We will move on to creating a prototype to achieve Gabriel's goals.",
      wireframes: {
        content: "",

        images: [
          {
            image: "/images/hosync/wireframes.png",
            alt: "Paper wireframes",
          },
        ],
      },
      digitalWireframes: {
        content: "",
        images: [
          {
            image: "/images/hosync/degital-wireframes.png",
            alt: "Digital wireframes",
          },
        ],
      },
      lowFidelityPrototype: {
        content: "",
        images: [
          {
            image: "/images/hosync/low-fidelity-prototype.png",
            alt: "Low-fidelity prototype",
            link: "https://www.figma.com/proto/BoqfATRjhVyCEjQY8qVVSM/H%C5%8Dsync?page-id=18%3A282&node-id=51-312&viewport=406%2C358%2C0.5&t=df4RKqT07OzJFdtS-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=51%3A312",
          },
        ],
      },
      usabilityTest: {
        usabilityStudy: [
          {
            content:
              "We conducted a usability test to understand if the design allows users to easily find and obtain information about laws relevant to them.",
          },
        ],
        prioritizedInsights: {
          content:
            "We implemented changes based on the insights gained from the test results.",
          lists: [
            {
              header:
                "The onboarding process was unclear, and it took time to proceed.",
              content: "",
              quotes:
                "“It was a bit confusing, so it was a little difficult. I wasn't sure if the first six buttons were for following, but then I realized they were after transitioning to the next screen.”",
              modify:
                "We added explanations and redesigned the buttons to make them more easily recognizable.",
              image: "/images/hosync/insight01.png",
            },
          ],
        },
      },

      design:
        "Based on the results of the usability test, we created the mockups.",
      mockups: [
        {
          image: "/images/hosync/mockups.png",
          alt: "mockups",
        },
      ],
      highFidelityPrototype: [
        {
          image: "/images/hosync/high-fidelity-prototype.png",
          alt: "High-fidelity prototype",
          link: "https://www.figma.com/proto/BoqfATRjhVyCEjQY8qVVSM/H%C5%8Dsync?page-id=135%3A393&node-id=138-1076&viewport=1442%2C1154%2C0.5&t=ifOroanJ9mMQqXCI-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=138%3A1076",
        },
      ],
      nextStep:
        "In the second assignment for Coursera, I completed the app design through the UX design process. This time, I was able to proceed with a better understanding of the meaning behind each step in the process.\n\nThe next steps are as follows:\n・Conduct testing of the high-fidelity prototype\n・Plan for the concrete implementation",
    },

    {
      id: "national-gallery",
      name: "National Gallery",
      year: "2022",
      tags: ["iOS App", "Coursera"],
      image: "/images/national-gallery/thumbnail.jpg",
      intro:
        "I created an easy-to-understand audio guide app for museum visitors, even if it's not in their native language, as part of a Coursera assignment.",
      hero: "/images/national-gallery/hero.jpg",
      heroClass:
        " md:translate-x-[-50%] md:translate-y-[-50%] md:left-[50%] md:top-[48%] md:text-BG-tertiary",
      heroClassWrap: "md:w-[min(35vw,400px)]",
      overview: [
        {
          header: "Problem",
          content:
            "Many audio guides focus heavily on listening. If a native language is not supported, it can be difficult to understand. There is a need for an app with a visually clear design that aids non-native speakers and is more user-friendly.",
        },
        {
          header: "Goal",
          content:
            "Provide a visually clear design that can be reviewed even after a visit, with features that support not only non-native speakers but also tourists with limited time.",
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
          content: "2022",
        },
        {
          header: "Software Used",
          content: "Figma, Google Slides, Google Sheets, Google Docs",
        },
      ],
      link: [
        {
          name: "High-Fidelity Prototype",
          url: "https://www.figma.com/proto/uCk4y0U1mv4M7lEsB0s7KW/Audio-guide-app?page-id=788%3A1712&node-id=788-3855&viewport=673%2C435%2C0.25&t=oimzBNZ08ito30BV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=788%3A3855",
        },
      ],
      research:
        "I conducted fictional interviews and created empathy maps to understand the users I’m designing for and their needs. A primary use group identified through research was foreigner interested in art who don’t fully enjoy audio-tour to have a language barrier. This user group confirmed initial assumptions about audio-tour app customers,  but research also revealed that language was not the only factor limiting users from enjoying the audio-tour app. Other user problems included crowded or time that make it difficult for them to finish seeing the museum",
      painPointsContent:
        "We summarized the problems identified through the interviews into the following four points.",

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
      persona: {
        content: "We created personas based on the interviews.",
        personas: [
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
      },
      userJourney: {
        content:
          "We created a user journey map to illustrate the experience of Gabriel, the most important persona.",
        map: [
          {
            name: "Gabriel",
            table: [
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
                opportunities:
                  "Offer a way to book ticket and audio-tour advance",
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
                opportunities:
                  "Provide option to changing speed and display text",
              },
              {
                action: "Leave the museum",
                task: "A. finish the audio-tour and exhibition\nB. leave the museum\nC. search information by native language",
                feeling:
                  "Satisfied with the content of the exhibition\nDisappointed not to  understand all content",
                opportunities: "Provide text data for audio-tour",
              },
            ],
          },
        ],
      },

      competitor: [
        {
          header: "Competitor Analysis",
          content:
            "To understand the industry, we conducted research on how competitors offering audio guide apps provide their experiences.",
          strengths: [
            "Uses maps and shows the current location",
            "Reliable explanations",
            "Can be used even outside the museum",
            "Bookmark feature",
            "Ticket reservation",
          ],
          weaknesses: [
            "The map is slow to load",
            "Limited supported languages",
            "Does not support screen readers",
            "Cannot copy text even if you want to look up unfamiliar words",
          ],
        },
      ],
      researchResult:
        "From the above research, we became convinced that providing support when a language is not supported can further enhance the value of the app.",
      definingTheProblemsContent:
        "Based on the research so far, we identified problems to deepen our understanding of Gabriel.",
      definingTheProblems: [
        {
          name: "Gabriel",
          userStory:
            "As an International student interested in art I want to change speed and display text of an audio guideso that I can fully enjoy the contents of the museum.",

          problemStatement:
            "Gabriel is a foreigner student who needs to completely understand of the content of the audio guide if they select non-native language because they can pay same amount of money and receive equivalent service whether their native language or not",
          goalStatement:
            "Our audio guide app will let users use an audio playback function that makes it easy for anyone to understand the content which will affect visitor who use the audio app in languages other than their native language by giving them to ability to enjoy same We will measure effectiveness by tracking uses the function in app.",
        },
      ],

      storyboard: {
        content:
          "We created a storyboard envisioning the scene where Gabriel uses the app.",
        bigPicture: {
          image: "/images/national-gallery/storyboard_bigpicture.jpg",
          alt: "Big Picture",
        },
        closeUp: {
          image: "/images/national-gallery/storyboard_closeup.jpg",
          alt: "Close Up",
        },
      },
      userFlow: [
        {
          image: "/images/national-gallery/user-flow.png",
          alt: "user flow",
        },
      ],
      prototype:
        "With a deeper understanding of Gabriel, we moved on to creating a prototype to achieve the goals.",

      wireframes: {
        content: "",
        images: [
          {
            image: "/images/national-gallery/low-fidelity-prototype.png",
            alt: "Paper wireframes",
          },
        ],
      },
      digitalWireframes: {
        content:
          "Based on the paper wireframes, we further refined and created digital wireframes in Figma.",
        images: [
          {
            image: "/images/national-gallery/low-fidelity-prototype.png",
            alt: "Digital wireframes",
          },
        ],
      },
      lowFidelityPrototype: {
        content:
          "We created a prototype based on the digital wireframes and added any missing screens.",
        images: [
          {
            image: "/images/national-gallery/low-fidelity-prototype.png",
            alt: "Low-fidelity prototype",
            link: "https://www.figma.com/proto/uCk4y0U1mv4M7lEsB0s7KW/Audio-guide-app?page-id=22%3A2&node-id=22-3&viewport=963%2C981%2C0.5&scaling=scale-down&starting-point-node-id=22%3A3",
          },
        ],
      },
      usabilityStudy: {
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
      },
      prioritizedInsights: {
        content:
          "We implemented three high-priority changes based on the insights gained from the test results.",
        lists: [
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
      },
      design: "Based on the results of the usability test, we created mockups.",

      mockups: [
        {
          image: "/images/national-gallery/mockups.png",
          alt: "mockups",
        },
      ],
      highFidelityPrototype: [
        {
          image: "/images/national-gallery/high-fidelity-prototype.png",
          alt: "High-fidelity prototype",
          link: "https://www.figma.com/proto/uCk4y0U1mv4M7lEsB0s7KW/Audio-guide-app?page-id=788%3A1712&node-id=788-3855&viewport=673%2C435%2C0.25&t=oimzBNZ08ito30BV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=788%3A3855",
        },
      ],
      website: {
        content: "I designed the website for this app.",
        images: [
          {
            image: "/images/national-gallery/website.png",
            alt: "Website Design",
            link: "https://www.figma.com/proto/uCk4y0U1mv4M7lEsB0s7KW/Audio-guide-app?page-id=1117%3A3883&node-id=1117-3884&viewport=1272%2C703%2C0.15&t=0arOz29bjkKvj0ON-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1117%3A3884",
          },
        ],
      },
      nextStep:
        "This was my first time completing an app design through the UX design process in this assignment. As I progressed through the process, new ideas continuously emerged. I felt that by repeatedly testing, we gained further insights, making the app more user-friendly. However, at this point, it is still just a validation in Figma, so further testing will be necessary before completion.\n\nThe next steps are as follows: First, we need to implement the actual app, add missing features, and verify the usability of the existing features.\n\n・Implement and test audio playback\n・Implement and test the map\n・Add a favorites feature\n・Add a dictionary lookup feature for the audio guide text",
    },

    {
      id: "oshitimer",
      name: "Oshi Timer",
      year: "2020",
      tags: ["iOS App", "Available"],
      image: "/images/oshitimer/thumbnail.jpg",
      intro:
        "A timer app with 24,000 downloads. It allows you to set your favorite image and visually measure time in a fun and easy way. We conducted a hackathon with an engineer and released the app.",
      hero: "/images/oshitimer/hero.jpg",
      heroClass:
        "md:translate-y-[-50%] md:translate-x-[-50%] md:left-[75%] md:top-[50%] md:w-[35vw] lg:w-[29vw] md:text-BG-secondary",
      overview: [
        {
          header: "Problem",
          content:
            "There are many timer apps available, but it's hard to find one that suits you.",
        },
        {
          header: "Goal",
          content:
            "Provide an app that is stylish and motivating, even when placed on a desk or used during workouts.",
        },
        {
          header: "My Role",
          content:
            "This was a personal project created in collaboration with an engineer as the app designer.",
        },
        {
          header: "Responsibilities",
          content:
            "・Defining the problem\n・iOS design\n・Icon design\n・Website design\n・Motion design\n・Direction",
        },
        {
          header: "Year of Production",
          content: "2020",
        },
        {
          header: "Software Used",
          content: "Figma, Adobe AfterEffects, Xcode, Illustrator",
        },
      ],
      link: [
        {
          name: "iOS App Store",
          url: "https://apps.apple.com/jp/app/%E6%8E%A8%E3%81%97%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC/id1503076204",
        },
        {
          name: "Web site",
          url: "https://oshitimer.pola.club/",
        },
      ],
      research:
        "I used a timer app while working out, but I felt that it was not very user-friendly and did not help with motivation. So, we decided to create our ideal timer app. First, we identified what was lacking in the current apps and what the ideal app would look like.",
      competitor: [
        {
          header: "Competitor Analysis",
          content: "",
          weaknesses: [
            "Unattractive appearance",
            "Not compatible with iPad",
            "Difficult to understand progress",
            "No dark mode",
            "Not supported in portrait mode",
          ],
          ideal: [
            "Want to track how long I've been studying or working out",
            "Stylish enough to leave on a desk",
            "Motivating app",
            "Easy to use and understand",
            "Flexible setup for a set (e.g., 30sec x 1 and 15sec x 1)",
            "No ads",
          ],
        },
      ],
      prototype:
        "Once the requirements were gathered, we started brainstorming ideas.",
      sketch: [
        {
          image: "/images/oshitimer/sketch.png",
          alt: "Oshi Timer initial sketch",
          caption:
            "A rough sketch during the idea generation stage for Oshi Timer.",
        },
      ],
      animation: [
        {
          content:
            "I created an animation image of the most important timer function in After Effects and shared it with the engineer to convey the implementation idea.",
          image: "/images/oshitimer/animation.gif",
          alt: "Oshi Timer animation image",
        },
      ],
      design:
        "After finalizing the feature requirements and solidifying the image with animations, here is the latest mockup. It has been well-received since its release, and we have also added features. The additions include:\n・Added a paid plan\n・Expanded functionality to allow multiple images to be registered\n・Added color variations",
      mockups: [
        {
          image: "/images/oshitimer/mockups.png",
          alt: "Mockups",
          caption:
            "Default color mockups. You can switch between light mode and dark mode.",
        },
        {
          image: "/images/oshitimer/mockups2.png",
          alt: "Mockups color variations",
          caption:
            "Color variation mockups. In addition to the initial green color, 10 more colors were added.",
        },
      ],
      photo: [
        {
          image: "/images/oshitimer/photo.jpg",
          alt: "Production scene",
          caption:
            "Production scene. Hackathon held at home in Ireland at the start of the new year.",
        },
      ],
      logo: [
        {
          image: "/images/oshitimer/logo.png",
          alt: "Rough sketch of the app icon",
          caption: "Rough sketch of the app icon",
        },
      ],
      nextStep:
        "The timer app we created was filled with our ideals, and we were pleasantly surprised by how many people used it. We believe the reason it was chosen among the many timer apps was the unique ideas and direction. Up until now, we have been creating what we wanted, but in the future, we aim to clearly define the user and conduct user tests to develop an app that is more user-friendly and convenient. The upcoming features we plan to add are as follows:\n・Ability to set multiple timers\n・SNS share button\n・Calendar function",
    },
  ],
};
