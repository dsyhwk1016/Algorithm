function solution(genres, plays) {
    const genreMap = {};

    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        if (!genreMap[genre]) {
            genreMap[genre] = { total: 0, songs: [] };
        }

        genreMap[genre].songs.push([i, plays[i]]);
        genreMap[genre].songs.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
        genreMap[genre].total += plays[i];
    }

    return Object.values(genreMap).sort((a, b) => b.total - a.total).reduce((result, value) => result.concat(value.songs.slice(0, 2).map(song => song[0])), []);
}