export default {
  home: {
    title: "こんにちは、私はウェブデザイナーのユカです。",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  about: {
    content:
      "ネルソン君がふり我別段尊重が繰りん場所その国家私かお話しにというお馳走たですですんば、その昨日はあなたか心持国家がして、ネルソンさんののの思いの私で同時にお会得として私家屋にご希望に聞きようにせっかくご真似がろるのに、いよいよ何とも始末で存じあっからみろありのを廻るで。",
    content2:
      "ネルソン君がふり我別段尊重が繰りん場所その国家私かお話しにというお馳走たですですんば、その昨日はあなたか心持国家がして、ネルソンさんののの思いの私で同時にお会得として私家屋にご希望に聞きようにせっかくご真似がろるのに、いよいよ何とも始末で存じあっからみろありのを廻るで。",
    content3:
      "ネルソン君がふり我別段尊重が繰りん場所その国家私かお話しにというお馳走たですですんば、その昨日はあなたか心持国家がして、ネルソンさんののの思いの私で同時にお会得として私家屋にご希望に聞きようにせっかくご真似がろるのに、いよいよ何とも始末で存じあっからみろありのを廻るで。",
    content4:
      "ネルソン君がふり我別段尊重が繰りん場所その国家私かお話しにというお馳走たですですんば、その昨日はあなたか心持国家がして、ネルソンさんののの思いの私で同時にお会得として私家屋にご希望に聞きようにせっかくご真似がろるのに、いよいよ何とも始末で存じあっからみろありのを廻るで。",
  },
  caseStudies: [
    {
      id: "national-gallery",
      name: "ナショナルギャラリー",
      tags: ["iOSアプリ", "Coursera"],
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
            "ユーザー・リサーチ、問題を定義し、アイデア発想のフェーズに情報を提供するためのインサイトを提供 ペルソナ、ユーザージャーニー、エンパシーマップ、ユーザフローの定義、ビジュアルデザイン",
        },
        {
          header: "Role",
          content: "リサーチ、UX/UI デザイン",
        },
      ],
      research:
        "私は架空のインタビューを行い、共感マップを作成して、私がデザインしようとしているユーザーとそのニーズを理解しました。リサーチを通じて特定された主な利用者グループは、言葉の壁があるためにオーディオツアーを十分に楽しめない、芸術に興味のある外国人だった。        このユーザー・グループは、オーディオ・ツアー・アプリの顧客に関する当初の想定を裏付けたが、リサーチによって、ユーザーがオーディオ・ツアー・アプリを楽しむことを制限する要因は言語だけではないことも明らかになった。他のユーザーの問題には、混雑していたり、時間が迫っていたりして、美術館を見終えるのが難しいというものがあった。",

      painPoints: [
        {
          header: "言語",
          content: "外国人には言葉の壁がある。",
        },
        {
          header: "アクセシビリティ",
          content: "オーディオツアーアプリは音声のみで、支援オプションはない。",
        },
        {
          header: "混雑",
          content: "オーディオツアーアプリは混雑時のサポートを提供しない。",
        },
        {
          header: "時間",
          content: "ビジターには移動などで時間の制約がある。",
        },
      ],
      userJourney: [
        {
          action: "美術館に到着",
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
      nextStep:
        "同じく事実に内談人は同時にその講演だろございばかりに立ち竦んからいないがは矛盾いたないて、ますますにも射しましありうまし。人を云っでしのはどうか今日に無論あっなけれだろ。もしネルソン君がふり我別段尊重が繰りん場所その国家私かお話しにというお馳走たですですんば、その昨日はあなたか心持国家がして、ネルソンさんののの思いの私で同時にお会得として私家屋にご希望に聞きようにせっかくご真似が逃れだろるのに、いよいよ何とも始末で存じあっからみろありのを廻るでで。しかしだからお自分に蒙り事は多少横着といなが、その女では並べたてとかいう三つがあるばいるたない。",
    },
    {
      id: "oshitimer",
      name: "推しタイマー",
      tags: ["iOSアプリ"],
      image: "/images/sample-img.png",
      intro: "text",
    },
    {
      id: "hosync",
      name: "ホシンク",
      tags: ["iOSアプリ", "Coursera"],
      image: "/images/sample-img.png",
      intro: "text",
    },
    {
      id: "re-thinkuma",
      name: "Re:ThinKuma",
      tags: ["iOSアプリ"],
      image: "/images/sample-img.png",
      intro: "text",
    },
  ],
};
