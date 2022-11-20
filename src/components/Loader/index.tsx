import Loader from "react-loader-spinner";

interface AppLoaderProps {
  height?: string;
}

const AppLoader = ({ height }: AppLoaderProps) => {
  return (
    <div
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ height: height }}
    >
      <Loader type="TailSpin" color="#0000dd" width={50} height={50} />
    </div>
  );
};

AppLoader.defaultProps = {
  height: "100%",
};

export default AppLoader;
