export const getFormattedList = ({ moviesData } = {}) => {
    return  moviesData.map( ({ title, episode_id, opening_crawl, director, release_date }) => {
             return {
                id: episode_id,
                title: title,
                episodeId: episode_id,
                description: opening_crawl,
                director: director,
                releaseDate: release_date,
            };
    });
};

