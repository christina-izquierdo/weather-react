import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="Search">
      <form class="city-search">
        <nav>
          <div class="container-fluid">
            <form>
              <div class="input-group mb-3">
                <input
                  type="search"
                  class="form-control"
                  id="search-form"
                  placeholder="Search Location"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                ></input>
                <button
                  class="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  Update City
                </button>
              </div>
            </form>
          </div>
        </nav>
      </form>
    </div>
  );
}
