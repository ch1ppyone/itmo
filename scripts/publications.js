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
      "imur Sokhin, Nikolay Butakov, Denis Nasonov",
    text: "It is common practice nowadays to use multiple social networks for different social roles. Although this, these networks assume differences in content type, communications and style of speech. If we intend to understand human behaviour as a key-feature for recommender systems, banking risk assessm…",
  },
];

const  publicationsconatainer = document.querySelector(".publications__cards >.splide__track>.cards");
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
  publicationsconatainer.append(clone);
});


new Splide( '.publications__cards', {
  classes: {
		arrows: 'splide__arrows-publications',
		arrow : 'splide__arrow',
		prev  : 'publications__arrow-left',
		next  : 'publications__arrow-right',
	},
  grid: {
		rows: 2,
		cols: 3,
		gap : {
			row: '32px',
			col: '30px',
		}
	},
} ).mount(window.splide.Extensions);
