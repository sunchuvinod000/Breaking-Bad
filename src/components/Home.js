import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./Home.css";
import UserList from "./UserList";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, isloading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState("");

  const usersPerPage = 10;
  const pagesVisited = usersPerPage * pageNumber;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setTimeout(() => {
      axios.get("https://www.breakingbadapi.com/api/characters").then((res) => {
        isloading(true);
        console.log(res.data);
        setData(res.data);
      });
    }, 100);
  }, []);
  const pageCount = Math.ceil(data.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {loading ? (
        <div>
          <div className="w3-row">
            <span className="w3-half heading ">
              Breaking Bad Characters & their Quotes.
            </span>
            <input
              className="w3-rest   input"
              type="text"
              placeholder="Search Here..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="container w3-white w3-card w3-row-padding">
            {data
              .filter((val) => {
                if (search === "" || search === " ") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((user) => (
                <UserList
                  key={user.char_id}
                  id={user.char_id}
                  name={user.name}
                  img={user.img}
                  birthday={user.birthday}
                  occupation={user.occupation}
                  status={user.status}
                  nickname={user.nickname}
                  appearance={user.appearance}
                  portrayed={user.portrayed}
                  category={user.category}
                />
              ))}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      ) : (
        <div className="loader">
          <p className="fa fa-spinner w3-spin w3-xxxlarge"></p>

          <p className="w3-xxxlarge">Loading...</p>
        </div>
      )}
    </div>
  );
}
