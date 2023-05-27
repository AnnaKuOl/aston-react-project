
interface Actor {
    id: string; 
    image: string; 
    name: string; 
    asCharacter: string
}

export interface FullMovieDataServer {
    actorList: Actor[];
    companies: string;
    countries: string;
    directors: string;
    genres: string;
    id: string;
    image: string;
    plot: string;
    runtimeStr: string;
    imDbRating: string;
    title: string;
    year: string;
  }
export type ShortMovieDataServer = Pick<FullMovieDataServer, 'id' | 'imDbRating' | 'image' | 'title' | 'year'>;

export interface FullMovieDataClient {
    actors: Array<string>;
    companies: string;
    countries: string;
    directors: string;
    genres: string;
    id: string;
    image: string;
    plot: string;
    time: string;
    title: string;
    rating: string;
    year: string;
  }
  
export type ShortMovieDataClient = Pick<FullMovieDataClient, 'id' | 'rating' | 'image' | 'title' | 'year'>;
