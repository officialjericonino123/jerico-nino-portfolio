import Logo from "../../../assets/images/img/MYLOGO3.png";

const PageLoader: React.FC = () => {
  return (
    <>
      <div className="bg-[#00ADB5] z-[9999999] fixed inset-0">
        <div className="fixed flex-col inset-0 flex items-center justify-center z-[99999999]">
          <img src={Logo} alt="" className="w-[300px] lg:w-[500px] animate-bounce"/>
        </div>
      </div>
    </>
  );
};

export default PageLoader;
