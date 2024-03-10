import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
let hue = Math.random() * 360;
const goldenRatioConjugate = 0.618033988749895;
function getRandomHueColor() {
  hue += goldenRatioConjugate;
  hue = hue % 2;
  const h = Math.floor(hue * 360)
  return hslToHex(h, 70, 60);
}
function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0'); // convert to Hex and prefix with "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
  export function DashboardCards({icon, title, data, bgColor, link}) {
    const [colors, setColors] = useState()
    useEffect(()=>{
      setColors(getRandomHueColor())
    },[])
    return (
      <Card className="mt-6 w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-gray-800" style={{backgroundColor: bgColor}}>
        <CardBody className="relative">
        <i className={`fa-solid ${icon} text-6xl p-4 absolute right-0`} style={{color: '#eeba0b'}}></i>
          <Typography variant="h3" className="mb-2">
            {title}
          </Typography>
          <Typography variant="h1" className="mb-2">
            {data}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={link} className="inline-block">
            <Button size="sm" variant="text" className="flex items-center gap-2 text-[#dec84f]">
                View more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }