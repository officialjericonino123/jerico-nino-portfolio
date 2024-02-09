import Logo from "../../../assets/images/img/MYLOGO2.png";

const PageLoader: React.FC = () => {
  return (
    <>
      <div className="bg-[#6E06F2] z-[9999999] fixed inset-0">
        <div className="fixed flex-col inset-0 flex items-center justify-center z-[99999999]">
          <img
            src={Logo}
            alt=""
            className="w-[300px] lg:w-[500px] animate-bounce"
          />
        </div>
      </div>
    </>
  );
};

export default PageLoader;
