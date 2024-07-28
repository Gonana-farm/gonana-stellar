export const appData: {
  team: {
    name: string;
    title: string;
    bio: React.ReactNode;
    image: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    handle?: string;
  }[];
  faq: {
    title: string;
    body: string;
    id: number;
  }[];
} = {
  team: [
    {
      bio: `Kizito Horlong is an optimistic and passionate
        software developer with over 4 years of experience
        building effective tech solutions for the web, backend
        systems, blockchain, and data science.`,
      name: "Kizito Horlong",
      title: "Blockchain Developer",
      image: "/core/kizito-image.jpg",
      twitter: "https://twitter.com/KizitoNaanma?t=Nga16puLyPfBDwa-ehNX0g&s=09",
      linkedin: "https://www.linkedin.com/in/kizito-horlong",
      handle: "kizito",
    },
    {
      bio: `Joshua Nwafor is a young, passionate developer and trainer at KusuConsult focused on building outstanding tech solutions using the most efficient and effective methods and tools possible.`,
      name: "Joshua Nwafo",
      title: "Mobile Developer",
      image: "/core/joshua.jpg",
      twitter: "https://twitter.com/10xjoshua",
      linkedin: "https://www.linkedin.com/in/joshua-nwafor-62189b156/",
      github: "https://github.com/joshuanwafor",
      handle: "joshua-nwafor",
    },
    {
      bio: `  <div>
        <p className="animated" data-animate="fadeInUp" data-delay=".4">
          Eno peters is an Astute project manager with over 7 years of
          experience managing different startups and businesses. She is also
          a serial Entrepreneur that has vied into different businesses
          especially in the Blockchain industry. She serves as the Business
          Development Instructor for Varsity Scape Academy, an active
          cohort-based online learning platform that teaches on demand
          courses at the moment.
        </p>
        <p className="animated" data-animate="fadeInUp" data-delay=".4">
          Eno peters, founded a startup called Creatopia, a
          cryptocurrency-based platform for students to connect with
          instructors and pay for their courses and tuition using crypto
          coins. She is an excellent content developer in the web3 space.
        </p>
        <p className="animated" data-animate="fadeInUp" data-delay=".4">
          Have at some points worked for various international companies
          such as Dacade a German based blockchain Peer to peer learning
          platforms for developers to take courses, make submissions and get
          paid in crypto coins. The platform now has over 10,0000 active
          users
        </p>
      </div>`,
      name: "Eno Peters",
      handle: "enopeters",
      title: "Co-Founder/Marketing lead",
      image: "/core/eno.jpg",
      twitter: "https://twitter.com/enogift6?t=HtzmyGRgIe5g8Cufcw-aqw&s=09",
      linkedin: "https://www.linkedin.com/in/eno-peters-1104b7153",
    },
    {
      bio: `He is  a legal practitioner with 10 years experience in legal practice, a fintech law enthusiast with special interest in the Blockchain technology.`,
      name: "Dusu Thomas Shut",
      title: "Legal compliance",
      image: "/core/dusu.JPG",
      handle: "dusu-thomas",
      twitter: "#",
      linkedin: "#",
    },

    {
      bio: `Samson Sunday Dogo is a Business Administrator  who has been passionately working in the blockchain ecosystem with about 5 years experience as a content developer with so many projects within the blockchain community.`,
      name: "Samson Sunday Dogo",
      title: "Digital Marketer",
      image: "/core/samson.jpeg",
      twitter: "https://twitter.com/samsondogo",
      linkedin: "https://www.linkedin.com/in/samson-dogo-1201581a0",
      handle: "samson-sunday",
    },
    {
      bio: `A
        blockchain
        tech writer, entrapreneur and Gonana community manager. Lucy is also
        passionate about web3 adoption from the grassroot`,
      name: "Ameh Lucy Ajumi",
      title: "Community Manager",
      image: "/core/lucy.jpg",
      twitter: "https://twitter.com/lulu_greg",
      linkedin: "#",
      handle: "lucy",
    },

    {
      name: "Stephen Sunday",
      bio: `<div>
            <p className="animated" data-animate="fadeInUp" data-delay=".4">
                He's a Blockchain Consultant, founder and CEO of Kusuconsult, the
                first Blockchain consulting firm in Northern Nigeria
                (www.kusuconsult.com). He is also into community building,
                Blockchain content creation, and a Blockchain developer with a
                wide range of knowledge and experience in designing and deploying
                blockchain Decentralized applications. He has worked with
                reputable Blockchain tech projects like Algorand, Polkadot, and an
                EVM compatible protocol like Moonbeam among others.
            </p>
            <p className="animated" data-animate="fadeInUp" data-delay=".4">
                His passion for educating people on Blockchain technology and it's
                application has led him to set up various Blockchain communities
                in Nigeria (Jos, Bauchi, Gombe, Kaduna, Abuja, Katsina, Kano,
                Zaria, Lafia, Keffi and Maiduguri).
            </p>
            <p className="animated" data-animate="fadeInUp" data-delay=".4">
                Stephen has engaged in a couple speaking engagements across the
                country.
            </p>
            <ul>
                <li>
                    He was keynote speaker at the National Association of Computer
                    Science Students (NACOSS) from 2019 to 2021. He delivered
                    keynotes on "The importance of Blockchain and Leveraging on the
                    potentials of Blockchain for economic growth"
                </li>
                <li>
                    In 2019, he was keynote speaker at Google DevFest Jos event.
                    Keynote title "Why Blockchain"
                </li>
                <li>
                    And in 2018, he was a speaker at CoinFest Nigeria event in
                    Porthacourt.
                </li>
                <li>
                    Stephen co founded Univote, a Blockchain based voting
                    application that hosted the first Blockchain elections in Africa
                    at the University of Jos, Plateau State, Nigeria and Jaysources,
                    a DApp deployed on Algorand.

                </li>
            </ul>
        </div>`,
      image: "/core/boss.jpeg",
      title: "Founder",
      github: "",
      handle: "steven-sunday",
      linkedin: "https://www.linkedin.com/in/stephensundaykusu/",
      twitter: "https://twitter.com/steviekusu",
    },
  ],
  faq: [
    {
      title: "What is Gonana?",
      body: `Gonana is a marketplace that allows commodity traders and buyers to connect directly to sell their goods without involving a middleman to host the data or be involved in any way during the trade and charge ridiculous transaction fees.`,
      id: 1,
    },
    {
      title: "Why Gonana",
      body: `With Gonana, unlike other online marketplaces, everything is decentralized. It’s a peer-to-peer system that is; commodity traders are connected to their potential customers. Gonana doesn’t operate under the approval of any law; except the normal fintech regulations, this marketplace is the evolution of an unrestricted global marketplace.`,
      id: 2,
    },
    {
      title: "How the platform Works.",
      body: `In Gonana, both the traders and the sellers have access to the marketplace where they can talk about the products or share their thoughts with others within the application just like any other social media platform. Gonana creates an interactive forum for traders/sellers on the marketplace.`,
      id: 3,
    },
    {
      title: "Why trade on Gonana.",
      body: `Every transaction performed on the Gonana marketplace is secured. The marketplace offers you the best bargain and you get quality products for affordable prices. The gonana marketplace allows multiple users to buy and sell at the same or different time intervals without any huddle.`,
      id: 4,
    },
  ],
};
