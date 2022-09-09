import React from "react";

import { useQuery } from "@tanstack/react-query";
import { Quote, fetchQuote } from "../../api/quotesApi/quotesApi";

import LazySpinner from "../LazySpinner/LazySpinner";
import "./Header.css";

const Header = () => {
  const {
    data: quote,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<Quote>(["quote"], fetchQuote);

  return (
    <section className="header-section section__shadow">
      <div className="quotes-container">
        {!isLoading ? (
          <h2>{quote?.quote}</h2>
        ) : (
          <LazySpinner show={true} delay={0} size={20} color={"#441d32"} />
        )}
        <button
          onClick={() => {
            refetch();
          }}
          disabled={isFetching || isLoading}
        >
          {isFetching && (
            <LazySpinner show={true} delay={0} size={10} color={"#441d32"} />
          )}
          Another Quote?
        </button>
      </div>
    </section>
  );
};

export default Header;
