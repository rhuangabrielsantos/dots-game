declare module "json" {
  type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

  interface JSONObject {
    [key: string]: JSONValue;
  }

  interface JSONArray extends Array<JSONValue> {}

  export default JSONValue;
}
