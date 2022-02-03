const apiConfig = {
    baseURL: 'https://api.themoviedb.org/3/',
    apiKey: '504a360b6d1f9787b9b0490ec8fa99e0',
    originalImage: imgPath => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: imgPath => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;