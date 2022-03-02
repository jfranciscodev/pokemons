import React from "react";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const get = (urlApi = null) => {
  const url = urlApi || `${baseUrl}?limit=5`;
  return callApi(url);
};

const getByName = (name) => {
  const url = baseUrl + "/" + name;
  return callApi(url);
};

const callApi = async (url) => {
  const data = await fetch(url);
  return await data.json();
};

export default { get, getByName };
