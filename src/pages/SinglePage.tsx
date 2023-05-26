import { useParams } from 'react-router-dom';

import { useGetMovieQuery } from '../redux';

export function SinglePage() {
  const { id } = useParams();
  // interface MovieServer {
  //   actorList: Array<{}>;
  //   awards: string;
  //   boxOffice: {};
  //   companies: string;
  //   companyList: Array<{}>;
  //   contentRating: string;
  //   countries: string;
  //   countryList: Array<{}>;
  //   directorList: Array<{}>;
  //   directors: string;
  //   errorMessage: string;
  //   fullCast: any;
  //   fullTitle: string;
  //   genreList: Array<{}>;
  //   genres: string;
  //   id: string;
  //   imDbRating: any;
  //   imDbRatingVotes: any;
  //   image: string;
  //   images: any;
  //   keywordList: Array<string>;
  //   keywords: string;
  //   languageList: Array<{}>;
  //   languages: string;
  //   metacriticRating: any;
  //   originalTitle: string;
  //   plot: string;
  //   plotLocal: string;
  //   plotLocalIsRtl: false;
  //   posters: any;
  //   ratings: any;
  //   releaseDate: string;
  //   runtimeMins: string;
  //   runtimeStr: string;
  //   similars: Array<{}>;
  //   starList: Array<{}>;
  //   stars: string;
  //   tagline: any;
  //   title: string;
  //   trailer: any;
  //   tvEpisodeInfo: any;
  //   tvSeriesInfo: any;
  //   type: string;
  //   wikipedia: any;
  //   writerList: Array<{}>;
  //   writers: string;
  //   year: string;
  // }
  // interface MovieClient {
  //   actorList: Array<{}>;
  //   companies: string;
  //   countries: string;
  //   directors: string;
  //   genres: string;
  //   id: string;
  //   image: string;
  //   plot: string;
  //   ratings: any;
  //   time: string;
  //   title: string;
  //   year: string;
  // }

  const { data } = useGetMovieQuery(id);
  console.log('data : ', data);
  // function transformDataFromServer(data: MovieServer): MovieClient {
  //   return {
  //     actorList: data.actorList,
  //     companies: data.companies,
  //     countries: data.countries,
  //     directors: data.directors,
  //     genres: data.genres,
  //     id: data.id,
  //     image: data.image,
  //     plot: data.plot,
  //     ratings: data.ratings,
  //     time: data.runtimeStr,
  //     title: data.title,
  //     year: data.year,
  //   };
  // }
  return (
    <div>
      <div>
        <img src={data?.image} alt={data?.title} />
      </div>
      <div>
        <h2>{data?.title}</h2>
        <h3>{data?.year}</h3>
        <p>{data?.countries}</p>
        <p>{data?.genres}</p>
        <p>{data?.time}</p>
        <p>{data?.companies}</p>
        <p>{data?.directors}</p>
        <p>
          {data?.actorList.map((item: any) => (
            <span key={item.id}>{item.name}</span>
          ))}
        </p>
        <p>{data?.plot}</p>
      </div>
    </div>
  );
}

// const movieData ={

//   actorList: [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}],
//   awards: "",
//   boxOffice: {budget: '$340,000,000 (estimated)', openingWeekendUSA: '', grossUSA: '', cumulativeWorldwideGross: ''},
//   companies: "Universal Pictures, One Race Films, Original Film",
//   companyList: [{…}, {…}, {…}],
//   contentRating: "PG-13",
//   countries: "USA",
//   countryList: [{…}],
//   directorList: [{…}],
//   directors: "Louis Leterrier",
//   errorMessage: "",
//   fullCast: null,
//   fullTitle: "Fast X (2023)",
//   genreList: (3) [{…}, {…}, {…}],
//   genres: "Action, Adventure, Crime",
//   id: "tt5433140",
//   imDbRating: null,
//   imDbRatingVotes: null,
//   image: "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6762_AL_.jpg",
//   images: null,
//   keywordList: ['fast and furious franchise', 'dominic toretto character', 'shared universe', 'carsploitation', 'tenth part'],
//   keywords: "fast and furious franchise,dominic toretto character,shared universe,carsploitation,tenth part",
//   languageList: [{…}],
//   languages: "English",
//   metacriticRating: null,
//   originalTitle: "",
//   plot: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
//   plotLocal: "",
//   plotLocalIsRtl: false,
//   posters: null,
//   ratings: null,
//   releaseDate: "2023-05-19",
//   runtimeMins: "141",
//   runtimeStr: "2h 21min",
//   similars: [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}],
//   starList: [{…}, {…}, {…}],
//   stars: "Vin Diesel, Jordana Brewster, Tyrese Gibson",
//   tagline: null,
//   title: "Fast X",
//   trailer: null,
//   tvEpisodeInfo: null,
//   tvSeriesInfo: null,
//   type: "Movie",
//   wikipedia: null,
//   writerList:  [{…}, {…}, {…}],
//   writers: "Dan Mazeau, Justin Lin, Gary Scott Thompson",
//   year: "2023",
// }
