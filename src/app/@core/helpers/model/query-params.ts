interface QueryParams {
  id?: string;
  query?: {[key: string]: any};
  fields?: string[];
  sortby?: string[];
  order?: string[];
  limit?: number;
  offset?: number;
}

export { QueryParams};
