import { movieApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true,
    };

    async componentDidMount(){
        try{
          const { data: { results : nowPlaying }} = await movieApi.nowPlaying();  
          const { data : { results : upcoming }} = await movieApi.upcoming();
          const { data : { results : popular }} = await movieApi.popular();
          //throw Error();
          this.setState({
              nowPlaying,
              upcoming,
              popular,
          });
        } catch{
            this.setState({ error: "Can't find movie information." })
        } finally{
            this.setState({ loading: false })
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        console.log(this.state);
        return (
            <HomePresenter 
                nowPlaying={nowPlaying} 
                upcoming={upcoming} 
                popular={popular}
                error={error}
                loading={loading}
                />
        )
    }
}

export default HomeContainer;

