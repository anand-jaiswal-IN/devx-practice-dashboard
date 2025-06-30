import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Hero() {
  return (
    <div className="flex justify-between items-center bg-llg p-4 rounded-2xl">
      <div className="flex items-center">
        <div className="mr-4">
          <img
            src="profile_img.jpg"
            width={100}
            height={100}
            className="rounded-[100%] border-2 border-dark-green"
          />
        </div>
        <div>
          <p className="font-bold text-xl md:text-4xl">Hello, Khusi !</p>
          <p>Nextute</p>
        </div>
      </div>
      <div className="text-center flex items-center">
        <div className="w-20 md:mr-2">
          <CircularProgressbar
            value={40}
            text={"40%"}
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `#204B54`,
              textColor: "#000",
              trailColor: "#fff",
              //   backgroundColor: "#204B54",
            })}
          />
        </div>
        <div>
          <p className="md:text-4xl font-bold">40%</p>
          <p>profile completed</p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
