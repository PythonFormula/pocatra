export function Dex() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="form-field">
            <label htmlFor="fieldText" className="form-label">
              Search dex
            </label>
            <input
              type="search"
              className="form-control"
              id="fieldText"
              placeholder="Search a pokemon name or a dex number to get more info about it"
            />
          </div>
        </div>
        <div className="col">
          <p>Search results appear here</p>
        </div>
      </div>
    </div>
  );
}
