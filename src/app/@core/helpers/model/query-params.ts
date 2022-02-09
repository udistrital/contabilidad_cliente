interface QueryParams {
  id?: string;
  query?: string;
  fields?: string[];
  sortby?: string[];
  order?: string[];
  limit?: number;
  offset?: number;
}

export { QueryParams};
