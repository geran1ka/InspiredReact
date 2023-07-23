import { ThreeCircles } from 'react-loader-spinner';
const style = {
  display: 'flex',
  justifyContent: 'center',
  padding: '100px 0',
};
export const Preloader = () => (
  <div style={style}>
    <ThreeCircles
        height={100}
        width={100}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
  </div>
)
