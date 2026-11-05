import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

interface DexResult {
  name: string;
  id: number;
  gen: number;
}

interface DexErrorResult {
  error: string;
}

export function Dex() {
  const [results, setResults] = useState<string>("");
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const input = e.target.searchField.value;
              e.target.searchField.value = "";
              setResults("loading...");
              const res = await fetch(`/api/dex/${input}`);
              const json: DexResult | DexErrorResult = await res.json();
              if ("error" in json) {
                setResults(`Error: ${json.error}`);
              } else {
                setResults(
                  `${json.name.charAt(0).toUpperCase() + json.name.slice(1)} #${json.id} gen ${json.gen}`,
                );
              }
            }}
          >
            <div className="form-field">
              <label htmlFor="fieldText" className="form-label">
                Search dex
              </label>
              <input
                type="search"
                className="form-control"
                id="searchField"
                placeholder="Search a pokemon name or a dex number"
              />
            </div>
          </form>
        </div>
        <div className="col">
          {results === "loading..." ? (
            <Spinner animation="border" size="sm" />
          ) : (
            <p>{results}</p>
          )}
        </div>
      </div>
    </div>
  );
}
