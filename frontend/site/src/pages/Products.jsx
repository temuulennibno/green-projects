import { useEffect, useState } from "react";
import axios from "axios";
import currencyFormatter from "../utils/currencyFormatter";
import { Link, useLocation, useNavigate } from "react-router-dom";

import dayjs from "dayjs";
import relateTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/mn";

dayjs.extend(relateTime);
dayjs.locale("mn");
dayjs.extend(updateLocale);
dayjs.updateLocale("mn", {
  relativeTime: {
    future: "%s дараа",
    past: "%s өмнө",
    s: "хэдхэн хоромын",
    m: "1 минутын",
    mm: "%d минутын",
    h: "1 цагын",
    hh: "%d цагын",
    d: "1 өдрийн",
    dd: "%d өдрийн",
    M: "1 сарын",
    MM: "%d сарын",
    y: "1 жилийн",
    yy: "%d жилийн",
  },
});

/**
 * Baraanii jagsaalt hesgiin huudas
 */
export default function Products() {
  /**
   * Huudasruu orohod 2 udaa request yvuulaad baisan
   */
  const [isReady, setIsReady] = useState(false);

  const [page, setPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [searchQuery, setSearchQuery] = useState("");

  const [locationQuery, setLocationQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const newQuery = new URLSearchParams();
    newQuery.set("pageSize", pageSize);
    newQuery.set("page", currentPage);
    if (searchQuery !== "") {
      newQuery.set("q", searchQuery);
    }
    setLocationQuery(newQuery.toString());
  }, [pageSize, currentPage, searchQuery]);

  useEffect(() => {
    navigate(`/products?${locationQuery}`);
  }, [locationQuery]);

  useEffect(() => {
    if (isReady) {
      getResults();
    }
  }, [isReady]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has("page")) {
      setCurrentPage(Number(searchParams.get("page")));
    }
    if (searchParams.has("pageSize")) {
      setPageSize(Number(searchParams.get("pageSize")));
    }
    if (searchParams.has("q")) {
      setSearchQuery(searchParams.get("q"));
    }
    if (isReady) {
      getResults();
    } else {
      setIsReady(true);
    }
  }, [location]);

  const getResults = () => {
    const urlParams = new URLSearchParams();
    urlParams.set("pageSize", pageSize);
    urlParams.set("page", currentPage);
    if (searchQuery !== "") {
      urlParams.set("q", searchQuery);
    }
    axios
      .get(`http://localhost:8000/products?${locationQuery.toString()}`)
      .then((res) => {
        setPage(res.data);
      });
  };

  if (!page) {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  const getPaginations = () => {
    let result = [];
    // first page adding
    result.push(
      <li className={`page-item ${1 === page.page && "active"}`}>
        <a className="page-link" href="#">
          1
        </a>
      </li>
    );
    // front trible dots
    if (page.page - 3 > 0) {
      result.push(
        <li className={`page-item`}>
          <span className="page-link">...</span>
        </li>
      );
    }

    // adding current page
    if (page.page !== 1 && page.page !== page.totalPages) {
      result.push(
        <li className={`page-item active`}>
          <a href="#" className="page-link">
            {page.page}
          </a>
        </li>
      );
    }

    // back trible dots
    if (page.totalPages - 3 >= page.page) {
      result.push(
        <li className={`page-item`}>
          <span className="page-link">...</span>
        </li>
      );
    }
    // last page adding
    result.push(
      <li className={`page-item ${page.totalPages === page.page && "active"}`}>
        <a className="page-link" href="#">
          {page.totalPages}
        </a>
      </li>
    );
    return result;
  };

  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-end mb-4">
          <label className="me-4">
            Нэрээр хайх
            <input
              type="text"
              className="form-control"
              placeholder="Барааны нэр..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </label>
          <label>
            Хуудаслалт
            <select
              className="form-control"
              onChange={(e) => {
                setCurrentPage(1);
                setPageSize(e.target.value);
              }}
              value={pageSize}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>
        <div className="row gy-4">
          {page?.items?.map((product) => {
            return (
              <div className="col-sm-3" key={product.id}>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={product.imageUrl} alt={product.name} />
                  </div>
                  <div className="product-card-desc">
                    <div className="product-card-date">
                      {dayjs(Number(product.createdAt) * 1000)
                        .locale("mn")
                        .fromNow()}
                    </div>
                    <div className="product-card-name">{product.name}</div>
                    <div className="product-card-price">
                      {currencyFormatter(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <nav aria-label="..." className="my-4">
            <ul className="pagination pagination-lg justify-content-center">
              <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                <Link
                  to={`/products?pageSize=${pageSize}&page=${currentPage - 1}`}
                  className="page-link"
                >
                  ‹
                </Link>
              </li>
              {getPaginations()}
              <li
                className={`page-item ${
                  currentPage === page.totalPages && "disabled"
                }`}
              >
                <Link
                  to={`/products?pageSize=${pageSize}&page=${currentPage + 1}`}
                  className="page-link"
                >
                  ›
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
