import hero1 from "../../../assets/blog_imgs/blogPost_img.png";
import hero2 from "../../../assets/blog_imgs/blog_test_img.png";
import mobiletestimg from "../../../assets/blog_imgs/app_mockup.png";

export default interface BlogPostInterface {
  id: string;
  blog_img: any;
  blogTitle: string;
  blogAuthor: string;
  blogTime: string;
  blogDate: string;
  tags: string[];
  postSummary: string[];
  sections: { header: string; content: string[]; sectionImgs?: any }[];
}

export const blogPosts: BlogPostInterface[] = [
  {
    id: "1",
    blog_img: hero1,
    blogTitle:
      "Choose SLOVE's EPK: The Ultimate Digital Solution for Musicians",
    blogAuthor: "by Gabbi",
    blogTime: "5min",
    blogDate: "16 May 2023",
    tags: ["Inspiration", "Musician", "Interview", "Career"],
    postSummary: [
      "So, what’s this about musicians in dire need of an EPK? An Electronic Press Kit is your number one go to if you are an artist, or band, who wants their resume digitally packaged, neatly and completely!",
      "If you’re thinking, “Sounds like music to my ears!” then SLOVE’sgot you covered with all the detailed information you, or your band, need in order to create and present an EPK that will wow them all. This is a digital showcase with a sole purpose to attract and inform whoever visits. When we say whoever, that entails both listeners and important contacts you need for your career. We’re talking record labels, venues, bookers, promoters, talent buyers etc. The whole kit. Your EPK should be a complementary to your music website (if you have one) and should never be forgotten when reaching out to industry professionals. It’s also a selling point – so what you present definitely matters to who’s reading. This should be a pinnacle piece for your music portfolio that encapsulates who you, your band, are as artists. By using SLOVE’s EPK platform, we’ll make sure you create the best digital presentation that will draw everyone’s attention!",
    ],
    sections: [
      {
        header: "Perks of using SLOVE'S EPK",
        content: [
          "SLOVE specifically offers notable features that will improve your chances to shine on a digital medium and increase the interest – and this includes for both solo artists and bands.",
          "We’ve made a swift and easy way to create and structure the EPK where all you need is your phone and downloading our app. Your online profile on the app is designed to work in itself an EPK, so that all you need to showcase is right there on your profile. The immediate accessibility of a mobile device makes it incredibly convenient and quick for anyone to browse through your profile.",
          "Down below are more tips and advice when making the best EPK through SLOVE. Have a read and be alert as to what you should add! Here are top essentials for your SLOVE EPK:",
        ],
      },
      {
        header: "Setting the tone for you tailored targeting",
        content: [
          "We already introduced this, but it really is a vital component – hence why we put it first. Determining who this EPK is for will set the tone and style of this entire profile. So again, the EPK you create on SLOVE is meant to attract bookers, venues, promoters, talent buyers, listeners etc. They are your target audience, which you must always keep in mind when creating the EPK. Depending on your genre or artistic style, the way the EPK is presented on SLOVE will be interpreted and perceived in a distinct way. Think about the tone when writing the text, as well as the overall presentation. How will that be received by professionals and listeners? Does it match the vibe of your music, and at the same time resonates with industry professionals?",
          "An additional target audience may also be new band members you are looking for. Say you post an ad, or a shout out on social media stating your band needs new talent, or you are a solo musician in search of a collaboration. This is another target audience that is useful to keep mind when making the EPK on SLOVE.",
        ],
      },
      {
        header: "Engaging Bio",
        content: [
          "To strike up interest and allure, it is then crucial to narrow down who you are as a musician or band, what you’re about and what your music is meant to give to a crowd. All that jazz. Your bio allows your viewer to be immersed by your persona. As a band you can write about the musical group as a whole, but also include a brief individual presentation about each band member. Combine this condensed description with the music itself. What is it that inspires you or the band, what is worthy for someone to know when they listen to the songs. Maybe there is a specific track that meant a lot for a certain reason which you would like to share. Anything that will spark more interest, yet valuable enough to remember.",
        ],
      },
      {
        header: "Basic Contact Information",
        content: [
          "This should be pretty straightforward. Never forget to add your contact information where your primary source of contact should preferably be email. It’s your choice if you want to add your phone number, but perhaps it’s more comfortable to save that information once you're connected. Including your social media as a source of contact is helpful, but we’ll soon get into the details and benefits of social media. Don’t either skimp out on sharing who your band members contact info if you are a musical team. Be sure to list their positions and contact information as well. Maybe there is someone interested in reaching out to only one band member. If there an external contact or company significant to the development of your music and acts as a source of contact, include them as well.",
          "Create one section where you add all this information. Make it trouble-free to find this part when browsing through your EPK. You want them to contact you as quick as possible right?",
        ],
      },
      {
        header: "Active Online Presence",
        content: [
          "Another eye catcher is including all your social networks – and they better be busy. This includes Facebook, Instagram, Soundcloud, Bandcamp, Twitter, etc. Industry professionals and listeners enjoy the convenience of scoping you out via social media platforms. It’s fun, attention grabbing, and we get to see more of you. Social media is a great arena for musicians to not only share their work and upcoming news, but also to show engagement with their followers and build a community around that bond. An active online presence shows commitment to your music and to your following, which is a sound way to get professionals interested in your music artistry. That way it’s more likely that they choose to invest time and energy into a musician that dedicates a lot towards their fanbase and their online persona.",
          "In addition to this, if your music is on any streaming services like Spotify or Apple Music, include this into your EPK. It’s only beneficial to see you busy on these platforms as well!",
        ],
      },
      {
        header: "Seamless Calender",
        content: [
          "Our app has an inbuilt clear and organized calendar that provides all the information about the musician’s or bands availability. All upcoming gigs, tours or events should be placed here. This makes it fast and simple for whoever is interested in booking you - for those who want to come to your show! It’s probably also handy if you or your band members are forgetful with dates…Just kidding.",
        ],
      },
      {
        header: "Highlight Achievements",
        content: [
          "Announcing achievements, whether it's heading up the charts, stacking an impressive number of streams, awards won, nominations, or any type of acknowledgment and recognition from a notable source – all of it is an excellent way to portray how your musical journey is being received and responded. Same goes for interviews and reviews written about you, the band and the music. Any form of credit is valuable and it’s important for that to be presented. Everybody (or at least I hope so) enjoys celebrating success, so share that excitement with others!",
        ],
      },
      {
        header: "Hype up the music",
        content: [
          "Well, obviously we knew you’d be adding that to your SLOVE EPK. However, be mindful as to which music you are planning to include in your EPK and why. Having an impressive EPK featuring some of your favorite tracks shows you got talent. But you need to have intention and know why you are choosing to add those tracks to your EPK. Because at the end of the day, you are also promoting your music - not just presenting it. Releasing a new single? Your upcoming track should be the focus. Stir up the buzz about what’s to come, hype up the suspense of this new special track that’s gonna express a part of you or the band that we haven’t seen before. If you’re releasing a new album, include your best track or the main single to your SLOVE EPK. Using the EPK to showcase your work, more generally? Choose to display your best and most accomplished tracks. Once you’ve decided which music to incorporate into you EPK, craft a short, concise, and descriptive text about it. Make sure to keep us on your toes and leave an impression of wanting more.",
        ],
      },
      {
        header: "Visual Appeal",
        content: [
          "Sound is one thing, visuals are another. High quality photos and music videos must complement the music you are generating. Photos can be taken from live gigs, photo shoots, and videos can be from audiences or professional photographers filming you perform. The style and essence of your music elevates once we see you or your band are on camera. Imagery does sell and tell a story – so be selective when choosing photos and videos. Also include the latest and finest quality, which is particularly important when posting promo photos. When it’s time to promote new music, be ready with new, compelling, and relevant photos for press!",
          "If you’ve filmed music videos, select one or two that stand out since you do not either want an overflow of videos. The key is to get a taste, not the entire meal. And let’s be real, in this day and age, who actually finishes an entire video clip on social media? Am I right? So, make sure whatever content you choose to display, it’s literally a showstopper and does not drag on.",
        ],
      },
      {
        header: "Multiple EPK's for Versatility",
        content: [
          "This section is especially useful for band members who also perform solo or for single artists who play in various genres.",
          "There are many benefits to having more than one EPK because there is more for the press and public to be informed about. If you are in a band but also have a solo career as a musician, separate the two artistry’s and create one individual EPK for yourself and one for the band. If you are part of more than one musical group where the genres differ from another, (say you are part of a blues band but also a rock band), create an EPK for each individual band. The same goes for the solo artist that performs in more than one genre. The genres and styles are not the same, which increases the chances of you getting contacted by venues, bookers, promoters that are looking for those specific types of music you are involved in. SLOVE’s app is also very convenient if you want to create several EPK as it doesn’t include any extra hassle. Just create different profiles and you will be able to easily log into any of them!",
          "If you are a musician that has this profile, it is always impressive to see you put effort into creating more than EPK. It shows you've put time and work into building multiple platforms for the press and external viewers to have a peak at. More importantly, it shoes you have lots of material to share, tons of versatile talent and that things are looking up for you!",
          "A last general reminder is to make sure you update your EPK as your music development will continue to flourish and progress. Things can evolve quickly, so don’t hang onto old news. This includes revising and reviewing your EPK as time goes on since there is always room for improving the way it looks and how it is presented to others.",
          "Choose SLOVE’s EPK services to get the best out of your digital music portfolio. We’re here to help you shine and make the most of your talent.",
          "Good luck and keep us posted on how it goes!",
        ],
      },
    ],
  },
  {
    id: "2",
    blog_img: hero2,
    blogTitle: "Booking Process",
    blogAuthor: "By Gabbi",
    blogTime: "5min",
    blogDate: "26 May 2023",
    tags: ["tag1", "tag2", "tag3", "tag4"],
    postSummary: [
      "Both venues and musicians can send booking requests to another. We have 2 easy ways to initiate a booking request.",
      "Option 1: Booking request initiated from the “Recommendations” tab.",
      "Option 2: Booking request initiated from the “Discover” tab.",
      "Once you’ve clicked on either option, follow the next steps:",
    ],
    sections: [
      {
        header: "Initial booking request",
        content: [
          "One of the parties initiates a booking request which includes a genre, a date, time and an introductory message.",
        ],
        sectionImgs: mobiletestimg,
      },
      {
        header: "Response from the receiver",
        content: [
          "Choice 1: Accept Request",
          "If they accept the initial booking request, that means they are in agreement with the proposed date, time, and overall information that was previously sent by the other party. Now that both participants agree, they will proceed to further discuss a booking price, specific requirements and lastly, sign a contract to complete the booking process. The gig will follow up after completing these stages of the booking process.",
          "Choice 2: Modify Request",
          "Here the receiver is able to initiate a dialogue with the other party via a chat functionality. This is optional for those interested in the booking request but want to make any additional changes such time, date, genre or have other requirements. Once the negotiation on the chat is done and both parties have agreed upon a new time, date, genre, booking price or requirements, what remains is signing a contract after the agreement. The gig will take place after completing these stages of the booking process.",
          "Choice 3: Decline the Request",
          "The receiving party also has the option to decline the request. No gig is further initiated from here.",
        ],
        sectionImgs: mobiletestimg,
      },
      {
        header: "Negotiation",
        content: [
          "As previously mentioned, choice number 1 and 2 are meant for negotiating. Here is your chance to inform and discuss all details required for the event and to further complete the booking process.",
        ],
        sectionImgs: mobiletestimg,
      },
      {
        header: "Contract Signing",
        content: [
          "Only venues can initiate this action.",
          "For the venue party to find this procedure, you will find the option in the chat window, which is located at the top, to the right where it says “Send Contract”.",
          "The venue is responsible for including all the agreed upon factors into the system and for creating a contract. They send the contract to the musicians.",
        ],
        sectionImgs: mobiletestimg,
      },
      {
        header: "Confirmation",
        content: [
          "Musicians need to respond to the contract by either approving, declining or renegotiation. If the musician declines, then the contract will be terminated. If the musician renegotiates, then a further negotiation will take place until there is a mutual agreement that leads to a signed contract.",
        ],
        sectionImgs: mobiletestimg,
      },
      {
        header: "Creating the Gig",
        content: [
          "Once the venue receives a confirmation from the musician, the venue can then close the process by submitting the relevant details to generate an invoice from SLOVE.",
        ],
        sectionImgs: mobiletestimg,
      },
      {
        header: "Invoice",
        content: [
          "SLOVE will generate an invoice based on the details provided by the venues and will send it to the venue via email after the event.",
        ],
        sectionImgs: mobiletestimg,
      },
      {
        header: "Payment",
        content: [
          "Musicians will receive their payment from SLOVE as soon as the venue has paid SLOVE. Usually, this process can take up to 30 days.",
        ],
        sectionImgs: mobiletestimg,
      },
    ],
  },
];
