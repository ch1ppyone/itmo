const publications = [
  {
    title: "Topic-driven Ensemble for Online Advertising Generation",
    img: "./images/publication/1.jpg",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:O3NaXMp0MMsC",
    author:
      "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
    text: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
  },
  {
    title: "Convolutional neural networks with hierarchical context transfe…",
    img: "./images/publication/2.jpg",
    link: "https://dl.acm.org/doi/abs/10.1145/3423336.3429346",
    author:
      "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    text: "In this work, we consider a problem of predicting the next state of a given area using retrospective information. The proposed concept of hierarchical context transfer (HCT) operates on several spatial levels of the input data to overcome major issues of next state prediction problems - density variability, a sig…",
  },
  {
    title: "Spatiotemporal Filtering Pipeline for Efficient Social Networks Dat…",
    img: "./images/publication/3.jpg",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-50433-5_7",
    author:
      "Ksenia Mukhina, Alexander Visheratin, Denis Nasonov",
    text: "One of the areas that gathers momentum is the investigation of location-based social networks (LBSNs) because the understanding of citizens’ behavior on various scales can help to improve quality of living, enhance urban management, and advance the development of smart cities. But it is widely known that the…",
  },
  {
    title: "Peregreen–modular database for efficient storage of historical tim…",
    img: "./images/publication/4.jpg",
    link: "https://www.usenix.org/conference/atc20/presentation/visheratin",
    author:
      "Alexander Visheratin, Alexey Struckov, Semen Yufa, Alexey Muratov, Denis Nasonov, Nikolay B…",
    text: "The rapid development of scientific and industrial areas, which rely on time series data processing, raises the demand for storage that would be able to process tens and hundreds of terabytes of data efficiently. And by efficiency, one should understand not only the speed of data processing operations execution but als…",
  },
  {
    title: "Intelligent sightseeing in immensely manifold cities: Case …",
    img: "./images/publication/5.jpg",
    link: "https://dl.acm.org/doi/abs/10.1145/3356994.3365503",
    author:
      "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov, Lev Manovich",
    text: "In this work, we show how social media data can be used for the improvement of touristic experience. We present an algorithm for automated touristic paths construction. Score function for location depends on three components: location's social media popularity and rating, distances of place from others in r…",
  },
  {
    title: "User Profiles Matching for Different Social Networks Based …",
    img: "./images/publication/6.jpg",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-29859-3_47https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:O3NaXMp0MMsC",
    author:
      "Timur Sokhin, Nikolay Butakov, Denis Nasonov",
    text: "It is common practice nowadays to use multiple social networks for different social roles. Although this, these networks assume differences in content type, communications and style of speech. If we intend to understand human behaviour as a key-feature for recommender systems, banking risk assessm…",
  },
  {

    title: "Orienteering Problem with Functional Profits for multi-sourc…",
    img: "./images/publication/7.jpg",
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0213777",
    author:
      "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    text: "Orienteering problem (OP) is a routing problem, where the aim is to generate a path through set of nodes, which would maximize total score and would not exceed the budget. In this paper, we present an extension of classic OP—Orienteering Problem with Functional Profits (OPFP), where the score of …",
  },
  {
    title: "Intellectual Execution Scheme of Iterative Computational Models …",
    img: "./images/publication/8.jpg",
    link: "https://www.scitepress.org/Papers/2019/83656/83656.pdf",
    author:
      "Mikhail Melnik, Denis A Nasonov, Alexey Liniov",
    text: "In the modern world, with the growth of the volume of processed data arrays, the logic of solving problems also becomes more complex. This leads more and more often to the need to use high-performance computational clusters, such as supercomputers. Created m…",
  },
  {
    title: "Urban events prediction via convolutional neural networks a…",
    img: "./images/publication/9.jpg",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050919311123",
    author:
      "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    text: "In today’s world, it is crucial to be proactive and be prepared for events which are not happening yet. Thus, there is no surprise that in the field of social media analysis the research agenda has moved from the development of event detection methods to a brand new area - event prediction models...",
  },
  {
    title: "Ensemble-based method of answers retrieval for domain spe…",
    img: "./images/publication/10.jpg",
    link: "https://www.sciencedirect.com/science/article/pii/S187705091931110X",
    author:
      "Iskander Safiulin, Nikolay Butakov, Dmitriy Alexandrov, Denis Nasonov",
    text: "Many companies want or prefer to use chatbot systems to provide smart assistants for accompanying human specialists especially newbies with automatic consulting. Implementation of a really useful smart assistant for a specific domain requires a knowledge base for this domain, that often e…",
  },
  {
    title: "Evaluation of modern tools and techniques for storing time-serie…",
    img: "./images/publication/11.jpg",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050919310439",
    author:
      "Alexey Struckov, Semen Yufa, Alexander A Visheratin, Denis Nasonov",
    text: "Time series data as its analysis and applications recently have become increasingly important in different areas and domains. Many fields of science and industry rely on storing and processing large amounts of time series - economics and finance, medicine, the Internet of Things, environmental protection, …",
  },
  {
    title: "Workflow scheduling using neural networks and reinforcement lear…",
    img: "./images/publication/12.jpg",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050919310440",
    author:
      "Mikhail Melnik, Denis Nasonov",
    text: "The development of information technologies entails a nonlinear growth of both volumes of data and the complexity of data processing itself. Scheduling is one of the main components for optimizing the operation of   the computing system. Currently, there are a large number of scheduling algorithms. However, even in spite of existing hybrid sch…",
  },
  {
    title: "Building City-Scale Walking Itineraries Using Large Geospatia…",
    img: "./images/publication/13.jpg",
    link: "https://ieeexplore.ieee.org/abstract/document/8588074",
    author:
      "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    text: "Nowadays, social networks play an important role in many aspects of people's life and in traveling in particular. People share their experience and opinions not only on specialized sites, like TripAdvisor, but also in social networks, e.g. Instagram. Combining information from different sources we can ge…",
  },
  {
    title: "Forecasting of the Urban Area State Using Convolutional Neural…",
    img: "./images/publication/14.jpg",
    link: "https://ieeexplore.ieee.org/abstract/document/8588075/",
    author:
      "Ksenia D Mukhina, Alexander A Visheratin, Gali-Ketema Mbogo, Denis Nasonov",
    text: "Active development of modern cities requires not only efficient monitoring systems but furthermore forecasting systems that can predict future state of the urban area with high accuracy. In this work we present a method for urban area prediction based on geospatial activity of users in social network. One of the …",
  },
  {
    title: "Multiscale event detection using convolutional quadtrees and ada…",
    img: "./images/publication/15.jpg",
    link: "https://dl.acm.org/doi/abs/10.1145/3282866.3282867",
    author:
      "A A Visheratin, K D Mukhina, A K Visheratina, D Nasonov, A V Boukhanovsky",
    text: "Increasing popularity of social networks made them a viable data source for many data mining applications and event detection is no exception. Researchers aim not only to find events that happen in networks but more importantly to identify and locate events occurring in the real world. In this paper, we …",
  },
  {
    title: "Unified domain-specific language for collecting…",
    img: "./images/publication/16.jpg",
    link: "https://link.springer.com/article/10.1007/s10844-018-0508-5",
    author:
      "Nikolay Butakov, Maxim Petrov, Ksenia Mukhina, Denis Nasonov, Sergey Kovalchuk",
    text: "Data provided by social media becomes an increasingly important analysis material for social scientists, market analysts, and other stakeholders. Diversity of interests leads to the emergence of a variety of crawling techniques and programming solutions. Nevertheless, these solutions have a lack of flexibility to sati…",
  },
  {
    title: "The multi-level adaptive approach for efficient execution of multi-sc…",
    img: "./images/publication/17.jpg",
    link: "https://link.springer.com/chapter/10.1007%2F978-3-030-05807-4_58",
    author:
      "D Nasonov, N Butakov, M Melnik, A Visheratin, A Linev, P Shvets, S Sobolev, K Mukhina",
    text: "Today advanced research is based on complex simulations which require a lot of computational resources that usually are organized in a very complicated way from technical part of the view. It means that a scientist from physics, biology or even sociology should struggle with all technical is…",
  },
  {
    title: "Precedent-Based Approach for the Identification of Deviant Behavio…",
    img: "./images/publication/18.jpg",
    link: "https://link.springer.com/chapter/10.1007/978-3-319-93713-7_84",
    author:
      "Anna V Kalyuzhnaya, Nikolay O Nikitin, Nikolay Butakov, Denis Nasonov",
    text: "The current paper is devoted to a problem of deviant users’ identification in social media. For this purpose, each user of social media source should be described through a profile that aggregates open information about him/her within the special structure. Aggregated user profiles are formally describ…",
  },
  {
    title: "Blockchain-based transaction integrity in distributed big data …",
    img: "./images/publication/19.jpg",
    link: "https://link.springer.com/chapter/10.1007/978-3-319-93698-7_43",
    author:
      "Denis Nasonov, Alexander A Visheratin, Alexander Boukhanovsky",
    text: "Today Big Data occupies a crucial part of scientific research areas as well as in the business analysis of large companies. Each company tries to find the best way to make generated Big Data sets valuable and profitable. However, in most cases, companies have not enough opportunities and budget t…",
  },
  {
    title: "Towards a scenario-based solution for extreme metocean event sim…",
    img: "./images/publication/20.jpg",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0167739X17311081",
    author:
      "A Kalyuzhnaya, D Nasonov, S Ivanov, S Kosukhin, A Boukhanovsky",
    text: "Today, metocean investigations, combined with forecasts and analysis of extreme events, require new design and development approaches because of their complexity. Extreme metocean events forecasting and prevention is an urgent computing task from decision-making and for reaction point of view.",
  },
  {
    title: "Storage tier-aware replicative data reorganization with prioritization…",
    img: "./images/publication/21.jpg",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0167739X17305502",
    author:
      "Anton Spivak, Andrew Razumovskiy, Denis Nasonov, Alexander Boukhanovsky, Anton Redice",
    text: "The importance of data collection, processing, and analysis is rapidly growing. Big Data technologies are in high demand in many fields, including bio-informatics, hydrometeorology, and high energy physics. One of the most popular computational paradigms used in large data processing fra…",
  },
  {
    title: "Hybrid scheduling algorithm in early warning systems",
    img: "./images/publication/22.jpg",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0167739X1730540X",
    author:
      "A Visheratin, M Melnik, D Nasonov, N Butakov, A Boukhanovsky",
    text: "The development of an efficient Early Warning System (EWS) is essential for the prediction and prevention of imminent natural hazards. In addition to providing a computationally intensive infrastructure with extensive data transfer, high-execution reliability and hard-deadline satisfaction are important req…",
  },
  {
    title: "Distributed data-driven platform for urgent decision making in car…",
    img: "./images/publication/23.jpg",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0167739X1630348X",
    author:
      "Sergey V Kovalchuk, Evgeniy Krotov, Pavel A Smirnov, Denis A Nasonov, Alexey N Yakovlev",
    text: "This paper presents ongoing research aimed at developing a data-driven platform for clinical decision support systems (DSSs) that require integration and processing of various data sources within a single solution. Resource management is developed within a framework of an urgent computing approach to address …",
  },
  {
    title: "Byzantine fault-tolerant and semantic-driven consensus proto…",
    img: "./images/publication/24.jpg",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050918315394",
    author:
      "Stepan Rakitin, Alexander A Visheratin, Denis Nasonov",
    text: "To provide fault tolerance, modern distributed storage systems use specialized network topologies and consensus protocols that create high overheads. The main disadvantage of existing specialized topologies is a difficulty to implement an efficient data placement that takes into account locality of the data. In scie…",
  },
  {
    title: "Adaptive performance model for dynamic scaling Apache Spark St…",
    img: "./images/publication/25.jpg",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050918315485",
    author:
      "Max Petrov, Nikolay Butakov, Denis Nasonov, Mikhail Melnik",
    text: "Nowadays, data volumes increase exceptionally, a lot of information comes from different sources, for example, from mobile phones, sensors, traffic, etc. All information from these sources can be represented as a data streams, which can grow up and fall in time in their size. In the first case, data proce…",
  },
  {
    title: "Hybrid evolutionary workflow scheduling algorithm for dynami…",
    img: "./images/publication/26.jpg",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1570868316300672",
    author:
      "D Nasonov, A Visheratin, N Butakov, N Shindyapina, M Melnik, A Boukhanovsky",
    text: "The optimal workflow scheduling is one of the most important issues in heterogeneous distributed computational environments. Existing heuristic and evolutionary scheduling algorithms have their advantages and disadvantages. In this work we propose a hybrid algorithm based on heuristic methods…",
  },
  {
    title: "Execution time estimation for workflow scheduling",
    img: "./images/publication/27.jpg",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0167739X17300304",
    author:
      "A Chirkin, Adam SZ Belloum, S Kovalchuk, Marc X Makkes, M Melnik, A Visheratin, D Nasonov",
    text: "Estimation of the execution time is an important part of the workflow scheduling problem. The aim of this paper is to highlight common problems in estimating the workflow execution time and propose a solution that takes into account the complexity and the stochastic aspects of the workflow compone…",
  }
];


