import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon className="appsIcon" />
          <AccountCircleIcon className="avatarIcon" />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google"
        />
        <div className="home_inputContainer">
          <Search />
        </div>
        <div className="home_lang">
          <p>Google offered in:</p>
          <a href="https://www.google.com/setprefs?sig=0_cq2W_FRSrQ8rBwIW6BJV2WtK3fw%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbl7y66uOBAxUOQt4KHaDXA_UQ2ZgBCBU">
            हिन्दी
          </a>
          <a href="https://www.google.com/setprefs?sig=0_cq2W_FRSrQ8rBwIW6BJV2WtK3fw%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbl7y66uOBAxUOQt4KHaDXA_UQ2ZgBCBY">
            বাংলা
          </a>
          <a href="https://www.google.com/setprefs?sig=0_cq2W_FRSrQ8rBwIW6BJV2WtK3fw%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbl7y66uOBAxUOQt4KHaDXA_UQ2ZgBCBc">
            తెలుగు
          </a>
          <a href="https://www.google.com/setprefs?sig=0_cq2W_FRSrQ8rBwIW6BJV2WtK3fw%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbl7y66uOBAxUOQt4KHaDXA_UQ2ZgBCBg">
            मराठी
          </a>
          <a href="https://www.google.com/setprefs?sig=0_cq2W_FRSrQ8rBwIW6BJV2WtK3fw%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbl7y66uOBAxUOQt4KHaDXA_UQ2ZgBCBk">
            தமிழ்
          </a>
          <a href="https://www.google.com/setprefs?sig=0_cq2W_FRSrQ8rBwIW6BJV2WtK3fw%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbl7y66uOBAxUOQt4KHaDXA_UQ2ZgBCBo">
            ગુજરાતી
          </a>
          <a href="https://www.google.com/setprefs?sig=0_cq2W_FRSrQ8rBwIW6BJV2WtK3fw%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbl7y66uOBAxUOQt4KHaDXA_UQ2ZgBCBs">
            ಕನ್ನಡ
          </a>
          <a href="https://www.google.com/setprefs?sig=0_cq2W_FRSrQ8rBwIW6BJV2WtK3fw%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbl7y66uOBAxUOQt4KHaDXA_UQ2ZgBCBw">
            മലയാളം
          </a>
          <a href="https://www.google.com/setprefs?sig=0_cq2W_FRSrQ8rBwIW6BJV2WtK3fw%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbl7y66uOBAxUOQt4KHaDXA_UQ2ZgBCB0">
            ਪੰਜਾਬੀ
          </a>
        </div>
      </div>
      <div className="home_footer">
        <div className="footer_loc">India</div>
        <div className="footer_main">
          <div className="main1">
            <a href="https://about.google/?utm_source=google-IN&amp;utm_medium=referral&amp;utm_campaign=hp-footer&amp;fg=1">
              About
            </a>
            <a href="https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpafooter&amp;fg=1">
              Advertising
            </a>
            <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpbfooter&amp;fg=1">
              Business
            </a>
            <a href="https://google.com/search/howsearchworks/?fg=1">
              How Search works
            </a>
          </div>
          <div className="main2">
            <a href="https://policies.google.com/privacy?hl=en-IN&amp;fg=1">
              Privacy
            </a>
            <a href="https://policies.google.com/terms?hl=en-IN&amp;fg=1">
              Terms
            </a>
            <a href="#">Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
