import { NewsArticle } from '../types/news';

export const INITIAL_NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-lead-1',
    title: 'Dhaka Mass Transit Expands Extended Night Frequencies Following Commuter Volume Milestone',
    titleBn: 'যাত্রী চাপের নতুন মাইলফলকে মেট্রোরেলের নৈশকালীন চলাচলের সময় বৃদ্ধি ঘোষণা',
    summary: 'Dhaka Mass Rapid Transit Authority confirms updated schedule to facilitate night-shift professionals and university students along the Motijheel-Uttara arterial spine.',
    summaryBn: 'মতিঝিল-উত্তরা রুটে রাত্রিকালীন অফিস ও বিশ্ববিদ্যালয় শিক্ষার্থীদের যাতায়াত নির্বিঘ্ন করতে বর্ধিত সূচি ঘোষণা করেছে ডিএমটিসিএল।',
    content: `The Dhaka Mass Rapid Transit Authority (DMTCL) has officially rolled out an expanded operating schedule for Line 6, extending peak passenger transit operations past 11:30 PM on weekdays.

Operating data reviewed by the Ministry of Road Transport and Bridges indicates that daily ridership consistently breached 320,000 passenger trips this month, significantly relieving surface arterial gridlock along the Mirpur, Farmgate, and Shahbag corridors.

Engineers confirmed that supplementary electric multiple unit (EMU) train sets have been deployed to maintain a 6-minute headway during the evening rush. Station authorities at Bangladesh Secretariat and Motijheel reported seamless crowds and heightened security protocols. Additional feeder shuttle services from major terminal plazas are currently being harmonized with metropolitan municipal transport operators.`,
    contentBn: `ঢাকা ম্যাস ট্রানজিট কোম্পানি লিমিটেড (ডিএমটিসিএল) এমআরটি লাইন-৬ এর জন্য বর্ধিত সময়সূচি আনুষ্ঠানিকভাবে কার্যকর করেছে। নতুন সূচি অনুযায়ী কর্মদিবসগুলোতে রাত সাড়ে ১১টা পর্যন্ত ট্রেন চলাচল অব্যাহত থাকবে।

সড়ক পরিবহন ও সেতু মন্ত্রণালয়ের সর্বশেষ উপাত্তে দেখা গেছে, মিরপুর, ফার্মগেট ও শাহবাগ করিডোরে যানজট উল্লেখযোগ্য হারে কমিয়ে দিয়ে দৈনিক যাত্রী পরিবহন ৩ লাখ ২০ হাজার ছাড়িয়েছে।

সন্ধ্যায় ব্যস্ততম সময়ে যাত্রীদের অপেক্ষার সময় কমিয়ে ৬ মিনিটে নামিয়ে আনতে অতিরিক্ত ইএমইউ ট্রেন যুক্ত করা হয়েছে। মতিঝিল ও সচিবালয় স্টেশনে অতিরিক্ত যাত্রী নিয়ন্ত্রক দল মোতায়েন করা হয়েছে।`,
    outletId: 'the-daily-star',
    outletName: 'The Daily Star',
    category: 'national',
    division: 'dhaka',
    district: 'Dhaka',
    publishedAt: '4 minutes ago',
    readTime: '3 min read',
    isBreaking: true,
    imageUrl: '/src/assets/images/hero_dhaka_news_1791862232140.jpg',
    sourceUrl: 'https://www.thedailystar.net'
  },
  {
    id: 'news-ctg-1',
    title: 'Chittagong Port Achieves Record 24-Hour Container Clearance Through Automated Terminal Gate System',
    titleBn: 'অটোমেটেড টার্মিনাল গেট সিস্টেম চালুর পর চট্টগ্রাম বন্দরে ২৪ ঘণ্টায় রেকর্ড কন্টেইনার খালাস',
    summary: 'Karnaphuli river harbor throughput surges 14% month-on-month as digital customs validation drastically cuts ship turnaround waiting days.',
    summaryBn: 'ডিজিটাল কাস্টমস ছাড়করণের মাধ্যমে জাহাজের গড় অপেক্ষার সময় নাটকীয়ভাবে কমে আসায় কর্ণফুলী মোহনায় কন্টেইনার পরিবহন ১৪% বৃদ্ধি পেয়েছে।',
    content: `The Chittagong Port Authority (CPA) announced a record single-day cargo handling throughput at the New Mooring Container Terminal (NCT) following the successful full integration of smart optical character recognition (OCR) gates and unified digital manifests.

Vessel waiting times in the outer anchorage have declined from 3.2 days to under 28 hours for mainline container vessels, yielding substantial demurrage cost savings for ready-made garment exporters and industrial raw material importers.

Harbor Master captains affirmed that navigational safety across the Karnaphuli channel was further bolstered by modern tugboat acquisitions and round-the-clock pilotage. The port is on track to cross 3.3 million TEUs this fiscal year, reinforcing its stature as South Asia's pivotal maritime hub.`,
    contentBn: `স্মার্ট অপটিক্যাল ক্যারেক্টার রিকগনিশন (ওসিআর) এবং সমন্বিত ডিজিটাল খালাস চালুর ফলে চট্টগ্রাম বন্দরের নিউ মুরিং কন্টেইনার টার্মিনালে একদিনে সর্বোচ্চ মালামাল খালাসের নতুন রেকর্ড অর্জিত হয়েছে।

বহিনোঙরে জাহাজের অপেক্ষার সময় ৩.২ দিন থেকে কমে ২৮ ঘণ্টার নিচে নেমে এসেছে। ফলে পোশাক শিল্পের রফতানিকারক ও কাঁচামাল আমদানিকারকদের উল্লেখযোগ্য বৈদেশিক মুদ্রা সাশ্রয় হচ্ছে।

হারবার মাস্টার জানান, কর্ণফুলী চ্যানেলে আধুনিক টাগবোটের ব্যবহার এবং সার্বক্ষণিক পাইলটেজের মাধ্যমে আন্তর্জাতিক শিপিং সংস্থাগুলোর আস্থা বহুগুণ বেড়েছে। চলতি অর্থবছর বন্দরটি ৩৩ লাখ টিইইউ কন্টেইনার অতিক্রম করতে যাচ্ছে।`,
    outletId: 'dainik-azadi',
    outletName: 'Dainik Azadi',
    category: 'regional',
    division: 'chittagong',
    district: 'Chattogram',
    publishedAt: '12 minutes ago',
    readTime: '4 min read',
    isBreaking: true,
    imageUrl: '/src/assets/images/chittagong_maritime_hub_1791862233217.jpg',
    sourceUrl: 'https://dainikazadi.net'
  },
  {
    id: 'news-econ-1',
    title: 'Bangladesh Remittance Inflow Leaps to $2.4 Billion Monthly as Formal Banking Channels Incentivize Transfers',
    titleBn: 'প্রবাসী আয়ে উল্লম্ফন: ব্যাংকিং প্রণোদনা ও রেট সমতায় মাসে রেমিট্যান্স পৌঁছেছে ২.৪ বিলিয়ন ডলারে',
    summary: 'Bangladesh Bank data shows surging transfers from the Middle East, UK, and North America driven by transparent FX rates and simplified digital banking apps.',
    summaryBn: 'স্বচ্ছ মুদ্রা বিনিময় হার এবং মোবাইল ব্যাংকিং সংযোগের ফলে মধ্যপ্রাচ্য, যুক্তরাজ্য ও উত্তর আমেরিকা থেকে আসা রেমিট্যান্স ২.৪ বিলিয়ন ডলার স্পর্শ করেছে।',
    content: `Bangladesh Bank's latest balance of payments report reveals that monthly worker remittances reached $2.41 billion, providing an essential liquidity boost to gross official foreign exchange reserves.

The resurgence is attributed to competitive market-based crawl exchange rates and the expansion of direct mobile financial service (MFS) payout integrations for overseas remitters in Saudi Arabia, the United Arab Emirates, Malaysia, and the United Kingdom.

Commercial banks in Dhaka reported that smallholder remittance receipts in rural divisions—notably Sylhet, Cumilla, Noakhali, and Brahmanbaria—grew by more than 22% compared to the prior quarter. Financial analysts emphasize that sustained policy consistency will fortify external sovereign balances and tame imported inflationary pressures.`,
    contentBn: `বাংলাদেশ ব্যাংকের সর্বশেষ হিসাব অনুযায়ী, আনুষ্ঠানিক ব্যাংকিং চ্যানেলে রেমিট্যান্স প্রবাহ বেড়ে ২.৪১ বিলিয়ন মার্কিন ডলারে উন্নীত হয়েছে। এটি বৈদেশিক মুদ্রার রিজার্ভে উল্লেখযোগ্য স্থিতিশীলতা এনেছে।

মুদ্রাবাজারের ক্রলিং পেগ ব্যবস্থা কার্যকর রাখা এবং মধ্যপ্রাচ্য, যুক্তরাজ্য ও মালয়েশিয়া থেকে তাৎক্ষণিক মোবাইল ফিনান্সিয়াল সার্ভিসে (বিকাশ, নগদ) টাকা পাঠানোর সুবিধা থাকায় বৈধ চ্যানেলের ব্যবহার উল্লেখযোগ্য বৃদ্ধি পেয়েছে।

সিলেট, কুমিল্লা, নোয়াখালী ও ব্রাহ্মণবাড়িয়ার মতো প্রবাসী-অধ্যুষিত জেলাগুলোতে ব্যাংকিং লেনদেনে উল্লেখযোগ্য গতি এসেছে বলে জানিয়েছে বাণিজ্যিক ব্যাংকগুলো।`,
    outletId: 'the-business-standard',
    outletName: 'The Business Standard',
    category: 'business',
    division: 'dhaka',
    district: 'Dhaka',
    publishedAt: '25 minutes ago',
    readTime: '3 min read',
    imageUrl: '/src/assets/images/dhaka_financial_district_1791862233691.jpg',
    sourceUrl: 'https://www.tbsnews.net'
  },
  {
    id: 'news-sylhet-1',
    title: 'Sreemangal Tea Estates Record High Yield Following Pre-Monsoon Showers and Organic Soil Conditioning',
    titleBn: 'শ্রীমঙ্গলে পরিমিত প্রাক-বর্ষা বৃষ্টি ও জৈব সার ব্যবহারে চায়ের কুঁড়ির বাম্পার ফলন শুরু',
    summary: 'Moulvibazar and Sylhet planters report premium liquor quality and robust plucking volumes across 135 tea estates in the Surma valley.',
    summaryBn: 'মৌলভীবাজার ও বৃহত্তর সিলেটের সুরমা ভ্যালির ১৩৫টি বাগানে অনুকূল আবহাওয়ায় চায়ের দুটি পাতা একটি কুঁড়ির সমারোহ ও নিলামে দর বৃদ্ধির পূর্বাভাস।',
    content: `Tea producers across Sreemangal, Kamalganj, and the greater Sylhet basin have welcomed an exceptional early flushing season as balanced pre-monsoon precipitation blanketed the undulating hillocks.

The Bangladesh Tea Board confirmed that early auction previews in Sreemangal and Chattogram project an exportable surplus of orthodox and CTC black tea. Progressive estates utilizing regenerative compost and shade tree canopies noted a marked reduction in pest incidence without chemical residues.

Worker community leaders lauded the enhancement of clean piped drinking water and digital cash wage disbursements across labor colonies, marking a positive transformation in tea garden social infrastructure.`,
    contentBn: `অনুকূল আবহাওয়া এবং সময়মতো প্রাক-বর্ষার বৃষ্টির কারণে শ্রীমঙ্গল ও সিলেটের বিস্তীর্ণ চা বাগানগুলোতে চা উৎপাদনের নতুন মৌসুম দারুণ আশার সঞ্চার করেছে।

বাংলাদেশ চা বোর্ড জানিয়েছে, সুরমা ভ্যালির বাগানগুলোতে চা পাতার মান ও সুবাস চমৎকার হওয়ায় আসন্ন চট্টগ্রাম ও শ্রীমঙ্গল নিলামে ভালো দাম পাওয়ার প্রত্যাশা করা হচ্ছে।

রাসায়নিকের পরিবর্তে ভার্মিকম্পোস্ট ও প্রাকৃতিকভাবে রোগবালাই দমনকারী বাগানের সংখ্যা বাড়ায় রফতানিযোগ্য প্রিমিয়াম ব্ল্যাক ও গ্রিন টির উৎপাদনও সমৃদ্ধ হচ্ছে।`,
    outletId: 'sylheter-dak',
    outletName: 'Dainik Sylheter Dak',
    category: 'regional',
    division: 'sylhet',
    district: 'Moulvibazar',
    publishedAt: '42 minutes ago',
    readTime: '3 min read',
    imageUrl: '/src/assets/images/sylhet_tea_highlands_1791862232412.jpg',
    sourceUrl: 'https://sylheterdak.com.bd'
  },
  {
    id: 'news-rajshahi-1',
    title: 'Rajshahi Varendra Farmers Accelerate Solar-Powered Drip Irrigation for High-Value Crops',
    titleBn: 'রাজশাহীর বরেন্দ্রে ভূগর্ভস্থ পানির অপচয় রোধে সৌরবিদ্যুৎ চালিত ড্রিপ সেচ প্রকল্পে কৃষকদের সাফল্য',
    summary: 'Sub-soil conservation initiative in Godagari and Tanore scales drought-resilient mango, guava, and organic vegetable cultivation.',
    summaryBn: 'গোদাগাড়ী ও তানোরে বরেন্দ্র বহুমুখী উন্নয়ন কর্তৃপক্ষের সৌর ড্রিপ সেচে পানির অপচয় কমিয়ে ফলন দ্বিগুণ করার নজির।',
    content: `In an innovative turn towards climate-adaptive agriculture, over 4,500 farmers in the undulating Varendra tract of Rajshahi have shifted from energy-intensive tubewells to solar-powered micro-irrigation systems.

The Barind Multipurpose Development Authority (BMDA) reports that the technology reduces groundwater withdrawal by 40% while preserving crucial subterranean aquifers in drought-prone upazilas.

Commercial orchards preparing for the world-renowned Khirsapat and Fazli mango seasons noted that micro-drip emitters deliver micronutrients directly to root zones, drastically cutting production overheads. Several cooperative societies in Chapai Nawabganj and Bagha have already signed direct supermarket supply agreements in Dhaka.`,
    contentBn: `জলবায়ু সহনশীল কৃষির অংশ হিসেবে রাজশাহীর বরেন্দ্র অঞ্চলের কৃষকরা উচ্চ ব্যয়ের গভীর নলকূপের ওপর নির্ভরতা কমিয়ে সৌরবিদ্যুৎ চালিত ড্রিপ সেচ গ্রহণ করছেন।

বরেন্দ্র বহুমুখী উন্নয়ন কর্তৃপক্ষ জানিয়েছে, এর ফলে ভূগর্ভস্থ পানির অপচয় ৪০ শতাংশ কমেছে এবং খরার মৌসুমেও আমের মুকুল ও ফলের পুষ্টির জোগান নিশ্চিত হচ্ছে।

চাঁপাইনবাবগঞ্জ ও বাঘার ক্ষীরশাপাত ও ল্যাংড়া আম চাষিরা সরাসরি রাজধানীর বাজারে আম সরবরাহের চুক্তি করছেন, যা মধ্যস্বত্বভোগীদের দৌরাত্ম্য কমিয়ে কৃষকের মুনাফা বৃদ্ধি করেছে।`,
    outletId: 'sonali-sangbad',
    outletName: 'Dainik Sonali Sangbad',
    category: 'regional',
    division: 'rajshahi',
    district: 'Rajshahi',
    publishedAt: '1 hour ago',
    readTime: '3 min read',
    sourceUrl: 'https://sonalisangbad.com'
  },
  {
    id: 'news-khulna-1',
    title: 'Mongla Port Completes Inner Bar Dredging, Paving Way for Deep-Draft Bulk Carriers',
    titleBn: 'মোংলা বন্দরের ইনার বার ড্রেজিং সম্পন্ন: ১০ মিটার ড্রাফটের বাণিজ্যিক জাহাজ সরাসরি জেটিতে ভিড়বে',
    summary: 'Southwestern sea gateway cuts cargo lighterage expenses and accelerates transit corridors for Nepal and Bhutan trade delegations.',
    summaryBn: 'পশুর চ্যানেলে সফল ড্রেজিংয়ের মাধ্যমে মোংলায় লাইটারেজ খরচ উল্লেখযোগ্য হারে হ্রাস ও ট্রানজিট বাণিজ্য গতিশীল হচ্ছে।',
    content: `Mongla Port Authority has commissioned the deepened navigational corridor along the Pashur River following the completion of comprehensive capital dredging at the Inner Bar.

Vessels carrying up to 10-meter draft can now anchor directly at port berths without compulsory offshore lighterage. Port Chairman officials noted that this milestone will slash turnaround logistics by over 36 hours for container and automotive carriers.

The proximity of the Padma Bridge railway link directly into Khulna has catalyzed renewed commercial interest from engineering and manufacturing units across the southwestern industrial belt, while eco-protection corridors surrounding the nearby Sundarbans reserve are monitored continuously by environmental patrol sensors.`,
    contentBn: `পশুর নদীর ইনার বারে দীর্ঘমেয়াদি ড্রেজিং শেষ হওয়ার পর মোংলা বন্দর কর্তৃপক্ষের জেটিতে এখন থেকে ৯.৫ থেকে ১০ মিটার গভীরতার জাহাজ সরাসরি ভিড়তে পারবে।

এর ফলে জাহাজের মালামাল ছোট জাহাজে স্থানান্তরের বাড়তি খরচ কমে যাবে এবং কনটেইনার ও গাড়ি আমদানিতে ৩৬ ঘণ্টার বেশি সময় বাঁচবে।

পদ্মা রেল সংযোগ ও রূপপুর পারমাণবিক প্রকল্পের ভারী মালামাল দ্রুত খালাসে মোংলা বন্দরের সক্ষমতা দক্ষিণ-পশ্চিমাঞ্চলের শিল্পায়নে নতুন উদ্দীপনা সৃষ্টি করেছে।`,
    outletId: 'dainik-purbanchal',
    outletName: 'Dainik Purbanchal',
    category: 'regional',
    division: 'khulna',
    district: 'Khulna',
    publishedAt: '1 hour ago',
    readTime: '4 min read',
    sourceUrl: 'https://purbanchal.com'
  },
  {
    id: 'news-barisal-1',
    title: 'Payra Port Deep-Water Terminal Operationalizes 24/7 Smart Vessel Traffic Surveillance System',
    titleBn: 'পায়রা গভীর সমুদ্র বন্দর চ্যানেলে ২৪ ঘণ্টার স্বয়ংক্রিয় ভেসেল ট্রাফিক সার্ভিল্যান্স চালু',
    summary: 'Modern radar and sonar buoys along the Rabnabad Channel guide international coal and bulk vessels into Patuakhali berths.',
    summaryBn: 'রাবনাবাদ চ্যানেলে আধুনিক রাডার ও সোনার সংবলিত স্বয়ংক্রিয় ট্রাফিক সিস্টেম চালু করায় রাতেও নিরাপদে জাহাজ চলাচল করছে।',
    content: `Patuakhali's Payra Port has marked another technological leap with the commissioning of its Vessel Traffic Management and Information System (VTMIS).

Navigating the 75-kilometer Rabnabad Channel has historically demanded cautious daylight piloting. The new automated radar and digital telemetry grid now facilitates safe round-the-clock docking for ultra-large bulk carriers transporting raw materials for national mega-power projects.

Local coastal fishermen in Kuakata, Galachipa, and Barguna also commended the installation of localized VHF weather warning relays, ensuring timely harbor returns prior to southern Bay of Bengal squalls.`,
    contentBn: `পটুয়াখালীর পায়রা গভীর সমুদ্র বন্দরে ৭৫ কিলোমিটার দীর্ঘ রাবনাবাদ চ্যানেলে আধুনিক ভেসেল ট্রাফিক সিস্টেম (ভিটিএমআইএস) পুরোপুরি কার্যকর করা হয়েছে।

এর ফলে রাতেও যেকোনো আবহাওয়ায় আন্তর্জাতিক বাল্ক ক্যারিয়ার ও পণ্যবাহী জাহাজ নিরাপদে জেটিতে নোঙর করতে পারছে।

এছাড়া কুয়াকাটা ও বরগুনার উপকূলীয় জেলেদের জন্য বিনামূল্যে ভিএইচএফ আবহাওয়া সতর্কবার্তা প্রচারের পৃথক চ্যানেল যুক্ত হওয়ায় সাগরে নিরাপত্তা বহুগুণ বৃদ্ধি পেয়েছে।`,
    outletId: 'barisal-barta',
    outletName: 'Barisal Barta',
    category: 'regional',
    division: 'barisal',
    district: 'Patuakhali',
    publishedAt: '2 hours ago',
    readTime: '3 min read',
    sourceUrl: 'https://barisalbarta.com'
  },
  {
    id: 'news-rangpur-1',
    title: 'Northern Agro-Clusters Pioneer Cold Storage Micro-Grid Networks to Eliminate Potato Harvest Spoilage',
    titleBn: 'রংপুর ও দিনাজপুরে আলু ও শাকসবজি সংরক্ষণে সৌরচালিত স্থানীয় কোল্ড স্টোরেজ নেটওয়ার্ক স্থাপন',
    summary: 'Decentralized farmer-owned cooling units prevent distress sales and safeguard seasonal livelihoods across Kurigram, Dinajpur, and Rangpur.',
    summaryBn: 'কৃষক মালিকানাধীন আধুনিক মিনি কোল্ড স্টোরেজের মাধ্যমে মধ্যস্বত্বভোগীদের অবসান এবং ন্যায্যমূল্য নিশ্চিত হচ্ছে।',
    content: `Agronomists and cooperative alliances across Rangpur, Dinajpur, and Nilphamari are transforming surplus vegetable storage with modular solar cold chambers.

Northern Bangladesh yields nearly 60% of the country's annual potato harvest, yet post-harvest transportation bottlenecks and traditional high-tariff warehouses frequently coerced farmers into distress pricing.

The decentralized network of 50-metric-ton chilled units operates off rooftop solar arrays with lithium-ion back-ups, allowing farming households to retain produce for favorable market windows. The Department of Agricultural Extension confirmed plans to co-finance an additional 200 units across Rangpur and Bogura next season.`,
    contentBn: `দিনাজপুর ও নীলফামারীর প্রান্তিক কৃষকদের উৎপাদিত আলু ও শাকসবজি নষ্ট হওয়া রোধে পরিবেশবান্ধব সৌরচালিত মিনি কোল্ড স্টোরেজ বিপ্লব সৃষ্টি করেছে।

উত্তরাঞ্চল থেকে দেশের মোট আলুর অর্ধেকের বেশি উৎপাদিত হলেও প্রতি বছর সংরক্ষণের অভাবে চাষিরা আর্থিক ক্ষতির মুখে পড়তেন।

নতুন প্রযুক্তির ফলে ৫০ মেট্রিক টন ধারণক্ষমতার স্থানীয় স্টোরেজে কৃষকরা নিজেদের ঘরেই দীর্ঘ ৪ মাস আলু সতেজ রাখতে পারছেন এবং সরাসরি ঢাকা ও চট্টগ্রামে ভালো দামে বিপণন করছেন।`,
    outletId: 'juger-alo',
    outletName: 'Dainik Juger Alo',
    category: 'regional',
    division: 'rangpur',
    district: 'Rangpur',
    publishedAt: '2 hours ago',
    readTime: '3 min read',
    sourceUrl: 'https://jugeralo.net'
  },
  {
    id: 'news-mymensingh-1',
    title: 'Bangladesh Agricultural University Unveils Flood-Tolerant High-Yield Rice Cultivar for Haor Basin',
    titleBn: 'বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ের গবেষকদের উদ্ভাবিত জলমগ্নতা সহনশীল নতুন ধানের জাতের সফল ট্রায়াল',
    summary: 'Field trials along the Old Brahmaputra and Netrokona floodplain demonstrate 18-day submersion survival without grain degradation.',
    summaryBn: 'আকস্মিক পাহাড়ি ঢল ও বন্যায় ১৮ দিন পানির নিচে নিমজ্জিত থাকলেও কোনো ক্ষতি ছাড়াই ফলন দেবে বাকৃবির নতুন জাত।',
    content: `Plant geneticists at Bangladesh Agricultural University (BAU) in Mymensingh have concluded successful multi-district trials for 'BAU-Dhan 14', a submergence-resilient paddy cultivar engineered for vulnerable flood basins.

Haor wetlands frequently experience flash floods from upstream hills during the critical maturation window, wiping out unharvested Boro fields. The new strain goes dormant under deep water for up to two-and-a-half weeks, resuming photosynthesis and grain filling once water recedes.

Farmers in Netrokona and Sunamganj who participated in pilot plots reported an average yield exceeding 6.8 tonnes per hectare, creating immense excitement across agricultural research institutions in South Asia.`,
    contentBn: `ময়মনসিংহের বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ের (বাকৃবি) উদ্ভিদ প্রজনন বিভাগের বিজ্ঞানীরা 'বাকৃবি-ধান ১৪' নামের নতুন জলসহনশীল জাতের সফল মাঠ পরীক্ষা সম্পন্ন করেছেন।

হাওরাঞ্চলে চৈত্র-বৈশাখ মাসে পাহাড়ি ঢলে বোরো ফসল তলিয়ে যাওয়ার ঝুঁকি থাকে। এই নতুন জাতটি ১৮ দিন পর্যন্ত পানির নিচে তলিয়ে থাকলেও পচে যায় না এবং পানি নামার পর পুনরায় স্বাভাবিক বৃদ্ধি পায়।

নেত্রকোণা ও সুনামগঞ্জের পরীক্ষামূলক মাঠে হেক্টরপ্রতি ৬.৮ মেট্রিক টন ফলন পাওয়ায় হাওরবাসীর খাদ্য নিরাপত্তায় এটি যুগান্তকারী সংযোজন হবে বলে গবেষকরা আশাবাদ ব্যক্ত করেছেন।`,
    outletId: 'swadesh-sangbad',
    outletName: 'Dainik Swadesh Sangbad',
    category: 'regional',
    division: 'mymensingh',
    district: 'Mymensingh',
    publishedAt: '3 hours ago',
    readTime: '4 min read',
    sourceUrl: 'https://swadeshsangbad.com'
  },
  {
    id: 'news-tech-1',
    title: 'Dhaka Tech Ecosystem Closes $48M in Growth Capital Led by Fintech and Agri-Logistics Startups',
    titleBn: 'ঢাকা স্টার্টআপ ইকোসিস্টেমে ৪৮ মিলিয়ন ডলারের আন্তর্জাতিক বিনিয়োগ: ফিনটেক ও এগ্রি-লজিস্টিকসে রেকর্ড ফান্ডিং',
    summary: 'Global venture funds double down on digitized supply chain networks connecting rural producers with urban retail consumers.',
    summaryBn: 'আন্তর্জাতিক ভেঞ্চার ক্যাপিটাল প্রতিষ্ঠানগুলো বাংলাদেশের দ্রুতবর্ধনশীল ডিজিটাল সাপ্লাই চেইন ও মোবাইল ফাইন্যান্সে আস্থা পুনর্ব্যক্ত করেছে।',
    content: `Startups based in Dhaka, Chattogram, and Jashore have secured over $48 million in combined Series A and B funding rounds during the first quarter of the year.

The investment wave was headlined by embedded fintech credit underwriters enabling working capital for 1.2 million micro-merchants across secondary cities, alongside cold-chain logistics platforms digitizing milk, poultry, and fish delivery.

Industry leaders highlighted that Bangladesh's youthful demographics—with over 65% of the population under 35 and surging 4G/5G smartphone penetration—continue to present one of frontier Asia's most compelling digital growth stories.`,
    contentBn: `দেশের প্রযুক্তি খাতের স্টার্টআপগুলোতে প্রথম প্রান্তিকে ৪৮ মিলিয়ন মার্কিন ডলারের সমপরিমাণ বৈদেশিক বিনিয়োগ এসেছে।

বিশেষ করে প্রান্তিক ক্ষুদ্র মুদি দোকানিদের মাইক্রো-লোন প্রদানকারী ফিনটেক প্ল্যাটফর্ম এবং গ্রাম থেকে তাজা মাছ-মাংস ও দুধ সরাসরি শহরে পৌঁছানোর এগ্রি-টেক অ্যাপসগুলোতে বিনিয়োগকারীরা সবচেয়ে বেশি অর্থায়ন করেছেন।

আইটি খাত সংশ্লিষ্টরা জানিয়েছেন, তরুণ জনগোষ্ঠী ও বিস্তৃত ইন্টারনেট সেবার কারণে বিশ্ব বিনিয়োগ মানচিত্রে বাংলাদেশের তথ্যপ্রযুক্তি খাত ক্রমাগত মজবুত অবস্থান তৈরি করছে।`,
    outletId: 'techshohor',
    outletName: 'TechShohor',
    category: 'technology',
    division: 'dhaka',
    district: 'Dhaka',
    publishedAt: '3 hours ago',
    readTime: '3 min read',
    sourceUrl: 'https://techshohor.com'
  }
];