const publicationsconatainer = document.querySelector(".publications__cards >.splide__track>.cards");
const publicationsTemplate = document.querySelector('.publications__card-template').content;



publications.forEach((item) => {
  const clone = publicationsTemplate.cloneNode(true);
  const title = clone.querySelector('.card__title');
  const img = clone.querySelector('.card__img');
  const link = clone.querySelector('.publications__link');
  const author = clone.querySelector('.card__date');
  const text = clone.querySelector('.card__text');


  title.innerText = item.title;
  img.src = item.img;
  link.href = item.link;
  author.innerText = item.author;
  text.innerText = item.text;

  const publicationsButton = clone.querySelector('.publications__button');
  const publicationsSocials = clone.querySelector('.publications__socials');
  publicationsButton.addEventListener('click', () => {
    publicationsSocials.classList.toggle('publications__socials_active');
  });
  publicationsconatainer.append(clone);
});


new Splide('.publications__cards', {
  type: "loop",
  perPage: 1,
  rewind: true,
  classes: {
    arrows: 'splide__arrows-publications',
    arrow: 'splide__arrow',
    prev: 'publications__arrow-left',
    next: 'publications__arrow-right',
  },
  grid: {
    rows: 2,
    cols: 3,
    gap: {
      row: '32px',
      col: '30px',
    }
  },
  breakpoints: {
    1300: {
			grid: {
				rows: 2,
				cols: 2,
        gap: {
          row: '30px',
          col: '30px',
        }
			}
		},
		709: {
			grid: {
				rows: 1,
				cols: 1,
        gap: {
          row: '32px',
          col: '8px',
        }
			}
		}
	},
}).mount(window.splide.Extensions);




