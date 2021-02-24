
const parseResponse = async <T>(response: Response) => {
  if (response.ok) {
    // TODO implement other content-type
    if (response.headers.get('content-type')?.includes('application/json')) {
      return response.json();
    }
  } else {
    // TODO implement throwing a json error
    throw new Error("Api Error")
  }
  return null;
}
export const fetcher = <T>(input: RequestInfo, init?: RequestInit) => fetch(input, init)
  .then((response) => parseResponse<T>(response))
