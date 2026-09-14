// Importing Loading
import {MutatingDots} from "react-loader-spinner";

const ProgressView = (props) => {
  const {paddingTop = 60} = props;
  return (
    <div
      style={{paddingTop: paddingTop}}
      className="flex items-center justify-center">
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="var(--primary)"
        secondaryColor="var(--secondary)"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default ProgressView;
