import "./SearchPage.css";
import Search from "../components/Search";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import response from "../response";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  // Live Api Call
  const { data } = useGoogleSearch(term);

  // Testing Local Api Call
  // const data = response;

  console.log("Current term:", term);
  console.log("Data:", data);

  return (
    <div className="searchPage">
      <div className="searchPageHeader">
        <div className="searchPage_FirstHeader">
          <div className="searchPage_MainSearch">
            <Link to="/">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="Google"
                className="searchPage_logo"
              />
            </Link>
            <div className="searchBar">
              <Search hideButtons />
            </div>
          </div>
          <div className="header_Icons">
            <SettingsOutlinedIcon className="appsIcon" />
            <AppsIcon className="appsIcon" />
            <AccountCircleIcon className="avatarIcon" />
          </div>
        </div>
        <div className="searchPage_SecondHeader">
          <div className="searchPage_SecondHeaderLeft">
            <div className="searchPage_option">
              <SearchOutlinedIcon sx={{ fontSize: 16, color: "#1a73e8" }} />
              <Link to="/all" style={{ color: "#1a73e8" }}>
                All
              </Link>
            </div>
            <div className="searchPage_option">
              <DescriptionOutlinedIcon
                sx={{ fontSize: 16, color: "#878A8D" }}
              />
              <Link to="/news">News</Link>
            </div>
            <div className="searchPage_option">
              <ImageOutlinedIcon sx={{ fontSize: 16, color: "#878A8D" }} />
              <Link to="/images">Images</Link>
            </div>
            <div className="searchPage_option">
              <OndemandVideoOutlinedIcon
                sx={{ fontSize: 16, color: "#878A8D" }}
              />
              <Link to="/videos">Videos</Link>
            </div>
            <div className="searchPage_option">
              <LocalOfferOutlinedIcon sx={{ fontSize: 16, color: "#878A8D" }} />
              <Link to="/shopping">Shopping</Link>
            </div>
            <div className="searchPage_option">
              <MoreVertOutlinedIcon sx={{ fontSize: 16, color: "#878A8D" }} />
              <Link to="/more">More</Link>
            </div>
          </div>
          <div className="searchPage_SecondHeaderRight">
            <div className="searchPage_option">
              <Link to="/tools" className="Tools">
                Tools
              </Link>
            </div>
            <div className="searchPage_option">
              <select name="" id="">
                <option value="SafeSearch">SafeSearch</option>
                <option value="Filter explicit results">
                  Filter explicit results
                </option>
                <option value="Blur explicit images">
                  Blur explicit images
                </option>
                <option value="Off">Off</option>
                <option
                  value="More about SafeSearch"
                  style={{ color: "#1a73e8" }}
                >
                  More about SafeSearch
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="beforeEffect"></div>
      </div>

      {true && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>
          {data?.items.map((item, index) => (
            <div className="searchPage_result" key={index}>
              <a href={item.link} className="searchPage_displayLink">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage_resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}

                {item.displayLink}
                <MoreVertOutlinedIcon
                  sx={{ color: "#5f6368", fontSize: "14px" }}
                />
              </a>
              <a href={item.link} className="searchPage_resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}

      <div className="searchPage_MoreResults">
        <div className="moreResults_line"></div>
        <button className="moreResults_btn">
          More results <KeyboardArrowDownIcon sx={{ color: "#70757a" }} />
        </button>
      </div>

      <div className="searchPage_Footer">
        <div className="searchPage_FooterContent">
          <div className="searchPage_FooterTop">
            <span className="country">Country</span>
            <span href="#" className="location">
              <div className="circle"></div>
              <p>postal , city</p>
              <a href="#"> - From your IP address - Update location</a>
            </span>
          </div>
          <div className="searchPage_FooterBottom">
            <p>More options in</p>
            <a href="#">
              Quick settings (
              <SettingsOutlinedIcon
                className="setting_Icon"
                sx={{ color: "#1a0dab", fontSize: "16px" }}
              />
              )
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
