import "./Circle.css";

type CircleProps = {
  width: number;
  height: number;
  animationDelay?: string;
  data?: any;
  index: number;
};

const Circle = ({
  width,
  height,
  animationDelay,
  data,
  index,
}: CircleProps) => {
  let ad = Math.floor(Math.random() * 10 + 1);
  if (width < 200 || height < 200) {
    return (
      <div className="w-[200px] h-[200px] bg-purple-300 rounded-full text-center text-xs p-4">
        <p>
            <span>
                Income Proof
            </span>
            <br />
            <span>
                For salaried individuals: Salary slips of the last 3 months, Form 16, and/or Income Tax Returns (ITR)<br />For self-employed individuals: ITR, Profit & Loss account, Balance Sheet, and/or Business Proof
            </span>
        </p>
      </div>
    );
  }

  return (
    <>
      <div
        className="rounded-full flex items-center justify-center relative border-dashed border-2 border-black"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {data?.map((datum: any, index: number) => {
          return datum?.map((d: any, idx: number) => {
            let style = {};
            if (idx == 0) {
              style = {
                top: "42%",
                left: "-50px",
                animationDelay: animationDelay,
              };
            } else if (idx == 1) {
              style = {
                top: "42%",
                right: "-50px",
                animationDelay: animationDelay,
              };
            } else if (idx == 2) {
              style = {
                top: "-50px",
                left: "42%",
                animationDelay: animationDelay,
              };
            } else {
              style = {
                bottom: "-50px",
                left: "42%",
                animationDelay: animationDelay,
              };
            }
            return (
              <p
                className={`circle-item-${
                  idx + 1
                } w-[120px] h-[120px] overflow-hidden text-xs rounded-full bg-yellow-100 absolute flex items-center justify-center text-center`}
                style={style}
              >
                {d.key}
                <br />
                {d.value}
              </p>
            );
          });
        })}
        <Circle
          width={width - 300}
          height={height - 300}
          animationDelay={`${ad}s`}
          data={data}
          index={index + 1}
        />
      </div>
    </>
  );
};

export default Circle;

/**
 * 
 * 
 * 
 * //import { data } from '../const';
import './Circle.css';

type CircleProps = {
  width: number;
  height: number;
  animationDelay?:string;
  data?:any;
  index?:number;
};

const Circle = ({ width, height, animationDelay,data,index }: CircleProps) => {
  //const keys = Object.keys(data);
  //console.log("keys",keys);
  let ad = Math.floor((Math.random() * 10) + 1)

  if (width < 200 || height < 200) {
    return <div className="w-[200px] h-[200px] bg-purple-300 rounded-full text-center">base</div>;
  }

  return (
    <>
      <div
        className="rounded-full flex items-center justify-center relative border-dashed border-2 border-black"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <p className="circle-item-1 w-[120px] h-[120px] rounded-full bg-yellow-100 absolute text-center" style={{ top: '42%', left: '-50px', animationDelay:animationDelay }}>
          A
        </p>
        <p className="circle-item-2 circle_item2 w-[120px] h-[120px] rounded-full bg-yellow-100 absolute text-center" style={{ top: '42%', right: '-50px', animationDelay:animationDelay }}>
          B
        </p>
        <p className="circle-item-3 circle_item3 w-[120px] h-[120px] rounded-full bg-yellow-100 absolute text-center" style={{ top: '-50px', left: '42%', animationDelay:animationDelay }}>
          A
        </p>
        <p className="circle-item-4 circle_item4 w-[120px] h-[120px] rounded-full bg-yellow-100 absolute text-center" style={{ bottom: '-50px', left: '42%', animationDelay:animationDelay }}>
          A
        </p>
        <Circle width={width - 300} height={height - 300} animationDelay={`${ad}s`} />
      </div>
    </>
  );
};

export default Circle;

 */
