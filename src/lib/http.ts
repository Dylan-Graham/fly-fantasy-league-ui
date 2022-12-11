import { keys, reduce } from "lodash";
import { objectType } from "../types";

export function absoluteUrl(url: string): string {
  const api_base_url = process.env.REACT_APP_API_BASE_URL;
  return api_base_url + url;
}

export async function http_get(
  url: string,
  params?: objectType,
  accessToken?: any
) {
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${accessToken}`,
  };

  if (params != null) {
    url = `${url}/${serialize(params)}`;
  }
  url = absoluteUrl(url);

  try {
    const res = fetch(url, {
      method: "GET",
      headers: headers,
    });

    const response = await res;

    if (!response.ok) {
      throw Error("Could not retrieve data for that resource");
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function http_post(
  url: string,
  data: objectType,
  params: objectType,
  accessToken?: any,
  method: string = "POST"
) {
  try {
    const headers = {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    };

    if (params != null) {
      url = `${url}/${serialize(params)}`;
    }
    url = absoluteUrl(url);

    const res = fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(data),
    });

    const response = await res;

    if (!response.ok) {
      throw Error("Could not post data for that resource");
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export function http_put(
  url: string,
  data: objectType,
  params: objectType = {},
  options: objectType = {}
) {
  return http_post(url, data, params, options, "PUT");
}

export function http_patch(
  url: string,
  data: objectType,
  params: objectType = {},
  options: objectType = {}
) {
  return http_post(url, data, params, options, "PATCH");
}

export function http_delete(
  url: string,
  data: objectType,
  params: objectType = {},
  options: objectType = {}
) {
  return http_post(url, data, params, options, "DELETE");
}

export function getHeaders(
  _extra_headers: objectType = {},
  _options: objectType = { content_type: "json" }
): objectType {
  return { "Content-Type": "application/json;charset=UTF-8" };
}

function serialize(params: objectType): string {
  return (
    "?" +
    reduce(
      keys(params),
      (encodedParams: string[], key: string) => {
        if (params[key] !== null && params[key] !== undefined) {
          encodedParams.push(key + "=" + encodeURIComponent(params[key]));
        }
        return encodedParams;
      },
      []
    ).join("&")
  );
}
