const cheerio = require("cheerio");
const axios = require("axios");

const fetchData = async (url) => {
  if (url) {
    const site = `https://${url}`;
    const result = await axios.get(site);
    return cheerio.load(result.data);
  }
};

export const getResults = async (url) => {
  const $ = await fetchData(url);

  if ($) {
    const siteName = $ && $("title").text();

    return {
      title: siteName,
      desc: $("meta[property='og:description']").attr("content"),
      image: $("meta[property='og:image']").attr("content"),
    };
  }
};