// Additional breaking dispatches that can simulate live wire updates arriving
export const WIRE_UPDATES_POOL: NewsArticle[] = [
  {
    id: 'wire-update-1',
    title: 'Bangladesh Meteorologists Issue Cautionary Signal 2 at Southern River Ports Due to Bay Depression',
    titleBn: 'বঙ্গোপসাগরে লঘুচাপ: দক্ষিণাঞ্চলের নদী বন্দরসমূহে ২ নম্বর দূরবর্তী সতর্ক সংকেত জারি',
    summary: 'BMD advises passenger launches across Barisal, Bhola, and Patuakhali to maintain coastal proximity and heed weather bulletins.',
    summaryBn: 'বরিশাল, ভোলা ও পটুয়াখালীর নৌযানগুলোকে উপকূলের কাছাকাছি থেকে সাবধানে চলাচলের নির্দেশ দিয়েছে আবহাওয়া অধিদপ্তর।',
    content: 'The Bangladesh Meteorological Department (BMD) has hoisted distant cautionary signal number 2 for river launch terminals across the lower Meghna estuary and coastal belts as a seasonal low pressure system deepened over the northern Bay of Bengal. River police detachments have been instructed to monitor safety passenger thresholds.',
    contentBn: 'উত্তর বঙ্গোপসাগরে সৃষ্ট লঘুচাপের প্রভাবে বরিশাল, পটুয়াখালী, ভোলা ও উপকূলীয় নদী বন্দরগুলোতে ২ নম্বর সতর্ক সংকেত দেখাতে বলা হয়েছে। বিআইডব্লিউটিএ যাত্রীবাহী লঞ্চগুলোকে অতিরিক্ত যাত্রী বহন না করার কড়া নির্দেশ দিয়েছে।',
    outletId: 'bdnews24',
    outletName: 'bdnews24.com',
    category: 'weather',
    division: 'barisal',
    publishedAt: 'Just now',
    readTime: '2 min read',
    isBreaking: true,
    sourceUrl: 'https://bangla.bdnews24.com'
  },
  {
    id: 'wire-update-2',
    title: 'BCB Announces 16-Member Squad for Upcoming Asian Championship Series with New Fast Bowling Talent',
    titleBn: 'এশিয়ান চ্যাম্পিয়নশিপ সিরিজের জন্য বাংলাদেশ দলের ১৬ সদস্যের স্কোয়াড ঘোষণা: নতুন পেসারের অন্তর্ভুক্তি',
    summary: 'National cricket selectors unveil balanced lineup with veteran batting stability and high-velocity bowling prospects.',
    summaryBn: 'অভিজ্ঞ ব্যাটারদের সমন্বয়ের পাশাপাশি ঘরোয়া লিগে আলো ছড়ানো গতি তারকাকে নিয়ে শক্তিশালী স্কোয়াড তৈরি করেছে বিসিবি।',
    content: 'The Bangladesh Cricket Board (BCB) national selection panel in Mirpur announced an all-round 16-member squad for the upcoming multi-nation Asian series. The panel noted high physical fitness benchmarks and praised emerging seam talent from the High Performance camp.',
    contentBn: 'মিরপুর শের-ই-বাংলা জাতীয় স্টেডিয়ামে আয়োজিত সংবাদ সম্মেলনে আসন্ন আন্তর্জাতিক সিরিজের জন্য ১৬ সদস্যের দল ঘোষণা করেছে বাংলাদেশ ক্রিকেট বোর্ড। তরুণ ও অভিজ্ঞদের ভারসাম্য রেখে দল গঠন করা হয়েছে।',
    outletId: 'cricfrenzy',
    outletName: 'Cricfrenzy',
    category: 'sports',
    division: 'dhaka',
    publishedAt: 'Just now',
    readTime: '2 min read',
    isBreaking: true,
    sourceUrl: 'https://cricfrenzy.com'
  },
  {
    id: 'wire-update-3',
    title: 'Cox’s Bazar Sea Pearl Terminal Reports High Weekend Influx Across New Direct Rail Link',
    titleBn: 'সরাসরি রেল যোগাযোগের সুবাদে কক্সবাজারে সপ্তাহান্তে পর্যটকদের উপচে পড়া ভিড়',
    summary: 'Hotel and resort occupancy reaches 98% as vacationers experience scenic rail ride through hills and coastal wetlands.',
    summaryBn: 'পাহাড় ও সমুদ্রের দৃশ্য উপভোগ করে ট্রেনযাত্রীদের ব্যাপক আগমন; হোটেল-মোটেলগুলোতে ৯৮ শতাংশ কক্ষ বুকিং।',
    content: 'Railway authorities operating the Dhaka-Coxs Bazar express service reported fully booked passenger coaches through Monday as families and beachgoers take advantage of the uninterrupted high-speed link. Tourism police have reinforced patrols across Laboni and Kolatoli shores.',
    contentBn: 'ঢাকা-কক্সবাজার রুটের নতুন রেল সংযোগে টিকিট বিক্রি শতভাগে পৌঁছেছে। সৈকতজুড়ে নিরাপত্তা নিশ্চিতে মোতায়েন করা হয়েছে অতিরিক্ত ট্যুরিস্ট পুলিশ। স্থানীয় ব্যবসায়ীরা সন্তোষ প্রকাশ করেছেন।',
    outletId: 'coxsbazar-news',
    outletName: "Cox's Bazar News",
    category: 'regional',
    division: 'chittagong',
    publishedAt: 'Just now',
    readTime: '2 min read',
    isBreaking: false,
    sourceUrl: 'https://www.coxsbazarnews.com'
  },
  {
    id: 'wire-update-4',
    title: 'Export Promotion Bureau Records 11% Surge in Pharmaceutical Exports to 140+ Countries',
    titleBn: 'ওষুধ রফতানিতে ১১% প্রবৃদ্ধি: বিশ্ববাজারে ১৪০টিরও বেশি দেশে পৌঁছাচ্ছে বাংলাদেশের ওষুধ',
    summary: 'Active Pharmaceutical Ingredient (API) industrial park in Munshiganj drives competitive cost advantages globally.',
    summaryBn: 'মুন্সীগঞ্জের এপিআই শিল্প পার্ক চালুর পর কাঁচামাল আমদানি নির্ভরতা কমায় ওষুধ রফতানি নতুন মাত্রা পেয়েছে।',
    content: 'Bangladeshi pharmaceutical companies shipped over $215 million in finished formulations over the fiscal period, expanding footprint across the European Union, Southeast Asia, and Latin American health authorities after obtaining stringent regulatory clearances.',
    contentBn: 'রফতানি উন্নয়ন ব্যুরো জানিয়েছে, বৈশ্বিক মান নিয়ন্ত্রক সংস্থার স্বীকৃতি পেয়ে বাংলাদেশের তৈরি ওষুধ এখন ১৪০টির বেশি দেশে নিয়মিত সরবরাহ হচ্ছে। উচ্চমানের অ্যান্টিবায়োটিক ও জীবনরক্ষাকারী ওষুধের চাহিদা শীর্ষে।',
    outletId: 'bonik-barta',
    outletName: 'Bonik Barta',
    category: 'business',
    division: 'dhaka',
    publishedAt: 'Just now',
    readTime: '3 min read',
    isBreaking: false,
    sourceUrl: 'https://bonikbarta.net'
  }
];
