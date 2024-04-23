const production = {
    url: 'https://studio-server-gold.vercel.app'
  };
  const development = {
    url: 'http://localhost:5000'
  };
  //export const config = process.env.NODE_ENV === 'development' ? development : production;
  export const config = process.env.NODE_ENV === 'development' ? development : production;