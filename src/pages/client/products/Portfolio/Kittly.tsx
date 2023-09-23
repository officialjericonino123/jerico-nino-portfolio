import HomePage from "../../../../assets/images/img/Portfolio/HGTR/HomePageHGTR.png";
import ShopDropdown from "../../../../assets/images/img/Portfolio/HGTR/ShopDropDownHGTR.png";
import Testimonials from "../../../../assets/images/img/Portfolio/HGTR/TestimonialsHGTR.png";
import ImageGallery from "../../../../assets/images/img/Portfolio/HGTR/ImageGalleryHGTR.png";
import AboutUs from "../../../../assets/images/img/Portfolio/HGTR/AboutUsHGTR.png";
import FAQS from "../../../../assets/images/img/Portfolio/HGTR/FaqsHGTR.png";

import AdminDashboard from "../../../../assets/images/img/Portfolio/HGTR/AdminDashboardHGTR.png";
import AdminLogs from "../../../../assets/images/img/Portfolio/HGTR/AdminLogsHGTR.png";
import AdminOrders from "../../../../assets/images/img/Portfolio/HGTR/AdminOrdersHGTR.png";
import AdminAccounts from "../../../../assets/images/img/Portfolio/HGTR/AdminAccountsHGTR.png";
import AdminProducts from "../../../../assets/images/img/Portfolio/HGTR/AdminProductsHGTR.png";

