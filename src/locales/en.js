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
      id: "national-gallery",
      name: "National Gallery",
      tags: ["iOS App", "Coursera"],
      image: "/images/sample-img.png",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus arcu, eleifend sed malesuada in, auctor nec lectus. Aliquam varius sodales elit id hendrerit. Duis quis enim in quam tempor venenatis.",
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
      userStory: [
        {
          user: "As an International student interested in art",
          action: "I want to change speed and display text of an audio guide",
          benefit: "so that I can fully enjoy the contents of the museum.",
        },
      ],
      problemStatement: [
        {
          user: "Gabriel is a foreigner student",
          need: "who needs to completely understand of the content of the audio guide if they select non-native language",
          insight:
            "because they can pay same amount of money and receive equivalent service whether their native language or not",
        },
      ],
      goalStatement: [
        {
          what: "Our audio guide app will let users use an audio playback function that makes it easy for anyone to understand the content",
          who: "which will affect visitor who use the audio app in languages other than their native language",
          why: "by giving them to ability to enjoy same",
          mesure:
            "We will measure effectiveness by tracking uses the function in app.",
        },
      ],
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
      tags: ["iOS App"],
      image: "/images/sample-img.png",
      intro: "text",
    },
    {
      id: "hosync",
      name: "Hōsync",
      tags: ["iOS App", "Coursera"],
      image: "/images/sample-img.png",
      intro: "text",
    },
    {
      id: "re-thinkuma",
      name: "Re:ThinKuma",
      tags: ["iOS App"],
      image: "/images/sample-img.png",
      intro: "text",
    },
  ],
};