const Kittly: React.FC = () => {
  return (
    <>
      <div className="w-full md:w-[700px] lg:w-[800px] xl:w-[1200px] 2xl:w-[1500px] mx-auto h-full mt-[100px] pb-[30px] p-[20px]">
        <div className="flex flex-col justify-center items-center text-center">
          <span className="font-RacingSans text-[2rem] md:text-[3rem] lg:text-[4rem] uppercase font-bold text-white">
            Kittly
          </span>
        </div>
        <div className="flex text-center">
          <span className="font-AlumniSans font-[500] text-[1.5rem] text-white">
            Our dedicated team is proud to introduce our groundbreaking
            Ecommerce Web Application, a pioneering venture that marks our debut
            in the world of digital commerce. Presenting a sophisticated and
            innovative online shopping experience, our platform has been
            meticulously crafted to cater to your every need. From seamless
            navigation to stunning visuals, we've spared no effort to ensure a
            top-tier user experience. With our Ecommerce Web Application, we've
            set out to redefine the way you shop online. Expect nothing less
            than a professional and captivating journey through our virtual
            aisles, where you can discover a vast array of products curated to
            elevate your lifestyle.
          </span>
        </div>

        <div className="mt-[50px] flex flex-col gap-[100px]">
          <div className="text-center">
            <span className="text-[#f12020] underline font-RacingSans uppercase text-[3rem] md:text-[3.5rem]">
              Client Side
            </span>
          </div>
          {/* HOME PAGE */}
          <div>
            <div className="flex flex-col text-center md:text-start">
              <span className="text-white font-RacingSans text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] uppercase underline">
                Home Page
              </span>
              <span className="text-white font-[Montserrat]">
                The homepage serves as the central hub for an introduction to
                our website. Here, visitors can access a wealth of information,
                including featured images, exclusive offers, and other important
                events and updates that are integral to the website's
                experience.
              </span>
            </div>
            <div>
              <img src={HomePage} />
            </div>
          </div>

          {/* SHOP DROPDOWN */}
          <div>
            <div className="flex flex-col text-center md:text-start">
              <span className="text-white font-RacingSans text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] uppercase underline">
                Shop Dropdown Menu
              </span>
              <span className="text-white font-[Montserrat]">
                The 'Shop' dropdown menu provides a convenient gateway to
                explore our complete range of products featured on the website.
              </span>
            </div>
            <div>
              <img src={ShopDropdown} />
            </div>
          </div>

          {/* TESTIMONIALS PAGE */}
          <div>
            <div className="flex flex-col text-center md:text-start">
              <span className="text-white font-RacingSans text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] uppercase underline">
                Testimonials Page
              </span>
              <span className="text-white font-[Montserrat]">
                The Testimonial Page is your gateway to a wealth of feedback and
                endorsements from our esteemed customers and influential social
                media personalities. Here, you'll find an assortment of
                responses, reviews, and insights that shed light on the
                experiences and perspectives of those who have engaged with our
                products. It serves as a valuable resource for gaining a
                comprehensive understanding of the quality, satisfaction, and
                impact our offerings have had on a diverse range of individuals.
              </span>
            </div>
            <div>
              <img src={Testimonials} />
            </div>
          </div>

          {/* IMAGE GALLERY PAGE */}
          <div>
            <div className="flex flex-col text-center md:text-start">
              <span className="text-white font-RacingSans text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] uppercase underline">
                Image Gallery Page
              </span>
              <span className="text-white font-[Montserrat]">
                The Image Gallery Page provides a captivating visual journey
                where you can view an extensive collection of photoshoots
                featuring Hugotero models showcasing our products. This section
                offers a curated selection of high-quality imagery that
                highlights the elegance and style of our offerings as adorned by
                these models.
              </span>
            </div>
            <div>
              <img src={ImageGallery} />
            </div>
          </div>

          {/* ABOUT US PAGE */}
          <div>
            <div className="flex flex-col text-center md:text-start">
              <span className="text-white font-RacingSans text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] uppercase underline">
                About Us Page
              </span>
              <span className="text-white font-[Montserrat]">
                The "About Us" page is where you'll discover the inspiring
                journey behind Hugotero Clothing. Learn about our founder's
                determination and passion that brought this clothing line to
                life. It's a story of humble beginnings, challenges, and
                unwavering commitment that turned a vision into a thriving
                brand. Understanding our history will help you appreciate the
                heart and soul of Hugotero Clothing.
              </span>
            </div>
            <div>
              <img src={AboutUs} />
            </div>
          </div>

          {/* FAQS PAGE */}
          <div>
            <div className="flex flex-col text-center md:text-start">
              <span className="text-white font-RacingSans text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] uppercase underline">
                Frequntly Asked Question Page
              </span>
              <span className="text-white font-[Montserrat]">
                The "FAQs" page provides a convenient resource where users can
                access answers to commonly asked questions by other individuals.
                This feature is designed for user convenience, streamlining the
                information-seeking process and ensuring a hassle-free
                experience.
              </span>
            </div>
            <div>
              <img src={FAQS} />
            </div>
          </div>

          <div className="text-center">
            <span className="text-[#f12020] underline font-RacingSans uppercase text-[3rem] md:text-[3.5rem]">
              Admin Side
            </span>
          </div>

          {/* ADMIN DASHBOARD PAGE */}
          <div>
            <div className="flex flex-col text-center md:text-start my-[10px]">
              <span className="text-white font-RacingSans text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] uppercase underline">
                Admin Dashboard Page
              </span>
              <span className="text-white font-[Montserrat]">
                The administration panel provides comprehensive access to
                monthly income charts and the top 10 selling products. This
                feature allows administrators to monitor and analyze financial
                performance and product sales data in depth.
              </span>
            </div>
            <div>
              <img src={AdminDashboard} />
            </div>
          </div>

          {/* ADMIN LOGS PAGE */}
          <div>
            <div className="flex flex-col text-center md:text-start">
              <span className="text-white font-RacingSans text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] uppercase underline">
                Admin Logs Page
              </span>
              <span className="text-white font-[Montserrat]">
                This Logs panel is like a digital diary of what happens on our
                website. It records all user actions, so you can see exactly
                what people do when they're on the site. This helps us keep
                everything running smoothly and makes sure everyone is using the
                site correctly.
              </span>
            </div>
            <div>
              <img src={AdminLogs} />
            </div>
          </div>

          {/* ADMIN ORDERS PAGE */}
          <div>
            <div className="flex flex-col text-center md:text-start">
              <span className="text-white font-RacingSans text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] uppercase underline">
                Admin Orders Page
              </span>
              <span className="text-white font-[Montserrat]">
                The Order panel serves as a centralized hub for monitoring
                user-generated orders and managing the corresponding
                transactions. This feature allows administrators to efficiently
                track and oversee the entire order process, ensuring seamless
                control and transparency throughout.
              </span>
            </div>
            <div>
              <img src={AdminOrders} />
            </div>
          </div>

          {/* ADMIN ACCOUNTS PAGE */}
          <div>
            <div className="flex flex-col text-center md:text-start">
              <span className="text-white font-RacingSans text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] uppercase underline">
                Admin Accounts Page
              </span>
              <span className="text-white font-[Montserrat]">
                The Accounts panel provides a comprehensive overview of all user
                accounts and grants full control over the management of accounts
                within the website. This feature empowers administrators to
                review and oversee user accounts effectively.
              </span>
            </div>
            <div>
              <img src={AdminAccounts} />
            </div>
          </div>

          {/* ADMIN PRODUCTS PAGE */}
          <div>
            <div className="flex flex-col text-center md:text-start">
              <span className="text-white font-RacingSans text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] uppercase underline">
                Admin Products Page
              </span>
              <span className="text-white font-[Montserrat]">
                The Product Panel offers a comprehensive platform for managing
                your product inventory. Within this interface, you can easily
                review all your products, create new ones categorized according
                to their specifications and design, and make updates such as
                modifying prices, colors, and sizes. Furthermore, you have the
                capability to remove any product that is no longer required,
                ensuring a streamlined and efficient product management process.
              </span>
            </div>
            <div>
              <img src={AdminProducts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kittly;
